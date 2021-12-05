import Vue from 'vue';
import '@/plugins';
import { createPinia } from 'pinia';
import App from './App.vue';

Vue.config.productionTip = false;

// @ts-ignore
App.mpType = 'app';

const app = new Vue({
  pinia: createPinia(),
  ...App,
});

app.$mount();
