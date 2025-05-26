import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp  } from 'react-icons/fa'
import contacts from '../../helpers/envs';

const Contact: React.FC = () => {
  return (
    <>
      <div className="h-16 bg-gradient-to-b from-blue-200 via-blue-250 to-blue-300" />

      <section id="contato" className="bg-gradient-to-b from-blue-300 via-blue-600 to-blue-900 px-6 py-6 text-center">
        <p className="text-lg leading-relaxed text-gray-100 mb-2 mt-8">Vamos Conectar?</p>

        <div className="flex justify-center gap-10 items-center max-w-xs mx-auto">
          <a href={`mailto:${contacts.email}`} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all"
            title='Email' aria-label='Email'
          >
            <FaEnvelope className="w-6 h-6" />
          </a>

          <a href={contacts.linkedIn} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all"
            title='LinkedIn' aria-label='LinkedIn'
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>

          <a href={contacts.github} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all"
            title='GitHub' aria-label='GitHub'
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a href={contacts.instagram} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all"
            title='Instagram' aria-label='Instagram'
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a href={contacts.whatsapp} target='_blank' className="text-gray-100 hover:text-blue-300 transition-all"
            title='WhatsApp' aria-label='WhatsApp'
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm leading-relaxed text-gray-100 mt-4">© 2025 Lucas Lotar. Todos os direitos reservados.</p>
      </section>
    </>
  );
};

export default Contact;
