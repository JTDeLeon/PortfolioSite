import React, { Component } from 'react';
// import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsColumn extends Component {
  render() {
    return (
      <div className="Skills-Column">
        <h3>{this.props.category}</h3>
        <div
          className="skill-category"
          id={this.props.category.split(' ').join('_')}>
          {this.props.skill.map((skill)=>{
            return (
            <div className="skill-row-container">
              <div
                key={skill.skill}
                className="row-container">
                <span className="skill">{skill.skill}</span>
                <span className="skill-rating">{skill.rating}</span>
              </div>
              <div className="bar-line">
                
              </div>
            </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SkillsColumn;
