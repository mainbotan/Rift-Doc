export const InitRequestObjectMethodsExample01 = `
// creating request object
$requestObject = Request::fromGlobals()
    ->then(function($request) {
        $result = [];
        $result['method'] = $request->getMethod();
        $result['path'] = $request->getPath();
        $result['queryParams'] = $request->getQueryParams();
        $result['headers'] = $request->getHeaders();
        $result['acceptHeader'] = $request->getHeader('Accept');
        $result['body'] = $request->getBody();
        $result['files'] = $request->getFiles();
        $result['allData'] = $request->getAllData();
        $result['clientIp'] = $request->getClientIp();
        $result['isJson'] = $request->isJson();
        $result['psrRequest'] = $request->getPsrRequest();

        var_dump($result);
    });
`;