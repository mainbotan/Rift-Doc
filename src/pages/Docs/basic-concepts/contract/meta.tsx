import CodeBlock from '../../../../components/CodeBlock';
import { MetricsAndDebugExample01 } from './examples/01-metrics-and-debug.tsx';
import { MetricsAndDebugResponseExample01 } from './examples/01-metrics-and-debug-response.tsx';
import { MermaidViewer } from '../../../../components/Mermaid/index.tsx';
import { MetricsAndDebugMermaExample01 } from './examples/01-metrics-and-debug-merma.tsx';

export const ContractMetaPage = () => {
    return (
        <>
            <div className='title'><div className='tag'>/</div>Metadata</div>
            <br />
            So, when using <div className='code-tag'>Operation Outcome</div> as an operation response, you may need to add some additional information to the payload.
            It can be anything, even notes for a developer. But we distinguish two main types of meta information: <div className='code-tag'>metrics</div> and <div className='code-tag'>debug</div>.
            Each response object created during execution contains a separate field <div className='code-tag'>meta</div>, which can contain an array of metrics and debug information.
            <br /><br />
            Rift also provides a couple of methods that will make it easier to add meta information to your response objects.
            <br />
            <CodeBlock code={MetricsAndDebugExample01} language='php' />
            response:
            <CodeBlock code={MetricsAndDebugResponseExample01} language='php' />
            <br />
            flow:
            <br />
            <MermaidViewer definition={MetricsAndDebugMermaExample01} initialMode='code' />
        </>
    );
}