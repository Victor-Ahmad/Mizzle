import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createBootstrap } from 'bootstrap-vue-next'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import Toast, { type PluginOptions } from 'vue-toastification'
import { FcGoogle } from 'oh-vue-icons/icons'

import 'bs-stepper/dist/css/bs-stepper.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/swiper-bundle.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/scss/style.scss'
import 'vue-toastification/dist/index.css'

const toastOptions: PluginOptions = {}
addIcons(FcGoogle)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.use(createBootstrap())
app.use(BootstrapIconsPlugin)
app.use(Toast, toastOptions)

app.mount('#app')
