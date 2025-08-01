import { Link } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { PDOConnectExample } from './examples/pdo-connect';
import { PDOMethodsExample } from './examples/pdo-methods';
import { PDORequestExample } from './examples/pdo-request';
import { PDOOperationsExample } from './examples/pdo-responses';
import { EnvPostgresExample } from './examples/env-postgres';
import { EnvMysqlExample } from './examples/env-mysql';

export const DatabasesPDOPage = () => {
    return (
        <>
            <h2 id='pdo'><div className='title'><div className='tag'>/</div>PDO Connection</div></h2>
            <br />
            All database operations from the code in Rift take place via PDO. 
            <br />
            We intentionally embedded the logic of connecting to different database schemes in the repository routers (we'll talk about this later),
            but to understand how they work, we recommend reading the information below. 
            <br /><br />
            If you don't understand anything and don't realize the importance of separate PDO connections for different circuits, don't worry, the Databases section will fill in your gaps. 
            <br /><br />
            <h2 id='env'><div className='title middle'><div className='tag'>#</div>.env</div></h2>
            <br />
            The connection to the database takes place from the settings specified in the .env of your application.
            <br />
            At the moment, Rift provides correct operation for Postgres and MySQL drivers with correct switching between schemas.
            <br /><br />
            An example is provided .env for connecting to your Postgres database
            <CodeBlock code={EnvPostgresExample} language='php' />
            or for MySQL
            <CodeBlock code={EnvMysqlExample} language='php' />
            Based on the data specified in .env, Rift will automatically determine the driver you have selected and how to switch between schemas (in the case of MySQL, the schema will be emulated
            separate databases).


            <br /><br />
            <h2 id='if-you-are-interested'><div className='title middle'><div className='tag'>#</div>If you're interested</div></h2>
            <br />
            There are times when, for religious reasons or purely out of curiosity, you want to check the correctness of the connection to the database manually.
            <br />
            And although Rift in repository routers does this for you, you can still access the PDO manually (you lose connection caching).
            <br /><br />
            To get the PDO, use <div className='code-tag'>Database\Connect</div>. 
            <CodeBlock code={PDOConnectExample} language='php'/>
            <br />
            <div className='text'>We clearly separate the System scheme and Tenants schemes according to their purpose.</div> <br />
            The system schema is designed to store all the configuring data components: authorization, payment, tariffs, and similar data.<br />
            Tenants are responsible for the work of a particular tenant, here the entire "value" of your application is realized. <br />
            Each tenant has its own scheme. At the same time, the tables in the tenant schemes are completely similar (but this does not mean that the functionality of each table is available to each tenant - we use plan differentiation to differentiate).
            <br /><br />
            So, the available methods for obtaining PDO are:
            <CodeBlock code={PDOMethodsExample} language='php' />
            According to the Rift philosophy, every request, including a request to receive a PDO, returns a <div className='code-tag'>ResultType</div> (check out here: <Link to='../basic-concepts/contract'>Basic Concepts / Contract</Link>).
            <br />
            This way, if an unexpected error occurs when requesting a PDO (for example, connecting to an undeveloped schema) you will not get a custom exception, but 
            a contract with the corresponding response status.
            <br /><br />
            This is what your request for a PDO might look like
            <CodeBlock code={PDORequestExample} language='php' />
            Examples of responses
            <CodeBlock code={PDOOperationsExample} language='json' />
        </>
    );
}