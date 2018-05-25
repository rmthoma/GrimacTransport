import React from 'react'
import './GalleryView.scss'
import PhotoGallery from '../../components/PhotoGallery'


export const GalleryView = () => (
  <div className='container'>
    <h3>Gallery</h3>
    <div>
      <PhotoGallery />
    </div>
  </div>
)

export default GalleryView
