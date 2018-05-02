import React, { Component } from 'react';
// import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsColumn extends Component {



  render() {
//     const skillVar = this.props.skill;
//
//     console.log("within bar style",skillVar);
//     let tempVar;
//     let barStyle = {};
// // @TODO Fix This!
//     skillVar.filter((obj)=>{
//       console.log('within map function')
//       console.log(obj.rating)
//       tempVar = obj.rating;
//
//       barStyle = {
//         width: `${obj.rating}%`,
//         height: '10px',
//         backgroundColor: 'green',
//         zIndex: 1
//       }
//     })
//     console.log("The Rating",tempVar);


    // const barStyle = {
    //   width: `${this.props.skill[0].rating}%`,
    //   height: '10px',
    //   backgroundColor: 'green',
    //   zIndex: 1
    // }

    return (
      <div className="Skills-Column">
        <h3>{this.props.category}</h3>
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
