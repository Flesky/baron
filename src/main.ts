import { createApp } from 'vue'
import App from './App.vue'
import router from '@/utils/router'

import './assets/css/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

if (import.meta.env.PROD)
  router.replace('/')
