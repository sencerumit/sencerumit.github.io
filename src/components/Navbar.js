import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    // { name: t('nav.projects'), path: '/projects' }, // Disabled as per user request
    // { name: t('nav.articles'), path: '/articles' }, // Disabled as per user request
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-nier-light/90 backdrop-blur-sm border-y border-nier py-2 md:py-4 z-50 shadow-lg">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center min-h-[3rem] md:min-h-[3.5rem]">
          <Link to="/" className="text-base md:text-xl animate-fade">
            <span className="text-nier-dark font-nier tracking-widest whitespace-nowrap">Ümit Sencer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-nier-dark hover:text-nier font-nier-mono text-xs md:text-sm tracking-wider 
                         transition-colors relative group px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-nier-accent"
              >
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 
                                 group-hover:opacity-100 transition-opacity">{`>`}</span>
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-nier-dark border border-nier px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-nier-accent 
                       hover:bg-nier/10 transition-colors text-base"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
            >
              <span className="font-nier-mono text-base">{t('nav.menu')}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 bg-nier-light/95 border border-nier p-3 rounded-lg 
                     backdrop-blur-sm max-h-[60vh] overflow-y-auto flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 text-nier-dark hover:text-nier 
                         font-nier-mono text-base tracking-wider transition-colors
                         border-b border-nier/20 last:border-none px-2 rounded focus:outline-none focus:ring-2 focus:ring-nier-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;