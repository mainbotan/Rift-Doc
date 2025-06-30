import { useParams } from 'react-router-dom';
import CodeBlock from '../../../../components/CodeBlock';

export const RoutingRequestObjectPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Request Object</div>
            <br />
            Итак, идея обработки запроса с помощью стандратизированного объекта появилась очень давно, когда-то в 2015 году вместе с принятием <div className='code-tag'>PSR-7</div>.
            Раньше при написании приложения разработчик должен был вручную получать заголовки, uri или тело запроса. <br />
            
        </>
    );
}