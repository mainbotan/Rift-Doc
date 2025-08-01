import CodeBlock from '../../../../components/CodeBlock';
import { ResultTypeExample } from './examples/response-dto-1';
import { UseContractWrapperExample } from './examples/use-contract-wrapper';
import { OperationCodes } from './examples/response-codes';
import { MermaidViewer } from '../../../../components/Mermaid';
import { ContractMermaExample01 } from './examples/01-contract-merma';

export const BasicConceptsContractPage = () => {
    return (
        <>
            <h2 id='contract'><div className='title'><div className='tag'>/</div>Contract</div></h2>
            <br />
            Compliance with the contract in all layers of the application is the main principle of building an application using Rift. 
            You may find using custom exceptions much more convenient, and yes, in some cases they are really
            justified. But most of the time, exception handling adds a few extra lines of code and is simply ineffective.
            <br /><br />
            For this reason, the first thing we need to take on faith is the <div className='code-tag'>Operation Contract</div>
            <br /> The main rule is that each layer, regardless
            of its content, must return a <div className='code-tag'>ResultType</div>
            <br /><br />
            <h2 id='why'><div className='title middle'><div className='tag'>#</div>Why?</div></h2>
            <br />
            If you've dealt with any php project, you're most likely used to exceptions as program execution interrupts in case of unexpected events. 
            Usually, a centralized function for handling all thrown exceptions is used in the application's bootstrap, which "eats" all error messages and converts them
            to the desired format. This approach is really convenient, especially since in controllers you can rely on the "ideal" case when all requests returned what they needed. 
            But even in this approach, there is one main disadvantage: you lose the clarity of executing the query chain. <br /><br />
            Rift suggests making errors and any meta information part of the return type, akin to Result in Rust or Either in Haskell, and other languages. <br /><br />
            This is not about changing syntaxis from <div className='code-tag'>try...catch</div> to <div className='code-tag'>if...else</div>. It's about implementing methods to create query chains
            by analogy with functional programming (<div className='code-tag'>then</div> <div className='code-tag'>map</div> <div className='code-tag'>catch</div>...)<br/><br />
            But first, let's look at the structure of the response contract.
            <br /><br />
            <h2 id='result-type'><div className='title middle'><div className='tag'>#</div>ResultType</div></h2>
            <br />
            In Rift, it is an object with parameters: code, result, error, meta.
            <br /><br />
            <div className='code-tag'>status</div> - true / false - success and failure of the completed operation<br />
            <div className='code-tag'>code</div> - is the http code of the response<br />
            <div className='code-tag'>result</div> - any layer response (object, null, number, string, boolean value, anything) is stored here<br />
            <div className='code-tag'>error</div> - error message if available.<br />
            <div className='code-tag'>meta</div> - all your additional wishlist (metrics, debug information...)
            <br /><br />
            The structure of the response object. All methods will be discussed later:
            <MermaidViewer definition={ContractMermaExample01} initialMode='code'/>
            Possible type of response object:
            <CodeBlock code={ResultTypeExample} language='json'/>
            <br />
            <h2 id='result-wrapper'><div className='title middle'><div className='tag'>#</div>Result Wrapper</div></h2>
            <br />
            Obviously, you're asking how easy it is to use a contract and return it to a higher layer. 
            Rift has a special wrapper class that can be used by inheriting through <div className='code-tag'>extends</div>. 
            <br /><br />
            However, you can easily create your own wrapper class and inherit from it wherever needed. 
            In short, let's take an example of a layer in your application that returns <div className='code-tag'>ResultType</div>
            <CodeBlock code={UseContractWrapperExample} language='php' />
            <br />
            In all these cases, the layer returns a single <div className='code-tag'>ResultType</div>, ready for verification for a successful result and further logic.
            <br /><br />
            <h2 id='success-failure'><div className='title middle'><div className='tag'>#</div>Success / Failure</div></h2>
            <br />
            <div className='code-tag'>ResulType</div> does not have an undefined state. When it is initialized, you are required to set the <div className='code-tag'>status</div>, using the methods 
            <div className='code-tag'>Result::Success</div> or <div className='code-tag'>Result::Failure</div>.
            Further processing using the <div className='code-tag'>then</div>, <div className='code-tag'>map</div>, <div className='code-tag'>catch</div>, and other methods refers to the status of the parent <div className='code-tag'>ResultType</div>.
            <br /><br />
            <h2 id='http-codes'><div className='title middle'><div className='tag'>#</div>ResultType & HTTP codes</div></h2>
            <br />
            <div className='text'>
                We strongly recommend against using numeric HTTP codes directly in the code of each layer.  Use <div className='code-tag'>Result::HTTP_</div> to specify the desired response status.
                This approach will save you from hemorrhoids in the future. The Rift provides a number of standard HTTP codes stored in the <div className='code-tag'>OperationTrait</div> in the Rift core.
            </div>
            <br />
            <CodeBlock code={OperationCodes} language='php'/>
        </>
    );
}