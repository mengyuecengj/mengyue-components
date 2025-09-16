import { describe, it, expect } from 'vitest'
import { useInputStyle } from '../src/pickColorComputed'

describe('useInputStyle', () => {
  it('should compute correct width, height and opacity for valid size and rgba', async () => {
    const size = '100px'
    const rgba = '0.5'

    const style = useInputStyle(size, rgba)
    // 因为 useStyleComputed 返回 computed 对象，访问时需要 .value
    const result = style.value

    expect(result.width).toBe('100px')
    expect(result.height).toBe('100px')
    expect(result.opacity).toBe('0.5')
  })

  it('should fallback to default size when size format is invalid', () => {
    const size = 'abc'
    const rgba = '0.7'

    const style = useInputStyle(size, rgba)
    const result = style.value

    expect(result.width).toBe('50px') // 默认值
    expect(result.height).toBe('50px')
    expect(result.opacity).toBe('0.7')
  })

  it('should clamp opacity between 0 and 1', () => {
    const styleLow = useInputStyle('30%', '-10')
    const styleHigh = useInputStyle('30%', '2')

    expect(styleLow.value.opacity).toBe('0') // 最小值0
    expect(styleHigh.value.opacity).toBe('1') // 最大值1
  })

  it('should handle numeric rgba input correctly', () => {
    const style = useInputStyle('40em', String(0.3))
    expect(style.value.width).toBe('40em')
    expect(style.value.height).toBe('40em')
    expect(style.value.opacity).toBe('0.3')
  })
})
