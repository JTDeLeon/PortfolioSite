import React, { Component } from 'react';
import '../../CSS/AboutDescription.css'

class AboutDescription extends Component {
  render() {
    return (
      <div className="description-container">
        <div>
          <h3>Interests</h3>
          <ul id="interest-list">
            <li>Coding</li>
            <li>Brazilian Jiu Jitsu</li>
            <li>Learning</li>
            <li>Spending Time With Family</li>
          </ul>
        </div>
        <hr/>
        <div className="abt-desc">
          <h3 className="abt-title">My Story In 4 Sentences</h3>
          <p>My whole life I have always had a fascination with anything technology and business. <br/><br/>After college I started and successfully operated a digital marketing agency where I learned and grew my skills through a variety of hands on learning techniques. <br/><br/>I wanted to learn from others and be mentored in furthering my analytical decision making, so I took a job doing web analytics; which then resulted in me learning the capabilities and "Awesomeness" of javascript and web development. <br/><br/>While completing the variety of projects needed to obtain my certificate from the Udacity Front-End Nanodegree program, I taught myself how to code.</p>
        </div>
        <hr/>
        <div className="abt-desc">
          <h3 className="abt-title">Goals & Ambitions</h3>
          <h4>Professional</h4><p>It is my goal to become an expert practitioner of website development. I want to be able to tackle any problem with ease. And with this newfound skill I want to build beatiful and unique online experiences that will bring value to users of web properties. I also strive to learn more about mobile development through REACT Native. <br/><br/>In my opinion, expanding ones thinking beyond developing in only one platform can lead to innovative ideas. <br/></p><h4>Personal</h4><p>I am also working towards obtaining my black belt in Brazilian Jiu Jitsu. Obtaining black belt takes dedication and consistency as it is a 10 year long journey. I have been training for about a year and will be obtaining my blue belt soon. <br/><br/>I find learning and self developement a deep interest of mine, and I see myself to be a life-long learner. </p>
        </div>

      </div>
    );
  }
}

export default AboutDescription;
