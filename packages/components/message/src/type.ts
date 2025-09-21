import type { VNode } from "vue";

export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'default'

export type Position =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

export interface MessageOption {
  id?: string
  content?: string | VNode
  type?: MessageType
  duration?: number // 毫秒，0 或负数 表示不自动关闭
  showClose?: boolean // 显示右上角关闭按钮（优先）
  closable?: boolean // 兼容字段（老项目中可能用到）
  dangerouslyUseHTMLString?: boolean // 是否允许 html 字符串（XSS 风险）
  icon?: VNode | string // 自定义图标，或直接传 SVG 字符串
  position?: Position // 覆盖全局位置
  offset?: number // 容器 top/bottom 偏移
  zIndex?: number // 覆盖全局 zIndex
  onClose?: () => void // 关闭回调
  plain?: boolean
}

export interface MessageHandle {
  id: string
  close: () => void
}

// global
export interface MessageGlobalConfig {
  duration?: number
  position?: Position
  max?: number
  offset?: number
  zIndex?: number
}