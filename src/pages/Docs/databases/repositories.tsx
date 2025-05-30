import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const DatabasesRepositoriesPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Repositories</div>
            <br />
        </>
    );
}