import { ContractBenchmarkTable } from './sources/benchmark-table';

export const ContractBenchmarkPage = () => {
    return (
        <>
            <h2 id='benchmark'><div className='title'><div className='tag'>/</div>Over short distances</div></h2>
            <br />
            In order to visually compare the speed and cost of using <div className='code-tag'>ResultType</div> / <div className='code-tag'>Exceptions</div> in simple scenarios
            a small speed test of these two options is presented.
            <br /><br />
            We specifically do not consider complex logical chains in order to show a clear difference in simple cases.
            <br />
            <ContractBenchmarkTable />
        </>
    );
}