import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import SkillsColumn from './SkillsColumn'
import '../../CSS/SkillsAndExperiencesContainer.css'
import resume from '../../JonathanResume.pdf'

class SkillsAndExperiencesContainer extends Component {
  render() {

    const developmentSkills =
    [
      {skill: 'HTML5',rating:95},
      {skill: 'CSS', rating:85},
      {skill: 'Vanilla Javascript',rating:90},
      {skill: 'JSON',rating:80},
      {skill: 'JQuery',rating:50}
    ];

    const javascriptFrameworkSkills =
    [
      {skill:'ES6', rating:85},
      {skill:'React.js', rating:88},
      {skill:'Angular.js', rating:40}

    ];

    const developmentTools =
    [
      {skill:'Git', rating:90},
      {skill:'NPM', rating:75},
      {skill:'WebPack', rating:60}
    ];

    return (
      <div className="Skills-Container">
        <ScrollableAnchor
          id="skills-section" >
          <h1 className="SectionTitle">Technical Skills</h1>
        </ScrollableAnchor>
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
          <span id="skills-footer">Needless to say, I am learning and growing my skills every single day! <br/>You can follow my progress on <a href="https://twitter.com/JonTDeleon"
          target="_blank">twitter</a> for my <span className="emphasisWord">#100DaysOfCode</span> challenge. </span>
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
