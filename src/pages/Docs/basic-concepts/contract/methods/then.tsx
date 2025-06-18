import { useParams } from 'react-router-dom';

export const ContractThenMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>Then</div>
            <br />

        </>
    )
}