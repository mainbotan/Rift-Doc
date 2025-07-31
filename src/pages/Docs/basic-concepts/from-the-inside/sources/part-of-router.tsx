export const PartOfRouter = `
/**
 * @package Rift\\Core\\Http\\Router
 * @version 1.0.0
 * @author mainbotan
 * @license MIT
 */
class Router implements RouterInterface
{
    ...

    public function __construct(
        private RoutesBoxInterface $routesBox, 
        private ContainerInterface $container
    ) {
        $this->routes = $routesBox->getRoutes();
        $this->compileRoutes();
    }
    
    /**
     * Handle request
     * 
     * @param ServerRequestInterface $request
     * @return OperationOutcome 
     */
    public function execute(ServerRequestInterface $request): OperationOutcome
    {
        $path = $request->getUri()->getPath();
        $method = strtoupper($request->getMethod());

        ...
    }
}
`;