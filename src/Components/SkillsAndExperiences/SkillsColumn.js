import React, { Component } from 'react';
// import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsColumn extends Component {



  render() {
    const skillVar = this.props.skill;

    console.log("within bar style",skillVar);
// @TODO Fix This! 
    skillVar.map((obj)=>{
      console.log('within map function')
      console.log(obj.rating)
    })
    console.log("The Rating",skillVar);

    const barStyle = {
      width: `${this.props.skill.rating}%`,
      height: '10px',
      backgroundColor: 'green',
      zIndex: 1
    }

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
                <div className="filled-bar"
                  // @TODO make this dynamic
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
