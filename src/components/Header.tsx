import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#sobre" className="hover:text-gray-300">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-gray-300">Projetos</a></li>
            <li><a href="#contato" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
