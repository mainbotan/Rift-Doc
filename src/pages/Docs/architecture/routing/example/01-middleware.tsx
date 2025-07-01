export const MiddlewareExample01 = `
<?php

namespace App\\Middlewares;

use Rift\\Core\\Contracts\\Operation;
use Rift\\Core\\Contracts\\OperationOutcome;
use Rift\\Core\\Http\\Request;
use Rift\\Core\\Middlewares\\MiddlewareInterface;

class CheckHeader implements MiddlewareInterface {
    protected $acceptLanguage = 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.6';

    public function execute(Request $request): OperationOutcome
    {
        $header = $request->getHeader('Accept-Language')[0];
        if ($header === $this->acceptLanguage) {
            return Operation::success(null);
        }
        return Operation::error(Operation::HTTP_BAD_REQUEST, 'accept language header not allowed');
    }
}
`;