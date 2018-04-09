import React, { Component } from 'react';
import '../../CSS/SliderGreeting.css'

class SliderGreeting extends Component {
  render() {
    return (
      <div className="Slider-Greeting">
        <h1 className="Greeting-Container">Hello, I am Jonathan and I love
          {/* @TODO Add Scrolling Functionality Here */}
          <span id="scroller"> JavaScript.</span>
        </h1>
      </div>
    );
  }
}

export default SliderGreeting;
