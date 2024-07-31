// import 'intl-pluralrules';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as RNLocalize from 'react-native-localize';
// import en from './locales/en.json';
// import fr from './locales/fr.json';

// let lang ="en";

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: async (callback) => {
//     try {
//       const savedDataJSON = await AsyncStorage.getItem('user-language');
//       const savedLanguage = savedDataJSON ? savedDataJSON : null;
//       const bestLanguage = savedLanguage || RNLocalize.getLocales()[0].languageCode;
//       console.log('Detected language:', bestLanguage);
//       callback(bestLanguage);
//     } catch (error) {
//       console.error('Error detecting language:', error);
//       callback('en'); // Fallback to English if there's an error
//     }
//   },
//   init: () => {},
//   cacheUserLanguage: async (language) => {
//     try {
//       await AsyncStorage.setItem('user-language', language);
//       console.log("Cached user language:", language);
//       lang=language;
//     } catch (error) {
//       console.error('Error caching user language:', error);
//     }
//   }
// };

// // i18n
// //   // .use(languageDetector)
// //   // .use(initReactI18next)
// //   .init({
// //     fallbackLng: lang,
// //     language:lang,
// //     resources: {
// //       en: { translation: en },
// //       fr: { translation: fr }
// //     },
// //     interpolation: {
// //       escapeValue: false
// //     },
// //     react: {
// //       useSuspense: false
// //     }
// //   });

// // // // Explicitly change language after initialization to test
// // // i18n.on('initialized', () => {
// // //   const currentLanguage = i18n.language;
// // //   console.log('Current language after init:', currentLanguage);
// // // });

// // export default i18n;




import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';
import fr from './locales/fr.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    try {
      const savedDataJSON = await AsyncStorage.getItem('user-language');
      const savedLanguage = savedDataJSON ? savedDataJSON : null;
      // const bestLanguage = "fr";
      const bestLanguage = savedLanguage || RNLocalize.getLocales()[0].languageCode;
      console.log('Detected language:', bestLanguage);
      callback(bestLanguage);
    } catch (error) {
      console.error('Error detecting language:', error);
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async (language) => {
    try {
      await AsyncStorage.setItem('user-language', language);
      console.log("Cached user language:", language);
    } catch (error) {
      console.error('Error caching user language:', error);
    }
  }
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
