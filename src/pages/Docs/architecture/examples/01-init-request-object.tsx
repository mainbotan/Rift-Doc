export const InitRequestObjectExample01 = `
$requestObject = Request::fromGlobals()
    ->then(function($request) {
        // get request method
        var_dump($request->getMethod());
    });

// =

$requestObject = Request::fromGlobals();
if ($requetObject->isSuccess()) {
    $request = $requestObject->result;
    var_dump($request->getMethod());
}
`;