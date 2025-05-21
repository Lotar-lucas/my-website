import React from 'react';
// import { SiGithub, SiLinkedin } from 'react-icons/si'
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
    <section id="contato" className="bg-gradient-to-t from-blue-950 to-blue-900 p-8">
      <div className='flex justify-between items-center mx-auto max-w-sm'>
        <div>
          <a href={`mailto:${contacts.email}`} target='_blank'>
            <FaEnvelope className='text-white w-6 h-6 ' />
          </a>
        </div>

        <div>
          <a href={`${contacts.linkedIn}`} target='_blank'>
            <FaLinkedinIn className='text-white w-6 h-6 ' />
          </a>
        </div>

        <div>
          <a href={`${contacts.github}`} target='_blank'>
            <FaGithub className='text-white w-6 h-6 ' />
          </a>
        </div>

        <div>
          <a href={`${contacts.instagram}`} target='_blank'>
            <FaInstagram className='text-white w-6 h-6 ' />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
