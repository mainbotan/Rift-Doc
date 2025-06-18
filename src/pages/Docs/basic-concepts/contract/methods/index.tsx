import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import { ThenExample01 } from './../examples/01-then';
import { MapExample01 } from './../examples/01-map';
import { ThenResponseExample01 } from './../examples/01-then-response';

export const BasicConceptsContractMethodsPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Contract's Methods</div>
            <br />
            So, having got acquainted with the <div className='code-tag'>OperationOutcome</div> object and ways to initialize it, let's look at methods for creating logical chains based on it. 
            <br /><br />
            Everything is simple and logical here, and by understanding how each method works, you can create complex logical chains with your eyes closed. 
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Methods</div>
            <br />
            Rift is inspired by a functional programming approach, so
            if you've ever dealt with JS promises, for example, it will be easier for you.
            <br /><br />
            Let's take a closer look.

            <br /><br />
            <div className='title middle'><div className='tag'>@</div>then</div>
            <br />
            <div className='code-tag'>-&gt;then(callable $callback)</div> - performs a callback if the result is successful (analogous to then/flatMap)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={ThenExample01} language='json'/>
            response:
            <br />
            <CodeBlock code={ThenResponseExample01} language='php' />
            In the above function, the operation to return <div className='code-tag'>id</div>, <div className='code-tag'>name</div> and <div className='code-tag'>time</div> is divided into two tasks, each of which creates a new response object.<br />
            First, we create an object with user data, and then use <div className='code-tag'>then</div> method to add the current timestamp to it. 
            Thus, we use the data obtained from the first operation in the second through the array <div className='code-tag'>$data</div>
            <br /><br />
            This way, we control the entire response formation process, clearly understanding at what point the error occurred. Try to experiment. 

            <br /><br />
            <div className='title middle'><div className='tag'>@</div>map</div>
            <br />
            <div className='code-tag'>-&gt;map(callable $callback)</div> - transforms the result if successful (analogous to map)
            <br /><br />
            Usage example:
            <br />
            <CodeBlock code={MapExample01} language='php'/>
        </>
    );
}