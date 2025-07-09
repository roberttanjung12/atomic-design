import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deutsch from '../languages/de.json';
import english from '../languages/en.json';
import indonesia from '../languages/id.json';

const resources = {
  de: {
    translation: deutsch
  },
  en: {
    translation: english
  },
  id: {
    translation: indonesia
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});
