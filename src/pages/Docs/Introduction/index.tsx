import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';

export const IntroductionPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>#</div>Introduction</div>
            <br />
            <div className='text'>
                Allow yourself to focus on the business logic of a particular tenant. Use Rift to isolate tenant schemes, create configuration repositories, lightning-fast initialization of new tenants, assign tariff plans, SLA support, and complete system diagnostics.
            </div>
            <br />
            <CodeBlock
                code='json'
                language='php'
            />
        </>
    );
}