import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationEN from "./locales/en/translationEN.json"
import translationPL from "./locales/pl/translationPL.json"

const resources = {
    en: {
        translation: translationEN
    },
    pl: {
        translation: translationPL
    }
};

i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "pl",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;