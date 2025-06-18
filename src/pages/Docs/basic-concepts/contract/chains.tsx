import { useParams } from 'react-router-dom';

export const BasicConceptsUseContractPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>/</div>Use Operation Outcome</div>

        </>
    );
}