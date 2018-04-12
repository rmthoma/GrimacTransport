import React from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

import facebookIcon from '../assets/facebook_icon.png'
import instagramIcon from '../assets/instagram_icon.png'

const Footer = ({props}) => {
    const imageSize = 48

  return (
    <div>
        <div className="footer">
            <div className='smIcons'>
                <a href="https://www.facebook.com"><img className='icon' src={facebookIcon} height={imageSize} width={imageSize} /></a>
                <a href="https://www.instagram.com"><img className='icon' src={instagramIcon} height={imageSize} width={imageSize} /></a>
            </div>
        </div>
        <div className='copyright'>
            &copy; Grimac Transport 2018
        </div>
    </div>
  )
}

export default Footer
