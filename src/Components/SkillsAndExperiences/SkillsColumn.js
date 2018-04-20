import React, { Component } from 'react';
// import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsColumn extends Component {
  render() {
    return (
      <div className="Skills-Column">
        <h3>{this.props.category}</h3>
        <ul id={this.props.category}>
          {this.props.skill.map((skill)=>{
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SkillsColumn;
