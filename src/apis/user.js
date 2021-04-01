import request from '@/plugins/request';

export function signIn({ username, password, showError = true } = {}) {
  return request({
    method: 'POST',
    url: '/api/sign-in',
    data: {
      username,
      password,
    },
    showError,
  })
    .then((response) => response)
    .catch((error) => error);
}

export function signUp({
  email,
  username,
  nickname,
  password,
  showError = true,
} = {}) {
  return request({
    method: 'POST',
    url: '/api/sign-up',
    data: {
      email,
      username,
      nickname,
      password,
    },
    showError,
  })
    .then((response) => response)
    .catch((error) => error);
}

export function renew({ showError = true } = {}) {
  return request({
    method: 'POST',
    url: '/api/renew',
    showError,
  })
    .then((response) => response)
    .catch((error) => error);
}

export default {
  signIn,
  signUp,
  renew,
};
