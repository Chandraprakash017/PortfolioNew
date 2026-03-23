import React from 'react';
import { personalData } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t mt-auto py-8 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-left">
          <h2 className="text-xl font-bold text-gradient">{personalData.name}</h2>
          <p className="text-sm text-light-textMuted dark:text-dark-textMuted mt-1">
            {personalData.tagline}
          </p>
        </div>
        
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-full glass-card hover:-translate-y-1 transition-transform text-light-text dark:text-dark-text">
            <Github size={20} />
          </a>
          <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full glass-card hover:-translate-y-1 transition-transform text-light-text dark:text-dark-text">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${personalData.email}`} className="p-2 rounded-full glass-card hover:-translate-y-1 transition-transform text-light-text dark:text-dark-text">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-light-textMuted dark:text-dark-textMuted">
          &copy; {currentYear} built by {personalData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
