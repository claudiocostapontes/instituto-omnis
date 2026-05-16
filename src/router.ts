import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SobreNosView from './views/SobreNosView.vue'
import PsiquiatriaView from './views/PsiquiatriaView.vue' 

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
    },
    // 2. Adicionamos a nova rota aqui
    {
      path: '/psiquiatria',
      name: 'psiquiatria',
      component: PsiquiatriaView
    }
  ]
})

export default router