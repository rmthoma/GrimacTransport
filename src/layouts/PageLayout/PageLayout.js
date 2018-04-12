import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Navbar from '../../components/NavigationBar'
import Logo from '../../assets/Logo.png'
import Footer from '../../components/Footer'
import MobileMenu from '../../components/MobileMenu'

class PageLayout extends Component {

  render() {
    const {children} = this.props
    let mobile = ""

    if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent))
      mobile = true
    else
      mobile = false
    
    return (
      <div className='pageBody'>
        <div>
          <img alt='Grimac Transport Logo' className='logo' src={Logo} />
        </div>
        <div>
          {
            !mobile ? <Navbar /> : <MobileMenu windowHeight={innerWidth} />
            // <MobileMenu />
          }
        </div>
        <h4 className='subtext'>Local, Country and Interstate</h4>    
        <div className='container text-center'>
          <div className='page-layout__viewport'>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
