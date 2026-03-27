import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionWrapper from '../components/SectionWrapper';

const SkillCategory = ({ title, items, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass p-8 rounded-3xl"
    >
      <h3 className="text-xl font-bold mb-6 text-light-text dark:text-dark-text ">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            className="px-4 py-2 rounded-full border border-light-border dark:border-dark-border bg-white/50 dark:bg-slate-800/50 text-sm font-medium text-light-textMuted dark:text-dark-textMuted hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills" subtitle="My toolkit for building digital experiences">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory title="Programming Languages" items={skills.languages} delay={0.1} />
        <SkillCategory title="Frontend Technologies" items={skills.frontend} delay={0.2} />
        <SkillCategory title="Backend Technologies" items={skills.backend} delay={0.3} />
        <SkillCategory title="Databases & Tools" items={[...skills.databases, "Git", "GitHub", "Vite"]} delay={0.4} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 glass p-8 rounded-3xl"
      >
        <h3 className="text-xl font-bold mb-6 text-light-text dark:text-dark-text">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.softSkills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <span className="text-light-textMuted dark:text-dark-textMuted font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
