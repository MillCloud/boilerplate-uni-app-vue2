import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getLanguage } from '@/utils/storage';

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[\s\w,-]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([\w-]+)\./);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = {
        ...locales(key),
      };
    }
  });
  return messages;
}

export default new VueI18n({
  locale: getLanguage() || process.env.VUE_APP_I18N_LOCALE || 'zh-Hans',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-Hans',
  messages: loadLocaleMessages(),
});
