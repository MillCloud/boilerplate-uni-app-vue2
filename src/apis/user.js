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
  });
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
  });
}

export function renew({ showError = true } = {}) {
  return request({
    method: 'POST',
    url: '/api/renew',
    showError,
  });
}

export default {
  signIn,
  signUp,
  renew,
};
