import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl md:text-6xl mb-6 animate-glow"
        variants={itemVariants}
      >
        <span className="text-matrix">{t('home.greeting')}</span>
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl mb-8 max-w-2xl"
        variants={itemVariants}
      >
        {t('home.intro')} <span className="text-matrix animate-glow">{t('home.role')}</span>{' '}
        {t('home.description')}
      </motion.p>

      <motion.div 
        className="flex flex-col md:flex-row gap-4"
        variants={itemVariants}
      >
        <Link to="/projects" className="matrix-button">
          {t('home.viewWork')}
        </Link>
        <Link to="/contact" className="matrix-button">
          {t('home.getInTouch')}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home; 