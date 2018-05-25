import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './PhotoCarousel.scss'
import Slider from "react-slick";

import truck1 from '../assets/truck1.jpg'
import truck2 from '../assets/truck2.jpg'
import truck3 from '../assets/truck3.jpg'
import truck4 from '../assets/truck4.jpg'
import truck5 from '../assets/truck5.jpg'

class PhotoCarousel extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            autoplaySpeed: 5000,
            touchMove: false,
            arrows: false
          };
          return (
            <Slider {...settings}>
              <div className='sliderImage'>
                <img alt='Grimac Truck' src={truck1} height="400" width="100%"/>
              </div>
              <div className='sliderImage'>
                <img alt='Grimac Truck' src={truck2} height="400" width="100%"/>
              </div>
              <div className='sliderImage'>
                <img alt='Grimac Truck' src={truck3} height="400" width="100%"/>
              </div>
              <div className='sliderImage'>
                <img alt='Grimac Truck' src={truck4} height="400" width="100%"/>
              </div>
              <div className='sliderImage'>
                <img alt='Grimac Truck' src={truck5} height="400" width="100%"/>
              </div>
            </Slider>
          );
    }
}

export default PhotoCarousel
