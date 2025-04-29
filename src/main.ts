import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 样式一定要引入！

const app = createApp(App)

app.use(router)
app.use(ElementPlus) // 把 Element Plus 安装到 app 上
app.mount('#app')
