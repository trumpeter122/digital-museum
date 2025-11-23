import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DREAMS_DATA, CONCEPTS_DATA } from '../constants';
import { DecorativeFrame, SectionDivider, VintageButton } from '../components/common/UIElements';
import { useLanguage } from '../contexts/LanguageContext';

const DreamDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const dream = DREAMS_DATA.find(d => d.id === id);

  if (!dream) return <div className="pt-40 text-center text-3xl font-display">Dream not found</div>;

  // Resolve relationships
  const relatedConceptsList = dream.relatedConcepts 
    ? CONCEPTS_DATA.filter(c => dream.relatedConcepts?.includes(c.id))
    : [];

  const relatedDreamsList = dream.relatedDreams
    ? DREAMS_DATA.filter(d => dream.relatedDreams?.includes(d.id))
    : [];

  return (
    <div className="min-h-screen bg-jungLight-bg dark:bg-jungDark-bg">
      {/* Header */}
      <div className="h-screen sticky top-0 flex flex-col justify-center items-center text-center px-6 z-0">
         <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/stardust.png" alt="texture" className="w-full h-full object-cover mix-blend-overlay" />
         </div>
         <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-jung-gold mb-8 animate-pulse drop-shadow-xl">{t(dream.title)}</h1>
         <p className="font-sans font-bold text-xl text-jungLight-text/70 dark:text-jungDark-text/70 tracking-[0.3em] uppercase mb-16">{t(dream.dateOrPeriod)}</p>
         <div className="animate-bounce text-jung-gold mt-12 text-5xl">↓</div>
      </div>

      {/* Scenes Container - overlays the header */}
      <div className="relative z-10 bg-jungLight-bg dark:bg-jungDark-bg border-t-4 border-jung-gold shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        
        {dream.scenes.map((scene, idx) => (
          <div key={scene.id} className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-24 border-b-2 border-jung-gold/20">
             <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="font-display text-9xl text-jung-gold/10 mb-8 leading-none select-none font-black">{idx + 1}</div>
                <p className="font-body text-3xl md:text-5xl font-medium leading-loose text-jungLight-text dark:text-jungDark-text italic drop-shadow-sm">
                  "{t(scene.text)}"
                </p>
                {scene.interpretation && (
                  <div className="mt-12 p-10 bg-jung-gold/5 border-l-8 border-jung-gold rounded-r">
                    <span className="block text-base font-black text-jung-gold mb-4 uppercase tracking-widest">{t('interpretation')}</span>
                    <p className="font-sans text-lg md:text-xl font-bold opacity-80 leading-relaxed">{t(scene.interpretation)}</p>
                  </div>
                )}
             </div>
             <div className={`w-full md:w-1/2 p-8 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <DecorativeFrame>
                  <img src={scene.imageUrl} alt={`${t('scene')} ${idx + 1}`} className="w-full h-auto max-h-[70vh] object-cover shadow-2xl" />
                </DecorativeFrame>
             </div>
          </div>
        ))}

        {/* Analysis Footer */}
        <div className="py-40 px-6 container mx-auto max-w-6xl text-center">
           <SectionDivider />
           <h3 className="font-display font-bold text-5xl text-jung-gold mb-12 mt-16">{t('jungsReflection')}</h3>
           <p className="font-body text-3xl md:text-4xl font-medium leading-loose text-justify bg-jung-gold/5 p-16 rounded-xl shadow-inner border border-jung-gold/10 mb-24">
             {t(dream.analysis)}
           </p>
           
           {/* Connected Knowledge Graph */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 text-left">
             
             {/* Key Concepts */}
             {relatedConceptsList.length > 0 && (
               <div className="border border-jung-gold/30 p-8 bg-jung-gold/5 rounded">
                 <h4 className="font-display font-bold text-2xl text-jung-gold mb-6 uppercase tracking-widest border-b border-jung-gold/20 pb-4">{t('keyConceptsIdentified')}</h4>
                 <div className="flex flex-wrap gap-4">
                   {relatedConceptsList.map(c => (
                     <Link key={c.id} to={`/concepts/${c.id}`}>
                       <span className="inline-block border-2 border-jung-gold text-jungLight-text dark:text-jungDark-text px-4 py-2 font-sans font-bold text-sm uppercase hover:bg-jung-gold hover:text-jungLight-text transition-colors cursor-pointer">
                         {t(c.name)}
                       </span>
                     </Link>
                   ))}
                 </div>
               </div>
             )}

             {/* Related Dreams */}
             {relatedDreamsList.length > 0 && (
               <div className="border border-jung-gold/30 p-8 bg-jung-gold/5 rounded">
                 <h4 className="font-display font-bold text-2xl text-jung-gold mb-6 uppercase tracking-widest border-b border-jung-gold/20 pb-4">{t('connectedDreams')}</h4>
                 <div className="flex flex-col gap-4">
                   {relatedDreamsList.map(d => (
                     <Link key={d.id} to={`/dreams/${d.id}`} className="group flex items-center justify-between">
                       <span className="font-body text-xl font-bold group-hover:text-jung-gold transition-colors">{t(d.title)}</span>
                       <span className="text-jung-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                     </Link>
                   ))}
                 </div>
               </div>
             )}

           </div>

           <div className="mt-20">
             <Link to="/dreams">
               <VintageButton>{t('returnToGallery')}</VintageButton>
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default DreamDetail;