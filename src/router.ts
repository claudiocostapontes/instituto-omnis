import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SobreNosView from './views/SobreNosView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre-nos',
      name: 'sobre',
      component: SobreNosView
    }
  ]
})

export default router