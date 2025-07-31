export const ModulesTable = ()  => {
    return (
      <>
        <table className="table--bordered">
            <thead>
                <tr>
                <th>Module</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Validator</td>
                    <td>
                        Validation of input data according to the schema with support for <div className='code-tag'>ResultType</div>
                    </td>
                </tr>
                <tr>
                    <td>Crypto</td>
                    <td>
                        Argon2ID encryption, API key generation, hashing, JWT keys, and UUID generation.
                    </td>
                </tr>
                <tr>
                    <td>Metrics</td>
                    <td>
                        Symfony Stopwatch manager.
                    </td>
                </tr>
            </tbody>
        </table>
      </>  
    );
}