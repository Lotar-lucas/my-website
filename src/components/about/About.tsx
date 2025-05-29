import React from 'react';
import photo from '../../assets/perfil-2.jpg';
import logo from '../../assets/logo.png';
import { FaWhatsapp } from 'react-icons/fa';
import contacts from '../../helpers/envs';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-blue-200 px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start md:items-center gap-12">

        <div className="md:w-1/2" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl text-blue-900 font-extrabold mb-6">
            Sobre mim
          </h1>

          <p className="text-lg leading-relaxed text-blue-800 mb-6">
            Sou desenvolvedor back-end com mais de 3 anos de experiência no desenvolvimento de sistemas
            <strong> escaláveis, seguros e de alta performance</strong>. Tenho como foco entregar soluções bem arquitetadas,
            que resolvam problemas reais de forma eficiente e sustentável ao longo do tempo.
          </p>

          <p className="text-lg leading-relaxed text-blue-800 mb-6">
            No dia a dia, atuo com <strong>JavaScript, TypeScript e Node.js</strong>, além de serviços em nuvem (<strong>AWS</strong>),
            bancos de dados relacionais, mensageria e conteinerização. Mais do que dominar ferramentas,
            busco compreender profundamente os desafios técnicos e propor soluções que façam sentido no contexto
            do produto e do negócio.
          </p>

          <p className="text-lg leading-relaxed text-blue-800 mb-6">
            Estou em constante evolução, com foco em <strong>arquitetura de software, system design, padrões de projeto</strong> e
            boas práticas em ambientes distribuídos. Acredito que software bem feito é resultado de um equilíbrio entre
            <strong> clareza técnica, colaboração e melhoria contínua</strong>.
          </p>

          <p className="text-lg leading-relaxed text-blue-800 ">
            Se você busca alguém comprometido com <strong>qualidade, evolução profissional</strong> e <strong>impacto real no time</strong>,
            ficarei feliz em conversar.
          </p>

          <p className="text-lg leading-relaxed text-blue-800">
            <strong>Entre em contato</strong> — será um prazer trocar ideias.

            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="mt-4 px-6 py-2 flex items-center gap-2 bg-blue-500 text-white rounded shadow-md border border-blue-500
                 hover:scale-[1.08] text-sm md:text-base transition-all duration-200 ease-in-out bg-opacity-80" title='WhatsApp' aria-label='WhatsApp'
              >
                <FaWhatsapp className="w-6 h-6 text-green-300" />
                Vamos conversar?
              </button>
            </a>
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-start md:items-center" data-aos="zoom-in">
          <img
            src={photo}
            alt="Foto de perfil"
            className="w-98 h-98 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-6"
          />
          <img
            src={logo}
            alt="Logo Lotar Desenvolvedor de Software"
            className="h-98 md:h-78 w-auto mt-4 rounded-md shadow-sm transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
