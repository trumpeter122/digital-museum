import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DREAMS, CONCEPTS_DATA } from '../constants';
import { DecorativeFrame, SectionDivider, VintageButton } from '../components/common/UIElements';
import { useLanguage } from '../contexts/LanguageContext';
import { getContentLines, getContentString, isSceneBlock } from '../utils/content';
import { DreamContentBlock, SceneBlock } from '../types';

const DreamDetail: React.FC = () => {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const dreams = DREAMS.dreams;
  const dream = dreams.find(d => d.id === id);

  if (!dream) return <div className="pt-40 text-center text-3xl font-display">Dream not found</div>;

  const dreamTitle = getContentString(dream.title, lang);
  const dreamTime = getContentString(dream.time, lang);

  const relatedConceptsList = CONCEPTS_DATA.filter(c =>
    dream.relatedConcepts?.includes(c.id)
  );

  const relatedDreamsList = dreams
    .filter(
      d =>
        d.id !== dream.id &&
        d.relatedConcepts.some(concept => dream.relatedConcepts.includes(concept))
    )
    .slice(0, 4);

  const heroScene = dream.contents.find(
    (block): block is SceneBlock => isSceneBlock(block) && !!block.image
  );
  const heroImage = heroScene?.image?.path;

  let sceneCounter = 0;

  const blockLabel = (block: DreamContentBlock) => {
    switch (block.textBlockType) {
      case 'context':
        return t('context');
      case 'interpretation':
        return t('interpretation');
      case 'impact':
        return t('impact');
      case 'scene':
        sceneCounter += 1;
        return `${t('scene')} ${sceneCounter}`;
      default:
        return '';
    }
  };

  const stylesForBlock = (block: DreamContentBlock) => {
    switch (block.textBlockType) {
      case 'context':
        return {
          wrapper:
            'bg-jungLight-bg dark:bg-jungDark-bg/70 border-l-4 border-jung-gold/60 shadow-lg shadow-jung-gold/10',
          text: 'text-jungLight-text dark:text-jungDark-text'
        };
      case 'interpretation':
        return {
          wrapper:
            'bg-gradient-to-r from-jung-gold/15 via-jung-gold/10 to-transparent border border-jung-gold/40 shadow-lg shadow-jung-gold/20',
          text: 'text-jungLight-text dark:text-jungDark-text italic'
        };
      case 'impact':
        return {
          wrapper:
            'bg-jung-gold/12 dark:bg-jung-gold/10 border border-jung-gold/35 shadow-lg shadow-jung-gold/15',
          text: 'text-jungLight-text dark:text-jungDark-text'
        };
      case 'scene':
        return {
          wrapper:
            'bg-jungLight-bg dark:bg-jungDark-bg border border-jung-gold/25 shadow-xl shadow-jung-gold/10',
          text: 'text-jungLight-text dark:text-jungDark-text'
        };
      default:
        return {
          wrapper: 'border border-jung-gold/20',
          text: 'text-jungLight-text dark:text-jungDark-text'
        };
    }
  };

  return (
    <div className="min-h-screen bg-jungLight-bg dark:bg-jungDark-bg">
      {/* Hero */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <img
            src={heroImage}
            alt={dreamTitle}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-jungLight-bg/20 via-jungLight-bg/70 to-jungLight-bg dark:from-jungDark-bg/20 dark:via-jungDark-bg/70 dark:to-jungDark-bg" />
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <img
            src="https://www.transparenttextures.com/patterns/stardust.png"
            alt="texture"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="font-sans font-bold text-xs md:text-sm tracking-[0.35em] uppercase text-jung-gold mb-6">
            {dreamTime}
          </p>
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-jungLight-text dark:text-jungDark-text mb-8 drop-shadow-2xl transition-colors hover:text-jungLight-accent dark:hover:text-jungDark-accent">
            {dreamTitle}
          </h1>
          {dream.location?.txt && (
            <p className="font-body text-lg md:text-xl text-jungLight-text/80 dark:text-jungDark-text/80">
              {t('sourceNote')}: {dream.location.txt.path}:{dream.location.txt.line}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-jungLight-bg dark:bg-jungDark-bg border-t-4 border-jung-gold shadow-[0_-20px_50px_rgba(0,0,0,0.25)]">
        <div className="container mx-auto px-6 py-20 max-w-6xl space-y-16">
          {dream.contents.map((block, idx) => {
            const lines = getContentLines(block.text, lang);
            const isScene = isSceneBlock(block);
            const label = blockLabel(block);
            const styles = stylesForBlock(block);

            return (
              <div
                key={block.id}
                className={`p-8 md:p-10 rounded-xl ${styles.wrapper}`}
              >
                <div className="flex items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-display text-3xl text-jung-gold drop-shadow-sm">{idx + 1}</span>
                  </div>
                  {isScene && block.image && (
                    <span className="text-xs font-sans font-semibold uppercase tracking-wide text-jung-gold/80">
                      {t('visual')}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  {lines.map((line, i) => (
                    <p
                      key={`${block.id}-${i}`}
                      className={`font-body text-xl md:text-2xl leading-relaxed ${styles.text}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {isScene && block.image && (
                  <div className="mt-8">
                    <DecorativeFrame>
                      <img
                        src={block.image.path}
                        alt={label}
                        className="w-full h-full object-cover max-h-[70vh]"
                      />
                    </DecorativeFrame>
                  </div>
                )}
              </div>
            );
          })}

          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedConceptsList.length > 0 && (
              <div className="border border-jung-gold/30 p-8 bg-jung-gold/5 rounded">
                <h4 className="font-display font-bold text-2xl text-jung-gold mb-6 uppercase tracking-widest border-b border-jung-gold/20 pb-4">
                  {t('keyConceptsIdentified')}
                </h4>
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

            {/* {relatedDreamsList.length > 0 && ( */}
            {/*   <div className="border border-jung-gold/30 p-8 bg-jung-gold/5 rounded"> */}
            {/*     <h4 className="font-display font-bold text-2xl text-jung-gold mb-6 uppercase tracking-widest border-b border-jung-gold/20 pb-4"> */}
            {/*       {t('connectedDreams')} */}
            {/*     </h4> */}
            {/*     <div className="flex flex-col gap-4"> */}
            {/*       {relatedDreamsList.map(d => ( */}
            {/*         <Link key={d.id} to={`/dreams/${d.id}`} className="group flex items-center justify-between"> */}
            {/*           <span className="font-body text-xl font-bold group-hover:text-jung-gold transition-colors"> */}
            {/*             {getContentString(d.title, lang)} */}
            {/*           </span> */}
            {/*           <span className="text-jung-gold opacity-0 group-hover:opacity-100 transition-opacity"> */}
            {/*             → */}
            {/*           </span> */}
            {/*         </Link> */}
            {/*       ))} */}
            {/*     </div> */}
            {/*   </div> */}
            {/* )} */}
          </div>

          <div className="text-center">
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
