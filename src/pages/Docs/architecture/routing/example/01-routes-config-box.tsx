export const RoutesConfigBoxExample01 = `
<?php

/*
 * |--------------------------------------------------------------------------
 * |
 * configs/routes.php
 * Routes Box
 * |
 * |--------------------------------------------------------------------------
 */

use Rift\\Core\\Http\\RoutesBox;

$routesBox = new RoutesBox();

# single
$routesBox->get("/plans", App\\UseCases\\System\\Plans\\GetList::class, []);            # empty middlewares list
$routesBox->get("/plans/{plan_id}", App\\UseCases\\System\\Plans\\GetPlan::class, []);  # empty middlewares list

$routesBox->post("/clients/{client_id}/invoices", App\\UseCases\\Tenant\\Invoices\\GetByClientId::class, [
    App\\Middlewares\\Tenant\\CheckAuth::class,
    App\\Middlewares\\Tenant\\CheckPlanRights::class
]);
$routesBox->post("/clients/{client_id}/invoices/{invoice_id}/update", App\\UseCases\\Tenant\\Invoices\\UpdateByClientId::class, [
    App\\Middlewares\\Tenant\\Validators\\InvoiceValidate::class
]);

# group
$routesBox->group(['prefix' => '/account', 'middlewares' => [App\Middlewares\Tenant\CheckAuth::class]], 
    function(RoutesBox $box) {
        $box
            ->get('/sessions', App\\UseCases\\Tenant\\Account\\Session\\GetList::class, [])
            ->post('/sessions/{session_id}/delete', App\\UseCases\\Tenant\\Account\\Session\\DeleteSession::class, [])
            ->post('/sessions/{session_id}/edit', App\\UseCases\\Tenant\\Account\\Session\\EditSession::class, [
                App\\Middlewares\\Tenant\\Account\\Session\\ValidateSession::class
            ]);
    }
);

return $routesBox;
`;