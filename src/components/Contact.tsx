import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="my-8">
      <h2 className="text-3xl font-semibold mb-4">Contato</h2>
      <p className="text-gray-700">
        Entre em contato pelo email: <a href="mailto:seuemail@exemplo.com" className="text-blue-600 hover:underline">seuemail@exemplo.com</a>
      </p>
    </section>
  );
};

export default Contact;
