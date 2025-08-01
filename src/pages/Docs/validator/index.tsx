import { Link } from 'react-router-dom';
export const ValidatorPage = () => {
    return (
        <>
            <h2 id='validator'><div className='title'><div className='tag'>/</div>Rift Validator</div></h2>
            <br />
            So, you are interested in a simple and at the same time flexible validator that perfectly integrates with the <div className='code-tag'>Operation Contract</div>.
            Rift offers it to you. The main concept of the validation module (embedded in the core of the Rift) is to make it possible to validate anything that comes to the input of your application, whether it's nested arrays,
            prime numbers, strings, or something else, getting rid of raw exceptions and getting only a clear answer according to the contract.
            <br /><br />
            <div className='text contrast'>If you are not familiar with the concepts <div className='code-tag'>ResultType</div>, we strongly recommend that you return
            to <Link to='../basic-concepts/contract'>Basic Concepts/Contract</Link>.
            </div>
            <br />
            Rift Validator consists of a set of utilities broken down by type, for example <div className='code-tag'>StringUtils</div> or <div className='code-tag'>IntUtils</div> and a single <div className='code-tag'>SchemaValidator</div>, which combines the capabilities of all utilities and enables validation of nested schemas, enum fields, custom errors, and validation rules.     
        </>
    );
}