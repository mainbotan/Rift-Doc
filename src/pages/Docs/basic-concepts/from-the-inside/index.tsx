import CodeBlock from "../../../../components/CodeBlock";
import { ComposerNamespaces } from "./sources/composer-namspaces";
import { PartOfAppDiConfig } from "./sources/part-of-app-di-config";
import { PartOfRiftDiConfig } from "./sources/part-of-rift-di-config";
import { PartOfRouter } from "./sources/part-of-router";
import { RouterInterface } from "./sources/router-interface";

export const FromTheInsideMainPage = () => {
    return (
        <>
            <h2 id='architectural-concepts'><div className='title'><div className='tag'>/</div>Rift architectural concepts</div></h2>
            <br />
            Despite the fact that Rift is a mini-framework, an experienced reader will enjoy the beauty of its construction and the best practices for designing complex systems.
            The framework's structure and modularity allow you to have control over each component and replace individual module implementations with your own custom ones.
            The only rule you need to follow is not to make things too complicated for yourself. If you find the implementation of the router offered by Rift to be excessive or insufficient for your project, you can replace it using the DI container configuration and the interface you need. If you want to add a custom metric system, you can replace the implementation. If you have your own migration system, feel free to replace it.
            <br /><br />
            <h2 id='interfaces'><div className='title middle'><div className='tag'>#</div>Interfaces</div></h2>
            <br />
            If you are not familiar with the concept of interfaces in the context of PHP, we strongly recommend that you study this topic on your own and then return to reading this documentation.
            Each implementation offered by Rift follows its own interface. They are all carefully grouped based on the modules whose methods they define.
            <br /><br />
            Namespace where all interfaces are stored:
            <CodeBlock code='Rift\Contracts' language="php" />
            <br />
            Let's consider an example of a specific interface and its usage from the Rift core.
            <CodeBlock code={RouterInterface} language="php" />
            <br />
            This interface is a convention that ensures that the implementation will contain <div className="code-tag">execute</div> and <div className="code-tag">__construct</div> methods that accept and return objects of a well-defined type.
            <br /><br />
            The implementation of the RESTful router offered by Rift refers to this interface and confirms the existence of each of the methods specified in it:
            <CodeBlock code={PartOfRouter} language="php" />
            <br />
            <h2 id='interfaces-to-implementations'><div className='title middle'><div className='tag'>#</div>Interfaces to Implementations</div></h2>
            <br />
            Rift uses <div className="code-tag">PHP-DI</div> to link all interfaces to specific implementations. The Rift dependency configuration is located here:
            <br />
            <CodeBlock code="di/rift.php" language="php" />
            The main task of the DI container configuration is to link interfaces with their implementations, while allowing you to override these links in your application.
            For this reason, your application should have a separate configuration that includes the Rift array configuration. The container is initialized and these two configurations are combined in the <div className="code-tag">bootstrap</div> layer of your application, which will be discussed later.
            <br /><br />
            Part of the Rift dependency configuration: 
            <CodeBlock code={PartOfRiftDiConfig} language="php" />
            <br />
            In the configuration of your application:
            <CodeBlock code={PartOfAppDiConfig} language="php" />
            <br />
            This way, you can easily override the interface you need and use a new implementation. 
            <br /><br />
            <h2 id='core-modules'><div className='title middle'><div className='tag'>#</div>Core & Modules</div></h2>
            <br />
            Rift was deliberately designed with a separation into core and additional modules. By core we mean the critical part of the framework that describes the main components of your application. 
            Modules are components that are not so critical and may not be used in your application, such as a validator.
            <br /><br />
            <div className='code-tag'>composer.json</div> with namespaces:
            <CodeBlock code={ComposerNamespaces} language="json" />
        </>
    );
}