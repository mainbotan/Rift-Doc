import { useParams } from 'react-router-dom';

export const ContractMapMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>Map</div>
            <br />

        </>
    )
}