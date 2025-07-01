export const ComplexMiddlewareExample01 = `
<?php

namespace App\\Middlewares;

use Rift\\Core\\Contracts\\OperationOutcome;
use Rift\\Core\\Http\\Request;
use Rift\\Core\\Middlewares\\MiddlewareInterface;
use App\\Services\\System\\AuthByTokenService;
use Rift\\Core\\Contracts\\Operation;

class AuthClient implements MiddlewareInterface {
    public function __construct(
        private AuthByTokenService $AuthByTokenService    # auxiliary service
    ) {}        

    public function execute(Request $request): OperationOutcome 
    {   
        # Logic chain
        $result = $this->getToken($request)
            ->then(fn($token) => $this->AuthByTokenService->checkToken($token));   
        return $result;
    }

    /**
     * getToken from requestObject
     */
    protected function getToken(Request $request): OperationOutcome {
        $queryParams = $request->getQueryParams();
        if (!isset($queryParams['token'])) {
            return Operation::error(Operation::HTTP_UNAUTHORIZED, 'api token lost');   
        }
        return Operation::success($queryParams['token']);
    }
}
`;