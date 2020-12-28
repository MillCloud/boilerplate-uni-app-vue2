import { getToken, setToken } from '@u/storage';

export default {
  namespaced: true,
  state: {
    token: getToken(),
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
  },
  actions: {},
};
