export const RepositoriesSystemRouterExample = `
<?php

namespace App\\Repositories\\System;

use PDO;
use Rift\\Core\\Contracts\\OperationOutcome;
use Rift\\Core\\Database\\Connect;
use Rift\\Core\\Repositories\\AbstractRouter;

class Router extends AbstractRouter {
    protected string $schema = 'system';

    /**
     * Repositories configuration
     */
    protected array $repositories = [
        'tenants.repo' => [
            'class' => \\App\\Repositories\\System\\TenantsRepository::class,
            'model' => \\App\\Models\\System\\Tenants::class
        ]
    ];
}
`;