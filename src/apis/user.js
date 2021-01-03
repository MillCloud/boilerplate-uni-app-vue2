import request from '@/plugins/request';

export function signIn({ username, password }) {
  return request('/api/sign-in', {
    username,
    password,
  });
}

export function signUp({ email, username, nickname, password }) {
  return request('/api/sign-up', {
    email,
    username,
    nickname,
    password,
  });
}

export default {
  signIn,
  signUp,
};
