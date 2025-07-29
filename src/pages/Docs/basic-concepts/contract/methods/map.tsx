import CodeBlock from '../../../../../components/CodeBlock';
import { MapExample01 } from './../examples/01-map';
import { MapResponseExample01 } from '../examples/01-map-response';
import { ThenAndMapExample01 } from '../examples/01-then-and-map';
import { ThenAndMapExample01Response } from '../examples/01-then-and-map-response';
import { MermaidViewer } from '../../../../../components/Mermaid';
import { ThenAndMapMermaExample01 } from '../examples/01-then-and-map-merma';

export const ContractMapMethodPage = () => {
    return (
        <>
            <h2 id='map'><div className='title'><div className='tag'>@</div>map</div></h2>
            <br />
            <div className='code-tag'>-&gt;map(callable $callback)</div> - transforms the result if successful (analogous to map)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={MapExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={MapResponseExample01} language='json' />
            Thus, we changed the result obtained in the first operation.
            <br />
            Now let's try to combine the methods <div className='code-tag'>then</div> and <div className='code-tag'>map</div>
            <br />
            <CodeBlock code={ThenAndMapExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={ThenAndMapExample01Response} language='json' />
            flow:
            <MermaidViewer definition={ThenAndMapMermaExample01} initialMode='code' />
        </>
    )
}