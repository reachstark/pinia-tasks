import { createPinia } from 'pinia'
import { createApp } from 'vue'
import components from './components'

import './index.css'

import './assets/main.css'

import App from './App.vue'

const app = createApp(App).use(createPinia())
app.use(components)
app.mount('#app')
