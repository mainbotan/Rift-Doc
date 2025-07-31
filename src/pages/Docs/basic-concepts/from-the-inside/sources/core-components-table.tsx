export const CoreComponentsTable = ()  => {
    return (
      <>
        <table className="table--bordered">
            <thead>
                <tr>
                <th>Component</th>
                <th>Group</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ResultType</td>
                    <td>Databus</td>
                    <td>
                        Result monad with support for reactive methods, metrics, and debug information.
                    </td>
                </tr>
                <tr>
                    <td>Kernel</td>
                    <td>HTTP</td>
                    <td>
                        Http application core.
                        Control of request and response input and output.
                    </td>
                </tr>
                <tr>
                    <td>Request</td>
                    <td>HTTP</td>
                    <td>
                        Initializing the <div className='code-tag'>Psr\Http\Message\ServerRequest</div> object from global request variables.
                    </td>
                </tr>
                <tr>
                    <td>ResponseEmitters</td>
                    <td>HTTP</td>
                    <td>
                        Serialization of the response object to support different response types.
                    </td>
                </tr>
                <tr>
                    <td>Router</td>
                    <td>HTTP</td>
                    <td>
                        RESTful routing with compilation of paths from the <div className='code-tag'>RoutesBox</div> object.
                    </td>
                </tr>
                <tr>
                    <td>RoutesBox</td>
                    <td>HTTP</td>
                    <td>
                        RESTful routing with compilation of paths from the <div className='code-tag'>RoutesBox</div> object.
                    </td>
                </tr>
                <tr>
                    <td>RateLimitter</td>
                    <td>HTTP</td>
                    <td>
                        Middleware for rate limiting routes of the <div className='code-tag'>RoutesBox</div> object with support for caching using different strategies.
                    </td>
                </tr>
                <tr>
                    <td>RedisCache</td>
                    <td>Cache</td>
                    <td>
                        Interaction with the Redis cache.
                    </td>
                </tr>
                <tr>
                    <td>PDO Bridge</td>
                    <td>Database</td>
                    <td>
                        Creating a PDO connection to the database. Support for schemas, administrative connections, connection caching, and adapters for posgtres/mysql.
                    </td>
                </tr>
                <tr>
                    <td>Configurators</td>
                    <td>Database</td>
                    <td>
                        Deployment of database schemas based on models with separation into system and tenant schemas.
                    </td>
                </tr>
                <tr>
                    <td>Migrations Dispatcher</td>
                    <td>Database</td>
                    <td>
                        A simplified migration system that supports model-based schema versioning.
                    </td>
                </tr>
                <tr>
                    <td>Models</td>
                    <td>Database</td>
                    <td>
                        Defining an entity stored in a database using a fluent interface, versioning, field validation rules, and optional migration methods.
                    </td>
                </tr>
                <tr>
                    <td>Repositories</td>
                    <td>Database</td>
                    <td>
                        Methods for interacting with an entity stored in a database. Pure SQL + PDO.
                    </td>
                </tr>
            </tbody>
        </table>
      </>  
    );
}