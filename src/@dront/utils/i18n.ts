import i18next, { type Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * Factory function to create and configure the i18n instance.
 * Provides a method to initialize i18n dynamically with custom resources and language.
 */
const createI18n = () => {
  /**
   * Initializes i18n with the provided resources and language.
   * Will only initialize if the i18n instance is not already initialized.
   *
   * @param {Resource} resources - Translation resources for different languages.
   * @param {string} [lang='en'] - Default language to use.
   * @returns {void}
   */
  const setInit = (resources: Resource, lang = 'en') => {
    if (!i18next.isInitialized) {
      i18next.use(initReactI18next).init({
        resources,
        lng: lang,
        interpolation: {
          escapeValue: false
        }
      });
    }
  };

  return { setInit };
};

/**
 * Singleton instance of i18n created via `createI18n`.
 * Use `i18n.setInit(resources, lang)` to initialize with translations.
 */
const i18n = createI18n();

export default i18n;
