import React, {useState} from 'react'
import { FaHome, FaMoneyCheck, FaExchangeAlt, FaLightbulb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
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
                    <NavLink to ="/" exact={true} className='navbar-link' activeClassName = 'navbar-active' > <FaHome style={{marginRight:"12px"}}/>Home</NavLink>
                    <NavLink to ="/cryptocurrencies" className="navbar-link" activeClassName = 'navbar-active'><FaMoneyCheck style={{marginRight:"12px"}}/> Cryptocurrencies</NavLink>
                    <NavLink to ="/exchanges" className="navbar-link" activeClassName = 'navbar-active'><FaExchangeAlt style={{marginRight:"12px"}}/> Exchanges</NavLink>
                    <NavLink to ="/news" className="navbar-link" activeClassName = 'navbar-active'><FaLightbulb style={{marginRight:"12px"}}/> News</NavLink>
                </div>
        </div>
    )
}

export default Navbar
