import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { ResponseDTOExample } from './examples/response-dto-1';

export const ArchitectureContractPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Response Contract</div>
            <br />
            Compliance with the contract in all layers of the application is the main principle of building an application using Rift. 
            You may find using custom exceptions much more convenient, and yes, in some cases they are really
            justified. But most of the time, exception handling adds a few extra lines of code and is simply ineffective.
            <br /><br />
            For this reason, the first thing we need to take on faith is the <div className='code-tag'>Response Contract</div>
            <br /> The main rule is that each layer, regardless
            of its content, must return a <div className='code-tag'>ResponseDTO</div>
            <br /><br />
            In Rift, it is an object with parameters: code, result, error, meta.
            <br /><br />
            <div className='code-tag'>code</div> - is the status of the response, it can be used to check for the success<br />
            <div className='code-tag'>result</div> - any layer response (object, null, number, string, boolean value, anything) is stored here<br />
            <div className='code-tag'>error</div> - error message if available.<br />
            <div className='code-tag'>meta</div> - all your additional wishlist (metrics, debug information...)
            <br /><br />
            <CodeBlock code={ResponseDTOExample} language='json'/>
            <br />
            <div className='title middle'><div className='tag'>#</div>Response Wrapper</div>
            <br />
            Очевидно, вы спросите как легко и просто использовать контракт и возвращать его на слой выше. 
            В Rift есть специальный класс-обёртка, который можно использовать наследуя через <div className='code-tag'>extends</div>. 
            <br /><br />
            Однако вы можете легко сделать свой класс-обёртку и наследоваться там где нужно от него. Меньше слов, перейдём к примеру простейшего валидатора, возвращающего <div className='code-tag'>ResponseDTO</div>

        </>
    );
}