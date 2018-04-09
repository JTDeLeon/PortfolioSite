import React, { Component } from 'react';
// import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsColumn extends Component {
  render() {
    return (
      <div className="Skills-Column">
        <h3>{this.props.category}</h3>
        <ul id={this.props.category}>
          {/* @TODO Figure out a way to make this dynamic based on the amount of items in the array */}
          <li>{this.props.skill[0]}</li>
          <li>{this.props.skill[1]}</li>
          <li>{this.props.skill[2]}</li>
        </ul>
      </div>
    );
  }
}

export default SkillsColumn;
