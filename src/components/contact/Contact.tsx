import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import contacts from '../../helpers/envs';

const Contact: React.FC = () => {
  return (
    <>
      <section
        id="contato"
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-6  text-center"
      >
        <div className="flex justify-center gap-10 items-center mb-2 mt-8 max-w-xs mx-auto">
          <a
            href={contacts.linkedIn}
            target="_blank"
            className="text-cyan-400 hover:text-white transition-all"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>

          <a
            href={contacts.github}
            target="_blank"
            className="text-cyan-400 hover:text-white transition-all"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href={`mailto:${contacts.email}`}
            target="_blank"
            className="text-cyan-400 hover:text-white transition-all"
            title="Email"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>

          <a
            href={contacts.instagram}
            target="_blank"
            className="text-cyan-400 hover:text-white transition-all"
            title="Instagram"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm leading-relaxed text-cyan-400 mt-4">
          © 2025 Lucas Lotar. Todos os direitos reservados.
        </p>
      </section>
    </>
  );
};

export default Contact;
