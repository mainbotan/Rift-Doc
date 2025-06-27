import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';

export const DatabasesModelsKeysPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Keys</div>
            <br />
                 
        </>
    );
}