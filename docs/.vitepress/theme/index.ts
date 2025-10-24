import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import ScrollFade from './directives/v-scroll-fade'
import 'virtual:group-icons.css'
import './styles/var.css'
import './styles/variables.module.css'
import DemoClient from './components/demoClient.vue'
import ShowCode from './components/showCode.vue'
import Particles from './components/Particles.vue'
import InteractiveSection from './components/InteractiveSection.vue'
import '@vitepress-demo-preview/component/dist/style.css';
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  // Layout: Home, // 替换默认 home 布局
  enhanceApp({ app }) {
    // 注册局部 Demo 容器
    app.component('DemoClient', DemoClient)
    app.component('ShowCode', ShowCode)
    // app.directive('scroll-fade', ScrollFade)
    app.component('Particles', Particles)
    app.component('InteractiveSection', InteractiveSection)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(Particles)
    })
  }
} satisfies Theme
