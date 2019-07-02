import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import VueRouter from 'vue-router'
import routes from './router/index.js'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});
