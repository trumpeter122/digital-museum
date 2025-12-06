import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
    ? 'bg-jungLight-bg/95 dark:bg-jungDark-bg/95 shadow-lg py-4 border-b border-jung-gold/30'
    : 'bg-transparent py-8'
    }`;

  const linkClass = (path: string) => `transition-colors ${location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
    ? 'text-jung-gold'
    : 'text-jungLight-text dark:text-jungDark-text hover:text-jungLight-accent dark:hover:text-jungDark-accent'
    }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-8 flex justify-between items-center space-x-6">
        <Link to="/" className="font-display text-3xl md:text-4xl font-black text-jung-gold tracking-widest hover:opacity-80 transition-opacity">
          Digital Museum
        </Link>

        <div className="hidden md:flex space-x-10 font-display tracking-wide text-lg font-bold">
          <Link to="/" className={linkClass('/')}>{t('home')}</Link>
          <Link to="/concepts" className={linkClass('/concepts')}>{t('concepts')}</Link>
          <Link to="/dreams" className={linkClass('/dreams')}>{t('dreams')}</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={toggleLang} className="font-sans text-sm font-black border-2 border-jung-gold rounded px-4 py-2 text-jungLight-text dark:text-jungDark-text hover:bg-jung-gold hover:text-jungLight-text transition-colors uppercase tracking-wider">
            {lang}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-jungLight-text dark:text-jungDark-text font-bold text-2xl">
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
