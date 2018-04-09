import React, { Component } from 'react';
import HeadshotPhoto from './HeadshotPhoto'
import AboutDescription from './AboutDescription'
import '../../CSS/AboutMeContainer.css'

class AboutMeContainer extends Component {
  render() {
    return (
      <div className="AboutMe-Container">
        <h1 id="About-Title">About Jonathan</h1>
        <div className="About-Content">
          <HeadshotPhoto />
          <AboutDescription />
        </div>
      </div>
    );
  }
}

export default AboutMeContainer;
