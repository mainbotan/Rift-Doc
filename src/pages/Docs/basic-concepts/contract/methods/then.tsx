import CodeBlock from '../../../../../components/CodeBlock';
import { ThenExample01 } from './../examples/01-then';
import { ThenResponseExample01 } from './../examples/01-then-response';
import { ThenExample02 } from '../examples/02-then';
import { ThenResponseExample02 } from '../examples/02-then-response';
import { MermaidViewer } from '../../../../../components/Mermaid';
import { ThenMermaExample02 } from '../examples/02-then-merma';

export const ContractThenMethodPage = () => {
    return (
        <>
            <h2 id='then'><div className='title'><div className='tag'>@</div>then</div></h2>
            <br />
            <div className='code-tag'>-&gt;then(callable $callback)</div> - performs a callback if the result is successful (analogous to then/flatMap)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={ThenExample01} language='php'/>
            response:
            <br />
            <CodeBlock code={ThenResponseExample01} language='json' />
            In the above function, the operation to return <div className='code-tag'>id</div>, <div className='code-tag'>name</div> and <div className='code-tag'>time</div> is divided into two tasks, each of which creates a new response object.<br />
            First, we create an object with user data, and then use <div className='code-tag'>then</div> method to add the current timestamp to it. 
            Thus, we use the data obtained from the first operation in the second through the array <div className='code-tag'>$data</div>
            <br /><br />
            The beauty of this approach is that all the <div className='code-tag'>OperationOutcome</div> methods (including <div className='code-tag'>then</div>) will fail if the previous operation fails.
            Let's imagine such a case:
            <br />
            <CodeBlock code={ThenExample02} language='php' />
            response:
            <CodeBlock code={ThenResponseExample02} language='json' />
            Thus, we have divided one task into two separate operations, each of which relies on the result of the previous one.
            The <div className='code-tag'>getUserById</div> method deliberately returned the error <div className='code-tag'>404</div>. Thus, the following conversion method 
            the username was not executed.
            <br />
            <br />
            flow:
            <MermaidViewer definition={ThenMermaExample02} />
            <br />
            At the same time, each function independently determines the description of a possible error and its status code. We don't have to rely on an exception handler somewhere in the upper layer. Everything is happening here
            and now, without a ton of <div className='code-tag'>if...else</div> at every step.
            <br /><br />
            This way, we control the entire response formation process, clearly understanding at what point the error occurred. Try to experiment. 
        </>
    )
}