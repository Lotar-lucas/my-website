import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['sobre', 'projetos', 'habilidades', 'certificados'];
      let currentSection = '';
      const offset = 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= offset && rect.bottom > offset;

          if (isVisible) {
            currentSection = id;
            break;
          }
        }
      }

      const atBottom = Math.abs(window.innerHeight + window.scrollY - document.body.scrollHeight) < 5;

      if (atBottom) {
        setActiveSection('contato'); // only activate 'contato' at the very bottom
      } else if (currentSection) {
        setActiveSection(currentSection); // activates the others on scroll
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = 'auto';
    };
  }, []);

  const navLinkClass = (id: string) => {
    const isActive = activeSection === id;
    const base = 'font-medium px-2 py-1 rounded-md transition-all duration-300 ease-in-out';

    const scrollClasses = scrolled
      ? (
          isActive
            ? 'text-white bg-blue-600/20 underline underline-offset-8 decoration-white decoration-2'
            : 'text-white hover:text-blue-100 hover:bg-blue-600/10 hover:underline hover:underline-offset-8 hover:decoration-blue-100'
        )
      : (
          isActive
            ? 'text-white underline underline-offset-8 decoration-blue-100 decoration-2'
            : 'text-white hover:text-blue-200 hover:bg-blue-600/10 hover:underline hover:underline-offset-8 hover:decoration-blue-200'
        );

    return `${base} ${scrollClasses}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-500 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <a href="#" className="flex flex-col items-start gap-1 hover:opacity-80 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <FaCode className="text-white text-2xl" />

            <span className="text-2xl font-bold text-white">Lotar</span>
          </div>

          <span className="text-sm text-blue-200 tracking-wide">Desenvolvedor de Software</span>
        </a>

        <nav>
          <ul className="flex space-x-10">
            <li><a href="#sobre" className={navLinkClass('sobre')}>Sobre</a></li>
            <li><a href="#projetos" className={navLinkClass('projetos')}>Projetos</a></li>
            <li><a href="#habilidades" className={navLinkClass('habilidades')}>Habilidades</a></li>
            <li><a href="#certificados" className={navLinkClass('certificados')}>Certificados</a></li>
            <li><a href="#contato" className={navLinkClass('contato')}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;