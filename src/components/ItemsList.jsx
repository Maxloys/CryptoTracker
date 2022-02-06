import React, {useState, useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {useGetCryptosQuery} from '../services/cryptoAPI'    
import './ItemsList.css'
import { Loading } from '.' 

const ItemsList = ({simplified, setSimplified}) => {

    const [search, setSearch] = useState('')
    const {data, isFetching } = useGetCryptosQuery(simplified ? 12 : 100)
    const [cryptos, setCryptos] = useState([])
    
    useEffect(() => {
        const filteredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
        setCryptos(filteredData) 
    },[data,search])
   
    useEffect(() => {
        setSimplified(true) 
    }, [setSimplified])

    if(isFetching) return <Loading/>

    return (
       <>
            <div className='items-main'>
                {!simplified? <div className='search-header'>
                <input type="text" placeholder='Search...' className="items-search" onChange={(e) => setSearch(e.target.value)}/>
                </div> : ''}
                {(simplified && !search)? <h1>Top 10 cryptos in the world </h1> : ''}
        
                <div className="items-container" >
                    {cryptos?.map((currency, id) =>(
                        <div className="items" key={id}>
                            <Link to ={`/crypto/${currency.uuid}`} style={{textDecoration: "none"}}>
                                <div className="item-heading">
                                    <img src={currency.iconUrl} alt={currency.name} className="item-image" /> 
                                    <div  className="item-text">{`${currency.rank}. ${currency.name} `}</div>
                                </div>
                                <p>Price: {millify(currency.price)}$</p>
                                {/*
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Changes: {millify(currency.change)}%</p> */}
                            </Link>
                        </div>
                    ))}
                </div>
                {(simplified)? 
                    <div style={{display:'flex', justifyContent:'center'}}>
                <Link to="/cryptocurrencies" className='view-button' onClick={()=> setSimplified(!simplified)}>View More</Link></div> : ""}
            </div>
        </>
    )
}

export default ItemsList
