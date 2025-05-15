import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import content from '../config/content';

const Projects = () => {
  const { language = 'en', t } = useLanguage() || {};
  const currentResumeData = content[language]?.resume || content.en.resume;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="section-title text-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
        {t('projects.title')}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {currentResumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="nier-panel group relative overflow-hidden min-w-0"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-nier-border opacity-50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-nier-border opacity-50" />
            <span className="absolute top-2 right-2 font-nier-mono text-xs text-nier-dark/30">
              #{String(index + 1).padStart(2, '0')}
            </span>
            {project.image && (
              <div className="relative w-full h-40 sm:h-48 mb-3 sm:mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-4 font-nier tracking-wide text-nier-dark group-hover:text-nier transition-colors">
              {project.title}
            </h3>
            <p className="mb-3 sm:mb-4 text-nier-dark/80 text-sm sm:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-nier-mono border border-nier-border/50 
                           text-nier-dark/70 bg-nier-light/30 hover:bg-nier-paper 
                           transition-colors rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-nier-dark/70">
                  <span className="text-nier-accent">•</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="nier-button inline-flex items-center space-x-2 group w-full sm:w-auto min-h-[40px] text-base sm:text-lg"
            >
              <span>{t('projects.viewProject')}</span>
              <span className="font-nier-mono opacity-50 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;