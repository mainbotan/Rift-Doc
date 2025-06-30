import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const RoutingRoutesConfigPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Routes Configuration</div>
            <br />
        </>
    );
}