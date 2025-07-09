// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import { router } from './router'

// import MengyuePlus from 'mengyue-plus'
// import 'mengyue-plus/style.css'

import MengyuePlus from '../../packages/components/index'

const app = createApp(App);
app.use(MengyuePlus)
app.use(router)
app.mount('#app');
