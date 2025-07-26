import CodeBlock from '../../../components/CodeBlock';
import { SchemaValidatorConnectExample } from './examples/schema-validator-connect';
import { SchemaValidatorSchemaExample } from './examples/schema-validator-schema';
import { SchemaValidatorCorrectDataExample } from './examples/schema-validator-correct-data';
import { SchemaValidatorCallingExample } from './examples/schema-validator-calling';

export const ValidatorSchemaValidatorPage = () => {
    return (
        <>
            <div className='title'><div className='tag'>/</div>Schema Validator</div>
            <br />
            Schema data validation using a simple syntax and a single response contract is possible using <div className='code-tag'>SchemaValidator</div>.
            <br /><br />
            Use 
            <CodeBlock code={SchemaValidatorConnectExample} language='php' />
            Possible scheme
            <CodeBlock code={SchemaValidatorSchemaExample} language='php' />
            Correct input data
            <CodeBlock code={SchemaValidatorCorrectDataExample} language='php' />
            Calling the validator
            <CodeBlock code={SchemaValidatorCallingExample} language='php' />
        </>
    );
}

