import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Slidebar from '../src/slidebar.vue'

describe('MYSlidebar', () => {
  it('should render correctly with default props', () => {
    const wrapper = mount(Slidebar)
    expect(wrapper.find('.slider-container').exists()).toBe(true)
    expect(wrapper.find('.slider-track').exists()).toBe(true)
    expect(wrapper.find('.slider-thumb').exists()).toBe(true)
  })

  it('should apply custom trackColor and thumbColor', () => {
    const wrapper = mount(Slidebar, {
      props: {
        trackColor: 'red',
        thumbColor: 'blue',
      },
    })
    const trackStyle = wrapper.find('.slider-track').attributes('style')
    const thumbStyle = wrapper.find('.slider-thumb').attributes('style')

    expect(trackStyle).toContain('background: red')
    expect(thumbStyle).toContain('border-color: blue')
  })

it('should update value when dragged', async () => {
  const wrapper = mount(Slidebar)

  // 强制 mock track DOM 的尺寸
  const trackEl = wrapper.find('.slider-track').element
  vi.spyOn(trackEl, 'getBoundingClientRect').mockReturnValue({
    left: 0,
    width: 100,
    top: 0,
    height: 10,
    bottom: 10,
    right: 100,
    x: 0,
    y: 0,
    toJSON: () => {},
  })

  // 触发点击开始拖动
  await wrapper.find('.slider-track').trigger('mousedown', {
    clientX: 80,
  })

  // 模拟拖动过程
  window.dispatchEvent(new MouseEvent('mousemove', { clientX: 80 }))
  window.dispatchEvent(new MouseEvent('mouseup'))

  // 等待响应式更新
  await wrapper.vm.$nextTick()

  const thumb = wrapper.find('.slider-thumb').attributes('style')
  expect(thumb).toContain('left: 80%')
})


  it('should not respond to drag if disabled', async () => {
    const wrapper = mount(Slidebar, {
      props: {
        disabled: true,
      },
    })

    await wrapper.find('.slider-track').trigger('mousedown', {
      clientX: 30,
    })

    const thumb = wrapper.find('.slider-thumb').attributes('style')
    expect(thumb).toContain('left: 0%') // 初始值不变
  })
})
