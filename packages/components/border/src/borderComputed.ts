import { computed } from 'vue'
import type { BorderProps } from './border'

/** 
 * propsToStyleMap 映射表：
 * key   = props 里的字段名
 * value = 最终要生成的 CSS 属性名
 */
const propsToStyleMap: Record<keyof BorderProps, string> = {
  Border: 'border',
  BoTop: 'borderTop',
  BoRight: 'borderRight',
  BoBottom: 'borderBottom',
  BoLeft: 'borderLeft',
  borderStyle: 'borderStyle',
  borderWidth: 'borderWidth',
  borderColor: 'borderColor',
  width: 'width',
  height: 'height',
  paddingText: 'padding',
  colorBg: 'background',
  textColor: 'color',
  boxShadow: 'boxShadow',
  dotted: '',
  round: '',
  circle: '',
  center: '',
  topColor: '',
  bottomColor: '',
  leftColor: '',
  rightColor: '',
  tag: ''
}

/**
 * useBorderComputed
 */
export function useBorderComputed(props: BorderProps) {
  // —— 1. 生成 className 列表
  const borderClass = computed(() => {
    const base = ['my-border']
    const toggles: Array<keyof Pick<BorderProps, 'dotted' | 'round' | 'circle' | 'center'>> = [
      'dotted', 'round', 'circle', 'center',
    ]

    toggles.forEach(flag => {
      if (props[flag]) {
        base.push(`my-border--${flag}`)
      }
    })

    return base
  })

  // —— 2. 生成行内 style 对象
  const borderStyle = computed(() => {
    const style: Record<string, string> = {}

    // 根据映射表批量赋值
    Object.entries(propsToStyleMap).forEach(([propKey, cssProp]) => {
      const val = props[propKey as keyof BorderProps]
      if (!val) return

      // 针对 height 增加单位校验
      if (propKey === 'height') {
        if (typeof val === 'string' && (val.endsWith('px') || val.endsWith('%'))) {
          style[cssProp] = val
        }
      } else {
        style[cssProp] = val as string
      }
    })

    // —— 3. 单侧颜色特殊逻辑
    if (props.topColor) {
      Object.assign(style, {
        borderTopColor: props.topColor,
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
      })
    }

    if (props.bottomColor) {
      Object.assign(style, {
        borderBottomColor: props.bottomColor,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
      })
    }

    if (props.leftColor) {
      Object.assign(style, {
        borderLeftColor: props.leftColor,
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
      })
    }

    if (props.rightColor) {
      Object.assign(style, {
        borderRightColor: props.rightColor,
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
      })
    }

    return style
  })

  return {
    borderClass,
    borderStyle,
  }
}
