const keyToken = 'token';

/** @return {string} token */
export function getToken() {
  return uni.getStorageSync(keyToken) || '';
}

/** @param {string} token */
export function setToken(token) {
  return uni.setStorageSync(keyToken, token);
}

export function clear() {
  return uni.clearStorageSync();
}

const keyLanguage = 'language';

/** @return {string} language */
export function getLanguage() {
  return uni.getStorageSync(keyLanguage) || process.env.VUE_APP_I18N_LOCALE;
}

/** @param {string} language */
export function setLanguage(language = process.env.VUE_APP_I18N_LOCALE) {
  return uni.setStorageSync(keyLanguage, language);
}
