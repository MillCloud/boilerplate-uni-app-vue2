import Vue from 'vue';
import Vuex from 'vuex';
import type { StoreOptions } from 'vuex';
import i18n from '@/i18n';
import { getLanguage, setLanguage } from '@/utils';

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
  state: {
    language: getLanguage(),
  },
  getters: {},
  mutations: {
    setLanguage(
      state,
      {
        language = process.env.VUE_APP_I18N_LOCALE || 'zh-Hans',
      }: {
        language?: string;
      },
    ) {
      state.language = language;
      setLanguage(language);
      i18n.locale = language;
    },
  },
  actions: {},
  modules,
} as StoreOptions<RootState>);
