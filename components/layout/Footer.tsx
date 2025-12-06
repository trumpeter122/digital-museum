import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-jungLight-text dark:bg-jungDark-bg text-jungLight-bg dark:text-jungDark-text py-20 mt-24 border-t-4 border-jung-gold">
      <div className="container mx-auto px-8 text-center">
        <h3 className="font-display text-4xl font-bold text-jung-gold mb-8">{t('museumTitle')}</h3>
        <p className="font-body text-2xl opacity-80 italic mb-10 font-medium">"Who looks outside, dreams; who looks inside, awakes."</p>
        {/* <div className="text-base font-sans font-bold opacity-50 tracking-wider"> */}
        {/*   {new Date().getFullYear()} A tribute to C.G. Jung. */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
