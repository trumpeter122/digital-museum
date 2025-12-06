import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { DecorativeFrame, SectionDivider, VintageButton } from '../components/common/UIElements';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-jungLight-bg/0 via-jungLight-bg/50 to-jungLight-bg dark:from-jungDark-bg/0 dark:via-jungDark-bg/50 dark:to-jungDark-bg"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="mb-10 inline-block border-b-2 border-jung-gold pb-2 animate-pulse">
            <span className="font-display font-bold text-jung-gold text-2xl md:text-3xl tracking-[0.3em] uppercase">{t('heroBookTitle')}</span>
          </div>
          <h1 className="font-display font-black text-7xl md:text-9xl text-jungLight-text dark:text-jungDark-text mb-12 drop-shadow-2xl">
            {t('heroTitle')}
          </h1>
          <p className="font-body text-3xl md:text-5xl font-medium text-jungLight-text dark:text-jungDark-text max-w-4xl mx-auto mb-16 leading-relaxed italic drop-shadow-sm">
            {t('heroSubtitle')}
          </p>
          <Link to="/dreams">
            <VintageButton>{t('enterDream')}</VintageButton>
          </Link>
        </div>
      </div>

      {/* Sections */}
      <div className="container mx-auto px-6 relative z-10 -mt-24">
        <div className="grid grid-cols-1 gap-32">

          <DecorativeFrame className="bg-jungLight-bg dark:bg-jungDark-bg">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <img src="./assets/portrait-carl-jung.png" alt="Jung" className="w-full md:w-1/3 h-96 md:h-auto object-cover rounded-sm border-2 border-jung-gold/50" />
              <div className="flex-1 p-6">
                <h2 className="font-display font-bold text-5xl text-jung-gold mb-8">{t('introJung')}</h2>
                <p className="font-body text-2xl md:text-3xl font-medium leading-loose text-jungLight-text dark:text-jungDark-text text-justify">
                  {t('introJungText')}
                </p>
              </div>
            </div>
          </DecorativeFrame>

          <SectionDivider />

          <div className="flex flex-col md:flex-row-reverse items-center gap-20">
            <div className="w-full md:w-1/2">
              <h2 className="font-display font-bold text-6xl text-right text-jung-gold mb-10">{t('introPsych')}</h2>
              <p className="font-body text-2xl md:text-3xl font-medium leading-loose text-right text-jungLight-text dark:text-jungDark-text mb-10">
                {t('introPsychText')}
              </p>
              <div className="text-right">
                <Link to="/concepts">
                  <VintageButton variant="outline">{t('readMore')}</VintageButton>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[500px] relative border-4 border-jung-gold p-3 rounded-full overflow-hidden shadow-2xl">
              <img src="./assets/picture-jung-institute.jpeg" alt="Psychology Art" className="w-full h-full grayscale object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          <DecorativeFrame className="bg-jungLight-bg dark:bg-jungDark-bg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-2 space-y-6">
                <h2 className="font-display font-bold text-5xl text-jung-gold">{t('introBook')}</h2>
                <div className="space-y-4">
                  <p className="font-body text-2xl md:text-3xl font-medium leading-relaxed text-jungLight-text dark:text-jungDark-text">
                    {t('introMDRDescription')}
                  </p>
                  <p className="font-body text-xl md:text-2xl font-medium leading-relaxed text-jungLight-text dark:text-jungDark-text">
                    {t('introMDRStatement')}
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-2xl text-jung-gold mb-3">{t('introMDRScopeTitle')}</h4>
                  <ul className="list-disc list-inside space-y-2 font-body text-xl text-jungLight-text dark:text-jungDark-text">
                    <li>{t('introMDRScope1')}</li>
                    <li>{t('introMDRScope2')}</li>
                    <li>{t('introMDRScope3')}</li>
                  </ul>
                </div>
              </div>
              <div className="w-full h-full flex justify-center">
                <DecorativeFrame className="w-full h-full max-w-sm bg-jungLight-bg dark:bg-jungDark-bg border-dashed border-jung-gold/40">
                  <div className="w-full h-full aspect-[3/4] bg-gradient-to-b from-jung-gold/20 to-transparent dark:from-jung-gold/25 rounded shadow-inner shadow-jung-gold/20 flex items-center justify-center">
                    <img src="./assets/picture-mdr.jpeg" alt="MDR Art" className="w-full h-full grayscale object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </DecorativeFrame>
              </div>
            </div>
          </DecorativeFrame>

        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-28 container mx-auto px-6 max-w-5xl">
        <DecorativeFrame className="bg-jungLight-bg/70 dark:bg-jungDark-bg/70 border-2 border-dashed border-jung-gold/40">
          <h3 className="font-display font-bold text-3xl text-jung-gold mb-4">{t('disclaimerTitle')}</h3>
          <p className="font-body text-lg md:text-xl text-jungLight-text dark:text-jungDark-text leading-relaxed">
            {t('disclaimerText')}
          </p>
        </DecorativeFrame>
      </div>
    </div>
  );
};

export default Home;
