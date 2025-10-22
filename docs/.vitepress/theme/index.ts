import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './styles/var.css'
import './styles/variables.module.css'
import DemoClient from './components/demoClient.vue'
import ShowCode from './components/showCode.vue'
import '@vitepress-demo-preview/component/dist/style.css';
// import { MYMessage } from '../../../packages/components/message/src/message.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册局部 Demo 容器
    app.component('DemoClient', DemoClient)
    app.component('ShowCode', ShowCode)
    // app.config.globalProperties.MYMessage = MYMessage
  }
}
