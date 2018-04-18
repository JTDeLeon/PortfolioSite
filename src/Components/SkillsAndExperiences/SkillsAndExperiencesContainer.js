import React, { Component } from 'react';
import SkillsColumn from './SkillsColumn'
import '../../CSS/SkillsAndExperiencesContainer.css'
import resume from '../../JonathanResume.pdf'

class SkillsAndExperiencesContainer extends Component {
  render() {

    const developmentSkills =
    [
      'HTML5',
      'CSS',
      'Vanilla Javascript',
      'JSON',
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
        <h1 className="SectionTitle">Technical Skills</h1>
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
            category="Development Tools"
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
          <p id="exp-description"><strong>From business owner to developer, I have found my passion in web development!</strong> <br/><br/>I realize that the world is about 100% online, and building websites and web applications allow you to have the power to distribute information in the way that you want. I am naturally curious and have found myself genuinely intrigued by the nature of the JavaScript language and web development industry as a whole. The amount of changes and a 'living' community allow for consistent personal growth. <br/><br/>I am working to hone in on my skills in javascript and React development so that I can become a better developer and build more awesome web (& mobile) apps!</p>
        </div>

        {/* <button id="view-resume-btn" href={resume} download>View Resume</button> */}

        <form
          id="resume-btn-container"
          method="get"
          action={resume}
          target="_blank">
          <button
            id="view-resume-btn"
            type="submit">View Resume</button>
        </form>

      </div>
    );
  }
}

export default SkillsAndExperiencesContainer;
