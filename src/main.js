import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

// 👉 AOS import
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// 👉 Initialize AOS after mounting
app.use(router).mount('#app')
AOS.init({
  duration: 800,  // animation speed
  once: true,     // whether animation should happen only once
})
