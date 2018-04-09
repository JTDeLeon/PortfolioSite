import React, { Component } from 'react';
import '../../CSS/Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="navLinks">
          <li className="nav-Link"><a className="a-nav-link" href="#">About Me</a></li>
          <li className="nav-Link"><a className="a-nav-link" href="#">Projects</a></li>
          <li className="nav-Link"><a className="a-nav-link" href="#">Skills & Experience</a></li>
          <li className="nav-Link"><a className="a-nav-link" href="#">Blog</a></li>
          <li className="nav-Link"><a className="a-nav-link" href="#">Contact Me</a></li>
        </ul>
      </nav>

    );
  }
}

export default Navigation;
