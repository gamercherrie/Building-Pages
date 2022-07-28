import React from 'react'
import '../App.css'

import Logo from '../assets/logo.png';
import HamburgerMenu from '../assets/hamburger-menu.png';
const Navbar = ({ address }) => {
  return (
    <div className="navbar__container">
        <div className="navbar__container-inner">
            <div className="inner-hamburger">
                <img src={ HamburgerMenu } alt="selection" />
            </div>
            <div className="inner-logo">
                <img src={ Logo } alt="company logo" />
            </div>
            <div className="inner-address">
                <p>{address}</p> 
            </div>
        </div>
    </div>
  )
}

export default Navbar;