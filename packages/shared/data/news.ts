export interface NewsItem {
  id: string
  titleKey: string
  summaryKey: string
  date: string
  image: string
  link?: string
}

// Cache-bust version — increment to force browser reload
const v = '2'

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    titleKey: 'items.n1.title',
    summaryKey: 'items.n1.summary',
    date: '2025-12-24',
    image: `/assets/news/news1.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n2',
    titleKey: 'items.n2.title',
    summaryKey: 'items.n2.summary',
    date: '2025-10-24',
    image: `/assets/news/news2.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n3',
    titleKey: 'items.n3.title',
    summaryKey: 'items.n3.summary',
    date: '2025-10-07',
    image: `/assets/news/news3.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n4',
    titleKey: 'items.n4.title',
    summaryKey: 'items.n4.summary',
    date: '2025-09-29',
    image: `/assets/news/news4.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n5',
    titleKey: 'items.n5.title',
    summaryKey: 'items.n5.summary',
    date: '2024-07-15',
    image: `/assets/news/news5.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n6',
    titleKey: 'items.n6.title',
    summaryKey: 'items.n6.summary',
    date: '2025-03-20',
    image: `/assets/news/news6.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n7',
    titleKey: 'items.n7.title',
    summaryKey: 'items.n7.summary',
    date: '2025-06-10',
    image: `/assets/news/news7.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
  {
    id: 'n8',
    titleKey: 'items.n8.title',
    summaryKey: 'items.n8.summary',
    date: '2025-08-15',
    image: `/assets/news/news8.jpg?v=${v}`,
    link: 'https://t.me/flowtech_adt',
  },
]
