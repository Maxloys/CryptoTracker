import React, {useState, useEffect} from 'react'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi'
import moment from 'moment'
import './News.css'
import { Loading, LoadButton } from '.'

const exchangesPerPage = 10
const dataAmount = 100

const News = ({simplified, setSimplified}) => {
    const {data :fetchedData} = useGetCryptosQuery(100)
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const {data, isFetching } = useGetCryptoNewsQuery({newsCategory , count : dataAmount })
    const [cryptoNews, setCryptoNews] = useState([])
    const [cryptoNewsToShow, setCryptoNewsToShow] = useState([])
    const selectList = ['Cryptocurrency']

    for (let i=0; i< fetchedData?.data?.coins.length; i+=1){
        selectList.push(fetchedData?.data?.coins[i].name)
    }

    useEffect(() => {
        setCryptoNews([])
    },[newsCategory])

    useEffect(() => {
        if(isFetching) return <Loading/>
        setCryptoNews(data?.value)
    }, [data, isFetching])
   
    if(isFetching) return <Loading/>
  
    
    return (
        <>
        <div className='news-main'>
        {(simplified)? <h1 >Cryptos News </h1> : ''}    
        <select value={newsCategory} onChange={(e) => {
            e.preventDefault()
            setSimplified(false)
            setNewsCategory(e.target.value)}}
        >
            {selectList.map((coin, id) =>  <option value={coin} key={id}>{coin}</option>)}
        </select>
       
        
       {cryptoNews.length !== 0? <div className="news-container"> 
            {cryptoNewsToShow.map((news, i) =>(
                <div className="news-item" key={i}>
                    <div className="news-header">
                        <h1 className="news-heading">{news.name}</h1>
                        <img src={news?.image?.thumbnail?.contentUrl}  className='news-image' alt="img" />
                    </div>
                    <p className="news-article">           
                        {(news.description.length> 100)? <a href={news?.url} target="_blank" style={{ color:"black ", }} rel="noreferrer">{news.description.substring(0,100)}...</a> : news.description}
                    </p>
                    <div className="news-footer">
                        <img src={news.provider[0].image?.thumbnail?.contentUrl} style={{width: "30px", height: "30px"}} alt='blank' />
                        <p className="news-postdate">{moment(news.datePublished).fromNow()}</p>
                    </div>
                </div>
        ))}
            

        </div> 
        : <h1>No Data</h1> }
        <LoadButton array = {cryptoNews} setArray={setCryptoNewsToShow} dataAmount = {dataAmount} exchangesPerPage={exchangesPerPage} newsCategory = {newsCategory}  />
        </div>
        </>
    )
}

export default News
