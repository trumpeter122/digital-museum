
import { Dream } from '../types';

export const DREAMS_DATA: Dream[] = [
  {
    id: 'd1',
    title: 'd_d1_title',
    dateOrPeriod: 'd_d1_date',
    summary: 'd_d1_summary',
    scenes: [
      {
        id: 's1',
        text: 'd_d1_s1_text',
        imageUrl: 'https://picsum.photos/seed/d1s1/800/600?sepia',
        interpretation: 'd_d1_s1_interpretation'
      },
      {
        id: 's2',
        text: 'd_d1_s2_text',
        imageUrl: 'https://picsum.photos/seed/d1s2/800/601?sepia'
      },
      {
        id: 's3',
        text: 'd_d1_s3_text',
        imageUrl: 'https://picsum.photos/seed/d1s3/800/602?sepia'
      }
    ],
    analysis: 'd_d1_analysis',
    relatedConcepts: ['shadow', 'archetypes', 'dreams-concept'],
    relatedDreams: ['d2']
  },
  {
    id: 'd2',
    title: 'd_d2_title',
    dateOrPeriod: 'd_d2_date',
    summary: 'd_d2_summary',
    scenes: [
      {
        id: 's1',
        text: 'd_d2_s1_text',
        imageUrl: 'https://picsum.photos/seed/d2s1/800/603?sepia'
      },
      {
        id: 's2',
        text: 'd_d2_s2_text',
        imageUrl: 'https://picsum.photos/seed/d2s2/800/604?sepia'
      },
      {
        id: 's3',
        text: 'd_d2_s3_text',
        imageUrl: 'https://picsum.photos/seed/d2s3/800/605?sepia'
      }
    ],
    analysis: 'd_d2_analysis',
    relatedConcepts: ['archetypes', 'individuation', 'psyche'],
    relatedDreams: ['d1']
  }
];
