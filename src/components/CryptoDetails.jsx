import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'
import { useGetCryptosDetailsQuery, useGetHistoryQuery } from '../services/cryptoAPI'
import { Line } from 'react-chartjs-2'
import './CryptoDetails.css'
import { Loading } from '.'

const CryptoDetails = () => {
const {coinId} = useParams()
const [days, setDays] = useState('24h')
const coinPrice = []
const coinTimeStamp = []
const {data, isFetching} = useGetCryptosDetailsQuery(coinId)
const { data: coinHistory } = useGetHistoryQuery({coinId, days})



if (isFetching) return <Loading/> 

const cryptoData = data?.data?.coin
const history = coinHistory

for (let item in history?.data?.history){
    coinPrice.push(history?.data?.history[item].price)
    coinTimeStamp.push(new Date(history?.data?.history[item].timestamp).toLocaleDateString())
}

const chartData = {
    labels: coinTimeStamp,
    datasets: [
        {
            label: "USD",
            data : coinPrice,
            fill: false,
            backgroundColor: '#28bdfb',
            borderColor: '#4664fb',
        }
    ]
}

const selectOptions = ['24h', '7d', '30d', '1y', '5y']

    return (
        <>
        <div className='details-main'>
        <div className="details-header">
            <h1>{cryptoData?.name}</h1>
            <img src={cryptoData?.iconUrl} alt={cryptoData?.name} style={{width:"100px", height:"100px", marginLeft:"20px"}} />
        </div>
        <div className="stats">
        <div className="left-stats">
            <h1>Value Statistics</h1>
            <p>
             Price: {millify(cryptoData?.price)}$
            </p>
            <p>
                Rank: {cryptoData?.rank}
            </p>
            <p>
                24H Volume: {millify(cryptoData?.volume)} $
            </p>
            <p>
                Market Cap: {millify(cryptoData?.marketCap)} $
            </p>
        </div>
        <div className="right-stats">
            <h1>Other Statistics</h1>
            <p>
                Number Of Markets : {cryptoData?.numberOfMarkets}
            </p>
            <p>
                Number Of Exchanges: {cryptoData?.numberOfExchanges}
            </p>
        </div>
        </div>
        <div className="details-info">
            <h1>What is {cryptoData?.name}</h1>
            <div>{HTMLReactParser(cryptoData?.description)}</div>
        </div>
        <select onChange={(e) => {
            e.preventDefault()
            setDays(e.target.value)
        }}>
        {selectOptions.map((day, id) =>  <option value={day} key={id}>{day}</option>)}
        </select>
        
       
        <Line data ={chartData} />
       
        </div>
        </>
    )
}

export default CryptoDetails
