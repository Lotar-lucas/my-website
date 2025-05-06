import React from 'react';

type Skills = string[];
type Degree = string[];

const technicalSkills: Skills = ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB"];

const degrees: Degree = ["Bacharel em Ciência da Computação", "Certificado em Desenvolvimento Web Full Stack", "Certificado em React"]

const TechnicalSkillsAndDegree: React.FC = () => {
  return (
    <section id="contato" className="bg-blue-950 p-8">
      <div className='flex justify-around m-9'>
        <div>
          <h1 className='text-blue-300'>Habilidades Técnicas</h1>

          <div>
            <ul className="list-disc text-write">
              { technicalSkills.map((skill, index) => (
                <li key={index} className='mt-2'> {skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1 className='text-blue-300'>Diplomas e Certificados</h1>

          <ul className='list-none text-write mr2'>
          {
            degrees.map((degree, index) => (
              <li key={index} className='mt-2'> {degree}</li>
            ))
          }
          </ul>
        </div>

      </div>

    </section>
  );
};

export default TechnicalSkillsAndDegree;
