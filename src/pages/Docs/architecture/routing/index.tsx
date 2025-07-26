import { MermaidViewer } from '../../../../components/Mermaid';
import { MermaRoutingExample01 } from './example/01-merma-routing';

export const RoutingMainPage = () => {
    return (
        <>
            <div className='title'><div className='tag'>/</div>Routing</div>
            <br />
            After the request object is formed, the system needs to determine the route along which the request was made, verify the existence of this route, execute a chain of middleware, and 
            as a result of all these actions, refer to the <div className='code-tag'>handler</div> of the route. 
            <br /><br />
            All these tasks are taken over by the routing layer. In this section, we will analyze the request object itself and the capabilities it provides, the router, the route configuration, the middleware execution chain
            and a request to <div className='code-tag'>handler</div>
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Routing flow</div>
            <MermaidViewer definition={MermaRoutingExample01} initialMode='code' />
        </>
    );
}