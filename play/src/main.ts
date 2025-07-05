// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import MengyuePlus from 'mengyue-plus'
import 'mengyue-plus/style.css'

// import MengyuePlus from '../../packages/components/button/index'

const app = createApp(App);
app.use(MengyuePlus)
app.mount('#app');
