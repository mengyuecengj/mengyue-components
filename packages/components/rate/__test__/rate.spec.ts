import { describe, it, expect } from 'vitest'
import { rateProps } from '../src/rate'
import { defineComponent, h } from 'vue'

// 用来测试 props 的默认值是否能正确注入
const createTestComponent = () => {
  return defineComponent({
    props: rateProps,
    setup(props) {
      return () => h('div', JSON.stringify(props))
    }
  })
}

describe('rateProps', () => {
  it('should have correct default values when mounted', async () => {
    const TestComponent = createTestComponent()

    const wrapper = await import('@vue/test-utils').then(({ mount }) =>
      mount(TestComponent)
    )

    const props = wrapper.props()

    expect(props.modelValue).toBe(0)
    expect(props.max).toBe(5)
    expect(props.colors).toEqual(['#F7BA2A', '#F7BA2A', '#C6D1DE'])
    expect(props.showText).toBe(false)
    expect(props.texts).toEqual(['极差', '失望', '一般', '满意', '惊喜'])
    expect(props.showHalf).toBe(false)
    expect(props.disabled).toBe(false)
  })

  it('should accept custom props', async () => {
    const TestComponent = createTestComponent()

    const wrapper = await import('@vue/test-utils').then(({ mount }) =>
      mount(TestComponent, {
        props: {
          modelValue: 4.5,
          max: 10,
          colors: ['#111', '#222', '#333'],
          showText: true,
          texts: ['很差', '差', '一般', '好', '很好'],
          showHalf: true,
          disabled: true
        }
      })
    )

    const props = wrapper.props()
    expect(props.modelValue).toBe(4.5)
    expect(props.max).toBe(10)
    expect(props.colors).toEqual(['#111', '#222', '#333'])
    expect(props.showText).toBe(true)
    expect(props.texts).toEqual(['很差', '差', '一般', '好', '很好'])
    expect(props.showHalf).toBe(true)
    expect(props.disabled).toBe(true)
  })
})
