import CodeBlock from '../../../../components/CodeBlock';
import { MiddlewareExample01 } from './example/01-middleware';
import { RoutesConfigBoxExample02 } from './example/02-routes-config-box';
import { ComplexMiddlewareExample01 } from './example/01-complex-middleware';
import { ComplexMiddlewareExample01DiConfig } from './example/01-complex-middleware/di-config';
import { ComplexMiddlewareExample01RoutesConfigs } from './example/01-complex-middleware/routes-config';

export const RoutingMiddlewaresPage = () => {
    return (
        <>
            <h2 id='middlewares'><div className='title'><div className='tag'>/</div>Middlewares</div></h2>
            <br />
            So, each route or group of routes can assign to itself a list of <div className='code-tag'>middlewares</div> classes that check <div className='code-tag'>requestObject</div> before addressing <div className='code-tag'>handler</div> payload.<br />
            When middlewares are detected on the route, the Rift router will start executing the chain and either respond with a negative <div className='code-tag'>OperationOutcome</div> received from middleware, or after executing the entire chain, it will call <div className='code-tag'>handler</div>
            <br /><br />
            <h2 id='interface'><div className='title middle'><div className='tag'>#</div>Middleware Interface</div></h2>
            <br />
            The middleware interface is described here:<br />
            <CodeBlock code='use Rift\Core\Middlewares\MiddlewareInterface;' language='php' />
            It ensures that any middleware in your application contains a single entry point <div className='code-tag'>execute</div>, which accepts the request object and responds <div className='code-tag'>OperationOutcome</div>
            <br />
            Here is an example of the simplest middleware that checks the request header:<br />
            <CodeBlock code={MiddlewareExample01} language='php' /> 
            Use in route configuration:<br />
            <CodeBlock code={RoutesConfigBoxExample02} language='php' />
            Registration in <div className='code-tag'>configs/di.php</div>:<br/>
            <CodeBlock code='App\Middlewares\CheckHeader::class => autowire()' language='php' />
            Or:<br/>
            <CodeBlock code='App\Middlewares*::class => autowire()      # PHP-DI 6.0+' language='php' />
            <br />
            If the first middleware of the route returned a positive <div className='code-tag'>OperationOutcome</div>, but with an empty field <div className='code-tag'>result</div>, the next middleware (if any) will be passed the original request object received in the router. 
            If the previous middleware returned a positive contract with <div className='code-tag'>result</div> as a modified <div className='code-tag'>resultObject</div>, the new request object will be passed to the next middleware.
            <br /><br />
            <h2 id='dependencies'><div className='title middle'><div className='tag'>#</div>Dependencies</div></h2>
            <br />
            Logically, your middleware may require additional services or auxiliary classes. Rift also allows you to reuse application logic in the form of created <div className='code-tag'>UseCases</div> directly in middleware. 
            <br /><br />
            This is what a middleware using an auxiliary service and a <div className='code-tag'>UseCase</div> might look like:
            <br />
            <CodeBlock code={ComplexMiddlewareExample01} language='php' />
            in <div className='code-tag'>configs/di.php</div>:
            <br />
            <CodeBlock code={ComplexMiddlewareExample01DiConfig} language='php' />
            in <div className='code-tag'>configs/routes.php</div>:
            <br />
            <CodeBlock code={ComplexMiddlewareExample01RoutesConfigs} language='php' />
            Thus, we encapsulated the token verification logic in <div className='code-tag'>AuthByTokenService</div>. It may include a request to the repository for information about token and his ttl.
            At the same time, the middleware remains clean, and the token verification logic can be reused. <div className='code-tag'>PHP-DI</div> solves the headache of injecting the service into middleware.
        </>
    );
}