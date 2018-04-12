import React from 'react'
import './ContactView.scss'

export const ContactView = () => (
  <div>
    <h1>Contact Us</h1>
    <div className='contactDetails'>
      Email: admin@grimactransport.com.au
      <br />
      Phone No: 04XX XXX XXX
      <br />
      <a href="mailto:admin@grimactransport.com.au" target="_top">Contact Us</a>
    </div>
  </div>
)

export default ContactView
