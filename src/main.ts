import { createApp } from 'vue'
import App from './App.vue'
import router from '@/utils/router'

import './assets/main.css'
import 'material-symbols'

const app = createApp(App)
app.use(router)
app.mount('#app')
