import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';

export const DatabasesModelsSchemaPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Schema</div>
            <br />
                 
        </>
    );
}