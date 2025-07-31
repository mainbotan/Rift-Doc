export const RoutesConfig = `
$box->group('/space', function(RoutesBox $box) {  
    $box->limit(1000);
    $box->middleware(App\\Core\\Tenant\\UseCases\\Authorization\\CheckJwtWithUid::class);    
    $box->middleware(App\\Core\\Tenant\\UseCases\\Verification\\CheckVerified::class);

    # Clients CRUD
    $box->post('/clients', App\\Tenant\\Clients\\UseCases\\Crud\\Create\\CreateClient::class)
        ->middleware(App\\Core\\Middlewares\\ParseJsonBody::class);

    $box->group('/clients', function(RoutesBox $box) {
        $box->patch('/{uid}', App\\Tenant\\Clients\\UseCases\\Crud\\Update\\UpdateClient::class)
            ->middleware(App\\Core\\Middlewares\\ParseJsonBody::class);
        $box->delete('/{uid}', App\\Tenant\\Clients\\UseCases\\Crud\\Delete\\DeleteClient::class);
        $box->get('/{uid}', App\\Tenant\\Clients\\UseCases\\Crud\\Get\\GetClient::class);
    });

`;