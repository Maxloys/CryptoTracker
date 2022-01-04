import React from 'react'
import './Home.css'
import image from '../images/homeimage.png'
const Home = () => {
    return (
        <>
            <div className='home-flex'>
                <div className='left-content'>
                    <div className='info-flex'>
                        <h1 className='info-header'>
                            Crypto Tracker Cryptoangle
                        </h1>
                        <p className='info-text'>
                            <span>Cryptoangle</span> is a type of app that shows real-time information on cryptocurrency prices,
                            exchanges platforms, news and more.
                        </p>
                    </div>
                </div>
                <div className='right-content'>
                    <div className='image-container'>
                        <img src={image} className='image' alt="" />
                    </div>
                </div>
           </div>
        </>
    )
}

export default Home
