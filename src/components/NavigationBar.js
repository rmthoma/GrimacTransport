import React from 'react'
import PropTypes from 'prop-types'
import './NavigationBar.scss'
import { IndexLink, Link } from 'react-router'
import Logo from '../assets/round_logo.png'

const style = {
  height: '50px'
}

const NavigationBar = ({props}) => {
  return (
    <nav className="menuStyle">
      <div className="nav-wrapper">
        {
        <img alt='Grimac Transport Logo' className='logo' src={Logo} />
        }
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
