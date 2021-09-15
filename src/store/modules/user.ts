import type { Module } from 'vuex';
import { getToken, setToken } from '@/utils';

export interface UserState {
  token: string;
}

export default {
  namespaced: true,
  state: {
    token: getToken(),
  },
  getters: {},
  mutations: {
    setToken(state, { token = '' }: { token?: string }) {
      state.token = token;
      setToken(token);
    },
  },
  actions: {},
} as Module<UserState, undefined>;
