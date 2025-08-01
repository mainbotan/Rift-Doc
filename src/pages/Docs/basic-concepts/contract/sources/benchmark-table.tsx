export const ContractBenchmarkTable = ()  => {
    return (
      <>
        <table className="table--bordered">
            <thead>
                <tr>
                    <th>Test Case</th>
                    <th>Time (ms)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Simple Success (ResulType)</td>
                    <td>7.692</td>
                </tr>
                <tr>
                    <td>Simple Success (EX)</td>
                    <td>0.908</td>
                </tr>
                <tr>
                    <td>Simple Error (ResulType)</td>
                    <td>5.351</td>
                </tr>
                <tr>
                    <td>Simple Error (EX)</td>
                    <td>11.760</td>
                </tr>
                <tr>
                    <td>Chain (5 ops) (ResulType)</td>
                    <td>80.672</td>
                </tr>
                <tr>
                    <td>Chain (5 ops) (EX)</td>
                    <td>27.347</td>
                </tr>
                <tr>
                    <td>Deep Chain (50) (ResulType)</td>
                    <td>375.518</td>
                </tr>
                <tr>
                    <td>Deep Chain (50) (EX)</td>
                    <td>94.414</td>
                </tr>
            </tbody>
        </table>
      </>  
    );
}