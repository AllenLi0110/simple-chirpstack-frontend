import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import naive from 'naive-ui';
import router from './routes';

const app = createApp(App);
app.use(createPinia());
app.use(naive);
app.use(router);
app.mount('#app');
