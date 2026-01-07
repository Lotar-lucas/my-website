import React from 'react';
import photo from '../../assets/me-5.png';
import { FaWhatsapp } from 'react-icons/fa';
import contacts from '../../helpers/envs';

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start md:items-center gap-12">
        <div className="md:w-1/2" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl text-cyan-400 font-extrabold mb-6">Sobre</h1>

          <p className="text-lg leading-relaxed text-cyan-400 mb-6">
            Sou Desenvolvedor Back-End com formação em Engenharia de Software e experiência na
            construção de APIs, microsserviços e sistemas que precisam lidar bem com escala. No meu
            dia a dia, gosto de estruturar soluções de forma clara, estável e fácil de manter,
            sempre busco decisões técnicas que façam sentido no longo prazo e que se alinhem à
            realidade do negócio.
          </p>

          <p className="text-lg leading-relaxed text-cyan-400 mb-6">
            Trabalhei com Node.js, TypeScript e PostgreSQL em produtos de alta demanda, criando
            integrações assíncronas com AWS, organizando fluxos entre serviços e cuidando de
            desempenho e qualidade. Essa experiência me deu uma base sólida para focar em Java e o
            ecossistema Spring, aplicando boas práticas de arquitetura, modelagem de dados e testes.
          </p>

          <p className="text-lg leading-relaxed text-cyan-400 mb-6">
            Procuro construir sistemas confiáveis e organizados, que realmente contribuam para um
            produto melhor, com código simples de entender, evoluir e operar.
          </p>

          <p className="text-lg leading-relaxed text-cyan-400">
            <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
              <button
                className="mt-4 px-6 py-2 flex items-center gap-2 bg-cyan-600 text-white rounded shadow-md border border-cyan-400
                 hover:scale-[1.08] text-sm md:text-base transition-all duration-200 ease-in-out bg-opacity-80 focus:outline-none"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6 text-green-400" />
                Contato
              </button>
            </a>
          </p>
        </div>

        <div
          className="md:w-1/2 flex flex-col justify-center items-start md:items-center"
          data-aos="zoom-in"
        >
          <img
            src={photo}
            alt="Foto de perfil"
            className="w-98 h-98 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-6"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
