import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios);

const base = axios.create({
  baseURL: "http://localhost:4000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;



const routes = [
  {
      path: "/",
      name: "home",
      component: () => import("../src/views/HomeComponent.vue")
  }
];

const router = new VueRouter({ 
  mode: "history", 
  base: process.env.BASE_URL, 
  routes
});


  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  

export default router;