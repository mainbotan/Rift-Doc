import CodeBlock from '../../../components/CodeBlock';
import { ValidatorExample } from './examples/validator';

export const ValidatorInterfacePage = () => {
    return (
        <>
            <h2 id='validator-interface'><div className='title'><div className='tag'>/</div>Validator Interface</div></h2>
            <br />
            This way you can easily and easily create validators and use
            anywhere in your application, if necessary. 
            <br /><br />
            To ensure that all the validators you have created have a single entry point and are strictly contractually responsible, use the <div className='code-tag'>Validator Interface</div>.
            <br /><br />
            It ensures that all validators have an entry point <div className='code-tag'>execute(array $data)</div> and return <div className='code-tag'>OperationOutcome</div>.
            <CodeBlock code={ValidatorExample} language='php' />
        </>
    );
}