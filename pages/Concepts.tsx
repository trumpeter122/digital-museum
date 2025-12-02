import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CONCEPTS_DATA } from '../constants';
import { DecorativeFrame, TitleHeading } from '../components/common/UIElements';

const Concepts: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-24 container mx-auto px-6">
      <TitleHeading subtitle={t('archetypesAndPrinciples')}>{t('concepts')}</TitleHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {CONCEPTS_DATA.map((concept) => (
          <Link key={concept.id} to={`/concepts/${concept.id}`} className="group block">
            <DecorativeFrame className="h-full transition-transform duration-300 hover:-translate-y-2">
              <div className="h-72 w-full overflow-hidden mb-8 border-b-2 border-jung-gold/20">
                <img src={concept.imageUrl} alt={t(concept.name)} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0" />
              </div>
              <h3 className="font-display font-bold text-4xl text-jung-gold mb-6 group-hover:text-jungLight-accent dark:group-hover:text-jungDark-accent transition-colors truncate">{t(concept.name)}</h3>
              <p className="font-body text-xl text-jungLight-text dark:text-jungDark-text font-medium opacity-90 line-clamp-4 leading-relaxed">
                {t(concept.shortDescription)}
              </p>
            </DecorativeFrame>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Concepts;
