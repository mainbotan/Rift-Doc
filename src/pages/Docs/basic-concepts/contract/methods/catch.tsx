import { useParams } from 'react-router-dom';

export const ContractCatchMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>Catch</div>
            <br />

        </>
    )
}