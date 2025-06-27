import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const LogicLayerMainPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Logic Layer</div>
            <br />
                 
        </>
    );
}