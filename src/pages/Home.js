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
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      >
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-6xl mb-3 sm:mb-4 md:mb-6 animate-glow leading-tight"
        variants={itemVariants}
      >
        <span className="text-matrix break-words">{t('home.greeting')}</span>
      </motion.h1>
      
      <motion.p 
        className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
        variants={itemVariants}
      >
        {t('home.intro')} <span className="text-matrix animate-glow">{t('home.role')}</span>{' '}
        {t('home.description')}
      </motion.p>

      <motion.div 
        className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto justify-center items-center"
        variants={itemVariants}
      >
        <Link to="/about" className="matrix-button w-full md:w-auto min-h-[44px] text-base sm:text-lg">
          {t('home.viewWork')}
        </Link>
        <Link to="/contact" className="matrix-button w-full md:w-auto min-h-[44px] text-base sm:text-lg">
          {t('home.getInTouch')}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;