import Vue from 'vue';
import Vuex from 'vuex';
import type { StoreOptions } from 'vuex';

Vue.use(Vuex);

/** @desc 获取状态管理模块的方法 */
function loadModules() {
  const moduleFiles = require.context('./modules', true, /\.js$/);
  const modules: Record<string, any> = {};
  moduleFiles.keys().forEach((key) => {
    const matched = key.match(/([\w-]+)\./);
    if (matched && matched.length > 1) {
      const moduleName = matched[1];
      modules[moduleName] = moduleFiles(key).default;
    }
  });
  return modules;
}

/** @desc 状态管理模块 */
const modules = loadModules();

export interface RootState {
  language: string;
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
} as StoreOptions<RootState>);
