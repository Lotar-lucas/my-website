import React from 'react';

const PersonalIntroduction: React.FC = () => {
  return (
    <section id="sobre" className="bg-slate-900 p-8">
      <div className='w-1/2 m-9'>
        <h1 className="text-3xl font-semibold text-blue-300 mb-4">Olá</h1>

        <h1 className="font-semibold  text-write">eu sou Lucas Lotar</h1>

        <p className="text-write mt-4">
          Sou desenvolvedor com experiência em React, TypeScript e outras tecnologias modernas. Estou sempre evoluindo para alcançar novos patamares na minha carreira.
        </p>
      </div>
    </section>
  );
};

export default PersonalIntroduction;
