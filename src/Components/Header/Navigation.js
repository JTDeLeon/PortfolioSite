import React, { Component } from 'react';
import '../../CSS/Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="navLinks">
          <li className="nav-Link"><a className="a-nav-link" href="#about-section">About Me</a></li>
          <li className="nav-Link"><a className="a-nav-link" href="#skills-section">Skills & Experience</a></li>
          <li className="nav-Link"><a className="a-nav-link" href="#project-section">Projects</a></li>
          {/* <li className="nav-Link"><a className="a-nav-link" href="#">Blog</a></li> */}
          <li className="nav-Link"><a className="a-nav-link" href="#contact-section">Contact Me</a></li>
        </ul>
      </nav>

    );
  }
}

export default Navigation;
