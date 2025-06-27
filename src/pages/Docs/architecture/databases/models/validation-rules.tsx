import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';

export const DatabasesModelsValidationRulesPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Validation Rules</div>
            <br />
                 
        </>
    );
}