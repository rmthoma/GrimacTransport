import React from 'react'
import './HomeView.scss'
import PhotoCarousel from '../../components/PhotoCarousel';
import InfoCard from '../../components/InfoCard'

import Image from '../../assets/Logo.png'
import Image2 from '../../assets/Duck.jpg'

export const HomeView = () => (
  <div>
    <PhotoCarousel />
    <hr />
    <div className="cardArea">
      <InfoCard title="First Post" subtitle="post sub" image={Image} />
      <InfoCard title="Second Post" subtitle="post sub" image={Image2} overlayTitle="OVERLAY TITLE" />
      <InfoCard title="Third Post" subtitle="post sub" image={Image2} overlayTitle="OVERLAY TITLE" />
      <InfoCard title="Fourth Post" subtitle="post sub" image={Image} />      
    </div>
  </div>
)

export default HomeView
