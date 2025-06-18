import { useParams } from 'react-router-dom';

export const ContractMergeMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>Merge</div>
            <br />

        </>
    )
}