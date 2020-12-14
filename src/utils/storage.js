const keyToken = 'token';

/**
 * @return {string} token
 */
export function getToken() {
  return uni.getStorageSync(keyToken) || '';
}

/**
 * @param {string} token
 */
export function setToken(token) {
  return uni.setStorageSync(keyToken, token);
}

export function clear() {
  return uni.clearStorageSync();
}
