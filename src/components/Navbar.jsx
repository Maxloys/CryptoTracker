import React, {useState, useRef, useEffect} from 'react'
import { FaHome, FaMoneyCheck, FaExchangeAlt, FaLightbulb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import icon from '../images/logo.png'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaTimes} from "react-icons/fa"

const Navbar = () => {
    const[burger, setBurger] = useState(false)
    const [clicked, setClicked] = useState(false)

    /*Custom hook to handle click outside*/
    const useClickOutside = (handler) => {
        let domNode = useRef()
        useEffect(()=> {    
            let outsideHandler = (e) => {
                if(!domNode.current.contains(e.target)){
                    console.log('something went ok?')
                    handler()
                }
            }

            document.addEventListener("mousedown", outsideHandler)

            return () => {
                document.removeEventListener("mousedown", outsideHandler)
            }
        })
        return domNode
    }


    const showBurger = () => {

        if(window.innerWidth <= 1180){
            setBurger(true)
        }
        else{
        setBurger(false)
    }
    
    }

    ['resize','load'].forEach(event => {
        window.addEventListener(event, showBurger, false)

        document.removeEventListener(event, showBurger, false)
    });

    let domNode = useClickOutside(() => setClicked(false))

    return (
        <>
        {burger && <GiHamburgerMenu className='navbar-hamburger' onClick={() => setClicked(!clicked)}/>}
        {   <div ref={domNode} className={ clicked? 'navbar-content-active' :'navbar-content'} >
        {burger && <div className='close-button-flex'><FaTimes className='close-button' onClick={() => setClicked(!clicked)}/> </div>}
            <div className="logo-box">
                <img className="logo" src={icon} alt="logo" />
                <h1 className="logo-header">cryptoangle</h1>
            </div>
                  
            
               
                <div className="navbar-links" >
                    <NavLink to ="/" exact={true} className='navbar-link' activeClassName = 'navbar-active'  > <FaHome style={{marginRight:"12px"}}/>Home</NavLink>
                    <NavLink to ="/cryptocurrencies" className="navbar-link" activeClassName = 'navbar-active'><FaMoneyCheck style={{marginRight:"12px"}}/> Cryptocurrencies</NavLink>
                    <NavLink to ="/exchanges" className="navbar-link" activeClassName = 'navbar-active'><FaExchangeAlt style={{marginRight:"12px"}}/> Exchanges</NavLink>
                    <NavLink to ="/news" className="navbar-link" activeClassName = 'navbar-active'><FaLightbulb style={{marginRight:"12px"}}/> News</NavLink>
                </div>
        </div>}
        </>
    )
}

export default Navbar
