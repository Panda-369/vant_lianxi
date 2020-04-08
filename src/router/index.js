import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    redirect: '/index',
  },
  {
  path: '/login',
  name: 'login',
  component: App,
  component: ()=> import('@/views/login')
},
{
  path: '/index',
  name: 'index',
  component: App,
  component: ()=> import('@/views/index'),
},
]

const router = new VueRouter({
  routes
})

export default router
