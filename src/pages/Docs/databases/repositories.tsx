import CodeBlock from '../../../components/CodeBlock';
import { RepositoriesStructureExample } from './examples/repositories-structure';
import { RepositoriesSystemRouterExample } from './examples/repositories-system-router';
import { RepositoriesTenantsExample } from './examples/repositories-tenants';
import { RepositoriesTenantsRequestExample } from './examples/repositories-tenants-request';
import { RepositoriesTenantsAnswersExample } from './examples/repositories-tenants-answers';
import { RepositoriesTenantRouterExample } from './examples/repositories-tenant-router';
import { RepositoriesTenantUsersRequestExample } from './examples/repositories-tenant-users-request';

export const DatabasesRepositoriesPage = () => {
    return (
        <>
            <h2 id='repositories'><div className='title'><div className='tag'>/</div>Repositories</div></h2>
            <br />
            If the models in Rift describe the structure and validation rules of each entity stored in the database, repositories provide the opportunity to interact
            with each table using SQL queries and PDO.
            <br /><br />
            <div className='text'>For convenient use of repositories and the correct separation of system and tenant repositories, we introduce the concept of a repository router.</div>
            <br />
            In your project
            <CodeBlock code={RepositoriesStructureExample} language='php' />
            <br />
            <h2 id='get-started'><div className='title middle'><div className='tag'>#</div>Let's get started</div></h2>
            <br />
            Let's start with the router of the system repositories. If the reader of this documentation is not lost yet, the system repositories are responsible for 
            data common to all tenants: tariff plans, tenant authorization, all these actions are system repositories.
            <br />
            <CodeBlock code={RepositoriesSystemRouterExample} language='php'/>
            <br />
            Thus, we clearly specified the <div className='code-tag'>system</div> schema and configured the repositories by assigning a key to each one, for example <div className='code-tag'>tenants.repo</div> and specifying the model that the repository works with.
            <br /><br />
            <div className='text'>
                Pay special attention to the repository keys, choose something that will clearly describe the entity that the repository will work with.
                So <div className='code-tag'>tenants.repo</div> or <div className='code-tag'>tenants</div> are great options, <div className='code-tag'>possible-actions-with-tenants</div> a piece of shit that's easy to misspell.
            </div>
            <br />
            An example of a repository responsible for working with tenants (a formal example with simple SQL queries).
            <br />
            <CodeBlock code={RepositoriesTenantsExample} language='php' />
            Thus, the request to the repository will look like this.
            <CodeBlock code={RepositoriesTenantsRequestExample} language='php' />
            Examples of repository responses
            <CodeBlock code={RepositoriesTenantsAnswersExample} language='json' />
            <br />
            <h2 id='tenant-repositories'><div className='title middle'><div className='tag'>#</div>Tenant Repositories</div></h2>
            <br />
            The difference between system and tenant repositories is that in the case of a tenant repository router, we obviously do not know the scheme in which 
            requests will occur and cannot simply do <div className='code-tag'>$schema = 'system';</div> in the router.
            <br /><br />
            <div className='text'>
                To configure repositories for a specific tenant, Rift uses late static linking in the repository router.
            </div>
            <br />
            Here is an example of a tenant router
            <br />
            <CodeBlock code={RepositoriesTenantRouterExample} language='php' />
            Thus, a request to the tenant repository via the router will look like this
            <CodeBlock code={RepositoriesTenantUsersRequestExample} language='php'/>
            <br />
            At the same time, the implementation of <div className='code-tag'>users.repo</div> does not differ in structure from system repositories. This is a collection of public methods 
            making up the <div className='code-tag'>$stmt</div> you need, executing the request and returning the <div className='code-tag'>OperationOutcome</div> with the result of the request.
            <br /><br />
            At the same time, Rift saves you the pain of reconnecting to the database and at the same time gives you control over queries.
        </>
    );
}