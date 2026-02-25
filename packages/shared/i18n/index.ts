import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ruCommon from './locales/ru/common.json'
import ruHero from './locales/ru/hero.json'
import ruAbout from './locales/ru/about.json'
import ruProduct from './locales/ru/product.json'
import ruSchools from './locales/ru/schools.json'
import ruNews from './locales/ru/news.json'
import ruContacts from './locales/ru/contacts.json'

import enCommon from './locales/en/common.json'
import enHero from './locales/en/hero.json'
import enAbout from './locales/en/about.json'
import enProduct from './locales/en/product.json'
import enSchools from './locales/en/schools.json'
import enNews from './locales/en/news.json'
import enContacts from './locales/en/contacts.json'

import zhCommon from './locales/zh/common.json'
import zhHero from './locales/zh/hero.json'
import zhAbout from './locales/zh/about.json'
import zhProduct from './locales/zh/product.json'
import zhSchools from './locales/zh/schools.json'
import zhNews from './locales/zh/news.json'
import zhContacts from './locales/zh/contacts.json'

export const LANGUAGES = ['ru', 'en', 'zh'] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = 'ru'
export const NAMESPACES = ['common', 'hero', 'about', 'product', 'schools', 'news', 'contacts'] as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: ruCommon, hero: ruHero, about: ruAbout, product: ruProduct, schools: ruSchools, news: ruNews, contacts: ruContacts },
      en: { common: enCommon, hero: enHero, about: enAbout, product: enProduct, schools: enSchools, news: enNews, contacts: enContacts },
      zh: { common: zhCommon, hero: zhHero, about: zhAbout, product: zhProduct, schools: zhSchools, news: zhNews, contacts: zhContacts },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: 'common',
    ns: [...NAMESPACES],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
  })

export default i18n
