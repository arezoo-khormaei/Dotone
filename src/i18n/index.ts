import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/translation.json";
import fa from "../locales/fa/translation.json";
import ar from "../locales/ar/translation.json";
import ru from "../locales/ru/translation.json";
import tr from "../locales/tr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    ar: { translation: ar },
    ru: { translation: ru },
    tr: { translation: tr },
  },
  fallbackLng: "fa",
  lng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
