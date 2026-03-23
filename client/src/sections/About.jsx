import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data';
import SectionWrapper from '../components/SectionWrapper';
import { BookOpen, Code, Lightbulb, Coffee } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Code size={24} />, title: 'MERN Stack', desc: 'MongoDB, Express, React, Node' },
    { icon: <BookOpen size={24} />, title: 'Student', desc: 'B.Tech CSE 3rd Year' },
    { icon: <Lightbulb size={24} />, title: 'Problem Solver', desc: '100+ LeetCode DSA' },
    { icon: <Coffee size={24} />, title: 'Fast Learner', desc: 'Explorative Mindset' },
  ];

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Get to know me better">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* About Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">{personalData.name}</span>
          </h3>
          <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed">
            I am a {personalData.about}
          </p>
          <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed">
            My journey in software development has been driven by an insatiable curiosity and a deep passion for creating effective, scalable web applications. I love taking complex problems and turning them into beautiful, intuitive interface designs using the power of the MERN stack.
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                {card.icon}
              </div>
              <div>
                <h4 className="font-bold text-light-text dark:text-dark-text">{card.title}</h4>
                <p className="text-sm text-light-textMuted dark:text-dark-textMuted mt-1">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default About;
