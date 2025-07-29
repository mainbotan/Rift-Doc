import CodeBlock from '../../../../../components/CodeBlock';
import { EnsureExample01 } from '../examples/01-ensure';
import { EnsureResponseExample01 } from '../examples/01-ensure-response';

export const ContractEnsureMethodPage = () => {
    return (
        <>
            <h2 id='ensure'><div className='title'><div className='tag'>@</div>ensure</div></h2>
            <br />
            <div className='code-tag'>-&gt;ensure(callable $predicate, string $errorMessage, int $errorCode = 400)</div> - checks the condition, otherwise it returns an error (analogous to filter/assert)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={EnsureExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={EnsureResponseExample01} language='json' />
        </>
    )
}