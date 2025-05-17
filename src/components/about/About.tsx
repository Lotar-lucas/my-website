import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-blue-950 p-8">
      <div className='flex justify-around items-center  m-9'>
        <div className='w-1/3'>
          <h1 className="text-3xl font-semibold text-blue-300 mb-4">Sobre</h1>

          <p className="text-write mt-4" >
            Eu sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em React, TypeScript e outras tecnologias modernas. Estou sempre buscando aprender e evoluir para alcançar novos patamares na minha carreira.
          </p>
        </div>

        <div className='w-1/3 max-h-20px'>
          <img src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740" alt="imagem teste" />
        </div>
      </div>
    </section>
  );
};

export default About;
