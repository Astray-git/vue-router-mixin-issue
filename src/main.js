import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Foo from './Foo.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/foo/:id', component: Foo }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
