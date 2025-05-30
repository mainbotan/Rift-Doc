import { useParams, Link } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import { IntUtilsMethodsExample } from './examples/int-utils-methods';
import { IntUtilsAnswerExample } from './examples/int-utils-answer';
import { IntUtilsRequestExample } from './examples/int-utils-request';
import { IntUtilsConnectExample } from './examples/int-utils-connect';

export const ValidatorIntUtilsPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Int Utils</div>
            <br />
            Use
            <CodeBlock code={IntUtilsConnectExample} language='php' />
            Available methods
            <CodeBlock code={IntUtilsMethodsExample} language='php'/>
            an example of your validation request
            <CodeBlock code={IntUtilsRequestExample} language='php'/>
            and examples of responses
            <CodeBlock code={IntUtilsAnswerExample} language='json' />
        </>
    );
}