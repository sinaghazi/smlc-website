// Import all translation files
import en from './en.json';
import fi from './fi.json';

// Define supported languages
export type SupportedLanguage = 'en' | 'fi';

// Create a translations object with all languages
const translations: Record<SupportedLanguage, any> = {
  en,
  fi
};

/**
 * Get translations for a specific language
 * @param language The language code
 * @returns The translations for the specified language, or English as fallback
 */
export const getTranslations = (language: SupportedLanguage) => {
  return translations[language] || translations.en;
};

/**
 * Get a list of all supported languages with their names
 * @returns Array of language objects with code and name
 */
export const getSupportedLanguages = () => [
  { code: 'en', name: 'English' },
  { code: 'fi', name: 'Suomi' }
];

export default translations;
