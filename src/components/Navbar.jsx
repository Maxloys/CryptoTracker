import React from 'react'
import { FaHome, FaMoneyCheck, FaExchangeAlt, FaLightbulb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css'

import icon from '../images/logo.png'
const Navbar = () => {
   
    return (
        <div className="navbar-content">
            <div className="logo-box">
                <img className="logo" src={icon} alt="logo" />
                <h1 className="logo-header">cryptoangle</h1>
            </div>  
                <div className="navbar-links">
                    <Link to ="/" className="navbar-link" > <FaHome style={{marginRight:"12px"}}/> Home</Link>
                    <Link to ="/cryptocurrencies" className="navbar-link"><FaMoneyCheck style={{marginRight:"12px"}}/> Cryptocurrencies</Link>
                    <Link to ="/exchanges" className="navbar-link"><FaExchangeAlt style={{marginRight:"12px"}}/> Exchanges</Link>
                    <Link to ="/news" className="navbar-link"><FaLightbulb style={{marginRight:"12px"}}/> News</Link>
                </div>
        </div>
    )
}

export default Navbar
