import { useParams } from 'react-router-dom';

export const ContractTapMethodPage = () => {
    const { version } = useParams();
    return (
        <>
            <div className='title'><div className='tag'>@</div>Tap</div>
            <br />

        </>
    )
}