import React, { Component } from 'react';
import Logo from './Logo'
import Navigation from './Navigation'
import '../../CSS/HeaderContainer.css'

class HeaderContainer extends Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <Navigation />

      </header>
    );
  }
}

export default HeaderContainer;
