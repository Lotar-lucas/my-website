
import React from 'react';
import Header from './components/header/Header';

import About from './components/about/About';
import PersonalIntroduction from './components/personalIntroduction/PersonalIntroduction';
import Projects from './components/projects/Projects';
import TechnicalSkillsAndDegree from './components/technicalSkillsAndDegree/TechnicalSkillsAndDegree';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-white scroll-smooth">
      <Header />
      <main className="">
        <PersonalIntroduction />
        <About />
        <Projects />
        <TechnicalSkillsAndDegree />
        <Contact />
      </main>
    </div>
  );
};

export default App;

