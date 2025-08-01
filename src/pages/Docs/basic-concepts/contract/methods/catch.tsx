import CodeBlock from '../../../../../components/CodeBlock';
import { CatchExample01 } from '../examples/01-catch';
import { CatchResponseExample01 } from '../examples/01-catch-response';
import { MermaidViewer } from '../../../../../components/Mermaid';
import { CatchMemraExample01 } from '../examples/01-catch-memra';

export const ContractCatchMethodPage = () => {
    return (
        <>
            <h2 id='catch'><div className='title'><div className='tag'>@</div>catch</div></h2>
            <br />
            <div className='code-tag'>-&gt;catch(callable $errorHandler)</div> - handles the error, if there is one (analogous to catch)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={CatchExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={CatchResponseExample01} language='json' />
            <br />
            flow:
            <MermaidViewer definition={CatchMemraExample01} initialMode='code' />
            Using <div className='code-tag'>catch</div>, you can catch the error of a previous operation and generate a new response object based on it.
        </>
    )
}