import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';

export const DatabasesRepositoriesMainPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Repositories</div>
            <br />
                 
        </>
    );
}