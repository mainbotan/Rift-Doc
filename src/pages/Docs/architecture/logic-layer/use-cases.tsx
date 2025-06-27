import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const LogicLayerUseCasesPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>UseCases</div>
            <br />
                 
        </>
    );
}