import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClimateView from '../views/ClimateView.vue'
import FootprintView from '../views/FootprintView.vue'
import ESGView from '../views/ESGView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/climate',
      name: 'climate',
      component: ClimateView
    },
    {
      path: '/footprint',
      name: 'footprint',
      component: FootprintView
    },
    {
      path: '/esg',
      name: 'esg',
      component: ESGView
    }
  ]
})

export default router