
import { ConceptId } from './data/registry';

export type Language = 'en' | 'zh';
export type Theme = 'light' | 'dark';

export interface DreamScene {
  id: string;
  text: string;
  imageUrl: string;
  interpretation?: string;
}

export interface Concept {
  id: ConceptId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  relatedConcepts?: ConceptId[]; // Strictly typed IDs
}

export interface ContentText {
  title: string;
  description: string;
}

export interface LocalizedContent {
  [key: string]: {
    en: string;
    zh: string;
  };
}

// Re-export IDs for convenience if needed
export type { ConceptId };
