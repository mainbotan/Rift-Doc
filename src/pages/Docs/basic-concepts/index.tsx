export const BasicConceptsMainPage = () => {
    return (
        <>
            <div className='title'><div className='tag'>/</div>Basic Concepts</div>
            <br />
            The main idea of creating Rift was to use a "single response contract" as a means of communication between different layers of the application.
            This means that instead of the usual exception syntax in operations where consistency and clarity of the chain of calls are extremely important, we will use
            a special object for transmitting status, errors, and payload.
            <br />
            Later, we will take a closer look at the structure of this object, as well as its possible actions. Rift is inspired by the JS Promises, and the functional approach in general.
            This means that with the response object, which we have named <div className='code-tag'>OperationOutcome</div>, the functional programming methods familiar to you will be possible.
            <br /><br />
            <div className='title middle'><div className='tag'>/</div>Scalability</div>
            <br />
            If you respect yourself and your time when developing complex applications, you will definitely think about how difficult it will be to optimize the created infrastructure for high traffic.
            By doing anything on Laravel and mixing the presentation layer with the logic layer (for example Blade), you risk the ability to scale smoothly.
            Rift is not designed to perform server-side rendering tasks (NextJS is available for this) and is designed strictly to perform tasks related to the direct business logic of your application.
            <br /><br />
            The world is familiar with languages for high loads, which is worth the power of Go. But Rift is a compromise between PHP's natural simplicity and the ability to scale.
            When you start doing something with Rift, you shouldn't think about how difficult it will be to transfer it to another language. No, it's not difficult, similar mechanics have long been available in more powerful programming languages.
            You create a workable instance of the business logic and tell yourself, "if necessary, this can be migrated to something more powerful."

            <br /><br />
            <div className='title middle'><div className='tag'>/</div>Multitenancy</div>
            <br />
            Rift components can be used in applications that have nothing to do with multitenancy. However, we have paid a lot of attention to this topic. 
            The problem of isolating data from multiple clients is not simple, but it can be solved (with minimal costs) using various database schemas (Postgres) or their emulation (MySQL) and properly configured access.
            <br /><br />
            Rift contains mechanisms like database schema configurators that allow you to spend most of your time writing the logic of a particular tenant, and then "copy" the functionality in accordance with the plans and tariffs of a particular client.
        </>
    );
}