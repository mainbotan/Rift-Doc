export const VerificationModuleExample01 = `
/**
 * GET token [verify token with encrypted code + uid]
 * X-Verification-Code [verification code]
 * @version 1.0.0
 */
class VerifyByCode implements HandlerInterface
{
    const VERIFIED_STATUS = 'verified';
    const VERIFY_HEADER = 'X-Verification-Code';
    
    private const TIMER_TOTAL = 'verify.total';
    private const TIMER_VALIDATION = 'verify.validation';
    private const TIMER_TOKEN_DECODE = 'verify.token_decode';
    private const TIMER_TOKEN_CHECK_EXP = 'verify.token_check_exp';
    private const TIMER_CODE_DECODE = 'verify.code_decode';
    private const TIMER_MATCH_CODES = 'verify.match_codes';
    private const TIMER_REPO_UNIT = 'verify.repo_unit';
    private const TIMER_SWITCH_VERIFY_STATUS = 'verify.switch_verify_status';
    
    private const ERROR_TOKEN_LOST = 'Verify token lost.';
    private const ERROR_TOKEN_EXPIRED = 'Verification token expired.';
    private const ERROR_CODE_MISMATCH = 'Mismatch of verification codes.';
    private const ERROR_VERIFY_FAILED = 'Verify failed';

    public function __construct(
        private VerifyByCodeValidator $validator,
        private RepositoriesRouter $repositoriesRouter,
        private Stopwatch $stopwatch,
        private StopwatchManager $stopwatchManager,
        private JwtManager $jwtManager,
        private EncryptionManager $encryptionManager,
        private DeployTenantSchema $deployTenant
    ) {}

    public function execute(ServerRequestInterface $request): OperationOutcome
    {
        $this->startTimer(self::TIMER_TOTAL);
        $queryParams = $request->getQueryParams();
        
        if (!isset($queryParams['token'])) {
            return $this->handleError(Operation::HTTP_BAD_REQUEST, self::ERROR_TOKEN_LOST);
        }
        
        $verifyToken = $queryParams['token'];
        $clientCode = $request->getHeader(self::VERIFY_HEADER)[0] ?? '';

        return $this->validator->validate(['code' => $clientCode])
            ->tap(fn() => $this->stopTimer(self::TIMER_VALIDATION))
            
            ->tap(fn() => $this->startTimer(self::TIMER_TOKEN_DECODE))
            ->then(fn() => $this->jwtManager->decode($verifyToken))
            ->tap(fn() => $this->stopTimer(self::TIMER_TOKEN_DECODE))
            
            ->tap(fn() => $this->startTimer(self::TIMER_TOKEN_CHECK_EXP))
            ->ensure(
                fn($jwtData) => $this->jwtManager->checkExpiration($jwtData),
                self::ERROR_TOKEN_EXPIRED,
                Operation::HTTP_UNAUTHORIZED
            )
            ->tap(fn() => $this->stopTimer(self::TIMER_TOKEN_CHECK_EXP))
            
            ->then(function ($jwtData) use ($clientCode) {
                return $this->processVerification($jwtData, $clientCode);
            })
            
            ->catch(fn($error, $code) => $this->handleError($code, $error));
    }

    private function processVerification(array $jwtData, string $clientCode): OperationOutcome
    {
        $uid = $jwtData['uid'];

        return $this->encryptionManager->decrypt($jwtData['code'])
            ->tap(fn() => $this->stopTimer(self::TIMER_CODE_DECODE))
            
            ->tap(fn() => $this->startTimer(self::TIMER_MATCH_CODES))
            ->then(function($decodedCode) use ($clientCode) {
                if ((string) $decodedCode !== (string) $clientCode) {
                    return Operation::error(
                        Operation::HTTP_UNAUTHORIZED, 
                        self::ERROR_CODE_MISMATCH
                    );
                }
                return Operation::success();
            })
            ->tap(fn() => $this->stopTimer(self::TIMER_MATCH_CODES))
            
            ->tap(fn() => $this->startTimer(self::TIMER_REPO_UNIT))
            ->then(fn() => $this->repositoriesRouter->factory())
            ->then(fn(RepositoriesFactory $factory) => $factory->tenants())
            ->tap(fn() => $this->stopTimer(self::TIMER_REPO_UNIT))
            
            ->tap(fn() => $this->startTimer(self::TIMER_SWITCH_VERIFY_STATUS))
            ->then(function(TenantRepository $repository) use ($uid) {
                return $repository->updateVerifyStatus($uid, self::VERIFIED_STATUS);
            })
            ->tap(fn() => $this->stopTimer(self::TIMER_SWITCH_VERIFY_STATUS))
            
            ->tap(fn() => $this->stopTimer(self::TIMER_TOTAL))
            ->withMetric('stopwatch', $this->collectMetrics());
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
        return $this->stopwatchManager->collectMetrics(
            $this->stopwatch, 
            self::TIMER_TOTAL
        );
    }

    private function handleError(int $code, string $error): OperationOutcome
    {
        return Operation::error(
            $code, 
            self::ERROR_VERIFY_FAILED . ": $error"
        )->withMetric('stopwatch', $this->collectMetrics());
    }
}
`;