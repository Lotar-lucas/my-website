import React from 'react';
import projectImage1 from '../../assets/teste.jpeg';


interface Project {
  title: string;
  description: string;
  link?: string;
  srcImage?: string;
}

const projects: Project[] = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1.",
    link: "https://github.com/seu-usuario/projeto1",
    srcImage: projectImage1
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2.",
    link: "https://github.com/seu-usuario/projeto2",
    srcImage: projectImage1
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto 3.",
    link: "https://github.com/seu-usuario/projeto3",
    srcImage: projectImage1
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="flex flex-col items-center my-8">
      <h1 className="text-3xl font-semibold mb-4 text-blue-800">Projetos</h1>

      <div className="grid gap-6 md:grid-cols-3 w-full px-4 justify-center">
        { projects.map((project, index) => (

          <div key={index}
            className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={project.srcImage}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2 text-blue-800">{project.title}</h3>

            <p className="text-gray-700 mb-2">{project.description}</p>
            { project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ver Projeto
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
