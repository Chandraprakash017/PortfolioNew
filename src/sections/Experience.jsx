import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, education, certificates } from '../data';
import SectionWrapper from '../components/SectionWrapper';
import { GraduationCap, Award, Trophy, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience & Education" subtitle="My academic journey and key achievements">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">Education</h3>
          </div>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-light-border dark:before:via-dark-border before:to-transparent">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 z-10 mx-auto absolute left-0 md:left-1/2 -ml-5 md:ml-0 transform">
                  <div className="w-3 h-3 bg-current rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl ml-12 md:ml-0 hover:shadow-xl transition-shadow border-l-4 border-l-primary-500">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold mb-1 block text-sm tracking-wide">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-light-textMuted dark:text-dark-textMuted font-medium text-sm mb-3">
                    {edu.institution} | {edu.location}
                  </p>
                  <p className="inline-block px-3 py-1 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text text-xs font-bold rounded-md">
                    {edu.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div className="space-y-12">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
                <Trophy size={28} />
              </div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">Achievements</h3>
            </div>
            
            <div className="grid gap-4">
              {experienceData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass p-5 rounded-2xl flex items-center gap-4 group hover:-translate-y-1 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center shrink-0 border border-light-border dark:border-dark-border group-hover:border-purple-500/50 transition-colors">
                    <Award className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-light-text dark:text-dark-text">{item.title}</h4>
                    <span className="text-sm font-medium text-light-textMuted dark:text-dark-textMuted">{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                <Award size={28} />
              </div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">Certificates</h3>
            </div>
            
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass p-4 rounded-2xl flex flex-col justify-center border-t-2 border-t-primary-400/50 hover:border-t-primary-500 hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <a href={cert.link} target="_blank" rel="noreferrer" className="flex flex-col h-full w-full">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-sm text-light-text dark:text-dark-text pr-2">{cert.title}</h4>
                       <ExternalLink size={14} className="text-light-textMuted dark:text-dark-textMuted group-hover:text-primary-500 transition-colors shrink-0" />
                    </div>
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mt-auto">{cert.date}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

export default Experience;
