import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CONCEPTS_DATA } from '../constants';
import { DecorativeFrame } from '../components/common/UIElements';
import { useLanguage } from '../contexts/LanguageContext';

const ConceptDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const concept = CONCEPTS_DATA.find(c => c.id === id);
  
  if (!concept) return <div className="pt-40 text-center text-3xl font-display">Concept not found</div>;

  // Resolve related concepts (if they exist in our data)
  const relatedConceptsList = concept.relatedConcepts
    ? CONCEPTS_DATA.filter(c => concept.relatedConcepts?.includes(c.id))
    : [];

  const fullDescription = t(concept.fullDescription);

  return (
    <div className="min-h-screen pt-40 pb-32 container mx-auto px-6 max-w-6xl">
      <Link to="/concepts" className="text-jung-gold hover:underline mb-10 inline-block font-sans text-lg font-bold tracking-wide">{t('backToConcepts')}</Link>
      
      <DecorativeFrame className="p-10 md:p-20">
        <h1 className="font-display font-black text-6xl md:text-8xl text-jung-gold mb-12 text-center">{t(concept.name)}</h1>
        
        <div className="mb-20">
           <img src={concept.imageUrl} alt={t(concept.name)} className="w-full h-[600px] object-cover rounded shadow-2xl border-4 border-double border-jung-gold/30" />
        </div>

        <div className="font-body text-jungLight-text dark:text-jungDark-text">
          <p className="first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-jung-gold first-letter:mr-4 float-left leading-none">
            {fullDescription.charAt(0)}
          </p>
          <p className="text-2xl md:text-3xl font-medium leading-loose text-justify">
            {fullDescription.slice(1)}
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Related Dreams */}
          {concept.relatedDreams && concept.relatedDreams.length > 0 && (
            <div className="p-10 bg-jung-gold/10 border-2 border-jung-gold/30 rounded">
               <h4 className="font-display font-bold text-3xl text-jung-gold mb-6">{t('relatedDreams')}</h4>
               <div className="flex flex-col gap-4">
                  {concept.relatedDreams.map(dId => (
                    <Link key={dId} to={`/dreams/${dId}`} className="text-lg font-bold font-sans hover:text-jungLight-accent dark:hover:text-jungDark-accent underline decoration-jung-gold hover:decoration-jungLight-accent dark:hover:decoration-jungDark-accent underline-offset-4 transition-colors">
                      {t('viewDream')}: {dId} →
                    </Link>
                  ))}
               </div>
            </div>
          )}

          {/* Related Concepts */}
          {relatedConceptsList.length > 0 && (
            <div className="p-10 bg-jung-gold/10 border-2 border-jung-gold/30 rounded">
               <h4 className="font-display font-bold text-3xl text-jung-gold mb-6">{t('relatedConcepts')}</h4>
               <div className="flex flex-col gap-4">
                  {relatedConceptsList.map(relConcept => (
                    <Link key={relConcept.id} to={`/concepts/${relConcept.id}`} className="text-lg font-bold font-sans hover:text-jungLight-accent dark:hover:text-jungDark-accent underline decoration-jung-gold hover:decoration-jungLight-accent dark:hover:decoration-jungDark-accent underline-offset-4 transition-colors">
                      {t(relConcept.name)} →
                    </Link>
                  ))}
               </div>
            </div>
          )}
        </div>

      </DecorativeFrame>
    </div>
  );
};

export default ConceptDetail;