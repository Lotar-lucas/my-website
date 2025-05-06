
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import PersonalIntroduction from './components/PersonalIntroduction';
import Projects from './components/Projects';
import TechnicalSkillsAndDegree from './components/TechnicalSkillsAndDegree';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-white">
      <Header />
      <main className="container min-h-screen min-w-screen">
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

