import Vue from 'vue';
import uView from 'uview-ui';
import App from './App.vue';

Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App,
});

app.$mount();
