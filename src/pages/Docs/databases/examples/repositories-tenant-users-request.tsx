export const RepositoriesTenantUsersRequestExample = `
use App\\Repositories\\Tenant\\Router;

$tenantRouter = Router::forTenant('14950'); // 14950 - example <tenant_id>
$usersRepoRequest = $tenantRouter->getRepository('users.repo');

if ($usersRepoRequest->isSuccess()) {
    
    $usersRepo = $usersRepoRequest->result;

    $createUserForTenantRequest = $usersRepo->createUser([
        'name' => 'worker_1',
        'password' => '123456',
        'role' => 'worker'
    ]);

    if ($createUserForTenantRequest->isSuccess()) {
        // query chain
    }
} else {
    // error handling in case of repository configuration
}
`;