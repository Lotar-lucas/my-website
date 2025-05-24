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
  FaJs,
  FaVuejs,
  FaJava
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGithubactions,
  SiJest,
  SiJsonwebtokens,
  SiVuetify,
  SiPrisma,
  SiNestjs,
  SiRedux,
  SiAwslambda,
  SiAmazonsqs,
  SiTestinglibrary
} from 'react-icons/si';

import { TbSql } from "react-icons/tb";

import { DiScrum, DiMysql  } from "react-icons/di";

import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, JSX.Element> = {
  'React': <FaReact className="text-sky-500 text-lg" />,
  'Vue.js': <FaVuejs className="text-green-600 text-lg" />,
  'TypeScript': <SiTypescript className="text-blue-600 text-lg" />,
  'JavaScript': <FaJs className="text-yellow-400 text-lg" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500 text-lg" />,
  'Node.js': <FaNodeJs className="text-green-600 text-lg" />,
  'Express': <SiExpress className="text-gray-700 text-lg" />,
  'JWT': <SiJsonwebtokens className="text-amber-500 text-lg" />,
  'PostgreSQL': <SiPostgresql className="text-blue-800 text-lg" />,
  'MongoDB': <SiMongodb className="text-green-700 text-lg" />,
  'Docker': <FaDocker className="text-blue-400 text-lg" />,
  'Git': <FaGitAlt className="text-orange-600 text-lg" />,
  'GitHub Actions': <SiGithubactions className="text-gray-800 text-lg" />,
  'CI/CD': <FaTools className="text-gray-700 text-lg" />,
  'AWS S3': <FaAws className="text-orange-500 text-lg" />,
  'AWS SQS': <SiAmazonsqs className="text-orange-500 text-lg" />,
  'AWS lambda': <SiAwslambda className="text-orange-500 text-lg" />,
  'Jest': <SiJest className="text-pink-600 text-lg" />,
  'Testing Library': <SiTestinglibrary className="text-pink-600 text-lg" />,
  'Supertest': <FaVial className="text-teal-600 text-lg" />,
  'Vuetify': <SiVuetify className="text-purple-600 text-lg" />,
  'Prisma': <SiPrisma className="text-purple-600 text-lg" />,
  'NestJS': <SiNestjs  className="text-red-600 text-lg" />,
  'SQL': <TbSql className="text-gray-800 text-lg" />,
  'Java' : <FaJava className="text-red-600 text-lg" />,
  'Redux': <SiRedux className="text-purple-600 text-lg" />,
  'MySql': <DiMysql  className="text-gray-800 text-lg" />,
  'Scrum': <DiScrum className="text-orange-600 text-lg" />,
};

const skillCategories = [
  {
    id: 'Frontend',
    icon: <FaLaptopCode className="text-sky-500 text-xl" />,
    skills: ['TypeScript','Vue.js', 'React', 'JavaScript', 'Vuetify', 'Tailwind CSS', 'Redux']
  },
  {
    id: 'Backend',
    icon: <FaServer className="text-indigo-500 text-xl" />,
    skills: ['Node.js', 'Java','Express', 'NestJS', 'JWT', 'Prisma']
  },
  {
    id: 'Banco de Dados',
    icon: <FaDatabase className="text-emerald-600 text-xl" />,
    skills: ['SQL', 'PostgreSQL','MySql', 'MongoDB']
  },
  {
    id: 'Testes & Qualidade',
    icon: <FaVial className="text-pink-500 text-xl" />,
    skills: ['Jest', 'Supertest', 'Testing Library']
  },
  {
    id: 'DevOps & Ferramentas',
    icon: <FaTools className="text-gray-700 text-xl" />,
    skills: ['Docker', 'Git', 'AWS SQS', 'AWS S3', 'AWS lambda', 'CI/CD', 'Scrum']
  }
];

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

const SkillCard = ({ icon, title, skills }: { icon: JSX.Element; title: string; skills: string[] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.8 }}
    className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 min-h-[240px] w-full"
  >

    <section className='cursor-default hover:scale-105 transition-all duration-200 ease-in-out'>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-blue-900 text-lg">{title}</h3>
      </div>

      <ul className="text-sm text-gray-800 space-y-2 pt-2">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center gap-2">
            {iconMap[skill] || <FaTools className="text-gray-500" />} {skill}
          </li>
        ))}
      </ul>
    </section>
  </motion.div>
);

const TechnicalSkillsAndDegree: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredCategories = activeCategory === 'Todos'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="habilidades" className="bg-blue-200 pt-24 pb-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Habilidades Técnicas</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Todos', ...skillCategories.map((cat) => cat.id)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 ease-in-out
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

          <div className="relative min-h-[600px]"> {/* Ajuste conforme o tamanho necessário */}
            <AnimatePresence mode="wait">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4"
              >
                {filteredCategories.map((cat) => (
                  <SkillCard key={cat.id} icon={cat.icon} title={cat.id} skills={cat.skills} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>


        <h2 className="text-3xl font-bold text-blue-900 mb-8 pt-24 text-center">Diplomas e Certificados</h2>

        <div className="flex flex-col gap-5">
          {degrees.map((degree, i) => (
            <a
              key={i}
              href={degree.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start sm:items-center
                gap-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 group"
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
