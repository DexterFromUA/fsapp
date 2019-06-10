import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            'Cart': 'Cart',
            'Filters': 'Filters',
            'Amount items at one page': 'Amount items at one page',
            'Set': 'Set',
            'Filter by Date': 'Filter by Date',
            'Filter': 'Filter',
            'Clear Filter': 'Clear Filter',
            'Add': 'Add',
            'have no items': 'Have no items',
            'Language': 'Language',
            'Title': 'Title',
            'Amount': 'Amount',
            'Price': 'Price',
            'Delete': 'Delete'
        }
    },
    ru: {
        translation: {
            'Cart': 'Корзина',
            'Filters': 'Фильтры',
            'Amount items at one page': 'Количество книг на одной странице',
            'Set': 'Установить',
            'Filter by Date': 'Фильтр по дате',
            'Filter': 'Фильтровать',
            'Clear Filter': 'Очистить фильтр',
            'Add': 'В корзину',
            'have no items': 'Пусто',
            'Language': 'Язык',
            'Title': 'Название',
            'Amount': 'Количество',
            'Price': 'Цена (общая)',
            'Delete': 'Удалить'
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        // lng: 'en',
        fallbackLng: 'en',
        saveMissing: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
