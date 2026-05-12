import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importamos o roteador
import './style.css'

// Injetamos o router (.use) antes de montar na tela
createApp(App).use(router).mount('#app')