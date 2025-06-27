import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import { MergeExample01 } from '../examples/01-merge';
import { MergeResponseExample01 } from '../examples/01-merge-response';
import { MermaidViewer } from '../../../../../components/Mermaid';
import { MergeMermaExample01 } from '../examples/01-merge-merma';

export const ContractMergeMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>merge</div>
            <br />
            <div className='code-tag'>-&gt;merge(OperationOutcome $other, callable $merger)</div> - combines two operationoutcomes (analogous to zip)
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