import React from 'react'
import './ContactView.scss'
import Iframe from 'react-iframe'

export const ContactView = () => (
  <div>
    <h3>Contact Us</h3>
    <div className='row'>
      <div className='column'>
        <div className='contactDetails'>
          <b><h5>Contact Hours</h5></b>
          <br />
          <span>Monday-Friday: 9am to 5pm</span>
          <br />
          <span>Saturday: 10am-2pm</span>
          <br />
          <br />
          Email: admin@grimactransport.com.au
          <br />
            Phone No: (+61) 04XX XXX XXX
            <br />
            Fax No: XXXX XXXX
          <br />
          <br />
          <a href="mailto:admin@grimactransport.com.au" target="_top">Email us here!</a>
          <br />
          <span>admin@grimactransport.com.au</span>
        </div>
      </div>
      <div className='column'>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100931.41175764157!2d144.8833805183507!3d-37.764098179817026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d849149dcd3%3A0xd29cfb846b6669bf!2sLinfox!5e0!3m2!1sen!2sau!4v1527175171169"
          width="600px" height="450px" frameBorder="0" style="border:0" allowFullScreen></Iframe>
      </div>
    </div>
  </div>
)

export default ContactView
