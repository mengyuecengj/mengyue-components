// messageManager.ts
import { createApp, h, reactive } from 'vue'
import MessageContainer from '../components/message/src/messageContainer.vue'
import type { MessageOption, MessageHandle, MessageGlobalConfig, Position } from '../components/message/src/type'

const containers = new Map<string, { app: any; el: HTMLElement; list: MessageOption[] }>()
let seed = 0
let globalConfig: MessageGlobalConfig = { duration: 3000, position: 'top-right', max: 6, zIndex: 9999 }

// 懒挂载：只有第一次需要显示 message 时才创建容器
function ensureContainer(position: Position) {
  const key = String(position)
  if (containers.has(key)) return containers.get(key)!

  const el = document.createElement('div')
  document.body.appendChild(el)
  const list: MessageOption[] = reactive([])

  // 只挂载容器，不插入任何初始消息
  const app = createApp({
    render() {
      return h(MessageContainer, { list, position: key, zIndex: globalConfig.zIndex })
    }
  })
  app.mount(el)

  const info = { app, el, list }
  containers.set(key, info)
  return info
}

export function configureGlobal(cfg: MessageGlobalConfig) {
  globalConfig = { ...globalConfig, ...cfg }
}

export function showMessage(opt: MessageOption): MessageHandle {
  if (typeof window === 'undefined') return { id: 'ssr', close() {} }

  const position = opt.position ?? (globalConfig.position as Position)
  const info = ensureContainer(position!)
  if (!info) return { id: 'err', close() {} }

  // 如果 max 限制了显示数量，移除最旧消息
  if (globalConfig.max && info.list.length >= (globalConfig.max || 6)) info.list.shift()

  const id = opt.id ?? `m_${Date.now()}_${seed++}`
  const message = { id, ...opt, duration: opt.duration ?? globalConfig.duration }

  info.list.push(message)

  return {
    id,
    close: () => {
      const idx = info.list.findIndex(i => i.id === id)
      if (idx >= 0) info.list.splice(idx, 1)
    }
  }
}

export function closeMessage(id: string) {
  for (const [, info] of containers) {
    const idx = info.list.findIndex(i => i.id === id)
    if (idx >= 0) {
      info.list.splice(idx, 1)
      return
    }
  }
}

export function closeAll() {
  for (const [, info] of containers) info.list.splice(0, info.list.length)
}

// 封装全局 API
const messageApi = {
  info(content: string | MessageOption) {
    showMessage(typeof content === 'string' ? { type: 'info', content } : { ...content, type: 'info' })
  },
  success(content: string | MessageOption) {
    showMessage(typeof content === 'string' ? { type: 'success', content } : { ...content, type: 'success' })
  },
  warning(content: string | MessageOption) {
    showMessage(typeof content === 'string' ? { type: 'warning', content } : { ...content, type: 'warning' })
  },
  error(content: string | MessageOption) {
    showMessage(typeof content === 'string' ? { type: 'error', content } : { ...content, type: 'error' })
  }
}

export default messageApi
