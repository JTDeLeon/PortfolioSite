import React, { Component } from 'react';
import HeaderContainer from './Header/HeaderContainer'
import SliderContainer from './Slider/SliderContainer'
import AboutMeContainer from './About/AboutMeContainer'
import SkillsAndExperiencesContainer from './SkillsAndExperiences/SkillsAndExperiencesContainer'
import ProjectsContainer from './Projects/ProjectsContainer'
import ContactContainer from './Contact/ContactContainer'
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <HeaderContainer />
        <SliderContainer />
        <AboutMeContainer />
        <SkillsAndExperiencesContainer />
        <ProjectsContainer />
        <ContactContainer />
      </div>
    );
  }
}

export default App;
