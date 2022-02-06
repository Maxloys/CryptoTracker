import React, {useState, useEffect} from 'react'
import './LoadButton.css'


let arrayForHolding = []
const LoadButton = ({array, setArray, dataAmount, itemsPerPage, newsCategory}) => {
    const [next, setNext] = useState(10)

  

    useEffect(() => {
        arrayForHolding = []
        setNext(10)
    },[newsCategory])

    useEffect(() => {
        loopWithSlice(0, itemsPerPage);
      },[array]);


    const loopWithSlice = (start, end) => {
        const slicedItems = array.slice(start, end)
        arrayForHolding = [...arrayForHolding, ...slicedItems]  
        setArray(arrayForHolding)
    }

    const handleShowMoreItems = () => {
        loopWithSlice(next, next + itemsPerPage)
        setNext(next + itemsPerPage)
    }

   

    return (
        <>
            {(next === dataAmount || array.length <= next)? '' : 
                <div className='button-container'>
                    <button className='button' onClick={handleShowMoreItems}>Load More ↓</button>
                </div>
            }
        </>
    )
}

export default LoadButton
