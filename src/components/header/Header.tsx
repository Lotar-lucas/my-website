import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ['sobre', 'projetos', 'habilidades', 'certificados'];
      const offset = 200;
      let current = '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          current = id;
          break;
        }
      }

      const bottom =
        Math.abs(window.innerHeight + window.scrollY - document.body.scrollHeight) < 5;
      setActiveSection(bottom ? 'contato' : current);
    };

    addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
    return () => { html.style.scrollBehavior = 'auto'; };
  }, []);

  const navLinkClass = (id: string) => {
    const base =
      'font-medium px-2 md:px-3 py-1 rounded-md transition-all duration-300 ease-in-out text-base md:text-lg';
    const on = activeSection === id;
    const variant = scrolled
      ? on
        ? 'text-white bg-blue-600/20 underline underline-offset-8 decoration-white decoration-2'
        : 'text-white hover:text-blue-100 hover:bg-blue-600/10 hover:underline hover:underline-offset-8 hover:decoration-blue-100'
      : on
        ? 'text-white underline underline-offset-8 decoration-blue-100 decoration-2'
        : 'text-white hover:text-blue-200 hover:bg-blue-600/10 hover:underline hover:underline-offset-8 hover:decoration-blue-200';

    return `${base} ${variant}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-500 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex flex-col items-start gap-1 transition-opacity hover:opacity-80">
          <div className="flex items-center gap-2">
            <FaCode className="text-2xl text-white" />

            <span className="text-2xl font-bold text-white">Lotar</span>
          </div>

          <span className="text-sm tracking-wide text-blue-200">Desenvolvedor de Software</span>
        </a>

        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="text-3xl text-white md:hidden focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 lg:space-x-10">
            <li><a href="#sobre"        className={navLinkClass('sobre')}>Sobre</a></li>
            <li><a href="#projetos"     className={navLinkClass('projetos')}>Projetos</a></li>
            <li><a href="#habilidades"  className={navLinkClass('habilidades')}>Habilidades</a></li>
            <li><a href="#certificados" className={navLinkClass('certificados')}>Certificados</a></li>
            <li><a href="#contato"      className={navLinkClass('contato')}>Contato</a></li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <nav
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-xs z-50 bg-blue-600 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-3xl text-white focus:outline-none"
          >
            <HiX />
          </button>
        </div>

        <ul className="mt-2 flex flex-col space-y-4 px-6">
          <li><a onClick={() => setMenuOpen(false)} href="#sobre"        className={navLinkClass('sobre')}>Sobre</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#projetos"     className={navLinkClass('projetos')}>Projetos</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#habilidades"  className={navLinkClass('habilidades')}>Habilidades</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#certificados" className={navLinkClass('certificados')}>Certificados</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#contato"      className={navLinkClass('contato')}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
