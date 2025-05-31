import { useParams, Link } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { ModelsStructureExample } from './examples/models-structure';
import { ModelsUseExample } from './examples/models-use';
import { ModelsTenantExample } from './examples/models-tenant';
import { ModelsOptionsExample } from './examples/models-options';
import { ModelsTenantRequestExample } from './examples/models-tenant-reqeust';
import { ModelsAnswersExample } from './examples/models-answers';

export const DatabasesModelsPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Models</div>
            <br />
            Rift assumes a description of all entities stored in any schema of your database, be it a system schema or a tenant schema using special models.
            Each model is responsible for the structure of a separate table, defines validation rules for all its fields, and assigns SQL code to create a specific field.
            <br /><br />
            Thus, the model serves as the only source of truth that needs to be described in as much detail as possible when writing your application.
            We recommend starting the development of new applications from the stage of describing all the models stored in the system and tanant schema.
            Think about the entities stored in them, and Rift will give you the opportunity to reuse your models as conveniently as possible in the logic and initialization of your application.
            <br /><br />
            Pay due attention to the separation of system models, such as tables of tenants or accounts, and Tennant models related to the logic of his work.
            <CodeBlock code={ModelsStructureExample} language='php' />
            <br />
            <div className='text'>
                The names of the model files must match the name of the table described by it, for example, the table <div className='code-tag'>users</div> the model will match <div className='code-tag'>Users</div>. This approach will improve the atmosphere in your team.
            </div>
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Let's get started</div>
            <br />
            Writing any model is not complete without using the <div className='code-tag'>AbstractModel</div> from the Rift core.
            <CodeBlock code={ModelsUseExample} language='php' />
            As already mentioned, the model itself defines the validation rules for each field. To do this, we use the special rules of the built-in Rift validator (read here: <Link to='../validator'>Rift Validator</Link>).
            <br /><br />
            Also, each field of the model must contain an SQL command to initialize it (based on all fields, the model will be able to recreate itself).
            <br /><br />
            Here is an example of the implementation of the system model <div className='code-tag'>Tenants</div>
            <CodeBlock code={ModelsTenantExample} language='php' />
            <br />
            And no more lines of code. You have described the entity stored in the database, and then Rift works. Based on the schemes you described, Rift offers a standard set of options that can
            be interesting to you as a developer.
            <br />
            <CodeBlock code={ModelsOptionsExample} language='php'/>
            Examples of queries to the model <div className='code-tag'>System/Tenants</div>
            <CodeBlock code={ModelsTenantRequestExample} language='php' />
            Possible answers
            <CodeBlock code={ModelsAnswersExample} language='json' />
            <br />
            <div className='title middle'><div className='tag'>#</div>Why is this necessary?</div>
            <br />
            The ability to reproduce a model based on the fields specified by SQL for each field is used in Rift Configurators. 
            <br />
            The validation rules prescribed when creating the model give you the opportunity to reuse models in layers of middleware validators to exit the query cycle as quickly as possible in case of incorrect data. 
            <br /><br />
            and...<br /><br />
            Based on the models, repositories can generate selections for the GraphQL adapter.
        </>
    );
}