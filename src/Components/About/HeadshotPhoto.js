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
      </div>
    );
  }
}

export default HeadshotPhoto;
