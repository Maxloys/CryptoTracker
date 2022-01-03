import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import millify from 'millify'
import './TopComponent.css'
import { Loading } from '.'
const TopComponent = () => {
    const {data, isFetching} = useGetCryptosQuery(12)
    const globalStats = data?.data?.stats
    if(isFetching) return <Loading/>
        return (
           
            <div className = "top-content">
                <div className="left-items">
                    <p className="top-parag">Cryptocurrencies: <span>{millify(globalStats.total)}</span></p>
                    <p className="top-parag">Markets: <span>{millify(globalStats.totalMarkets)}</span></p>
                </div>    
                <div className="middle-items">
                    <p className="top-parag">Market cap: <span>{millify(globalStats.totalMarketCap)}</span></p>
                    <p className="top-parag">Volume 24H: <span>{millify(globalStats.total24hVolume)} $</span></p>
                </div>   
                <div className="right-items">
                    <p className="top-parag">Exchanges: <span>{millify(globalStats.totalExchanges)}</span></p>
                </div>
            </div>
        
    )
}

export default TopComponent 
