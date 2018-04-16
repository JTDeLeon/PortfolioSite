import React, { Component } from 'react';
import twitter from '../../img/svg/002-twitter.svg'
import facebook from '../../img/svg/003-facebook.svg'
import linkedin from '../../img/svg/001-linkedin.svg'
import instagram from '../../img/svg/004-instagram-1.svg'
import github from '../../img/svg/006-github-logo.svg'
import '../../CSS/SocialBar.css';

class SocialBar extends Component {
  render() {
    return (
      <div className="social-container">
        <h3 className="social-title">Connect With Me On Social: </h3>
        <div className="icons-container">
          <img className="social-icon" src={twitter} width="50px" height="50px" alt="Twitter"/>
          <img className="social-icon" src={facebook} width="50px" height="50px" alt="Facebook"/>
          <img className="social-icon" src={linkedin} width="50px" height="50px" alt="LinkedIn"/>
          <img className="social-icon" src={instagram} width="50px" height="50px" alt="Instagram"/>
          <img className="social-icon" src={github} width="50px" height="50px" alt="GitHub"/>
        </div>
        <h4 id="social-handle">@JonTDeleon</h4>
      </div>
    );
  }
}

export default SocialBar;
