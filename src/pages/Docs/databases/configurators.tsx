import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const DatabasesConfiguratorsPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Configurators</div>
            <br />
        </>
    );
}