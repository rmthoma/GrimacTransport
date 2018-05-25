import React, {Component} from 'react'
import './HomeView.scss'
import PhotoCarousel from '../../components/PhotoCarousel';
import InfoCard from '../../components/InfoCard'

import Image from '../../assets/truck1.jpg'
import Image2 from '../../assets/truck2.jpg'
import Image3 from '../../assets/truck3.jpg'
import Image4 from '../../assets/truck4.jpg'
import Image5 from '../../assets/truck5.jpg'

const sub = "Here you can write some information about the post. You are able to write anything you like and if it gets too long then the card will omit the text and the omission indicator (...) will be shown."
const post = "This is where the main text of the post goes."

class HomeView extends Component {
  render() {
    const {isMobile} = this.props

    //TODO Make this mobile compatible - use isMobile to assign different className

    return (
      <div>
        <div className="container">
          <PhotoCarousel />
        </div>
        <hr />
        {/* <div className="statement">
          A cool company statement goes here about the things we do.
        </div>
        <hr /> */}
        <div className="container cardArea">
          <InfoCard title="First Post" subtitle={sub} image={Image3} postText={post} />
          <InfoCard title="Second Post" subtitle={sub} image={Image2} postText={post} />
          <InfoCard title="Third Post" subtitle={sub} image={Image4} postText={post} />
          <InfoCard title="Fourth Post" subtitle={sub} image={Image5} postText={post} />
        </div>
      </div>
    )
  }
}

export default HomeView
