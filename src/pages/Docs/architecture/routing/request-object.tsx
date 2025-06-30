import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';
import { RequestObjectFormationExample01 } from './example/01-request-object-formation';
import { InitRequestObjectExample01 } from '../examples/01-init-request-object';
import { InitRequestObjectMethodsExample01 } from './example/01-init-request-object-methods';
import { InitRequestObjectMethodsResponseExample01 } from './example/01-init-request-object-methods-response';

export const RoutingRequestObjectPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Request Object</div>
            <br />
            So, the idea of processing a request using a standardized object appeared a long time ago, sometime in 2015, along with the adoption of <div className='code-tag'>PSR-7</div>.
            Previously, when writing an application, the developer had to manually receive the headers, uri, or request body. <br /><br />
            In Rift, you can create a query object with a single call from global variables in the <div className='code-tag'>entrypoint</div> of your application.
            <br />
            The request object and its methods are fully described here:
            <br />
            <CodeBlock code='use Rift\Core\Http\Request;' language='php' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Initialization</div>
            <br />
            To initialize a request object from global variables, the static method <div className='code-tag'>fromGlobals</div> is used.
            Here is an example of initializing a new object:<br />
            <CodeBlock code={InitRequestObjectExample01} language='php' />
            Don't forget that the <div className='code-tag'>fromGlobals</div> method returns <div className='code-tag'>OperationOutcome</div> with the result of object formation:
            <br />
            <CodeBlock code={RequestObjectFormationExample01} language='php' />
            Thus, you can work with the request object only after it has been "unpacked" from <div className='code-tag'>OperationOutcome</div>. This approach eliminates possible errors in creating an object 
            and gives you control over even this stage.
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Structure</div>
            <br />
            So, the Rift request object stores a <div className='code-tag'>psrRequest</div> (library <div className='code-tag'>Nyholm\Psr7</div>), for which a number of public methods are available.
            <br />
            Let's analyze each of them:
            <br /><br />
            <div className='code-tag'>getMethod()</div>:string - request method<br />
            <div className='code-tag'>getPath()</div>:string - request path<br />
            <div className='code-tag'>getQueryParams()</div>:array - request parameters<br />
            <div className='code-tag'>getHeaders()</div>:array - request headers<br />
            <div className='code-tag'>getHeader(string $name)</div>:?string - a specific header<br />
            <div className='code-tag'>getBody()</div>:array - request body<br />
            <div className='code-tag'>getFiles()</div>:array - request files<br />
            <div className='code-tag'>getAllData()</div>:array - all request data<br />
            <div className='code-tag'>getClientIp()</div>:string - sender's IP address<br />
            <div className='code-tag'>isJson()</div>:bool - checking the request format<br />
            <div className='code-tag'>getPsrRequest()</div>:object - getting the original psr object
            <br /><br />
            A possible case:
            <CodeBlock code={InitRequestObjectMethodsExample01} language='php' />
            Output:
            <CodeBlock code={InitRequestObjectMethodsResponseExample01} language='php' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Using</div>
            <br />
            The generated request object is pre-checked for correctness and passed from <div className='code-tag'>entrypoint</div> to <div className='code-tag'>router</div><br />
            Both the router and the middleware work on its basis and using its methods, doing all the necessary actions to ensure that an invalid request does not get into the logic layer. After all the checks and conversions
            the <div className='code-tag'>Use Case</div> contains a blank array with the <div className='code-tag'>payload</div> of the request.
        </>
    );
}