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
