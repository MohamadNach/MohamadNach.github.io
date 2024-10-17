import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/en.json';
import fi from './locales/fi/fi.json';
import ar from './locales/ar/ar.json';

const fallbackLanguage = 'en';

const resources = {
  en: { translation: en },
  fi: { translation: fi },
  ar: { translation: ar },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: fallbackLanguage,
    lng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
