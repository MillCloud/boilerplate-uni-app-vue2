const keyToken = 'token';

export function getToken(): string {
  return uni.getStorageSync(keyToken) || '';
}

export function setToken(token: string) {
  return uni.setStorageSync(keyToken, token);
}

export function clearStorage() {
  return uni.clearStorageSync();
}

const keyLanguage = 'language';

export function getLanguage(): string {
  return uni.getStorageSync(keyLanguage) || process.env.VUE_APP_I18N_LOCALE;
}

export function setLanguage(language = process.env.VUE_APP_I18N_LOCALE) {
  return uni.setStorageSync(keyLanguage, language);
}
