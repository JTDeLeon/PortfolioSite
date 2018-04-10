import React, { Component } from 'react';
import '../../CSS/Project.css'

class Project extends Component {
  render() {
    return (
      <div className="f-project">
        <h3 className="project-title">{this.props.title}</h3>
        <div className="project-image">
          <img src={this.props.img}/>
        </div>
        <div className="project-technology">
          <h4 className="tech-title">Technologies Used: </h4>
          <ul className="tech-list">
            {this.props.technology.map((tech)=>{
              return <li>{tech}</li>;
            })}
          </ul>
          <div className="project-description">
            <h4 className="tech-title">Description: </h4>
            <p>{this.props.description}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
