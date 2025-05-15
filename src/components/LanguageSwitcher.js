import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs font-nier-mono rounded transition-colors ${
          language === 'en'
            ? 'bg-nier-accent text-white'
            : 'bg-nier-light/30 text-nier-dark hover:bg-nier-light/50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-2 py-1 text-xs font-nier-mono rounded transition-colors ${
          language === 'tr'
            ? 'bg-nier-accent text-white'
            : 'bg-nier-light/30 text-nier-dark hover:bg-nier-light/50'
        }`}
      >
        TR
      </button>
    </div>
  );
}

export default LanguageSwitcher; 