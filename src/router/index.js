import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/register.vue'
import Login from '@/views/login.vue'
import Dashboard from '../views/LoggedPages/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Sign up',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
