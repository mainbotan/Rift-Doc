export const RepositoriesTenantsRequestExample = `

use App\\Repositories\\System\\Router;

// creating system repositories router
$systemRouter = new Router();
$tenantsRepositoryRequest = $systemRouter->getRepository('tenants.repo');

if ($tenantsRepositoryRequest->isSuccess()) {

    // we get the repository object from the request to the router
    $tenantsRepository = $tenantsRepositoryRequest->result;

    // repository request
    $repositoryRequest = $tenantsRepository->createTenant([
        'name' => 'test',
        'email' => 'test@gmail.com',
        'password' => 123456   
    ]);
    
    if ($repositoryRequest->isSuccess()) {
        // query chain
    }
}else {
    // error handling in case of repository configuration
}
`;