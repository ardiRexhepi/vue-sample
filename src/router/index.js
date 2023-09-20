import { createRouter, createWebHistory } from 'vue-router'
import SampleHomePage from '../components/SampleHomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SampleHomePage
    }
  ]
})

export default router
