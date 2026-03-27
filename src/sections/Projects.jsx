import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import SectionWrapper from '../components/SectionWrapper';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 flex flex-col h-full bg-white/40 dark:bg-slate-900/40"
    >
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary-600/20 to-purple-600/20 flex items-center justify-center p-6">
        {/* Placeholder for project image since none was provided in resume */}
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500 text-center">
          {project.title.split(' ')[0]} {project.title.split(' ')[1]}
        </h3>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="flex items-center gap-2 text-xs font-medium text-primary-600 dark:text-primary-400 mb-3 uppercase tracking-wider">
          <Calendar size={14} />
          {project.period}
        </div>
        
        <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-light-textMuted dark:text-dark-textMuted mb-8 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto pt-4 border-t border-light-border dark:border-dark-border">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-light-text dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <Github size={18} /> Code
          </a>
          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-light-text dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 transition-colors ml-4">
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Some of the recent work I've been proud of">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
