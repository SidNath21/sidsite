import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/Home'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
})

export default router