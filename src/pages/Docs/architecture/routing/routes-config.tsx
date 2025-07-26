import CodeBlock from '../../../../components/CodeBlock';
import { RoutesConfigListExample01 } from './example/01-routes-config-list';
import { RoutesConfigBoxExample01 } from './example/01-routes-config-box';

export const RoutingRoutesConfigPage = () => {
    return (
        <>
            <div className='title'><div className='tag'>/</div>Routes Configuration</div>
            <br />
            Route configuration is the place where you register possible routes for your application. <br />
            Initially, Rift was designed for a <div className='code-tag'>RESTful</div> approach to building applications, so the route structure should be consistent.
            <br /><br />
            The route configuration is considered as part of the configuration of the entire application and is placed in the appropriate directory:
            <CodeBlock code='configs/routes.php' language='swift' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Route Structure</div><br />
            Each route from the configuration must contain the following fields:<br /><br />
            <div className='code-tag'>method</div> - request method; <div className='code-tag'>POST</div> / <div className='code-tag'>GET</div> / <div className='code-tag'>PATCH</div> / <div className='code-tag'>PUT</div> / <div className='code-tag'>DELETE</div> 
            <br />
            <div className='code-tag'>path</div> - request route; f.e: <div className='code-tag'>/plans</div> / <div className='code-tag'>/planes/&#123;plan_id&#125;</div>
            <br />
            <div className='code-tag'>handler</div> - link to handler class; f.e: <div className='code-tag'>App\UseCases\System\Plans\GetList::class</div>
            <br />
            <div className='code-tag'>middlewares</div> - array of links to middlewares;
            <br /><br />
            <div className='text'>
                Before specifying links to middleware, controllers, or any other classes, do not forget to change the configuration <div className='code-tag'>configs/di.php </div>, for example like this:
                <CodeBlock code='\App\UseCases\*::class => autowire()       # + line in di.php config array' language='php' />
            </div>
            <br />
            Rift offers you two ways to configure routes:<br /><br />
            <div className='title middle'><div className='tag'>#</div>A clean array</div>
            <br />
            If you are a sadist (or work in a production environment and the speed of route configuration processing is critical to you) you can specify each route as a prepared array:
            <br />
            <CodeBlock code={RoutesConfigListExample01} language='php' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Routes Box</div>
            <br />
            If the conciseness of the configuration is more important to you at the moment than the speed of its processing, Rift offers <div className='code-tag'>RoutesBox</div> for registering routes. 
            This is an object that allows you to save routes using methods: <div className='code-tag'>get</div> <div className='code-tag'>post</div> <div className='code-tag'>patch</div> <div className='code-tag'>put</div> <div className='code-tag'>delete</div>.            
            And it contains the reverse function <div className='code-tag'>getRoutes</div> to convert to an array (this function is used in the router when it is initialized using the <div className='code-tag'>::fromRoutesBox</div> method)
            <br/><br />
            This is how the configuration will look using <div className='code-tag'>RoutesBox</div>:
            <br />
            <CodeBlock code={RoutesConfigBoxExample01} language='php' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Summary</div>
            <br />
            Whatever configuration method you find convenient, the router in Rift can work with both a pure route array and a <div className='code-tag'>RoutesBox</div> object.
        </>
    );
}