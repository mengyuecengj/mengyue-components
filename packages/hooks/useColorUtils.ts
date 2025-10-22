/**
 * @description This is a about color set file
 * It's more like a collection file of tool function color than a hooks
 * This is also a necessary file in some color hooks files
 */
import { onMounted, onUnmounted } from 'vue'

// SSR 安全：延迟创建 canvas
let _canvasCtx: CanvasRenderingContext2D | undefined = undefined

export function useColorUtils() {
  // 客户端才创建 canvas
  onMounted(() => {
    if (typeof document !== 'undefined') {
      _canvasCtx = document.createElement('canvas').getContext('2d')
    }
  })

  const toRGBA = (color: string, opacity: number): string => {
    // SSR 安全：不使用 document，直接字符串处理
    if (!color) return 'transparent'
    
    // 简单实现：支持 #RRGGBB 和 rgb()
    if (color.startsWith('#')) {
      const hex = color.slice(1)
      if (hex.length === 3) {
        const r = hex[0].repeat(2)
        const g = hex[1].repeat(2)
        const b = hex[2].repeat(2)
        return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${opacity})`
      }
      return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4, 6), 16)}, ${opacity})`
    }
    
    if (color.startsWith('rgb')) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
      if (match) {
        return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${opacity})`
      }
    }
    
    return color
  }

  // 客户端专用的全局样式应用
  const applyGlobalColor = (color: string, varName: string) => {
    if (typeof document === 'undefined') return
    
    onMounted(() => {
      document.documentElement.style.setProperty(varName, color)
    })
    
    onUnmounted(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.style.removeProperty(varName)
      }
    })
  }

  return {
    toRGBA,
    applyGlobalColor
  }
}