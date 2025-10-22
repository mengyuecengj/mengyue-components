import type { App, Plugin } from 'vue';
import Button from './src/button.vue';
import type { ButtonProps } from './src/button';

// 定义组件库的插件对象
const MengyuePlus: Plugin = {
  install(app: App) {
    app.component('MYButton', Button);
  },
};

// 显式导出所有内容
export { Button, MengyuePlus };

// 可选：添加默认导出以兼容部分场景
export default MengyuePlus;