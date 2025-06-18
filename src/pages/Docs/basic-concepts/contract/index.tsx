import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';
import { OperationOutcomeExample } from './examples/response-dto-1';
import { UseContractWrapperExample } from './examples/use-contract-wrapper';
import { UpperLavelGetContract } from './examples/upper-lavel-get-contract';
import { OperationCodes } from './examples/response-codes';

export const BasicConceptsContractPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Contract</div>
            <br />
            Compliance with the contract in all layers of the application is the main principle of building an application using Rift. 
            You may find using custom exceptions much more convenient, and yes, in some cases they are really
            justified. But most of the time, exception handling adds a few extra lines of code and is simply ineffective.
            <br /><br />
            For this reason, the first thing we need to take on faith is the <div className='code-tag'>Operation Contract</div>
            <br /> The main rule is that each layer, regardless
            of its content, must return a <div className='code-tag'>OperationOutcome</div>
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Why?</div>
            <br />
            If you've dealt with any php project, you're most likely used to exceptions as program execution interrupts in case of unexpected events. 
            Usually, a centralized function for handling all thrown exceptions is used in the application's bootstrap, which "eats" all error messages and converts them
            to the desired format. This approach is really convenient, especially since in controllers you can rely on the "ideal" case when all requests returned what they needed. 
            But even in this approach, there is one main disadvantage: you lose the clarity of executing the query chain. <br /><br />
            Rift suggests making errors and any meta information part of the return type, as implemented in Rust, Haskell, and other languages. <br /><br />
            This is not about changing syntaxis from <div className='code-tag'>try...catch</div> to <div className='code-tag'>if...else</div>. It's about implementing methods to create query chains
            by analogy with functional programming (<div className='code-tag'>then</div> <div className='code-tag'>map</div> <div className='code-tag'>catch</div>...)<br/><br />
            But first, let's look at the structure of the response contract.
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Structure</div>
            <br />
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