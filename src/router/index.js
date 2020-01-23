import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Petugas from '../views/Petugas.vue'
import Login from '../views/Login.vue'
import DataSiswa from '../views/DataSiswa.vue'
import DataPelanggaran from '../views/DataPelanggaran.vue'
import InputPelanggaran from '../views/InputPelanggaran.vue'
import PoinSiswa from '../views/PoinSiswa.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login, header: Navbar, footer: Footer}
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/petugas',
    name: 'petugas',
    components: {default: Petugas, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/datasiswa',
    name: 'datasiswa',
    components: {default: DataSiswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/datapelanggaran',
    name: 'datapelanggaran',
    components: {default: DataPelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/inputpelanggaran',
    name: 'inputpelanggaran',
    components: {default: InputPelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/poinsiswa',
    name: 'poinsiswa',
    components: {default: PoinSiswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
