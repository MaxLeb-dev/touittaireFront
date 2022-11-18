import { useSelector } from 'react-redux'
import Touit from './touit'

function LastTouit() {
    const newTouit = useSelector((state) => state.touit.value)

   const touit = newTouit.map((data, i) => {
    return <Touit key={i} {...data}/>
    })
            
    return (
        <>
            {touit}
        </>
    )
}

export default LastTouit