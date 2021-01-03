import Vue from 'vue';
import Vuex from 'vuex';
import { getLanguage, setLanguage } from '@u/storage';

Vue.use(Vuex);

/** @desc 获取状态管理模块的方法 */
function loadModules() {
  const moduleFiles = require.context('./modules', true, /\.js$/);
  const modules = {};
  moduleFiles.keys().forEach((key) => {
    const matched = key.match(/([\w-]+)\./i);
    if (matched && matched.length > 1) {
      const moduleName = matched[1];
      modules[moduleName] = moduleFiles(key).default;
    }
  });
  return modules;
}

/** @desc 状态管理模块 */
const modules = loadModules();

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
    language: getLanguage(),
  },
  getters: {},
  mutations: {
    setLanguage(state, language = process.env.VUE_APP_I18N_LOCALE) {
      state.language = language;
      setLanguage(language);
    },
  },
  actions: {},
  modules,
});
