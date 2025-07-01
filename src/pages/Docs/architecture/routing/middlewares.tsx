import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';
import { MiddlewareExample01 } from './example/01-middleware';
import { RoutesConfigBoxExample02 } from './example/02-routes-config-box';

export const RoutingMiddlewaresPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Middlewares</div>
            <br />
            So, each route or group of routes can assign to itself a list of <div className='code-tag'>middlewares</div> classes that check <div className='code-tag'>requestObject</div> before addressing <div className='code-tag'>handler</div> payload.<br />
            When middlewares are detected on the route, the Rift router will start executing the chain and either respond with a negative <div className='code-tag'>OperationOutcome</div> received from middleware, or after executing the entire chain, it will call <div className='code-tag'>handler</div>
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Middleware Interface</div>
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
            <CodeBlock code='App\Middlewares*::class => autowire()' language='php' />
            <br />
            If the first middleware of the route returned a positive <div className='code-tag'>OperationOutcome</div>, but with an empty field <div className='code-tag'>result</div>, the next middleware (if any) will be passed the original request object received in the router. 
            If the previous middleware returned a positive contract with <div className='code-tag'>result</div> as a modified <div className='code-tag'>resultObject</div>, the new request object will be passed to the next middleware.
        </>
    );
}