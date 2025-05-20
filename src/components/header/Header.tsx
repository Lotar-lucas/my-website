import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-20 px-4 py-2 bg-slate-100">
        <h1 className="text-2xl font-bold text-blue-800 mx-26">Lucas Lotar</h1>

        <nav className="mx-26">
          <ul className="flex space-x-20">
            <li><a href="#sobre" className="hover:text-gray-300">Sobre</a></li>

            <li><a href="#projetos" className="hover:text-gray-300">Projetos</a></li>

            <li><a href="#contato" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
