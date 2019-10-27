import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

import pt from './translations/pt.json';
import en from './translations/en.json';

i18n.locale = RNLocalize.getLocales()[0].languageTag;
i18n.defaultLocale = 'pt-BR';
i18n.fallbacks = true;
i18n.translations = { en, pt };

export default i18n;
