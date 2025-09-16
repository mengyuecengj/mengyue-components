import { useStyleComputed } from '../../../hooks/useStyleComputed'

export function useInputStyle(size: string, rgba: string) {
  return useStyleComputed(
    { size, rgba },
    {
      propToStyleMap: { size: 'width' },
      customStyleLogic(props, style) {
        const sizeMatch = String(props.size).match(/^(\d+)([a-zA-Z%]*)$/)
        const sizeValue = sizeMatch ? sizeMatch[1] : '50'
        const unit = sizeMatch ? sizeMatch[2] || 'px' : 'px'
        style.width = `${sizeValue}${unit}`
        style.height = `${sizeValue}${unit}`

        const opacityValue = Math.min(Math.max(parseFloat(String(props.rgba)) || 1, 0), 1)
        style.opacity = String(opacityValue)
      }
    }
  )
}
