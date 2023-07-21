import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AlertasView from '../views/AlertasView.vue'
import ImagenesView from '../views/ImagenesView.vue'
import ClientesView from '../views/ClientesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/alertas',
    name: 'alertas',
    component: AlertasView
  },
  {
    path: '/imagenes',
    name: 'imagenes',
    component: ImagenesView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default router
