import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-blue-950 px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        <div className="md:w-1/2 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Sobre
          </h1>

          <p className="text-lg leading-relaxed text-gray-200">
            Eu sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em
             <strong className="text-blue-400"> React</strong>, <strong className="text-blue-400">TypeScript </strong>
            e outras tecnologias modernas. Estou sempre buscando aprender e evoluir para alcançar novos patamares na
            minha carreira.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740"
            alt="Foto de perfil"
            className="w-64 h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
