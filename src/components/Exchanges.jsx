import React, {useState, useEffect} from 'react'
import { useGetExchangesQuery } from '../services/cryptoAPI'
import { Accordion } from '.'
import './Exchanges.css'
import { Loading, LoadButton } from '.'


const dataAmount = 100

const Exchanges = () => {
    const [exchangesToShow, setExchangesToShow] = useState([])
    const {data, isFetching} = useGetExchangesQuery(dataAmount)
    const [marketsData, setMarketsData] = useState([])

    useEffect(() => {
        if(isFetching) return <Loading/>  
        setMarketsData(data?.data?.exchanges)
    },[data, isFetching])

   
    
    if(isFetching) return <Loading/>

    return (
        <>
        <div className='exchanges-container'>
            {exchangesToShow.map((market, id) =>  
                <Accordion title={market.name} iconUrl={market.iconUrl} content ={market.description == null? 'No info' : market.description} key={id}/>)}
            <LoadButton array = {marketsData} setArray={setExchangesToShow} dataAmount = {dataAmount} exchangesPerPage={10} />
        </div>
        </>
    )
}

export default Exchanges
