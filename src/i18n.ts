import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { zh } from "./locales/zh";

const savedLanguage = localStorage.getItem("jane-portfolio-language");
const initialLanguage = savedLanguage === "en" ? "en" : "zh-CN";

void i18n.use(initReactI18next).init({
  resources: {
    "zh-CN": zh,
    en,
  },
  lng: initialLanguage,
  fallbackLng: "zh-CN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
