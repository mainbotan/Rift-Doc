export const ContractMethodsTable = () => {
    return (
        <>
        <table className="table--bordered">
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div className="code-tag">withMetric</div></td>
                    <td>Adds a metric to the meta data under the 'metrics' key</td>
                </tr>
                <tr>
                    <td><div className="code-tag">getMetric</div></td>
                    <td>Retrieves a metric value by key from the meta data</td>
                </tr>
                <tr>
                    <td><div className="code-tag">addDebugData</div></td>
                    <td>Adds debug information to the meta data under the 'debug' key</td>
                </tr>
                <tr>
                    <td><div className="code-tag">getDebug</div></td>
                    <td>Retrieves debug information by key from the meta data</td>
                </tr>
                <tr>
                    <td><div className="code-tag">isSuccess</div></td>
                    <td>Returns true if the operation code is 200, 201, or 202</td>
                </tr>
                <tr>
                    <td><div className="code-tag">then</div></td>
                    <td>Executes callback if operation was successful (similar to Promise.then)</td>
                </tr>
                <tr>
                    <td><div className="code-tag">map</div></td>
                    <td>Transforms the result value if operation was successful</td>
                </tr>
                <tr>
                    <td><div className="code-tag">catch</div></td>
                    <td>Handles error case if operation failed (similar to Promise.catch)</td>
                </tr>
                <tr>
                    <td><div className="code-tag">tap</div></td>
                    <td>Executes side effect without modifying the result (similar to tap in functional programming)</td>
                </tr>
                <tr>
                    <td><div className="code-tag">ensure</div></td>
                    <td>Validates result with predicate, returns error if validation fails</td>
                </tr>
                <tr>
                    <td><div className="code-tag">merge</div></td>
                    <td>Combines two ResultType results using a merger function</td>
                </tr>
                <tr>
                    <td><div className="code-tag">toJson</div></td>
                    <td>Converts the ResultType to JSON string, optionally using a transformer</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}