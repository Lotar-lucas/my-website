type Contacts = {
  email: string;
  linkedIn: string;
  github: string;
  instagram: string;
  whatsapp?: string;
};

const contacts: Contacts = {
  email: import.meta.env.VITE_EMAIL,
  linkedIn: import.meta.env.VITE_LINKEDIN,
  github: import.meta.env.VITE_GITHUB,
  instagram: import.meta.env.VITE_INSTAGRAM,
  whatsapp: import.meta.env.VITE_WHATSAPP,
};

export default contacts;
