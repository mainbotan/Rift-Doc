import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const EntrypointPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Entrypoint</div>
            <br />
            The entry point of your application. This is where the request object is initialized and sent to the router. <br />

        </>
    );
}