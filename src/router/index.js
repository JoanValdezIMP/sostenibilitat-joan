import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClimateView from '../views/ClimateView.vue'
import ESGView from '../views/ESGView.vue'
import FootprintView from '../views/FootprintView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/climate', name: 'climate', component: ClimateView },
  { path: '/esg', name: 'esg', component: ESGView },
  { path: '/footprint', name: 'footprint', component: FootprintView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
