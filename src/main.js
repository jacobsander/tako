import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import routes from './routing/index.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  el: '#app'
})
