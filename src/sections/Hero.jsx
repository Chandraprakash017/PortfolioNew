import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary-600 dark:text-primary-400 font-medium mb-4 tracking-wide"
            >
              Hi there, I am
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold text-light-text dark:text-dark-text mb-4 tracking-tight"
            >
              {personalData.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-light-textMuted dark:text-dark-textMuted mb-6"
            >
              <span className="text-gradient">{personalData.role}</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:text-xl text-light-textMuted dark:text-dark-textMuted max-w-2xl mb-10 mx-auto md:mx-0"
            >
              {personalData.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank"
                download="cv.pdf"
                className="px-8 py-4 glass-card text-light-text dark:text-dark-text rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              >
                Download CV <Download size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="flex-1 w-full max-w-md hidden lg:block relative"
          >
            {/* Profile Photo */}
            <img 
              src="/raja.jpeg" 
              alt="Profile Photo" 
              className="w-48 h-48 rounded-full object-cover object-top mx-auto mb-8 shadow-2xl border-4 border-white/20 dark:border-dark-border/50 scale-125 hover:scale-110 transition-transform duration-500 animate-[blob_7s_infinite]"
            />
            
            {/* Minimalist Tech Stack Orb Graphic */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute inset-4 glass rounded-[2rem] flex flex-col items-center justify-center border-t border-l border-white/40 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-gradient mb-2">MERN</h3>
                <p className="text-sm font-medium text-light-textMuted dark:text-dark-textMuted text-center px-4">
                  MongoDB, Express, React, Node.js
                </p>
                <div className="mt-6 flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-light-textMuted dark:text-dark-textMuted uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-light-border dark:border-dark-border rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
