import CodeBlock from "../../../../components/CodeBlock";
import { ComposerNamespaces } from "./sources/composer-namspaces";
import { CoreComponentsTable } from "./sources/core-components-table";
import { ModulesTable } from "./sources/modules-table";

export const CoreModulesPage = () => {
    return (
        <>
            <h2 id='core-modules'><div className='title middle'><div className='tag'>#</div>Core & Modules</div></h2>
            <br />
            Rift was deliberately designed with a separation into core and additional modules. By core we mean the critical part of the framework that describes the main components of your application. 
            Modules are components that are not so critical and may not be used in your application, such as a validator.
            <br /><br />
            <div className='code-tag'>composer.json</div> with namespaces:
            <CodeBlock code={ComposerNamespaces} language="json" />
            <br />
            <h2 id='core-components'><div className='title middle'><div className='tag'>#</div>Core Components</div></h2>
            <br />
            The main components of the Rift core.
            <CoreComponentsTable />
            <br />
            <h2 id='core-components'><div className='title middle'><div className='tag'>#</div>Modules</div></h2>
            <ModulesTable />
        </>  
    );
}