import { MermaidViewer } from '../../../../../components/Mermaid';
import { ContractProcessingMermaExample01 } from '../examples/01-contract-processing-merma';

export const BasicConceptsContractMethodsPage = () => {
    return (
        <>
            <h2 id='methods'><div className='title'><div className='tag'>/</div>Contract's Methods</div></h2>
            <br />
            So, having got acquainted with the <div className='code-tag'>OperationOutcome</div> object and ways to initialize it, let's look at methods for creating logical chains based on it. 
            <br /><br />
            Everything is simple and logical here, and by understanding how each method works, you can create complex logical chains with your eyes closed. 
            <br /><br />
            Rift is inspired by a functional programming approach, so
            if you've ever dealt with JS promises, for example, it will be easier for you.
            <br /><br />
            <div className='title middle'><div className='tag'>#</div>Chain processing</div><br />
            Most of the methods <div className='code-tag'>OperationOutcome</div> depend on the result of checking the object for success/failure using the basic method <div className='code-tag'>isSuccess</div>.
            Before examining each method separately, let's look at the possible processing of the chain using the response object.
            <MermaidViewer definition={ContractProcessingMermaExample01}  />
        </>
    );
}