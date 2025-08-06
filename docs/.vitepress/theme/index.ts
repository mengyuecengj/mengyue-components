import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import Demo from './Demo.vue';
import 'mengyue-plus/style.css'; // CSS 导入通常没问题，可以保留
import './style.css'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('Demo', Demo);
    
    // 仅在客户端环境中加载 mengyue-plus
    if (typeof window !== 'undefined') {
      import('mengyue-plus').then((MengyuePlus) => {
        app.use(MengyuePlus.default || MengyuePlus);
      });
    }
  },
};
