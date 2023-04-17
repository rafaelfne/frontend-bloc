import { createApp } from 'vue'
import App from './App.vue'
import dependenciesLocator from './common/dependencies'
import './style.css'
const app = createApp(App)
.use(dependenciesLocator)

app.mount('#app')
