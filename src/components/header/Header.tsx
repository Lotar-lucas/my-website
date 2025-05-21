import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-20 px-4 py-2 bg-slate-100">
        <h1 className="text-2xl font-bold text-blue-950 mx-26">Lucas Lotar</h1>

        <nav className="mx-26">
          <ul className="flex space-x-20">
            <li><a href="#sobre" className="text-blue-950">Sobre</a></li>

            <li><a href="#projetos" className="text-blue-950">Projetos</a></li>

            <li><a href="#contato" className="text-blue-950">Contato</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
