import Vue from 'vue';
import { enableAllPlugins } from 'immer';
import '@/plugins';
import store from './store';
import App from './App.vue';

enableAllPlugins();

Vue.config.productionTip = false;

// @ts-ignore
App.mpType = 'app';

const app = new Vue({
  store,
  ...App,
});

app.$mount();
