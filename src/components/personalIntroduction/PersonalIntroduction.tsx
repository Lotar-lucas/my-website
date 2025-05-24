import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const PersonalIntroduction: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [startDescription, setStartDescription] = useState(false);
  const [showCursorDesc, setShowCursorDesc] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center px-6 z-10">

      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* Versão .webm mais leve, se quiser adicionar */}
        {/* <source src="/videos/intro.webm" type="video/webm" /> */}
        <source src="/videos/intro.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* 🔳 Overlay escuro para contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* 🌟 Conteúdo central */}
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
                  'Do código ao impacto.',
                  () => {
                    setShowCursor(false);
                    setStartDescription(true);
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

      {/* Descrição */}
      {startDescription && (
        <p className="relative z-20 text-white/90 text-lg mt-6 max-w-xl mx-auto">
          <TypeAnimation
            sequence={[
              () => setShowCursorDesc(true),
              'Desenvolvedor backend com foco em sistemas bem arquitetados, confiáveis e prontos para escalar.',
              () => {
                setShowCursorDesc(false);
                setShowButton(true);
              }
            ]}
            wrapper="span"
            cursor={false}
            speed={80}
            repeat={0}
          />
          {showCursorDesc && (
            <span className="ml-1 animate-pulse text-white">|</span>
          )}
        </p>
      )}

      {/* Botão */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-8 relative z-20"
        >
          <a href="#projetos">
            <button className="bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:scale-[1.02] transition-transform duration-200 text-sm md:text-base">
              Ver Projetos
            </button>
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default PersonalIntroduction;
