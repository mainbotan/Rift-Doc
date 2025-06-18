import { useParams } from 'react-router-dom';

export const ContractEnsureMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>Ensure</div>
            <br />

        </>
    )
}