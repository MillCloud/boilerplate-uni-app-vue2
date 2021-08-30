import Vue from 'vue';
import uView from 'uview-ui';
import '@/plugins';
import i18n from './i18n';
import store from './store';
import App from './App.vue';

Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  store,
  i18n,
  ...App,
});

app.$mount();
