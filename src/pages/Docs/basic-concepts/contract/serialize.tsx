import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';
import { SerializeObjectExample01 } from './examples/01-serialize-object';
import { SerializeActionExample01 } from './examples/01-serialize-action';
import { SerializedObjectExample01 } from './examples/01-serialized-object';
import { SerializeActionExample02 } from './examples/02-serialize-action';
import { SerializedObjectExample02 } from './examples/02-seriaized-object';

export const ContractSerializePage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Serialize</div>
            <br />
            You already know that each operation that returns a response object is self-contained and independently describes its execution status, result, errors, and meta-information. 
            This allows you to easily serialize the response object in <div className='code-tag'>json</div> according to the scheme you need using the <div className='code-tag'>OperationOutcome</div> method <div className='code-tag'>-&gt;toJson()</div>
            <br /><br />
            Thus, after processing the incoming request and performing all the operations of your application at the exit point, you just need to convert the <div className='code-tag'>OperationOutcome</div> using a special method.
            <br /><br />
            <div className='title middle'><div className='tag'>-&gt;</div>toJson</div>    
            <br />
            <div className='code-tag'>-&gt;toJson(?callable $transformer, int $flags = JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE</div> - converts the response object to json.
            <br /><br />
            Let's say the logical part of your application returned such a <div className='code-tag'>OperationOutcome</div>:
            <br />
            <CodeBlock code={SerializeObjectExample01} language='php' />
            <br />
            Obviously, you will not be able to transfer the php object to the client in this form, you need to transform it into <div className='code-tag'>json</div>.
            <br /><br />
            Let's transform the response object according to the standard scheme without a custom handler:
            <br />
            <CodeBlock code={SerializeActionExample01} language='php' />
            And...the lord converts the object to a json:
            <br />
            <CodeBlock code={SerializedObjectExample01} language='json' />
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Custom serializer</div>
            <br />
            Now imagine that you need to convert an object to <div className='code-tag'>json</div>, but according to your custom scheme. 
            Let's play by your rules and give an example of a custom serializer:
            <br />
            <CodeBlock code={SerializeActionExample02} language='php' />
            We pass <div className='code-tag'>$outcome</div> to a custom serializer.
            <br /><br />
            And... it will work too:
            <CodeBlock code={SerializedObjectExample02} language='json' />
        </>
    );
}