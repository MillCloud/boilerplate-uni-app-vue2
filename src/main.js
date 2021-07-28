import Vue from 'vue';
import uView from 'uview-ui';
import '@/plugins';
import { router, RouterMount } from '@/router';
import i18n from './i18n';
import store from './store';
import App from './App.vue';

Vue.use(router);
Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  store,
  i18n,
  ...App,
});

// #ifdef H5
RouterMount(app, router, '#app');
// #endif

// #ifndef H5
app.$mount();
// #endif
