import CodeBlock from '../../../components/CodeBlock';
import { ConfiguratorsStructureExample } from './examples/configurators-structure';
import { ConfiguratorsSystemExample } from './examples/configurators-system';
import { ConfiguratorsSystemInitExample } from './examples/configurators-system-init';
import { ConfiguratorsSystemInitAnswers } from './examples/configurators-system-init-answers';
import { ConfiguratorsTenantExample } from './examples/configurators-tenant';
import { ConfiguratorsTenantInitExample } from './examples/configurators-tenant-init';
import { ConfiguratorsTenantInitAnswersExample } from './examples/configurators-tenant-init-answers';

export const DatabasesConfiguratorsPage = () => {
    return (
        <>
            <h2 id='configurators'><div className='title'><div className='tag'>/</div>Configurators</div></h2>
            <br />
            If you have read up to this point, we assume that you have familiarized yourself with the model + repository bundle in the Rift view.
            <br /><br />
            Now you are wondering how to quickly initialize new tenant schemas and recreate the system schema.
            <br />
            For these tasks, the Rift core is equipped with configurators that aim to save you from hemorrhoids when deploying schemas.
            <br /><br />
            <h2 id='get-started'><div className='title middle'><div className='tag'>#</div>Let's get started</div></h2>
            <br />
            In your app
            <CodeBlock code={ConfiguratorsStructureExample} language='php'/>
            <br />
            The task of configurators is to describe the schema structure based on models. When initializing the configurator, it will recreate the SQL migration for each model and execute a query chain
            in the right schema. The principle of operation strongly resembles the routers of the Rift repositories.
            <br /><br />
            <h2 id='system-configurator'><div className='title middle'><div className='tag'>#</div>System configurator</div></h2>
            <br />
            When initializing the system schema configurator, Rift will request migrations from the models one at a time and recreate the system schema.
            <CodeBlock code={ConfiguratorsSystemExample} language='php'/>
            Initializing
            <CodeBlock code={ConfiguratorsSystemInitExample} language='php' />
            Possible responses
            <CodeBlock code={ConfiguratorsSystemInitAnswers} language='php' />

            <br /><br />
            <h2 id='tenant-configurator'><div className='title middle'><div className='tag'>#</div>Tenant configurator</div></h2>
            <br />
            All tenants have completely identical tables in their schema. This makes it possible to do this:
            <CodeBlock code={ConfiguratorsTenantExample} language='php'/>
            Initializing the tennant scheme
            <CodeBlock code={ConfiguratorsTenantInitExample} language='php'/>
            Possible answers
            <CodeBlock code={ConfiguratorsTenantInitAnswersExample} language='json' />
            <br /><br />
            Thus, you can use configurators both to deploy the system schema and the tenants (for example, when paying for a tariff plan with a new tenant), which
            significantly reduces your headache and gives you control at any given time.
        </>
    );
}