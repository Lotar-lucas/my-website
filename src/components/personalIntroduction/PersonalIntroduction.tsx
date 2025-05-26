import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import contacts from '../../helpers/envs';

const PersonalIntroduction: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center px-6">

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        aria-label="Vídeo de introdução com animações visuais"
      >
        <source src="/videos/portfolio-video.webm" type="video/webm" />
        <source src="/videos/portfolio-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight italic tracking-tight drop-shadow-md">
          {startTyping && (
            <>
              <TypeAnimation
                sequence={[
                  'Do código ao impacto',
                  () => {
                    setShowCursor(false);
                    setShowContent(true);
                  }
                ]}
                wrapper="span"
                cursor={false}
                speed={20}
                repeat={0}
              />
              {showCursor && (
                <span className="ml-1 animate-pulse text-white">|</span>
              )}
            </>
          )}
        </h1>
      </motion.div>

      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="relative z-20 flex flex-col items-center text-center mt-6 gap-6"
        >
          <p className="text-white/90 text-lg max-w-xl">
            Desenvolvedor de Software com foco em sistemas bem arquitetados, confiáveis e prontos para escalar.
          </p>

          <a href="#projetos">
            <button className="bg-blue-500 text-white px-6 py-3 mt-4 rounded shadow-lg hover:scale-[1.08]
              text-sm md:text-base transition-all duration-200 ease-in-out bg-opacity-80">
              Ver Projetos
            </button>
          </a>

          <div className="mt-3 flex justify-center gap-4 text-white">
            <a href={`mailto:${contacts.email}`} title="Email" target='_blank' aria-label="Email">
              <FaEnvelope className="w-6 h-6 hover:text-blue-300 hover:scale-110 transition-transform duration-200" />
            </a>

            <a href={contacts.linkedIn} title="LinkedIn" target="_blank" aria-label="Linkedin">
              <FaLinkedinIn className="w-6 h-6 hover:text-blue-300 hover:scale-110 transition-transform duration-200" />
            </a>

            <a href={contacts.github} title="GitHub" target="_blank" aria-label="Github">
              <FaGithub className="w-6 h-6 hover:text-blue-300 hover:scale-110 transition-transform duration-200" />
            </a>

            <a href={contacts.instagram} title="GitHub" target="_blank" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-blue-300 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default PersonalIntroduction;
