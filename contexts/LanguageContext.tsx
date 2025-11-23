import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLang = () => {
    if (isTransitioning) return;

    // Start transition (fade out)
    setIsTransitioning(true);

    // Wait for fade out, then switch language
    setTimeout(() => {
      setLang(prev => (prev === 'en' ? 'zh' : 'en'));
      
      // Wait a brief moment for render, then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Matches CSS transition duration
  };
  
  const t = (key: string) => {
    return TRANSLATIONS[key] ? TRANSLATIONS[key][lang] : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};