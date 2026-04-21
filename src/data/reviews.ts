export interface Review {
  id: string;
  title: string;
  category: 'Show' | 'Game' | 'Opinion';
  rating?: number; // 1-5
  date: string;
  content: string;
  tags: string[];
}

export const reviews: Review[] = [
  {
    id: '1',
    title: 'The Bear (Season 3)',
    category: 'Show',
    rating: 4,
    date: '2024-06-30',
    content: 'A stressful yet beautiful meditation on grief and excellence. The cinematography remains top-tier.',
    tags: ['drama', 'cooking', 'intense']
  },
  {
    id: '2',
    title: 'Elden Ring: Shadow of the Erdtree',
    category: 'Game',
    rating: 5,
    date: '2024-06-21',
    content: 'Masterpiece. The level design in the Land of Shadow is some of FromSoftware\'s best work to date.',
    tags: ['rpg', 'difficult', 'fantasy']
  },
  {
    id: '3',
    title: 'Why we still need personal blogs',
    category: 'Opinion',
    date: '2024-07-01',
    content: 'The social media landscape is fracturing. Personal spaces like this one feel more important than ever.',
    tags: ['web', 'culture', 'meta']
  }
];
