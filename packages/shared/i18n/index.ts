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
import ruEducation from './locales/ru/education.json'
import ruDevelopers from './locales/ru/developers.json'
import ruLaboratory from './locales/ru/laboratory.json'
import ruProcurement from './locales/ru/procurement.json'

import enCommon from './locales/en/common.json'
import enHero from './locales/en/hero.json'
import enAbout from './locales/en/about.json'
import enProduct from './locales/en/product.json'
import enSchools from './locales/en/schools.json'
import enNews from './locales/en/news.json'
import enContacts from './locales/en/contacts.json'
import enEducation from './locales/en/education.json'
import enDevelopers from './locales/en/developers.json'
import enLaboratory from './locales/en/laboratory.json'
import enProcurement from './locales/en/procurement.json'

export const LANGUAGES = ['ru', 'en'] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = 'ru'
export const NAMESPACES = ['common', 'hero', 'about', 'product', 'schools', 'news', 'contacts', 'education', 'developers', 'laboratory', 'procurement'] as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: ruCommon, hero: ruHero, about: ruAbout, product: ruProduct, schools: ruSchools, news: ruNews, contacts: ruContacts, education: ruEducation, developers: ruDevelopers, laboratory: ruLaboratory, procurement: ruProcurement },
      en: { common: enCommon, hero: enHero, about: enAbout, product: enProduct, schools: enSchools, news: enNews, contacts: enContacts, education: enEducation, developers: enDevelopers, laboratory: enLaboratory, procurement: enProcurement },
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
