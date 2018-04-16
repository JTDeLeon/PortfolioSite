import React, { Component } from 'react';
import '../../CSS/Logo.css'

class Logo extends Component {
  render() {
    return (
      <div className="App-logo">
        <div className="logo-item">
          <h3 id="full-name">Jonathan T Deleon</h3>
          <p id="occupation-title">Front End Web Developer</p>
        </div>
      </div>
    );
  }
}

export default Logo;
