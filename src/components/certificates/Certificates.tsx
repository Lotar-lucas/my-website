import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const degrees = [
  {
    title: 'Pós-graduação Lato Sensu - Especialização em Engenharia de Software',
    issuer: 'Universidade do Vale do Rio dos Sinos (Unisinos)',
    link: 'https://www.unisinos.br/'
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    issuer: 'QI Faculdade & Escola Técnica',
    link: 'https://qi.edu.br/'
  },
  {
    title: 'Certificado em Desenvolvimento Web FullStack',
    issuer: 'Escola Trybe',
    link: 'https://betrybe.com/'
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificados" className="bg-blue-200 pt-16 pb-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-extrabold text-blue-900 mb-8 text-center"
          data-aos="fade-up"
        >
          Certificados
        </h2>

        <div className="flex flex-col gap-5">
          {degrees.map((degree, i) => (
            <a
              key={i}
              href={degree.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start sm:items-center
              gap-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <FaGraduationCap className="text-blue-600 text-xl" />
              <div>
                <p className="text-base font-semibold text-blue-800 group-hover:underline">{degree.title}</p>
                <p className="text-sm text-gray-600">{degree.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
