import CodeBlock from "../../../../components/CodeBlock";
import { PartOfRouter } from "./sources/part-of-router";
import { RouterInterface } from "./sources/router-interface";

export const InterfacesPage = () => {
    return (
        <>
        <h2 id='interfaces'><div className='title middle'><div className='tag'>#</div>Interfaces</div></h2>
            <br />
            If you are not familiar with the concept of interfaces in the context of PHP, we strongly recommend that you study this topic on your own and then return to reading this documentation.
            Each implementation offered by Rift follows its own interface. They are all carefully grouped based on the modules whose methods they define.
            <br /><br />
            Namespace where all interfaces are stored:
            <CodeBlock code='Rift\Contracts' language="php" />
            <br />
            Let's consider an example of a specific interface and its usage from the Rift core.
            <CodeBlock code={RouterInterface} language="php" />
            <br />
            This interface is a convention that ensures that the implementation will contain <div className="code-tag">execute</div> and <div className="code-tag">__construct</div> methods that accept and return objects of a well-defined type.
            <br /><br />
            The implementation of the RESTful router offered by Rift refers to this interface and confirms the existence of each of the methods specified in it:
            <CodeBlock code={PartOfRouter} language="php" />
            <br />
        </>
    );
}