import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			en: {
				translation: {
					description: {
						navHome: 'Main',
						navNewPost: 'New Post',
						navSettings: 'Settings',
						navLogin: 'Login'
					}
				}
			},
			ru: {
				translation: {
					description: {
						navHome: 'Главная',
						navNewPost: 'Новая статья',
						navSettings: 'Установки',
						navLogin: 'Войти'
					}
				}
			}
		}
	});

export default i18n;
