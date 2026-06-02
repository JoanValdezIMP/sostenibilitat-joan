import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // <-- ¡ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ AQUÍ!

const app = createApp(App)
app.use(router)
app.mount('#app')