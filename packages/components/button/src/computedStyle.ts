import { computed, ref } from 'vue'

/**
 * 将任意颜色字符串转换成 rgba(color, alpha)
 */
export function toRGBA(color: string, alpha = 0.2): string {
  if (!color) return ''

  // 处理 #RGB 和 #RRGGBB
  if (color.startsWith('#')) {
    let r = 0, g = 0, b = 0
    if (color.length === 4) {
      r = parseInt(color[1] + color[1], 16)
      g = parseInt(color[2] + color[2], 16)
      b = parseInt(color[3] + color[3], 16)
    } else if (color.length === 7) {
      r = parseInt(color.slice(1, 3), 16)
      g = parseInt(color.slice(3, 5), 16)
      b = parseInt(color.slice(5, 7), 16)
    }
    return `rgba(${r},${g},${b},${alpha})`
  }

  // 处理 rgb(...) 或 rgba(...)
  if (color.startsWith('rgb')) {
    const match = color.match(/rgb[a]?\(([^)]+)\)/)
    if (match) {
      const rgb = match[1].split(',').slice(0, 3).join(',')
      return `rgba(${rgb},${alpha})`
    }
  }

  // 支持 CSS 颜色名，通过 Canvas 转换
  const ctx = document.createElement('canvas').getContext('2d')
  if (ctx) {
    ctx.fillStyle = color
    const rgb = ctx.fillStyle
    if (rgb.startsWith('#')) {
      const r = parseInt(rgb.slice(1, 3), 16)
      const g = parseInt(rgb.slice(3, 5), 16)
      const b = parseInt(rgb.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${alpha})`
    }
    if (rgb.startsWith('rgb')) {
      const match2 = rgb.match(/rgb[a]?\(([^)]+)\)/)
      if (match2) {
        const rgbPart = match2[1].split(',').slice(0, 3).join(',')
        return `rgba(${rgbPart},${alpha})`
      }
    }
  }

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

  function onMouseOver() { isHovered.value = true }
  function onMouseOut()  { isHovered.value = false; isActive.value = false }
  function onMouseDown() { isActive.value = true }
  function onMouseUp()   { isActive.value = false }

  const btnClass = computed(() => [
    'my-btn',
    `my-btn--${props.type || 'default'}`,
    `my-btn--${props.size || 'medium'}`,
    props.round    ? 'my-btn--round'    : '',
    props.circle   ? 'my-btn--circle'   : '',
    props.disabled ? 'my-btn--disabled' : '',
    props.plain    ? 'my-btn--plain'    : '',
  ].filter(Boolean))

  const customStyle = computed<Record<string, string>>(() => {
    const s: Record<string, string> = {}
    const borderClr = props.colorBorder || props.colorBg || ''

    if (props.colorBg) {
      if (props.plain) {
        const act = isHovered.value || isActive.value
        s.background  = act ? props.colorBg : toRGBA(props.colorBg, 0.2)
        s.color       = act ? '#fff'        : (props.colorText || props.colorBg)
        s.borderColor = borderClr
      } else {
        s.background  = props.colorBg
        s.color       = props.colorText || '#fff'
        s.borderColor = borderClr
      }
    } else {
      if (props.colorText)  s.color = props.colorText
      if (borderClr)        s.borderColor = borderClr
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