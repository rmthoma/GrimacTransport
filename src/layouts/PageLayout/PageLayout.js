import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Navbar from '../../components/NavigationBar'
import Logo from '../../assets/round_logo.png'
import Footer from '../../components/Footer'
import MobileMenu from '../../components/MobileMenu'

class PageLayout extends Component {

  render() {
    const {children, checkIsMobile} = this.props
    var mobile = checkIsMobile()

    return (
      <div className='pageBody'>
        <div className='mobileHeader'>
          {
            mobile.payload ? <img alt='Grimac Transport Logo' src={Logo} /> : ""
          }
        </div>
        <div>
          {
            !mobile.payload ? <Navbar /> : <MobileMenu windowHeight={innerWidth} />
          }
        </div>
        <h5 className='subtext'>Local, Country and Interstate</h5>
        <div className='text-center'>
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
