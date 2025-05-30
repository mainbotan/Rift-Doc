import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const DatabasesMainPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Databases</div>
            <br />
        </>
    );
}