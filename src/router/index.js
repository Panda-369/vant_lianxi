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
  component: ()=> import('@/views/index/index'),
},
{
  path: '/class',
  name: 'class',
  component: App,
  component: ()=> import('@/views/class/class'),
},
{
  path:'/class/detail',
  name:'classDetail',
  component: App,
  component:()=> import('@/views/class/detail')
},
{
  path: '/shopCart',
  name: 'shopCart',
  component: App,
  component: ()=> import('@/views/shopCart/shopCart'),
},
{
  path: '/mine',
  name: 'mine',
  component: App,
  component: ()=> import('@/views/mine/mine'),
},
]

const router = new VueRouter({
  routes
})

export default router
