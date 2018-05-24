import React from 'react'
import PropTypes from 'prop-types'
import './NavigationBar.scss'
import { IndexLink, Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: '50px'
}

const labelStyle = {
  top: '6px'
}

//Labels only position correctly if button has a href. It's a Material UI bug.
const NavigationBar = ({props}) => {
  return (
    <div className="buttons">
      <FlatButton label="Home" href="/" style={style} labelStyle={labelStyle} />
      <FlatButton label="Counter" href="/counter" style={style} labelStyle={labelStyle} />
      <FlatButton label="About Us" href="#" style={style} labelStyle={labelStyle} />
      <FlatButton label="Contact" href="/contact" style={style} labelStyle={labelStyle} />
      <FlatButton label="Gallery" href="#" style={style} labelStyle={labelStyle} />
    </div>
  )
}


{/* <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}

export default NavigationBar
