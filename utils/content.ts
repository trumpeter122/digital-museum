import { Content, DreamContentBlock, Language, SceneBlock } from '../types';

const pickContentValue = (content: Content, lang: Language) => {
  return content[lang] ?? content.en ?? '';
};

export const getContentLines = (content: Content, lang: Language): string[] => {
  const value = pickContentValue(content, lang);
  return Array.isArray(value) ? value : [value];
};

export const getContentString = (content: Content, lang: Language): string => {
  const value = pickContentValue(content, lang);
  return Array.isArray(value) ? value.join(' ') : value;
};

export const isSceneBlock = (
  block: DreamContentBlock
): block is SceneBlock => block.textBlockType === 'scene';
