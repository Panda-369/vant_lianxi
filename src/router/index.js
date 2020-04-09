import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'
Vue.use(NProgress)
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
  }]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  NProgress.start() 
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
