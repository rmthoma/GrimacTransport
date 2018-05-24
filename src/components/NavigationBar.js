import React from 'react'
import PropTypes from 'prop-types'
import './NavigationBar.scss'
import { IndexLink, Link } from 'react-router'
import Logo from '../assets/Logo.png'

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
          <li><a href="/counter">Counter</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
