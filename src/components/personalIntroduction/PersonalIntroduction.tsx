import React from 'react';
import './PersonalIntroduction.css';

const PersonalIntroduction: React.FC = () => {
  return (
    <section id="sobre" className="min-h-screen flex flex-col justify-center items-start bg-gradient-to-r
        from-blue-900 to-blue-500"
     >
      <div className='max-w-6xl mx-auto px-6 '>
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-300 leading-tight text-shadow pb-4 pl-6 ">
          Criando soluções resilientes pensadas para durar
        </h1>

        <p className="text-base sm:text-lg text-write px-8 mt-4">
          +3 anos projetando e implementando sistemas escaláveis e confiáveis.
        </p>

        <a href="#projetos" className="mt-4 ml-8 inline-block bg-blue-500 hover:bg-blue-700 text-white
            font-semibold text-base sm:text-lg py-2 px-6 rounded shadow transition-colors duration-200">
          Ver Projetos
        </a>

      </div>
    </section>
  );
};

export default PersonalIntroduction;
