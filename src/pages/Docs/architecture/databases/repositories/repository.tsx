import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';

export const DatabasesRepositoriesRepositoryPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Repository</div>
            <br />
                 
        </>
    );
}