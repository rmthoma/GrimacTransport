import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './MobileMenu.scss'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

const iconStyles = {
    padding: 9,
    fontSize: 32
}

var windowWidth = (window.innerWidth*0.8)

class MobileMenu extends Component {

    state = {
        openMenu: false,
    };

    handleOnRequestChange = (value) => {
        this.setState({
            openMenu: value,
        });
    }

    render() {

      return (
        <div className="buttonContainer">
          {
          <IconMenu
              iconButtonElement={<IconButton><RaisedButton  onClick={this.handleOpenMenu} label={<FontIcon className="material-icons" style={iconStyles}>menu</FontIcon>} fullWidth={true} /></IconButton>}
              open={this.state.openMenu}
              onRequestChange={this.handleOnRequestChange}
              menuStyle={{width: windowWidth}}
              anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          >
          <MenuItem value="1" primaryText="Home" href="/" />
          <MenuItem value="2" primaryText="About Us" />
          <MenuItem value="3" primaryText="Contact" href="/contact" />
          <MenuItem value="4" primaryText="Gallery" />
          </IconMenu>
          }

          {
            // <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
            //
            // <ul id='dropdown1' class='dropdown-content'>
            //   <li><a href="/">Home</a></li>
            //   <li><a href="/aboutus">About Us</a></li>
            //   <li><a href="/contact">Contact</a></li>
            //   <li><a href="/gallery">Gallery</a></li>
            // </ul>
          }
        </div>
      )
    }
}

export default MobileMenu
