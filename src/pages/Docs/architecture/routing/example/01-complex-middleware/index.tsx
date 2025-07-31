export const ComplexMiddlewareExample01 = `
<?php

namespace App\\Middlewares;

use Rift\\Core\\Contracts\\ResultType;
use Rift\\Core\\Http\\Request;
use Rift\\Core\\Middlewares\\MiddlewareInterface;
use App\\Services\\System\\AuthByTokenService;
use Rift\\Core\\Contracts\\Operation;

class AuthClient implements MiddlewareInterface {
    public function __construct(
        private AuthByTokenService $AuthByTokenService    # auxiliary service
    ) {}        

    public function execute(Request $request): ResultType 
    {   
        # Logic chain
        $result = $this->getToken($request)
            ->then(fn($token) => $this->AuthByTokenService->checkToken($token));   
        return $result;
    }

    /**
     * getToken from requestObject
     */
    protected function getToken(Request $request): ResultType {
        $queryParams = $request->getQueryParams();
        if (!isset($queryParams['token'])) {
            return Result::Failure(Result::HTTP_UNAUTHORIZED, 'api token lost');   
        }
        return Result::Success($queryParams['token']);
    }
}
`;