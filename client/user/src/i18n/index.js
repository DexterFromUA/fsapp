import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './ru/locale';
import en from './en/locale';

const resources = {
    en: en,
    ru: ru
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        saveMissing: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
