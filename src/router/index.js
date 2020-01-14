import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    name: '/',
    path: '',
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: '/', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/questions-answers')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      }

    ]
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import ('@/views/user')
  }
]

const router = new VueRouter({
  routes
})

export default router
