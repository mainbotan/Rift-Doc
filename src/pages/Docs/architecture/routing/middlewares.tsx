import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const RoutingRequestObjectPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Request Object</div>
            <br />
                 
        </>
    );
}