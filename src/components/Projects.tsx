import React from 'react';

interface Project {
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1.",
    link: "https://github.com/seu-usuario/projeto1"
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2.",
    link: "https://github.com/seu-usuario/projeto2"
  },
  // Adicione mais projetos conforme desejar
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="my-8">
      <h2 className="text-3xl font-semibold mb-4">Projetos</h2>

      <div className="grid gap-6 md:grid-cols-2">
        { projects.map((project, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            
            <p className="text-gray-700 mb-2">{project.description}</p>
            {project.link && (
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
