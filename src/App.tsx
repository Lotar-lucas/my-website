
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;

