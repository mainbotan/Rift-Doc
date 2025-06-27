import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const DatabasesConnectionPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Connection</div>
            <br />
                 
        </>
    );
}