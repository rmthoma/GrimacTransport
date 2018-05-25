import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './PhotoGallery.scss'
import Slider from "react-slick";

import truck1 from '../assets/truck1.jpg'
import truck2 from '../assets/truck2.jpg'
import truck3 from '../assets/truck3.jpg'
import truck4 from '../assets/truck4.jpg'
import truck5 from '../assets/truck5.jpg'

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: truck1, width: 4, height: 3 },
  { src: truck2, width: 1, height: 1 },
  { src: truck3, width: 3, height: 4 },
  { src: truck4, width: 3, height: 2},
  { src: truck5, width: 3, height: 2}
];


class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default PhotoGallery
