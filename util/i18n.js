import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslations from '../locales/en.json';

const resources = {
  en: {
    translations: enTranslations
  }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources,
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: true, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;