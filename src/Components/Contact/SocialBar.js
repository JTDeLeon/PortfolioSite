import React, { Component } from 'react';
import twitter from '../../img/svg/002-twitter.svg'
import facebook from '../../img/svg/003-facebook.svg'
import linkedin from '../../img/svg/001-linkedin.svg'
import instagram from '../../img/svg/004-instagram-1.svg'
import github from '../../img/svg/006-github-logo.svg'
// import facebook from '../../img/png/002-twitter.png'
// import facebook from '../../img/png/002-twitter.png'
import '../../CSS/SocialBar.css';

class SocialBar extends Component {
  render() {
    return (
      <div className="social-container">
        <img src={twitter} width="50px" height="50px"/>
        <img src={facebook} width="50px" height="50px"/>
        <img src={linkedin} width="50px" height="50px"/>
        <img src={instagram} width="50px" height="50px"/>
        <img src={github} width="50px" height="50px"/>
      </div>
    );
  }
}

export default SocialBar;
