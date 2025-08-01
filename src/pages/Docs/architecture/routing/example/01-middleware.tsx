export const MiddlewareExample01 = `
<?php

namespace App\\Middlewares;

use Rift\\Core\\Databus\\Result;
use Rift\\Core\\Databus\\ResultType;
use Rift\\Core\\Http\\Request;
use Rift\\Core\\Middlewares\\MiddlewareInterface;

class CheckHeader implements MiddlewareInterface {
    protected $acceptLanguage = 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.6';

    public function execute(Request $request): ResultType
    {
        $header = $request->getHeader('Accept-Language')[0];
        if ($header === $this->acceptLanguage) {
            return Result::Success(null);
        }
        return Result::Failure(Result::HTTP_BAD_REQUEST, 'accept language header not allowed');
    }
}
`;