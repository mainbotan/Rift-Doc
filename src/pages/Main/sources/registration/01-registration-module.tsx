export const RegistrationModuleExample01 = `
/**
 * 2FA registration. Confirmation code via email.
 * @version 0.0.1
 */
class RegistrateByEmail implements HandlerInterface 
{
    const AUTH_TOKEN_TTL = 3600 * 24;
    const VERIFY_TOKEN_TTL = 1800;

    private const TIMER_TOTAL = 'reg.total';
    private const TIMER_VALIDATION = 'reg.validation';
    private const TIMER_REPO_UNIT = 'reg.repo_unit';
    private const TIMER_EMAIL_CHECK = 'reg.email_check';
    private const TIMER_UID_GEN = 'reg.uid_gen';
    private const TIMER_HASH = 'reg.hash';
    private const TIMER_JWT_GEN = 'reg.jwt_gen';
    private const TIMER_VERIFY_CODE_GEN = 'reg.verify_code_gen';
    private const TIMER_VERIFY_CODE_ENCRYPT = 'reg.verify_code_encrypt';
    private const TIMER_VERIFY_CODE_SEND = 'reg.verify_code_send';
    
    private const ERROR_EMAIL_EXISTS = 'A client with the same email already exists. If it was you, log in to access your account.';
    private const ERROR_REGISTRATION_FAILED = 'Registration failed';

    public function __construct(
        private RegistrateByEmailValidator $validator,
        private RepositoriesRouter $repositoriesRouter,
        private UidManager $uidManager,
        private JwtManager $jwtManager,
        private HashManager $hashManager,
        private Stopwatch $stopwatch,
        private StopwatchManager $stopwatchManager,
        private MailerService $mailer,
        private EncryptionManager $encryptionManager
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
            
            ->ensure(
                function(TenantRepository $repository) use ($requestBody) {
                    $this->startTimer(self::TIMER_EMAIL_CHECK);
                    $existing = $repository->getTenantUidByEmail($requestBody['email'])->result;
                    $this->stopTimer(self::TIMER_EMAIL_CHECK);
                    return !isset($existing[0]['uid']);
                },
                self::ERROR_EMAIL_EXISTS,
                Operation::HTTP_CONFLICT
            )
            ->then(function(TenantRepository $repository) use ($requestBody) {
                $this->startTimer(self::TIMER_UID_GEN);
                $uid = $this->uidManager->generate();
                $this->stopTimer(self::TIMER_UID_GEN);

                $this->startTimer(self::TIMER_HASH);
                $hash = $this->hashManager->passwordHash($requestBody['password']);
                $this->stopTimer(self::TIMER_HASH);

                return $repository->createTenant([
                    'uid' => $uid,
                    'email' => $requestBody['email'],
                    'hash' => $hash
                ])->map(fn() => ['uid' => $uid]);
            })
            ->tap(fn() => $this->startTimer(self::TIMER_JWT_GEN))
            ->then(function(array $jwtData) {
                return $this->jwtManager->encode($jwtData, self::AUTH_TOKEN_TTL)
                    ->map(fn($token) => [
                        'auth' => ['token' => $token],
                        'uid' => $jwtData['uid']
                    ]);
            })
            ->tap(fn() => $this->stopTimer(self::TIMER_JWT_GEN))
            ->then(function($result) use ($requestBody) {
                $this->startTimer(self::TIMER_VERIFY_CODE_GEN);
                $verifyCode = random_int(100000, 999999);
                $this->stopTimer(self::TIMER_VERIFY_CODE_GEN);

                $this->startTimer(self::TIMER_VERIFY_CODE_ENCRYPT);
                return $this->encryptionManager->encrypt($verifyCode)
                    ->tap(fn() => $this->stopTimer(self::TIMER_VERIFY_CODE_ENCRYPT))
                    ->tap(fn() => $this->startTimer(self::TIMER_VERIFY_CODE_SEND))
                    ->then(function($encryptedVerifyCode) use ($requestBody, $verifyCode) {
                        $this->mailer->sendConfirmationEmail($requestBody['email'], $verifyCode);
                        return Operation::success($encryptedVerifyCode);
                    })
                    ->tap(fn() => $this->stopTimer(self::TIMER_VERIFY_CODE_SEND))
                    ->then(function ($encryptedVerifyCode) use ($result) {
                        return $this->jwtManager->encode([
                            'uid' => $result['uid'],
                            'code' => $encryptedVerifyCode
                        ], self::VERIFY_TOKEN_TTL);
                    })
                    ->map(fn($verifyToken) => [
                        'auth' => $result['auth'],
                        'verify' => ['token' => $verifyToken]
                    ])
                    ->tap(fn() => $this->stopTimer(self::TIMER_TOTAL))
                    ->withMetric('stopwatch', $this->collectMetrics());
            })
            ->catch(function($error, $code) {
                return Operation::error($code, self::ERROR_REGISTRATION_FAILED . ": $error")
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