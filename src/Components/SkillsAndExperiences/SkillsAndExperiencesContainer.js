import React, { Component } from 'react';
import SkillsColumn from './SkillsColumn'
import '../../CSS/SkillsAndExperiencesContainer.css'

class SkillsAndExperiencesContainer extends Component {
  render() {

    const developmentSkills =
    [
      'HTML5',
      'CSS',
      'Vanilla Javascript',
      'JQuery'
    ];

    const javascriptFrameworkSkills =
    [
      'ES6',
      'Angular.js',
      'React.js'
    ];

    const developmentTools =
    [
      'Git',
      'NPM',
      'WebPack'
    ];

    return (
      <div className="Skills-Container">
        <h1 className="SectionTitle">Skills</h1>
        <div className="Column-Container">
          <SkillsColumn
            category="Development Skills"
            skill={developmentSkills}
          />
          <SkillsColumn
            category="Javascript Frameworks"
            skill={javascriptFrameworkSkills}
          />
          <SkillsColumn
            category="Developement Tools"
            skill={developmentTools}
          />
        </div>


        <div className="Experiences">
          <h1 className="SectionTitle">Experiences</h1>
          <ul id="experience-list">
            <li>Self-Taught Web Developer</li>
            <li>Analytical & Data Driven</li>
            <li>Curious and Determined</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, debet sanctus volutpat sed ne. Et has tractatos evertitur. Ei nam facer dissentias constituam, iudicabit accusamus disputationi vim at. Duo no novum quodsi mentitum. Est similique incorrupte et, erat vivendo noluisse nec an. Duo no novum quodsi mentitum. Est similique incorrupte et, erat vivendo noluisse nec an.Duo no novum quodsi mentitum. Est similique incorrupte et, erat vivendo noluisse nec an.Duo no novum quodsi mentitum. Est similique incorrupte et, erat vivendo noluisse nec an.</p>
        </div>

        <button id="view-resume-btn" href="#">View Resume</button>

      </div>
    );
  }
}

export default SkillsAndExperiencesContainer;
