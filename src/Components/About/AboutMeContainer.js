import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import HeadshotPhoto from './HeadshotPhoto'
import AboutDescription from './AboutDescription'
import '../../CSS/AboutMeContainer.css'

class AboutMeContainer extends Component {
  render() {
    return (
      <div name="section1" className="AboutMe-Container">
        <ScrollableAnchor id="about-section">
          <h1 className="SectionTitle">A Little About Me...</h1>
        </ScrollableAnchor>
          <div className="About-Content">
            <HeadshotPhoto />
            <AboutDescription />
          </div>

      </div>
    );
  }
}

export default AboutMeContainer;
