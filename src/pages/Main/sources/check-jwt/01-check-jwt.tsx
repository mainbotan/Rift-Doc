export const CheckJwtExample01 = `
/**
 * Intermediate for checking Bearer token 
 * @version 0.0.1
 */
class CheckJwtWithUid implements MiddlewareInterface 
{
    private const ERROR_INVALID_TOKEN_FORMAT = 'A valid authorization token was not found.';
    private const ERROR_MISSING_UID = 'Invalid token: missing UID';
    private const ERROR_TOKEN_EXPIRED = 'Token expired';
    private const ERROR_INVALID_ISSUANCE_TIME = 'Invalid token issuance time';
    private const ERROR_TOKEN_VERIFICATION_FAILED = 'Token verification failed: %s';
    
    private const BEARER_REGEX = '/^Bearer\s+([a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?)$/i';

    public function __construct(
        private JwtManager $jwtManager
    ) {}

    public function execute(ServerRequestInterface $request): OperationOutcome
    {
        $authHeader = $request->getHeaderLine('Authorization');

        if (!$this->isValidBearerToken($authHeader, $token)) {
            return Operation::error(
                Operation::HTTP_UNAUTHORIZED, 
                self::ERROR_INVALID_TOKEN_FORMAT
            );
        }
        
        return $this->jwtManager->decode($token)
            ->then(fn($jwtData) => $this->validateJwtData($jwtData, $request))
            ->catch(fn($error) => $this->handleTokenError($error));
    }

    private function isValidBearerToken(string $authHeader, ?string &$token): bool
    {
        return preg_match(self::BEARER_REGEX, $authHeader, $matches) 
            && !empty($matches[1])
            && ($token = $matches[1]);
    }

    private function validateJwtData(array $jwtData, ServerRequestInterface $request): OperationOutcome
    {
        if (empty($jwtData['uid'])) {
            return Operation::error(
                Operation::HTTP_UNAUTHORIZED, 
                self::ERROR_MISSING_UID
            );
        }
        
        $currentTime = time();
        
        if (!isset($jwtData['exp']) || $jwtData['exp'] < $currentTime) {
            return Operation::error(
                Operation::HTTP_UNAUTHORIZED, 
                self::ERROR_TOKEN_EXPIRED
            );
        }

        if (isset($jwtData['iat']) && $jwtData['iat'] > $currentTime) {
            return Operation::error(
                Operation::HTTP_UNAUTHORIZED, 
                self::ERROR_INVALID_ISSUANCE_TIME
            );
        }
        
        return Operation::success(
            $request->withAttribute('uid', $jwtData['uid'])
        );
    }

    private function handleTokenError(string $error): OperationOutcome
    {
        return Operation::error(
            Operation::HTTP_UNAUTHORIZED,
            sprintf(self::ERROR_TOKEN_VERIFICATION_FAILED, $error)
        );
    }
}
`;