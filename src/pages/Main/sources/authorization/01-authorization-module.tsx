export const AuthorizationModuleExample01 = `
/**
 * Standard email + password authorization
 * @version 0.0.1
 */
class AuthByEmail implements HandlerInterface 
{
    const AUTH_TOKEN_TTL = 3600;

    private const TIMER_TOTAL = 'auth.total';
    private const TIMER_VALIDATION = 'auth.validation';
    private const TIMER_REPO_UNIT = 'auth.repo_unit';
    private const TIMER_HASH_REQUEST = 'auth.hash_request';
    private const TIMER_HASH_VERIFY = 'auth.hash_verify';
    private const TIMER_JWT_GEN = 'auth.jwt_gen';
    
    private const ERROR_AUTH_FAILED = 'Authorization failed';
    private const ERROR_INVALID_CREDENTIALS = 'Invalid credentials';

    public function __construct(
        private RegistrateByEmailValidator $validator,
        private RepositoriesRouter $repositoriesRouter,
        private JwtManager $jwtManager,
        private Stopwatch $stopwatch,
        private StopwatchManager $stopwatchManager
    ) {}

    public function execute(ServerRequestInterface $request): OperationOutcome 
    {
        $this->stopwatch->start(self::TIMER_TOTAL);
        $requestBody = $request->getParsedBody();

        $this->startTimer(self::TIMER_VALIDATION);
        return $this->validator->validate($requestBody)
            ->tap(fn() => $this->stopTimer(self::TIMER_VALIDATION))
            
            ->tap(fn() => $this->startTimer(self::TIMER_REPO_UNIT))
            ->then(fn() => $this->repositoriesRouter->factory())
            ->then(fn(RepositoriesFactory $factory) => $factory->tenants())
            ->tap(fn() => $this->stopTimer(self::TIMER_REPO_UNIT))
            
            ->then(function(TenantRepository $repository) use ($requestBody) {
                $this->startTimer(self::TIMER_HASH_REQUEST);
                $tenantData = $repository->getTenantUidAndHashByEmail($requestBody['email'])->result;
                $this->stopTimer(self::TIMER_HASH_REQUEST);

                if (!isset($tenantData[0]['uid'])) {
                    return Operation::error(Operation::HTTP_NOT_FOUND, self::ERROR_INVALID_CREDENTIALS);
                }
                
                $this->startTimer(self::TIMER_HASH_VERIFY);
                $isPasswordValid = password_verify($requestBody['password'], $tenantData[0]['hash']);
                $this->stopTimer(self::TIMER_HASH_VERIFY);
                
                if (!$isPasswordValid) {
                    return Operation::error(Operation::HTTP_FORBIDDEN, self::ERROR_INVALID_CREDENTIALS);
                }

                return Operation::success(['uid' => $tenantData[0]['uid']]);
            })
            
            ->tap(fn() => $this->startTimer(self::TIMER_JWT_GEN))
            ->then(function(array $jwtData) {
                return $this->jwtManager->encode($jwtData, self::AUTH_TOKEN_TTL)
                    ->map(fn($token) => ['auth' => ['token' => $token]])
                    ->tap(fn() => $this->stopTimer(self::TIMER_JWT_GEN))
                    ->tap(fn() => $this->stopTimer(self::TIMER_TOTAL))
                    ->withMetric('stopwatch', $this->collectMetrics());
            })
            ->catch(function($error, $code) {
                return Operation::error($code, self::ERROR_AUTH_FAILED)
                    ->withMetric('stopwatch', $this->collectMetrics());
            });
    }

    private function startTimer(string $timerName): void 
    {
        $this->stopwatch->start($timerName);
    }

    private function stopTimer(string $timerName): void 
    {
        $this->stopwatch->stop($timerName);
    }

    private function collectMetrics(): array 
    {
        return $this->stopwatchManager->collectMetrics($this->stopwatch, self::TIMER_TOTAL);
    }
}
`;