import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const LogicLayerDIPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>DI</div>
            <br />
                 
        </>
    );
}