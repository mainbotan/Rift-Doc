import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const ArchitectureMainPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Architecture</div>
            <br />
                 
        </>
    );
}