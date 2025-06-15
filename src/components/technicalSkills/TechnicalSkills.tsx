import React, { useState, JSX } from 'react';
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaVial,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJs,
  FaVuejs,
  FaJava,
  FaCloud,
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
  SiTestinglibrary,
} from 'react-icons/si';

import { TbSql } from 'react-icons/tb';

import { DiScrum, DiMysql } from 'react-icons/di';

import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, JSX.Element> = {
  React: <FaReact className="text-sky-500 text-lg" title="React" />,
  'Vue.js': <FaVuejs className="text-green-600 text-lg" title="Vue.js" />,
  TypeScript: <SiTypescript className="text-blue-600 text-lg" title="TypeScript" />,
  JavaScript: <FaJs className="text-yellow-400 text-lg" title="JavaScript" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500 text-lg" title="Tailwind" />,
  'Node.js': <FaNodeJs className="text-green-600 text-lg" title="Node.js" />,
  Express: <SiExpress className="text-gray-700 text-lg" title="Express" />,
  JWT: <SiJsonwebtokens className="text-amber-500 text-lg" title="JWT" />,
  PostgreSQL: <SiPostgresql className="text-blue-800 text-lg" title="PostgreSQL" />,
  MongoDB: <SiMongodb className="text-green-700 text-lg" title="MongoDB" />,
  Docker: <FaDocker className="text-blue-400 text-lg" title="Docker" />,
  Git: <FaGitAlt className="text-orange-600 text-lg" title="Git" />,
  'GitHub Actions': <SiGithubactions className="text-gray-800 text-lg" title="GitHub Actions" />,
  'CI/CD': <FaTools className="text-gray-700 text-lg" title="CI/CD" />,
  'AWS S3': <FaAws className="text-orange-500 text-lg" title="AWS S3" />,
  'AWS SQS': <SiAmazonsqs className="text-orange-500 text-lg" title="AWS SQS" />,
  'AWS lambda': <SiAwslambda className="text-orange-500 text-lg" title="AWS lambda" />,
  Jest: <SiJest className="text-pink-600 text-lg" title="Jest" />,
  'Testing Library': <SiTestinglibrary className="text-pink-600 text-lg" title="Testing Library" />,
  Supertest: <FaVial className="text-teal-600 text-lg" title="Supertest" />,
  Vuetify: <SiVuetify className="text-purple-600 text-lg" title="Vuetify" />,
  Prisma: <SiPrisma className="text-purple-600 text-lg" title="Prisma" />,
  NestJS: <SiNestjs className="text-red-600 text-lg" title="Nest.js" />,
  SQL: <TbSql className="text-gray-800 text-lg" title="SQL" />,
  Java: <FaJava className="text-red-600 text-lg" title="Java" />,
  Redux: <SiRedux className="text-purple-600 text-lg" title="Redux" />,
  MySql: <DiMysql className="text-gray-800 text-lg" title="MySQL" />,
  Scrum: <DiScrum className="text-orange-600 text-lg" title="Scrum" />,
};

const skillCategories = [
  {
    id: 'Front-End',
    icon: <FaLaptopCode className="text-sky-500 text-xl" />,
    skills: ['TypeScript', 'Vue.js', 'React', 'JavaScript', 'Vuetify', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 'Back-End',
    icon: <FaServer className="text-indigo-500 text-xl" />,
    skills: ['Node.js', 'Java', 'Express', 'NestJS', 'JWT', 'Prisma'],
  },
  {
    id: 'Banco de Dados',
    icon: <FaDatabase className="text-emerald-600 text-xl" title="Banco de Dados" />,
    skills: ['SQL', 'PostgreSQL', 'MySql', 'MongoDB'],
  },
  {
    id: 'Testes & Qualidade',
    icon: <FaVial className="text-pink-500 text-xl" />,
    skills: ['Jest', 'Supertest', 'Testing Library'],
  },
  {
    id: 'DevOps & Cloud',
    icon: <FaCloud className="text-blue-600 text-xl" />,
    skills: ['AWS SQS', 'AWS S3', 'AWS lambda'],
  },
  {
    id: 'Ferramentas & Práticas',
    icon: <FaTools className="text-gray-700 text-xl" />,
    skills: ['Docker', 'Git', 'Scrum', 'CI/CD'],
  },
];

const SkillCard = ({
  icon,
  title,
  skills,
}: {
  icon: JSX.Element;
  title: string;
  skills: string[];
}): JSX.Element => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.8 }}
    className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 min-h-[240px] w-full"
  >
    <section className="cursor-default hover:scale-105 transition-all duration-200 ease-in-out">
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

  const filteredCategories =
    activeCategory === 'Todos'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="habilidades" className="bg-blue-200 pt-24 pb-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center" data-aos="zoom-in">
          Habilidades Técnicas
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {['Todos', ...skillCategories.map((cat) => cat.id)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`appearance-none focus:outline-none px-4 py-2 rounded-full
                         text-sm font-medium hover:scale-105 transition-all duration-200
                         ${
                           activeCategory === cat
                             ? 'bg-white text-blue-900 ring-1 ring-blue-400'
                             : 'bg-blue-800 text-white hover:bg-blue-700'
                         }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative md:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 mb-4"
            >
              {filteredCategories.map((cat) => (
                <SkillCard key={cat.id} icon={cat.icon} title={cat.id} skills={cat.skills} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsAndDegree;
