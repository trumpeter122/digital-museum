
import { Concept } from '../types';

export const CONCEPTS_DATA: Concept[] = [
  {
    id: 'alchemy',
    name: 'c_alchemy_name',
    shortDescription: 'c_alchemy_short',
    fullDescription: 'c_alchemy_full',
    imageUrl: './assets/concept-alchemy.png',
    relatedConcepts: ['individuation', 'self', 'synchronicity'],
    relatedDreams: []
  },
  {
    id: 'anima-animus',
    name: 'c_anima_animus_name',
    shortDescription: 'c_anima_animus_short',
    fullDescription: 'c_anima_animus_full',
    imageUrl: './assets/concept-anima-animus.png',
    relatedConcepts: ['archetypes', 'shadow', 'persona'],
    relatedDreams: ['d2']
  },
  {
    id: 'archetypes',
    name: 'c_archetypes_name',
    shortDescription: 'c_archetypes_short',
    fullDescription: 'c_archetypes_full',
    imageUrl: './assets/concept-archetypes.png',
    relatedConcepts: ['anima-animus', 'shadow', 'self'],
    relatedDreams: ['d1', 'd2']
  },
  {
    id: 'complexes',
    name: 'c_complexes_name',
    shortDescription: 'c_complexes_short',
    fullDescription: 'c_complexes_full',
    imageUrl: './assets/concept-complexes.png',
    relatedConcepts: ['archetypes', 'psyche'],
    relatedDreams: []
  },
  {
    id: 'dreams-concept',
    name: 'c_dreams_concept_name',
    shortDescription: 'c_dreams_concept_short',
    fullDescription: 'c_dreams_concept_full',
    imageUrl: './assets/concept-dreams.png',
    relatedConcepts: ['psyche'],
    relatedDreams: ['d1', 'd2']
  },
  {
    id: 'individuation',
    name: 'c_individuation_name',
    shortDescription: 'c_individuation_short',
    fullDescription: 'c_individuation_full',
    imageUrl: './assets/concept-individuation.png',
    relatedConcepts: ['self', 'shadow', 'alchemy'],
    relatedDreams: ['d1', 'd2']
  },
  {
    id: 'personality-types',
    name: 'c_personality_types_name',
    shortDescription: 'c_personality_types_short',
    fullDescription: 'c_personality_types_full',
    imageUrl: './assets/concept-personality-types.png',
    relatedConcepts: ['psyche'],
    relatedDreams: []
  },
  {
    id: 'persona',
    name: 'c_persona_name',
    shortDescription: 'c_persona_short',
    fullDescription: 'c_persona_full',
    imageUrl: './assets/concept-persona.png',
    relatedConcepts: ['shadow', 'anima-animus'],
    relatedDreams: []
  },
  {
    id: 'psyche',
    name: 'c_psyche_name',
    shortDescription: 'c_psyche_short',
    fullDescription: 'c_psyche_full',
    imageUrl: './assets/concept-psyche.png',
    relatedConcepts: ['self', 'complexes'],
    relatedDreams: []
  },
  {
    id: 'self',
    name: 'c_self_name',
    shortDescription: 'c_self_short',
    fullDescription: 'c_self_full',
    imageUrl: './assets/concept-self.png',
    relatedConcepts: ['individuation', 'psyche', 'archetypes'],
    relatedDreams: ['d2']
  },
  {
    id: 'shadow',
    name: 'c_shadow_name',
    shortDescription: 'c_shadow_short',
    fullDescription: 'c_shadow_full',
    imageUrl: './assets/concept-shadow.png',
    relatedConcepts: ['persona', 'anima-animus', 'archetypes'],
    relatedDreams: ['d1']
  },
  {
    id: 'synchronicity',
    name: 'c_synchronicity_name',
    shortDescription: 'c_synchronicity_short',
    fullDescription: 'c_synchronicity_full',
    imageUrl: './assets/concept-synchronicity.png',
    relatedConcepts: ['archetypes', 'psyche', 'alchemy'],
    relatedDreams: []
  }
];
