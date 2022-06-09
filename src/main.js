import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

// import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// main.ts
// import { createApp } from 'vue'

// import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.mount('#app')
