import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

type Contacts = {
  email: string;
  linkedIn: string;
  github: string;
  instagram: string;
}

const contacts: Contacts = {
  email: import.meta.env.VITE_EMAIL,
  linkedIn: import.meta.env.VITE_LINKEDIN,
  github: import.meta.env.VITE_GITHUB,
  instagram: import.meta.env.VITE_INSTAGRAM,
}
const Contact: React.FC = () => {
  return (
    <>
      <div className="h-16 bg-gradient-to-b from-blue-200 via-blue-250 to-blue-300" />

      <section id="contato" className="bg-gradient-to-b from-blue-300 via-blue-600 to-blue-900 px-6 py-6 text-center">
        <p className="text-lg leading-relaxed text-gray-100 mb-2 mt-8">Vamos Conectar ?</p>

        <div className="flex justify-center gap-10 items-center max-w-xs mx-auto">
          <a href={`mailto:${contacts.email}`} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all">
            <FaEnvelope className="w-6 h-6" />
          </a>

          <a href={contacts.linkedIn} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all">
            <FaLinkedinIn className="w-6 h-6" />
          </a>

          <a href={contacts.github} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all">
            <FaGithub className="w-6 h-6" />
          </a>

          <a href={contacts.instagram} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm leading-relaxed text-gray-100 mt-4">© 2025 Lucas Lotar. Todos os direitos reservados.</p>
      </section>
    </>
  );
};

export default Contact;
