import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Certifique-se de que o caminho está correto

import Header from './components/header/Header';
import About from './components/about/About';
import PersonalIntroduction from './components/personalIntroduction/PersonalIntroduction';
import Projects from './components/projects/Projects';
import TechnicalSkillsAndDegree from './components/technicalSkills/TechnicalSkills';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação em ms
      once: false,    // anima só na primeira vez que aparece
    });
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main className='scroll-smooth'>
        <PersonalIntroduction />
        <About />
        <Projects />
        <TechnicalSkillsAndDegree />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default App;
