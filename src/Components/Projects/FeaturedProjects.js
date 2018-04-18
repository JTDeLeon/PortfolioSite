import React, { Component } from 'react';
import Project from './Project'
import '../../CSS/FeaturedProjects.css'
import test from '../../img/png/002-twitter.png';
import test2 from '../../img/png/006-github-logo.png';

class FeaturedProjects extends Component {
  render() {


    return (
      <div className="featured-project-container">
        <Project
          title="Orlando Park Map"
          technology={["React", "Google Maps API", "FourSquare API"]}
          description="This is the description for my project. I rocked it and will get a job!"
          img={test}
        />

        <Project
          title="Orlando Park Map"
          technology={["React", "Google Maps API", "FourSquare API"]}
          description="This is the description for my project. I rocked it and will get a job!"
          img={test2}
        />

        <Project
          title="Orlando Park Map"
          technology={["React", "Google Maps API", "FourSquare API"]}
          description="This is the description for my project. I rocked it and will get a job!"
          img="#"
        />

      </div>
    );
  }
}

export default FeaturedProjects;
