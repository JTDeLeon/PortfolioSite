import React, { Component } from 'react';
// import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsColumn extends Component {
  render() {
    return (
      <div className="Skills-Column">
        <h3 className="Category-Header">{this.props.category}</h3>
        <div
          className="skill-category"
          id={this.props.category.split(' ').join('_')}>
          {this.props.skill.map((skill)=>{

            const barStyle = {
              width: `${skill.rating}%`,
              height: '10px',
              backgroundColor: 'green',
              zIndex: 1
            }

            return (
            <div className="skill-row-container">
              <div
                key={skill.skill}
                className="row-container">
                <span className="skill">{skill.skill}</span>
                <span className="skill-rating">{skill.rating}</span>
              </div>
              <div className="bar-line">
                <div className="filled-bar"
                  style={barStyle}></div>
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
