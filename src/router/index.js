/* eslint-disable no-unused-vars */
import { RouterMount, createRouter } from 'uni-simple-router';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...process.env.routes],
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {});

export { router, RouterMount };
