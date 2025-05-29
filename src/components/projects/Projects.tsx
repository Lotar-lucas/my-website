import React, { JSX } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaVuejs, FaAws } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript, SiNestjs, SiPrisma, SiVuetify } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import projectImage1 from '../../assets/teste.jpeg';
import imgDefault from '../../assets/img-default.png';
import imgProjectCard from '../../assets/project-card.png';

interface Project {
  title: string;
  description: string;
  link?: string;
  srcImage?: string;
  techs: string[];
  status: 'Concluído' | 'Em andamento' | 'Open Source' | 'Projeto Corporativo';
}

const projects: Project[] = [
  {
    title: 'API Fincheck',
    description: `API de gerenciamento de finanças pessoais desenvolvida com foco em aprendizado e boas práticas usando NestJS, Prisma ORM e TypeScript.\n
    Oferece um CRUD completo para contas financeiras, com autenticação protegida e estrutura modular.\n
    O projeto é base para evolução de um sistema financeiro mais robusto.\n
    Ideal para estudos de arquitetura com NestJS e integração com PostgreSQL.`,
    link: 'https://github.com/Lotar-lucas/api-fincheck',
    srcImage: projectImage1,
    techs: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'AOS', 'AWS'],
    status: 'Concluído',
  },
  {
    title: 'LXP – Plataforma de Experiência de Aprendizagem',
    description: `Plataforma educacional (LXP – Learning Experience Platform) desenvolvida para o setor de ensino superior.\n
     A solução concentra recursos de aprendizagem em um ambiente virtual centralizado,\n
     com foco na personalização da experiência do usuário, engajamento e retenção de estudantes.\n
     Também contribui para a otimização da gestão acadêmica e melhoria da eficiência institucional.`,
    srcImage: imgDefault,
    techs: ['Vue.js', 'Vuetify', 'Node.js', 'PostgreSQL', 'AWS' ],
    status: 'Projeto Corporativo',
  },
  {
    title: 'Portfólio Profissional – Lucas Lotar',
    description: `Aplicação desenvolvida para apresentar meu perfil profissional, experiências e projetos de forma moderna e responsiva.\n
      Construída com React, TypeScript e TailwindCSS, utiliza animações com Framer Motion \n
      A aplicação está hospedada na AWS, garantindo alta disponibilidade, escalabilidade e performance desde a entrega inicial.`,
    srcImage: imgProjectCard,
    techs: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'AWS'],
    status: 'Em andamento',
  },
];

const techIcons: Record<string, JSX.Element> = {
  'React': <FaReact className="text-sky-500" title="React" />,
  'Node.js': <FaNodeJs className="text-green-600" title="Node.js" />,
  'MongoDB': <SiMongodb className="text-green-700" title="MongoDB" />,
  'TailwindCSS': <SiTailwindcss className="text-cyan-500" title="TailwindCSS" />,
  'TypeScript': <SiTypescript className="text-blue-600" title="TypeScript" />,
  'PostgreSQL': <SiPostgresql className="text-blue-800" title="PostgreSQL" />,
  'Docker': <FaDocker className="text-blue-400" title="Docker" />,
  'NestJS': <SiNestjs className="text-red-600" title="NestJS" />,
  'Prisma': <SiPrisma className="text-purple-600" title="Prisma" />,
  'Vue.js': <FaVuejs className="text-green-600" title="Vue.js" />,
  'Vuetify': <SiVuetify className="text-purple-600 text-lg" title='Vuetify'/>,
  'AWS': <FaAws className="text-orange-500 text-lg" title='AWS S3' />,
  'Framer Motion': <TbBrandFramerMotion className="text-pink-500 text-lg" title="Framer Motion" />,
};

const statusColorMap = {
  'Concluído': 'bg-green-100 text-green-800',
  'Em andamento': 'bg-yellow-100 text-yellow-800',
  'Open Source': 'bg-blue-100 text-blue-800',
  'Projeto Corporativo': 'bg-blue-100 text-blue-800',
  'default': 'bg-gray-100 text-gray-800'
};

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="bg-gradient-to-r from-blue-950 to-blue-500 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-300 mb-4" data-aos="fade-up">Projetos</h2>

        <p className="text-lg text-blue-100 mb-12" data-aos="fade-up" data-aos-delay="100">
          Alguns dos projetos que desenvolvi aplicando boas práticas e tecnologias modernas.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl
                hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 150} 
            >
              <img
                src={project.srcImage}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col gap-4 h-full">
                <span
                  className={`self-start text-xs px-2 py-1 rounded-full font-medium ${statusColorMap[project.status]}`}
                >
                  {project.status}
                </span>

                <h3 className="text-2xl font-semibold text-blue-800">
                  {project.title}
                </h3>

                <p className="text-blue-800 text-justify leading-relaxed">
                  {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line.trim()}</p>
                  ))}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techs.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 text-xs text-blue-800 bg-gray-100 px-2 py-1 rounded-full
                       hover:bg-gray-200 hover:scale-[1.03] transition-all duration-150 cursor-default"
                    >
                      {techIcons[tech] || null}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {project.link && (
                  <div className="mt-auto pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-blue-800 hover:text-blue-800 transition-colors"
                    >
                      Ver Projeto →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
