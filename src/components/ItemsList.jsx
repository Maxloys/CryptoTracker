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
        console.log(data)
        console.log("hi", filteredData) 
    },[data,search])
   
    useEffect(() => {
        setSimplified(true) 
    }, [])

    if(isFetching) return <Loading/>

    return (
       <>
       <div className='items-main'>
        {!simplified? <input type="search" placeholder="Search" className="items-search" onChange={(e) => setSearch(e.target.value)}/> : ''}
        {(simplified && !search)? <h1 >Top 10 cryptos in the world </h1> : ''}
        
        <div className="items-container" >
            {cryptos?.map(currency =>(
                <div className="items" key={currency.id}>
                    <Link to ={`/crypto/${currency.id}`} style={{textDecoration: "none", color:"black"}}>
                        <div className="item-heading">
                            <div  className="item-text" style={{fontSize:"24px", fontWeight:'bold'}}>{`${currency.rank}. ${currency.name} `}</div>
                                <img src={currency.iconUrl} alt={currency.name} className="item-image" />       
                        </div>
                        <hr />
                        <p>Price: {millify(currency.price)}</p>
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                        <p>Daily Changes: {millify(currency.change)}%</p>
                    </Link>
                </div>
             ))}
        </div>
        {(simplified)? 
        <div style={{display:'flex', justifyContent:'center', padding:'2rem'}}>
        <Link to="/cryptocurrencies" style={{
        display:'flex',
        width:'10rem',
        height:'2rem',
        border:'2px solid black',
        borderRadius:'6px',
        justifyContent:'center',
        alignItems:'center',
        textDecoration:'none',
        backgroundColor:'black',
        fontSize:'14px',
        fontWeight:'bold',
        color:'white',
    }} onClick={()=> setSimplified(!simplified)}>View More</Link></div> : ""}
        </div>
        </>
    )
}

export default ItemsList
