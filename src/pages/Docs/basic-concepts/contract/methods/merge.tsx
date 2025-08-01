import CodeBlock from '../../../../../components/CodeBlock';
import { MergeExample01 } from '../examples/01-merge';
import { MergeResponseExample01 } from '../examples/01-merge-response';
import { MermaidViewer } from '../../../../../components/Mermaid';
import { MergeMermaExample01 } from '../examples/01-merge-merma';

export const ContractMergeMethodPage = () => {
    return (
        <>
            <h2 id='merge'><div className='title'><div className='tag'>@</div>merge</div></h2>
            <br />
            <div className='code-tag'>-&gt;merge(ResultType $other, callable $merger)</div> - combines two ResultTypes (analogous to zip)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={MergeExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={MergeResponseExample01} language='json' />
            <br />
            flow:
            <MermaidViewer definition={MergeMermaExample01} initialMode='code' />
        </>
    )
}