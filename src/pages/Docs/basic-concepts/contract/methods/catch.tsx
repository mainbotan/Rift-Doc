import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import { CatchExample01 } from '../examples/01-catch';
import { CatchResponseExample01 } from '../examples/01-catch-response';

export const ContractCatchMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>catch</div>
            <br />
            <div className='code-tag'>-&gt;catch(callable $errorHandler)</div> - handles the error, if there is one (analogous to catch)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={CatchExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={CatchResponseExample01} language='json' />
            Using <div className='code-tag'>catch</div>, you can catch the error of a previous operation and generate a new response object based on it.
        </>
    )
}