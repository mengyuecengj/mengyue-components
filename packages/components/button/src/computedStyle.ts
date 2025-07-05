import { computed, ref } from 'vue'

/**
 * 解析 "#RGB"、"#RRGGBB" 或 "rgb…"/"rgba…" 为 [r, g, b]
 */
function parseHexOrRgb(input: string): [number, number, number] | null {
  // HEX
  if (input.startsWith('#')) {
    let hex = input.slice(1)
    if (hex.length === 3) hex = hex.split('').map(h => h + h).join('')
    if (hex.length === 6) {
      const n = parseInt(hex, 16)
      return [ (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff ]
    }
    return null
  }

  // RGB(A)
  const m = input.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:,\s*[\d.]+\s*)?\)/)
  if (m) {
    return [ +m[1], +m[2], +m[3] ]
  }

  return null
}

// 画布上下文，用于 CSS 名称转换
const _canvasCtx = (() => {
  const ctx = document.createElement('canvas').getContext('2d')
  return ctx || undefined
})()

/**
 * 将任意 CSS 颜色字符串转换成 rgba(color, alpha)
 */
export function toRGBA(color: string, alpha = 0.2): string {
  if (!color) return ''

  // 先尝试 HEX / RGB 解析
  const rgb = parseHexOrRgb(color)
  if (rgb) {
    return `rgba(${rgb.join(',')},${alpha})`
  }

  // 再尝试通过 Canvas 处理 CSS 颜色名
  if (_canvasCtx) {
    _canvasCtx.fillStyle = color
    const resolved = _canvasCtx.fillStyle
    const fromCanvas = parseHexOrRgb(resolved)
    if (fromCanvas) {
      return `rgba(${fromCanvas.join(',')},${alpha})`
    }
  }

  // 回退到原始值
  return color
}


export function useButtonStyle(props: {
  type?: string
  size?: string
  round?: boolean
  circle?: boolean
  disabled?: boolean
  plain?: boolean
  colorBg?: string
  colorText?: string
  colorBorder?: string
}) {
  const isHovered = ref(false)
  const isActive  = ref(false)

  const onMouseOver = () => { isHovered.value = true }
  const onMouseOut  = () => { isHovered.value = false; isActive.value = false }
  const onMouseDown = () => { isActive.value = true }
  const onMouseUp   = () => { isActive.value = false }

  const btnClass = computed(() => {
    const cls = [
      'my-btn',
      `my-btn--${props.type ?? 'default'}`,
      `my-btn--${props.size ?? 'medium'}`
    ]
    if (props.round)    cls.push('my-btn--round')
    if (props.circle)   cls.push('my-btn--circle')
    if (props.disabled) cls.push('my-btn--disabled')
    if (props.plain)    cls.push('my-btn--plain')
    return cls
  })

  const customStyle = computed<Record<string, string>>(() => {
    const s: Record<string, string> = {}
    const baseColor = props.colorBorder ?? props.colorBg

    // 有背景色
    if (props.colorBg) {
      // 朴素样式 or Plain 样式
      if (props.plain) {
        const active = isHovered.value || isActive.value
        s.background  = active ? props.colorBg! : toRGBA(props.colorBg, 0.2)
        s.color       = active ? '#fff' : (props.colorText ?? props.colorBg)
      } else {
        s.background  = props.colorBg
        s.color       = props.colorText ?? '#fff'
      }
      if (baseColor) s.borderColor = baseColor
    }
    // 无背景色
    else {
      if (props.colorText)  s.color = props.colorText
      if (baseColor)        s.borderColor = baseColor
    }

    return s
  })

  return {
    btnClass,
    customStyle,
    onMouseOver,
    onMouseOut,
    onMouseDown,
    onMouseUp
  }
}
