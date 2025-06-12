import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { OperationOutcomeExample } from './examples/response-dto-1';
import { UseContractWrapperExample } from './examples/use-contract-wrapper';
import { UpperLavelGetContract } from './examples/upper-lavel-get-contract';
import { OperationCodes } from './examples/response-codes';

export const BasicConceptsContractPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Operation Contract</div>
            <br />
            Compliance with the contract in all layers of the application is the main principle of building an application using Rift. 
            You may find using custom exceptions much more convenient, and yes, in some cases they are really
            justified. But most of the time, exception handling adds a few extra lines of code and is simply ineffective.
            <br /><br />
            For this reason, the first thing we need to take on faith is the <div className='code-tag'>Operation Contract</div>
            <br /> The main rule is that each layer, regardless
            of its content, must return a <div className='code-tag'>OperationOutcome</div>
            <br /><br />
            In Rift, it is an object with parameters: code, result, error, meta.
            <br /><br />
            <div className='code-tag'>code</div> - is the status of the response, it can be used to check for the success<br />
            <div className='code-tag'>result</div> - any layer response (object, null, number, string, boolean value, anything) is stored here<br />
            <div className='code-tag'>error</div> - error message if available.<br />
            <div className='code-tag'>meta</div> - all your additional wishlist (metrics, debug information...)
            <br /><br />
            <CodeBlock code={OperationOutcomeExample} language='json'/>
            <br />
            <div className='title middle'><div className='tag'>#</div>Operation Wrapper</div>
            <br />
            Obviously, you're asking how easy it is to use a contract and return it to a higher layer. 
            Rift has a special wrapper class that can be used by inheriting through <div className='code-tag'>extends</div>. 
            <br /><br />
            However, you can easily create your own wrapper class and inherit from it wherever needed. 
            In short, let's take an example of a layer in your application that returns <div className='code-tag'>OperationOutcome</div>
            <CodeBlock code={UseContractWrapperExample} language='php' />
            <br /><br />
            In all these cases, the layer returns a single <div className='code-tag'>Operation DTO</div>, ready for verification for a successful result and further logic.
            Here is a possible scenario for getting a response in the upper layer.
            <br /><br />
            <CodeBlock code={UpperLavelGetContract} language='php'/>
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Operation codes</div>
            <br />
            <div className='text'>
                We strongly recommend against using numeric HTTP codes directly in the code of each layer.  Use <div className='code-tag'>self::HTTP_</div> to specify the desired response status.
                This approach will save you from hemorrhoids in the future. The Rift provides a number of standard HTTP codes stored in the <div className='code-tag'>OperationTrait</div> in the Rift core.
            </div>
            <br />
            <CodeBlock code={OperationCodes} language='php'/>
        </>
    );
}