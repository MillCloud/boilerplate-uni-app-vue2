/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function loadModules() {
  const moduleFiles = require.context('./modules', true, /\.js$/);
  const modules = {};
  moduleFiles.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const moduleName = matched[1];
      modules[moduleName] = moduleFiles(key).default;
    }
  });
  return modules;
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: loadModules(),
});
