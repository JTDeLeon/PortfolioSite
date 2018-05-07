import React, { Component } from 'react';
import '../../CSS/HeadshotPhoto.css'
import hs_img from '../../img/headshot2_old.jpeg'

class HeadshotPhoto extends Component {
  render() {
    return (
      <div className="headshot-container">
        <div className="headshot-photo">
          <img className="headshot_photo_img" src={hs_img}
          alt="headshot"/>
        </div>
        <div className="headshot-description">
          <h2 className="name">Jonathan Deleon</h2>
          <h4 className="city">Orlando, FL</h4>

          <p className="summary">
            From business owner to web developer, I have acquired the skills to bring a website from developing, marketing , and optimizing the website.  <br/>
          </p>
          <ul className="summary-links">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeadshotPhoto;
