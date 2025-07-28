import deutsch from './de.json';
import english from './en.json';
import indonesia from './id.json';

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
} as const;

export default resources;
