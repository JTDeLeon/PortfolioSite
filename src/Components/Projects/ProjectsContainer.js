import React, { Component } from 'react';
import FeaturedProjects from './FeaturedProjects'
import '../../CSS/ProjectsContainer.css'

class ProjectsContainer extends Component {
  render() {
    return (
      <div className="section-Container">
        <h1 className="SectionTitle">Featured Projects</h1>
        <FeaturedProjects />
        <button id="view-projects-btn" href="#">View All Projects</button>
      </div>
    );
  }
}

export default ProjectsContainer;
