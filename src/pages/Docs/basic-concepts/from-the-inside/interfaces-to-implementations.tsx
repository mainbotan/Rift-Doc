import CodeBlock from "../../../../components/CodeBlock";
import { PartOfAppDiConfig } from "./sources/part-of-app-di-config";
import { PartOfRiftDiConfig } from "./sources/part-of-rift-di-config";

export const InterfacesToImplementationsPage = () => {
    return (
        <>
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
        </>  
    );
}