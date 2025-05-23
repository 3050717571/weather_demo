import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index/HomeView.vue'
import AboutView from '@/views/About/AboutView.vue'
import Aiviews from '@/views/Ai/aiviews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/map',
      name: 'map',
      component: AboutView,
    },
    {
      path: '/ai',
      name: 'ai',
      component: Aiviews,
    }
  ],
})

export default router
