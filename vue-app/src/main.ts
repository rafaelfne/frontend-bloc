import { createApp } from 'vue'
import App from './App.vue'
import dependenciesLocator from './common/dependencies'
const app = createApp(App)
.use(dependenciesLocator)

app.mount('#app')
