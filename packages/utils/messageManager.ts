// messageManager.ts
import { createApp, h, reactive, nextTick, ref } from 'vue'
import MessageContainer from '../components/message/src/messageContainer.vue'
import type { MessageOption, MessageHandle, MessageGlobalConfig, Position } from '../components/message/src/type'

const containers = new Map<string, { app: any; el: HTMLElement; list: MessageOption[]; containerRef?: any }>()
let seed = 0
let globalConfig: MessageGlobalConfig = { duration: 3000, position: 'top-right', zIndex: 9999 }

const AVG_MESSAGE_HEIGHT = 48;  // 示例：padding 8px*2 + 内容 24px + margin 8px

function ensureContainer(position: Position) {
  const key = String(position)
  if (containers.has(key)) return containers.get(key)!

  const el = document.createElement('div')
  document.body.appendChild(el)
  const list: MessageOption[] = reactive([])

  // 用 ref 获取容器（可选，如果想动态测量总高度）
  const containerRef = ref(null)

  const app = createApp({
    render() {
      return h(MessageContainer, { 
        list, 
        position: key, 
        zIndex: globalConfig.zIndex,
        ref: containerRef  // 新增 ref
      })
    }
  })
  app.mount(el)

  const info = { app, el, list, containerRef }
  containers.set(key, info)

  // 添加窗口 resize 监听，动态移除多余消息
  const handleResize = () => checkAndTrimList(info, position)
  window.addEventListener('resize', handleResize)
  // 在卸载时移除监听（可选，在 closeAll 或其他地方调用）

  return info
}

function checkAndTrimList(info: any, position: Position) {
  const screenHeight = window.innerHeight
  let totalHeight = 0
  const isTop = position.includes('top')

  // 简单方式：用平均高度估算（更快，无需 DOM 查询）
  totalHeight = info.list.length * AVG_MESSAGE_HEIGHT

  // 高级方式（可选，更精确）：用 ref 获取实际高度
  // nextTick(() => {
  //   if (info.containerRef?.value?.$el) {
  //     totalHeight = info.containerRef.value.$el.clientHeight
  //   }
  // })

  while (totalHeight > screenHeight && info.list.length > 0) {
    if (isTop) {
      info.list.pop()  // top: 移除底部旧消息
    } else {
      info.list.shift()  // bottom: 移除顶部旧消息
    }
    totalHeight -= AVG_MESSAGE_HEIGHT  // 更新估算高度
  }
}

export function configureGlobal(cfg: MessageGlobalConfig) {
  globalConfig = { ...globalConfig, ...cfg }
}

export function showMessage(opt: MessageOption): MessageHandle {
  if (typeof window === 'undefined') return { id: 'ssr', close() {} }

  const position = opt.position ?? (globalConfig.position as Position)
  const info = ensureContainer(position!)
  if (!info) return { id: 'err', close() {} }

  const id = opt.id ?? `m_${Date.now()}_${seed++}`
  const message = { id, ...opt, duration: opt.duration ?? globalConfig.duration }

  const isTop = position.includes('top')

  // 添加前检查：如果添加后会超过屏幕，移除最旧消息
  nextTick(() => {  // 确保 DOM 更新后检查
    checkAndTrimList(info, position)
    const projectedHeight = (info.list.length + 1) * AVG_MESSAGE_HEIGHT
    if (projectedHeight > window.innerHeight) {
      if (isTop) {
        info.list.pop()
      } else {
        info.list.shift()
      }
    }
  })

  // 根据位置插入新消息
  if (isTop) {
    info.list.unshift(message)  // top: 新在上
  } else {
    info.list.push(message)  // bottom: 新在下
  }

  return {
    id,
    close: () => {
      const idx = info.list.findIndex(i => i.id === id)
      if (idx >= 0) info.list.splice(idx, 1)
      // 关闭后可选再检查 trim，但不必须
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
