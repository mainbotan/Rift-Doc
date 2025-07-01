export const RoutesConfigListExample01 = `
<?php

/*
 * |--------------------------------------------------------------------------
 * |
 * configs/routes.php
 * Routes
 * |
 * |--------------------------------------------------------------------------
 */

return [
    [
        'method' => 'GET',
        'path' => '/plans',
        'handler' => App\\UseCases\\System\\Plans\\GetList::class,
        'middlewares' => [] # empty middlewares list
    ],
    [
        'method' => 'GET',
        'path' => '/plans/{plan_id}',
        'handler' => App\\UseCases\\System\\Plans\\GetPlan::class,
        'middlewares' => [] # empty middlewares list
    ],
    [
        'method' => 'GET',
        'path' => '/clients/{client_id}/invoices',
        'handler' => App\\UseCases\\Tenant\\Invoices\\GetByClientId::class,
        'middlewares' => [
            App\\Middlewares\\Tenant\\CheckAuth::class,
            App\\Middlewares\\Tenant\\CheckPlanRights::class
        ]                
    ],
    [
        'method' => 'POST',
        'path' => '/clients/{client_id}/invoices/{invoice_id}/update',
        'handler' => App\\UseCases\\Tenant\\Invoices\\UpdateByClientId::class,
        'middlewares' => [
            App\\Middlewares\\Tenant\\Validators\\InvoiceValidate::class
        ]                
    ]         
];
`;