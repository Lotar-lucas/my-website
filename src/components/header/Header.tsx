import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import Logo from './../../assets/logo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['sobre', 'projetos', 'habilidades', 'contato'];
      const scrollY = window.scrollY + 150;
      let matched = false;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(section);
            matched = true;
            break;
          }
        }
      }

      const atBottom = Math.abs(window.innerHeight + window.scrollY - document.body.scrollHeight) < 5;
      if (!matched && atBottom) {
        setActiveSection('contato');
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
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

  // Base de estilo comum para todos os links do menu
  const base = 'font-medium px-2 py-1 rounded-md transition-all duration-300 ease-in-out';

  // Define classes de acordo com o estado de scroll e se o item está ativo
  const scrollClasses = scrolled
    ? (
        isActive
          // Se a página foi rolada e o link é o ativo
          ? 'text-white bg-blue-600/20 underline underline-offset-8 decoration-white decoration-2'
          // Se a página foi rolada e o link NÃO é o ativo
          : 'text-white hover:text-blue-100 hover:bg-blue-600/10 hover:underline hover:underline-offset-8 hover:decoration-blue-100'
      )
    : (
        isActive
          // Se a página NÃO foi rolada e o link é o ativo
          ? 'text-white underline underline-offset-8 decoration-blue-100 decoration-2'
          // Se a página NÃO foi rolada e o link NÃO é o ativo
          : 'text-white hover:text-blue-200 hover:bg-blue-600/10 hover:underline hover:underline-offset-8 hover:decoration-blue-200'
      );

  // Retorna a combinação de estilos base + estilos condicionais
  return `${base} ${scrollClasses}`;
};



  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // scrolled
        // ? 'bg-gradient-to-r from-blue-950 to-blue-500 shadow-sm backdrop-blur-sm'
        // : 'bg-gradient-to-r from-blue-950 to-blue-500'
        scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-500 shadow-md' : 'bg-transparent'

      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"> */}
          {/* <FaCode className="text-white text-2xl" />
          <h1 className="text-2xl font-bold text-white">
            Lucas <span className="text-blue-300">Lotar</span>
          </h1>

          <img src={Logo} alt="Logo Lotar" className="h-10 w-auto" />
        </a> */}

        <a href="#" className="flex flex-col items-start gap-1 hover:opacity-80 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <FaCode className="text-white text-2xl" />
            <span className="text-2xl font-bold text-white">
              Lotar
            </span>
          </div>
          <span className="text-sm text-blue-200 tracking-wide">
            Desenvolvedor de Software
          </span>
        </a>

        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="#sobre" className={navLinkClass('sobre')}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" className={navLinkClass('projetos')}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#habilidades" className={navLinkClass('habilidades')}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contato" className={navLinkClass('contato')}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
