import CodeBlock from '../../../../components/CodeBlock';
import { BenchmarkExample01 } from './examples/01-benchmark';

export const ContractBenchmarkPage = () => {
    return (
        <>
            <h2 id='benchmark'><div className='title'><div className='tag'>/</div>Benchmark</div></h2>
            <br />
            In order to visually compare the speed and cost of using <div className='code-tag'>OperationOutcome</div> / <div className='code-tag'>Exceptions</div> in simple scenarios
            a small speed test of these two options is presented.
            <br /><br />
            We specifically do not consider complex logical chains in order to show a clear difference in simple cases.
            <br />
            <CodeBlock code={BenchmarkExample01} language='php' />
        </>
    );
}