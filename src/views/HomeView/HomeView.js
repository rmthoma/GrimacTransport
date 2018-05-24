import React from 'react'
import './HomeView.scss'
import PhotoCarousel from '../../components/PhotoCarousel';
import InfoCard from '../../components/InfoCard'

import Image from '../../assets/Logo.png'
import Image2 from '../../assets/Duck.jpg'

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
      <InfoCard title="First Post" subtitle="post sub" image={Image} />
      <InfoCard title="Second Post" subtitle="post sub" image={Image2} overlayTitle="OVERLAY TITLE" />
      <InfoCard title="Third Post" subtitle="post sub" image={Image2} overlayTitle="OVERLAY TITLE" />
      <InfoCard title="Fourth Post" subtitle="post sub" image={Image} />      
    </div>
  </div>
)

export default HomeView
