import React, { JSX } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaVuejs  } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript, SiNestjs, SiPrisma  } from 'react-icons/si';
import projectImage1 from '../../assets/teste.jpeg';

interface Project {
  title: string;
  description: string;
  link?: string;
  srcImage?: string;
  techs: string[];
  status: 'Concluído' | 'Em andamento' | 'Open Source';
}

const projects: Project[] = [
  {
    title: 'API Fincheck',
    description: 'Este projeto tem como objetivo explorar e praticar conceitos com NestJS e Prisma, oferecendo um CRUD simples de contas financeiras.',
    link: 'https://github.com/Lotar-lucas/api-fincheck',
    srcImage: projectImage1,
    techs: ['Node.js', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL'],
    status: 'Concluído',
  },
  {
    title: 'Projeto 3',
    description: 'Sistema de agendamento online com área administrativa e notificações por e-mail.',
    link: 'https://github.com/seu-usuario/projeto3',
    srcImage: projectImage1,
    techs: ['Vue.js'],
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
  'Vue.js': <FaVuejs  className="text-green-600" title="Vue.js" />,
};

const statusColorMap = {
  'Concluído': 'bg-green-100 text-green-800',
  'Em andamento': 'bg-yellow-100 text-yellow-800',
  'Open Source': 'bg-blue-100 text-blue-800',
};

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="bg-gradient-to-r from-blue-950 to-blue-500 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-300 mb-4">Projetos</h2>

        <p className="text-lg text-blue-100 mb-12">
          Alguns dos projetos que desenvolvi aplicando boas práticas e tecnologias modernas.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg
                  transition-shadow flex flex-col h-full"
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

                <p className="text-blue-800">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techs.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 text-xs text-blue-800 bg-gray-100
                         px-2 py-1 rounded-full hover:bg-gray-200 hover:scale-[1.03] transition-all duration-150"
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
                      className="mt-4 inline-block text-sm font-medium text-blue-800 hover:text-blue-800
                          transition-colors "
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
