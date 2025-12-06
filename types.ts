
import { ConceptId } from './data/registry';

export type Language = 'en' | 'zh';
export type Theme = 'light' | 'dark';

export type ContentValue = string | string[];
export type Content = {
  en: ContentValue;
  zh: ContentValue;
  [key: string]: ContentValue;
};

export type TextBlock = {
  id: string;
  text: Content;
};

export type ContextBlock = TextBlock & { textBlockType: 'context' };
export type InterpretationBlock = TextBlock & { textBlockType: 'interpretation' };
export type ImpactBlock = TextBlock & { textBlockType: 'impact' };
export type SceneBlock = TextBlock & {
  textBlockType: 'scene';
  image: {
    path: string;
    _prompt?: string;
  } | null;
};

export type DreamContentBlock =
  | ContextBlock
  | InterpretationBlock
  | ImpactBlock
  | SceneBlock;

export interface Dream {
  id: string;
  title: Content;
  time: Content;
  location: any;
  contents: DreamContentBlock[];
  relatedConcepts: ConceptId[];
}

export interface DreamsData {
  dreams: Dream[];
  metadata: any;
}

export interface Concept {
  id: ConceptId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  relatedConcepts?: ConceptId[];
  relatedDreams?: string[];
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
