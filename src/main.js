import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVueNext } from 'bootstrap-vue-next'

// Import CSS untuk Bootstrap dan BootstrapVue Next
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
