import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { RepositoriesStructureExample } from './examples/repositories-structure';
import { RepositoriesSystemRouterExample } from './examples/repositories-system-router';

export const DatabasesRepositoriesPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Repositories</div>
            <br />
            If the models in Rift describe the structure and validation rules of each entity stored in the database, repositories provide the opportunity to interact
            with each table using SQL queries and PDO.
            <br /><br />
            <div className='text'>For convenient use of repositories and the correct separation of system and tenant repositories, we introduce the concept of a repository router.</div>
            <br />
            In your project
            <CodeBlock code={RepositoriesStructureExample} language='php' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Let's get started</div>
            <br />
            Let's start with the router of the system repositories. If the reader of this documentation is not lost yet, the system repositories are responsible for 
            data common to all tenants: tariff plans, tenant authorization, all these actions are system repositories.
            <br />
            <CodeBlock code={RepositoriesSystemRouterExample} language='php'/>
            <br />
            Thus, we clearly specified the <div className='code-tag'>system</div> schema and configured the repositories by assigning a key to each one, for example <div className='code-tag'>tenants.repo</div> and specifying the model that the repository works with.
            <br /><br />
            An example of a repository responsible for working with tenants (a formal example with simple SQL queries).
            <br />
        </>
    );
}