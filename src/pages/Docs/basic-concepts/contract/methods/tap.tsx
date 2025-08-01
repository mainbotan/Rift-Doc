import CodeBlock from '../../../../../components/CodeBlock';
import { TapExample01 } from '../examples/01-tap';
import { TapResponseExample01 } from '../examples/01-tap-response';
import { MermaidViewer } from '../../../../../components/Mermaid';
import { TapMermaExample01 } from '../examples/01-tap-merma';

export const ContractTapMethodPage = () => {
    return (
        <>
            <h2 id='tap'><div className='title'><div className='tag'>@</div>tap</div></h2>
            <br />
            <div className='code-tag'>-&gt;tap(callable $callback)</div> - performs a side effect without changing the result (analogous to tap)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={TapExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={TapResponseExample01} language='json' />
            <br />
            flow:
            <MermaidViewer definition={TapMermaExample01} initialMode='code' />
        </>
    )
}