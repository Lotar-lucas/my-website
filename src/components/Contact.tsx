import React from 'react';

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
    <section>
      teste
    </section>
  );
};

export default Contact;
