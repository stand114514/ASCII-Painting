import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/space',
      name: 'space',
      component: () => import('@/views/SpaceView.vue')
    }, {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    }, {
      path: '/message',
      name: 'message',
      component: () => import('@/views/MessageView.vue')
    }, {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/SettingView.vue')
    }, {
      path: '/upload',
      name: 'upload',
      component: () => import('@/views/UploadView.vue')
    }
  ]
})

export default router
