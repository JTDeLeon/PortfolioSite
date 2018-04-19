import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import FeaturedProjects from './FeaturedProjects'
import '../../CSS/ProjectsContainer.css'

class ProjectsContainer extends Component {
  render() {
    return (
      <div className="section-Container">
        <ScrollableAnchor
          id="project-section" >
          <h1 className="SectionTitle">Featured Projects</h1>
          </ScrollableAnchor>
        <FeaturedProjects />
        <button id="view-projects-btn" href="https://github.com/JTDeLeon"><a
          className="btn-link"
          href="https://github.com/JTDeLeon"
          target="_blank">
        View All Projects</a></button>


      </div>
    );
  }
}

export default ProjectsContainer;
