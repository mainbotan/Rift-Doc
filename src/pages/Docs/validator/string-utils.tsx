import { useParams, Link } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { StringUtilsMethodsExample } from './examples/string-utils-methods';
import { StringUtilsRequestExample } from './examples/string-utils-request';
import { StringUtilsAnswerExample } from './examples/string-utils-answer';
import { StringUtilsConnectExample } from './examples/string-utils-connect';
export const ValidatorStringUtilsPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>String Utils</div>
            <br />
            Use
            <CodeBlock code={StringUtilsConnectExample} language='php' />
            Available methods
            <CodeBlock code={StringUtilsMethodsExample} language='php'/>
            an example of your validation request
            <CodeBlock code={StringUtilsRequestExample} language='php'/>
            and examples of responses
            <CodeBlock code={StringUtilsAnswerExample} language='json' />
        </>
    );
}