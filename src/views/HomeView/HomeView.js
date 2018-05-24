import React from 'react'
import './HomeView.scss'
import PhotoCarousel from '../../components/PhotoCarousel';
import InfoCard from '../../components/InfoCard'

import Image from '../../assets/truck1.jpg'
import Image2 from '../../assets/truck2.jpg'

const sub = "Here you can write some information about the post. You are able to write anything you like and if it gets too long then the card will omit the text and the omission indicator (...) will be shown."
const post = "This is where the main text of the post goes."

export const HomeView = () => (
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
      <InfoCard title="First Post" subtitle={sub} image={Image} postText={post} />
      <InfoCard title="Second Post" subtitle={sub} image={Image2} postText={post} />
      <InfoCard title="Third Post" subtitle={sub} image={Image2} postText={post} />
      <InfoCard title="Fourth Post" subtitle={sub} image={Image} postText={post} />
    </div>
  </div>
)

export default HomeView
