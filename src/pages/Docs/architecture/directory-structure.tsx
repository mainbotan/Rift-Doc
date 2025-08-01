import CodeBlock from '../../../components/CodeBlock';
import { DirectoryStructureExample01 } from './examples/01-directory-structure';

export const DirectoryStructurePage = () => {
    return (
        <>
            <h2 id='directory-structure'><div className='title'><div className='tag'>/</div>Directory Structure</div></h2>
            <br />
            To start working on the application, you need to understand the structure of the directories and their purpose. 
            There are several fundamental differences in the architectural philosophy of Rift compared to the classical approach <div className='code-tag'>Http/Controllers</div>, offered for example by Laravel.
            Also, let's not forget that your Rift application won't have a presentation layer, meaning <div className='code-tag'>views</div> are simply missing. The server is intended for
            solely for the logic of the application, without visual elements.
            <br /><br />
            So, the intended directory architecture of your project:
            <br />
            <CodeBlock code={DirectoryStructureExample01} language='php' />
            <br /><br />
            <h2 id='app-core'><div className='title middle'><div className='tag'>#</div>App Core</div></h2>
            <br />
            Rift suggests building your proposal by dividing all the logic into two main parts - the configuration core and the tenant modules. 
            By core, we mean the layer responsible for configuring tenants, authorizing, authenticating, distributing plans, configuring schema deployment, etc.
            This layer should be self-sufficient enough to contain the necessary models, repositories, services, and most importantly, <div className='code-tag'>UseCases</div> that are linked to 
            routes to provide common settings and logic for all clients.
            <br /><br />
            <h2 id='app-modules'><div className='title middle'><div className='tag'>#</div>App Tenant Modules</div></h2>
            <br />
            Tenant modules should not know about global settings and logics. They define the logic for working with entities in tenant schemas. Modules are the main value of your application.
            Establish connections between them, reuse <div className='code-tag'>UseCases</div> of modules in each other, but do not go beyond their limits. 
            <br />
            This approach allows you to make changes to the configuration layer stored in the <div className='code-tag'>Core</div> of your application without making significant changes to the logic of the modules.
        </>
    );
}