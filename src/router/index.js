import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'home',
        redirect: '/index',
        component: ()=> import('@/views/home'),
        children:[
          {
            path: '/index',
            name: 'index',
            component: ()=> import('@/views/index'),
          },
          {
            path: '/login',
            name: 'login',
            component: App,
            component: ()=> import('@/views/login')
          },
        ]
      },
      {
        path:'/son',
        name:'son',
        component:()=> import('@/views/son')
      }
    ]
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
