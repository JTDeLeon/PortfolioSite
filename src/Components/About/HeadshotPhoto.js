import React, { Component } from 'react';
import '../../CSS/HeadshotPhoto.css'
import hs_img from '../../img/headshot2_old.jpeg'

class HeadshotPhoto extends Component {

  handlePhoneClick = (e) => {
    e.preventDefault();
    console.log("HELLO")
    if(!document.querySelector('.phone-num')){
      const target = document.querySelector('.summary-links');

      let htmlToPass =
      '<p class="phone-num"><a href="tel:+18503328801">(850) 332- 8801</a></p>';


      target.insertAdjacentHTML('afterend',htmlToPass);

    }
  }

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
            From business owner to web developer, I have acquired the skills to bring a website from developing, marketing , and optimizing the website. I've Obtained web development skills through completing Udacity’s Front End Web Developer Nanodegree where through this program I developed 8 independent web applications that used Vanilla JS, React, and 3rd party APIs.
 <br/>
          </p>
          <ul className="summary-links">
            <li><a href="https://github.com/JTDeLeon/" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/jonathantdeleon/" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:JonathanTDeleon@gmail.com">Email</a></li>
            <li><a href="#" onClick={this.handlePhoneClick}>Phone</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeadshotPhoto;
