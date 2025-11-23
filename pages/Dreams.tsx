import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { DREAMS_DATA } from '../constants';
import { TitleHeading, VintageButton } from '../components/common/UIElements';

const Dreams: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-32 container mx-auto px-6">
       <TitleHeading subtitle={t('royalRoad')}>{t('dreams')}</TitleHeading>

       <div className="max-w-7xl mx-auto relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-jung-gold opacity-40"></div>

          <div className="space-y-32">
             {DREAMS_DATA.map((dream, index) => {
               const isEven = index % 2 === 0;
               return (
                 <div key={dream.id} className={`flex flex-col md:flex-row items-center gap-16 relative ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Dot on timeline */}
                    <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-jung-gold rounded-full -translate-x-1/2 border-4 border-jungLight-bg dark:border-jungDark-bg z-10 shadow-lg"></div>

                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                       <span className="font-sans text-base font-bold tracking-widest text-jung-gold mb-4 block">{t(dream.dateOrPeriod)}</span>
                       <h3 className="font-display font-black text-5xl mb-6 text-jungLight-text dark:text-jungDark-text">{t(dream.title)}</h3>
                       <p className="font-body text-2xl md:text-3xl font-medium opacity-90 mb-10 leading-relaxed">{t(dream.summary)}</p>
                       <Link to={`/dreams/${dream.id}`}>
                         <VintageButton variant="outline">{t('exploreDream')}</VintageButton>
                       </Link>
                    </div>
                    
                    <div className="w-full md:w-1/2 pl-20 md:pl-0">
                       <div className="aspect-[4/3] overflow-hidden border-4 border-jung-gold/20 rounded hover:border-jung-gold/60 transition-colors shadow-xl">
                          <img src={dream.scenes[0].imageUrl} alt={t(dream.title)} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                       </div>
                    </div>

                 </div>
               );
             })}
          </div>
       </div>
    </div>
  );
};

export default Dreams;