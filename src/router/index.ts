import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '../views/Layout.vue'
const Layout = import('@/views/Layout.vue')
const Home = () => import('@/views/home/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
