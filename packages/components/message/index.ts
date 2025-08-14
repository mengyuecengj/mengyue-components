// message插件入口 message.ts
import type { App, Plugin } from 'vue'
import messageApi from '../../utils/messageManager'
import MessageVue from './src/message.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

// 单文件组件支持 app.use
export const MYMessage = withInstall(MessageVue)

// 全局 API
export const message = messageApi

// 插件注册
export const MessagePlugin: Plugin = {
  install(app: App) {
    app.config.globalProperties.$message = messageApi
    app.provide('message', messageApi)
    // 不再在 install 时挂载组件
    // app.component('MYMessage', MessageVue)
  }
}

export default MessagePlugin
