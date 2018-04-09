import React, { Component } from 'react';
import HeaderContainer from './Header/HeaderContainer'
import SliderContainer from './Slider/SliderContainer'
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <HeaderContainer />
        <SliderContainer />
      </div>
    );
  }
}

export default App;
