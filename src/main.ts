import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store/index'
import './assets/styles/tailwind.css'
import 'normalize.css'
import '@/assets/styles/common.less'
createApp(App)
  .use(store, key)
  .use(router)
  .mount('#app')
