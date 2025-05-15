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
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.articles'), path: '/articles' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-nier-light/90 backdrop-blur-sm border-y border-nier py-4 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl animate-fade">
            <span className="text-nier-dark font-nier tracking-widest">ポートフォリオ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-nier-dark hover:text-nier font-nier-mono text-sm tracking-wider 
                         transition-colors relative group"
              >
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 
                                 group-hover:opacity-100 transition-opacity">{`>`}</span>
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="text-nier-dark border border-nier px-2 py-1 
                       hover:bg-nier/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-nier-mono text-sm">{t('nav.menu')}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-nier-light/95 border border-nier p-4 
                     backdrop-blur-sm"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-nier-dark hover:text-nier 
                         font-nier-mono text-sm tracking-wider transition-colors
                         border-b border-nier/20 last:border-none"
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