import React, {useState, useEffect} from 'react'
import './LoadButton.css'


let arrayForHolding = []
const LoadButton = ({array, setArray, dataAmount, exchangesPerPage, newsCategory}) => {
    const [next, setNext] = useState(10)

  

    useEffect(() => {
        arrayForHolding = []
        setNext(10)
    },[newsCategory])

    useEffect(() => {
        loopWithSlice(0, exchangesPerPage);
      },[array]);


    const loopWithSlice = (start, end) => {
        const slicedExchanges = array.slice(start, end)
        arrayForHolding = [...arrayForHolding, ...slicedExchanges]  
        console.log('yoo, this is holded items', arrayForHolding)
        setArray(arrayForHolding)
    }

    const handeShowMoreExchanges = () => {
        loopWithSlice(next, next + exchangesPerPage)
        setNext(next + exchangesPerPage)
        console.log('yoo dudue, this is next value', next)
    }

   

    return (
        <>
            {(next === dataAmount || array.length <= next)? '' : 
                <div className='button-container'>
                    <button className='button' onClick={handeShowMoreExchanges}>Load More ↓</button>
                </div>
            }
        </>
    )
}

export default LoadButton
