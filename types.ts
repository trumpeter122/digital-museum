
import { ConceptId, DreamId } from './data/registry';

export type Language = 'en' | 'zh';
export type Theme = 'light' | 'dark';

export interface DreamScene {
  id: string;
  text: string;
  imageUrl: string; // Placeholder image URL
  interpretation?: string;
}

export interface Dream {
  id: DreamId;
  title: string;
  dateOrPeriod: string;
  summary: string;
  scenes: DreamScene[];
  analysis: string; // Jung's analysis
  relatedConcepts?: ConceptId[]; // Strictly typed IDs
  relatedDreams?: DreamId[]; // Strictly typed IDs
}

export interface Concept {
  id: ConceptId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  relatedDreams?: DreamId[]; // Strictly typed IDs
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
export type { ConceptId, DreamId };
