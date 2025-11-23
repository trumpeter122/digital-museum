
// This file defines the allowable IDs for the application.
// It acts as the single source of truth for relationship linking.

export const CONCEPT_IDS = [
  'alchemy',
  'anima-animus',
  'archetypes',
  'complexes',
  'dreams-concept', // distinct from the page route /dreams
  'individuation',
  'personality-types',
  'persona',
  'psyche',
  'self',
  'shadow',
  'synchronicity'
] as const;

export type ConceptId = typeof CONCEPT_IDS[number];

export const DREAM_IDS = [
  'd1',
  'd2'
] as const;

export type DreamId = typeof DREAM_IDS[number];
