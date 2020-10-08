import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/NotLogged/Login.vue'
import Register from '../views/NotLogged/Register.vue'
import Dashboard from '../views/Logged/Dashboard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
