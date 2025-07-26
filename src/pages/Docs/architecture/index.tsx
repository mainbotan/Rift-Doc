import { MermaidViewer } from '../../../components/Mermaid';
import { MermaArchitectureExample01 } from './examples/01-merma-architecture';

export const ArchitectureMainPage = () => {
    return (
        <>
            <div className='title'><div className='tag'>/</div>Architecture</div>
            <br />
            So, having dealt with the basic concepts of the Rift, let's dive into its architectural philosophy. 
            For an experienced developer, there will be no holy revelation or architectural revolution here. However, regardless of your level of development, we recommend that you familiarize yourself with all the sections 
            for a better understanding of the general idea of implementing multi-tenant systems.
            <br /><br/>
            <div className='title middle'><div className='tag'>#</div>In general terms</div>
            <br />
            In any modern application, the process of processing an incoming request begins with the formation of the request object, for the most convenient and secure interactions with its contents. 
            In Rift, this process is implemented in accordance with <div className='code-tag'>PSR-7</div><br /> 
            After the request object is formed, its processing begins. The entire generated object must be transferred to the route router, which determines which key (path) the data is being requested and
            compare with possible paths from the route configuration. At the same time, the router in Rift is designed for a <div className='code-tag'>RESTful</div> approach to building an application, is able to execute chains of middleware (specified to the desired route) and 
            ultimately, transfer the payload from the request object to the <div className='code-tag'>handler</div> - also known as the <div className='code-tag'>UseCase</div>
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Logic layer</div>
            <br />
            The <div className='code-tag'>UseCases</div> layer is the heart of your application. The logic of a particular route is written here. Thanks to <div className='code-tag'>OperationOutcome</div> the compilation process
            logical chains becomes an entertaining game, rather than working with a noodle code. The elegance of the use cases approach is that with proper composition (small use cases can be reused in larger ones) self-repetition
            in the process of writing, the logic is reduced to zero. 
            Thanks to <div className='code-tag'>PHP-DI</div>, created in <div className='code-tag'>bootstrap</div> applications, the database layer includes repository routers or any other auxiliary services/factories (you are not limited in their number and tasks) are implemented in each
            <div className='code-tag'>hanlder (aka UseCase)</div> automatically.  
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Working with the database</div>
            <br />
            In Rift, multitenancy and isolation of data from different clients is implemented using different database schemas. At the same time, the client schemas have the same structure (but the rights to use each table may be different).
            <br />
            The database management layer in Rift consists of three main links: <div className='code-tag'>Models</div> <div className='code-tag'>Repositories</div> <div className='code-tag'>Configurators</div>
            <br /><br />
            Models are a description of an entity stored in a database (as well as validation rules) using a schema. The models are able to generate migrations, thanks to the prepared queries for each field of the entity. <br />
            <br />
            Repositories are responsible for possible actions that can be performed with an entity from the database. Each repository is responsible for a specific set of actions for working with an entity. 
            At the same time, the <div className='code-tag'>pdo</div> database connection and the model that this repository works with must be transferred to each repository. <br />
            <div className='code-tag'>Repositories Routers</div> are used to configure the repositories, i.e. to obtain the desired remote connection and model. They will allow you to divide repositories into groups, for example 
            <div className='code-tag'>system</div> - system repositories and <div className='code-tag'>tenant</div> - repositories for the work of a particular tenant.
            Thus, in the logic layer <div className='code-tag'>UseCases</div>, not specific repositories are used directly, but repository routers that allow you to get the right repository for a specific tenant/system schema. 
            <br /><br />
            Let's assume that a new customer has purchased a subscription to your product. Now you need to create a separate database schema for it, while doing it as quickly and simply as possible. <br />
            Rift allows initialization of new database schemas using <div className='code-tag'>Configurators</div>
            <br /> 
            Configurators contain an array of models for which database tables should be created and are able to 
            using a single method, recreate the structure of the database schema for all models (using them it is possible to generate migrations).
            <br />
            <br />
            Thus, Rift offers the skeleton of a multi-tenant system, without depriving you of the opportunity to create your own custom layers. For example, <div className='code-tag'>DTO Factories</div> or <div className='code-tag'>Services</div>. 
            And thanks to additional modules, for example <div className='code-tag'>Validators</div>, the process of creating complex systems will become much easier. <br />
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Flow</div>
            <MermaidViewer definition={MermaArchitectureExample01} initialMode='code' />
        </>
    );
}