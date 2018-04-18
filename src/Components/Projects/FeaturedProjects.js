import React, { Component } from 'react';
import Project from './Project'
import '../../CSS/FeaturedProjects.css'
import parkMapImg from '../../img/ParkMap.png';
import myReadsAppImg from '../../img/myReadsApp.png';
import memoryGameImg from '../../img/memorymatchgame.png'

class FeaturedProjects extends Component {
  render() {


    return (
      <div className="featured-project-container">
        <Project
          title="Orlando Park Map"
          technology={["React", "Google Maps API", "FourSquare API"]}
          description="This web app allows the user to view and filter local parks around the Orlando, FL area."
          img={parkMapImg}
        />

        <Project
          title="My Reading Bookshelf"
          technology={["React", "Google Books API", "JSON"]}
          description="This web app allows the user to search books and categorize books on a virtual bookshelf."
          img={myReadsAppImg}
        />

        <Project
          title="Memory Matching Game"
          technology={["Vanilla JavaScript"]}
          description="This project helped take my skills in JavaScript to the next level. This is built in pure vanilla JS and is a memory matching game for a user to enjoy."
          img={memoryGameImg}
          linkToLive="https://jtdeleon.github.io/MemoryMatchingGame/"
          linkToGH="https://github.com/JTDeLeon/MemoryMatchingGame"
        />

      </div>
    );
  }
}

export default FeaturedProjects;
