import React, { Component } from 'react';
import '../../CSS/SliderGreeting.css'

class SliderGreeting extends Component {
  render() {
    const zIndexing = {
      zIndex:10
    }
    return (

      <div className="Slider-Greeting">
        <h1 className="Greeting-Container">&nbsp;Hello, I am Jonathan and I love <span id="scroller">JavaScript.</span>
        </h1>
      </div>


      // <div className="Slider-Greeting">
      //   <h1 className="Greeting-Container">&nbsp;Hello, I am Jonathan and I love &nbsp;
      //     <br/>
      //     <span id="scroller">
      //       <span class="javascript" style={zIndexing}> JavaScript.</span>
      //       <span class="html" > HTML</span>
      //     </span>
      //   </h1>
      // </div>
    );
  }
}

export default SliderGreeting;
