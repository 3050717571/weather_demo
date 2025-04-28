import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 这里是重要的，确保引入了样式

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(ElementPlus)
