
export const ExampleRepoRequest = `
// Repository request

$tenantRouter = Router::forTenant('H28H-2239');
$usersRepoRequest = $tenantRouter->getRepository('users.repo');

if ($usersRepoRequest->isSuccess()) {
    $usersRepo = $usersRepoRequest->result;
    $repoActionRequest = $usersRepo->createUser([
        'name' => 'example',
        'password' => '123456',
        'role' => 'admin'
    ]);

    if ($repoActionRequest-isSuccess()) {
        // query chain
    } else {
         return $repoActionRequest;
    }
}
`;