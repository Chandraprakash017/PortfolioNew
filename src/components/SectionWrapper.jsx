import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            )}
            {subtitle && (
              <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
