import React, { useState, JSX } from 'react';
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaVial,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJs
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGithubactions,
  SiVitest,
  SiJest,
  SiJsonwebtokens,
  SiTypeorm
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, JSX.Element> = {
  'React': <FaReact className="text-sky-500" />, 'TypeScript': <SiTypescript className="text-blue-600" />, 'JavaScript': <FaJs className="text-yellow-400" />, 'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />, 'Vite': <SiVite className="text-purple-500" />, 'Node.js': <FaNodeJs className="text-green-600" />, 'Express': <SiExpress className="text-gray-700" />, 'JWT': <SiJsonwebtokens className="text-amber-500" />, 'TypeORM': <SiTypeorm className="text-red-600" />, 'PostgreSQL': <SiPostgresql className="text-blue-800" />, 'MongoDB': <SiMongodb className="text-green-700" />, 'Docker': <FaDocker className="text-blue-400" />, 'Git': <FaGitAlt className="text-orange-600" />, 'GitHub Actions': <SiGithubactions className="text-gray-800" />, 'CI/CD': <FaTools className="text-gray-700" />, 'AWS S3': <FaAws className="text-orange-500" />, 'Jest': <SiJest className="text-pink-600" />, 'Supertest': <FaVial className="text-teal-600" />, 'Vitest': <SiVitest className="text-green-400" />
};

const skillCategories = [
  { id: 'Frontend', icon: <FaLaptopCode className="text-sky-500 text-xl" />, skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'] },
  { id: 'Backend', icon: <FaServer className="text-indigo-500 text-xl" />, skills: ['Node.js', 'Express', 'JWT', 'TypeORM'] },
  { id: 'Banco de Dados', icon: <FaDatabase className="text-emerald-600 text-xl" />, skills: ['PostgreSQL', 'MongoDB'] },
  { id: 'DevOps & Ferramentas', icon: <FaTools className="text-gray-700 text-xl" />, skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'AWS S3'] },
  { id: 'Testes & Qualidade', icon: <FaVial className="text-pink-500 text-xl" />, skills: ['Jest', 'Supertest', 'Vitest'] }
];

const degrees = [
  { title: 'Bacharel em Ciência da Computação', issuer: 'Universidade Federal do Brasil', link: 'https://universidadeexemplo.edu.br' },
  { title: 'Certificado em Desenvolvimento Web Full Stack', issuer: 'Instituto Tech Academy', link: 'https://techacademy.com/certificados/fullstack' },
  { title: 'Certificado em React', issuer: 'Plataforma ReactPro', link: 'https://reactpro.io/certificados/react' }
];

const SkillCard = ({ icon, title, skills }: { icon: JSX.Element; title: string; skills: string[] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow min-h-[240px]"
  >
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="font-semibold text-blue-900 text-lg">{title}</h3>
    </div>

    <ul className="text-sm text-gray-800 space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center gap-2">
          {iconMap[skill] || <FaTools className="text-gray-500" />} {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const TechnicalSkillsAndDegree: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const filteredCategories = activeCategory === 'Todos'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="habilidades" className="bg-blue-950 py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">Habilidades Técnicas</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Todos', ...skillCategories.map((cat) => cat.id)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                duration-200
                ${activeCategory === cat 
                    ? 'bg-white text-blue-950'
                    : 'bg-blue-800 text-white hover:bg-blue-700'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div layout className="min-h-[320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {filteredCategories.map((cat) => (
              <SkillCard key={cat.id} icon={cat.icon} title={cat.id} skills={cat.skills} />
            ))}
          </motion.div>
        </AnimatePresence>

        <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center">Diplomas e Certificados</h2>

        <div className="flex flex-col gap-5">
          {degrees.map((degree, i) => (
            <a
              key={i}
              href={degree.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 group"
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

export default TechnicalSkillsAndDegree;
