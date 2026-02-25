export interface NewsItem {
  id: string
  titleKey: string
  summaryKey: string
  date: string
  image: string
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    titleKey: 'items.n1.title',
    summaryKey: 'items.n1.summary',
    date: '2024-12-15',
    image: '/assets/news/news1.jpg',
  },
  {
    id: 'n2',
    titleKey: 'items.n2.title',
    summaryKey: 'items.n2.summary',
    date: '2024-11-20',
    image: '/assets/news/news2.jpg',
  },
  {
    id: 'n3',
    titleKey: 'items.n3.title',
    summaryKey: 'items.n3.summary',
    date: '2024-10-05',
    image: '/assets/news/news3.jpg',
  },
  {
    id: 'n4',
    titleKey: 'items.n4.title',
    summaryKey: 'items.n4.summary',
    date: '2024-09-10',
    image: '/assets/news/news4.jpg',
  },
]
