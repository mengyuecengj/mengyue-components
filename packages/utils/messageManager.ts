// messageManager.ts
import { createApp, h, reactive, nextTick, ref } from 'vue'
import MessageContainer from '../components/message/src/messageContainer.vue'
import type { MessageOption, MessageHandle, MessageGlobalConfig, Position, MessageType } from '../components/message/src/type'

const containers = new Map<string, { app: any; el: HTMLElement; list: MessageOption[]; containerRef?: any }>()
let seed = 0
let globalConfig: MessageGlobalConfig = { duration: 3000, position: 'top-right', zIndex: 9999 }

const AVG_MESSAGE_HEIGHT = 48;

function ensureContainer(position: Position) {
  const key = String(position)
  if (containers.has(key)) return containers.get(key)!

  const el = document.createElement('div')
  document.body.appendChild(el)
  const list: MessageOption[] = reactive([])

  const containerRef = ref(null)

  const app = createApp({
    render() {
      return h(MessageContainer, {
        list,
        position: key,
        zIndex: globalConfig.zIndex,
        ref: containerRef
      })
    }
  })
  app.mount(el)

  const info = { app, el, list, containerRef }
  containers.set(key, info)

  const handleResize = () => checkAndTrimList(info, position)
  window.addEventListener('resize', handleResize)

  return info
}

function checkAndTrimList(info: any, position: Position) {
  const screenHeight = window.innerHeight
  let totalHeight = 0
  const isTop = position.includes('top')

  totalHeight = info.list.length * AVG_MESSAGE_HEIGHT

  while (totalHeight > screenHeight && info.list.length > 0) {
    if (isTop) {
      info.list.pop()
    } else {
      info.list.shift()
    }
    totalHeight -= AVG_MESSAGE_HEIGHT
  }
}

export function configureGlobal(cfg: MessageGlobalConfig) {
  globalConfig = { ...globalConfig, ...cfg }
}

export function showMessage(opt: string | MessageOption, type?: MessageType): MessageHandle {
  // 支持 showMessage('message content') 这样的调用方式
  if (typeof opt === 'string') {
    opt = { content: opt, type, plain: false } as MessageOption;
  }

  if (typeof window === 'undefined') return { id: 'ssr', close() { } }

  const position = opt.position ?? (globalConfig.position as Position)
  const info = ensureContainer(position!)
  if (!info) return { id: 'err', close() { } }

  const id = opt.id ?? `m_${Date.now()}_${seed++}`
  const message = { id, ...opt, duration: opt.duration ?? globalConfig.duration }

  const isTop = position.includes('top')

  nextTick(() => {
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

  if (isTop) {
    info.list.unshift(message)
  } else {
    info.list.push(message)
  }

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

// 封装全局 API，支持链式调用
const messageApi = Object.assign(
  function (options: string | MessageOption) {
    return showMessage(options);
  },
  {
    info(content: string | MessageOption) {
      return showMessage(
        typeof content === 'string'
          ? { type: 'info', content, plain: false }
          : { ...content, type: 'info' }
      );
    },
    success(content: string | MessageOption) {
      return showMessage(
        typeof content === 'string'
          ? { type: 'success', content, plain: false }
          : { ...content, type: 'success' }
      );
    },
    warning(content: string | MessageOption) {
      return showMessage(
        typeof content === 'string'
          ? { type: 'warning', content, plain: false }
          : { ...content, type: 'warning' }
      );
    },
    error(content: string | MessageOption) {
      return showMessage(
        typeof content === 'string'
          ? { type: 'error', content, plain: false }
          : { ...content, type: 'error' }
      );
    },
    configureGlobal
  }
);
export default messageApi