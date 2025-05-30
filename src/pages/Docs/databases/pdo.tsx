import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const DatabasesPDOPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>PDO Connection</div>
            <br />
        </>
    );
}