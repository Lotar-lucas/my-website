import React from 'react';
import './PersonalIntroduction.css';

const PersonalIntroduction: React.FC = () => {
  return (
    <section id="sobre" className="min-h-screen flex flex-col justify-center items-start bg-gradient-to-r
     from-blue-950 to-blue-500"
     >
      <div className='max-w-6xl mx-auto px-6 '>
        <h1 className="text-6xl sm:text-6xl font-semibold text-white leading-tight text-shadow pb-4 pl-6 ">
          Criando soluções resilientes pensadas para durar
        </h1>

        <p className="text-base sm:text-lg text-write px-8 mt-4">
          +3 anos projetando e implementando sistemas escaláveis e confiáveis.
        </p>

        <a href="#projetos">
          <button  className="bg-blue-500 text-white px-4 py-2 mt-4 ml-8
          rounded hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500
          transition-all duration-50">
              Ver Projetos
          </button>
        </a>


      </div>
    </section>
  );
};

export default PersonalIntroduction;
