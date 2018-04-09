import React, { Component } from 'react';
import SliderGreeting from './SliderGreeting'
import '../../CSS/SliderContainer.css'

class SliderContainer extends Component {
  render() {
    return (
      <div className="Slider-Container">
        <SliderGreeting />
      </div>
    );
  }
}

export default SliderContainer;
