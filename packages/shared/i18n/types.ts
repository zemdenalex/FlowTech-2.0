export const NS = {
  COMMON: 'common',
  HERO: 'hero',
  ABOUT: 'about',
  PRODUCT: 'product',
  SCHOOLS: 'schools',
  NEWS: 'news',
  CONTACTS: 'contacts',
} as const

export type Namespace = (typeof NS)[keyof typeof NS]
