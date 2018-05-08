import React, { Component } from 'react';
import '../../CSS/Project.css';


class Project extends Component {
  render() {
    return (
      <div className="f-project">
        <h3 className="project-title">{this.props.title}</h3>
        <div className="project-image">
          <img
            className="p-image" src={this.props.img}
            alt={this.props.title}/>
        </div>
      <div className="project-desc-container">
        <div className="project-technology">
          <h4 className="tech-title">Technologies Used: </h4>
          <ul className="tech-list">
            {this.props.technology.map((tech)=>{
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
        </div>
          <div className="project-description">
            <h4 className="description-title">Description: </h4>
            <p className="description_project">{this.props.description}</p>
          </div>
        </div>
          <div className="btn-cont">
            {/* <button className="p-btn">View Live Project</button> */}
            <button className="p-btn-gh">
              <a
                className="p-btn-gh-link"
                href={this.props.linkToGH}
                target="_blank">View GitHub Repo</a></button>
          </div>
        </div>

    );
  }
}

export default Project;
