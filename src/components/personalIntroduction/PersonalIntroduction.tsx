import React from 'react';
import './PersonalIntroduction.css';

const PersonalIntroduction: React.FC = () => {
  return (
    <section id="sobre" className="min-h-screen flex flex-col justify-center items-start bg-gradient-to-r
     from-blue-950 to-blue-500"
     >
      <div className='max-w-6xl mx-auto px-6 '>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Construindo sistemas resilientes e escaláveis, com foco em qualidade, arquitetura sólida e evolução contínua
        </h1>


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
