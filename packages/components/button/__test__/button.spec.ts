import { mount } from '@vue/test-utils'
import MYButton from '../src/button.vue'
import { describe, expect, it } from 'vitest'

describe('MYButton.vue', () => {
  it('renders default button correctly', () => {
    const wrapper = mount(MYButton, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.element.tagName.toLowerCase()).toBe('button')
    expect(wrapper.classes()).toContain('my-btn')
    expect(wrapper.classes()).toContain('my-btn--default')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('renders with custom tag', () => {
    const wrapper = mount(MYButton, {
      props: {
        tag: 'a'
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(MYButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(MYButton, {
      props: {
        disabled: true
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

it('applies round class when round prop is true', () => {
  const wrapper = mount(MYButton, {
    props: { round: true }
  })
  expect(wrapper.classes()).toContain('my-btn--round') // 或其他实际使用的类名
})

it('applies circle class when circle prop is true', () => {
  const wrapper = mount(MYButton, {
    props: { circle: true }
  })
  expect(wrapper.classes()).toContain('my-btn--circle')
})

it('applies plain class when plain prop is true', () => {
  const wrapper = mount(MYButton, {
    props: { plain: true }
  })
  expect(wrapper.classes()).toContain('my-btn--plain')
})

  it('handles mouse events', async () => {
    const wrapper = mount(MYButton)
    const mouseEvents = ['mouseover', 'mouseleave', 'mousedown', 'mouseup']
    
    mouseEvents.forEach(async event => {
      await wrapper.trigger(event)
      // 这里可以添加对样式变化的断言，如果你有相关的逻辑
    })
  })

  it('applies custom colors', () => {
    const wrapper = mount(MYButton, {
      props: {
        colorBg: '#ff0000',
        colorText: '#00ff00',
        colorBorder: '#0000ff'
      }
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('background: rgb(255, 0, 0)')
    expect(style).toContain('color: rgb(0, 255, 0)')
    expect(style).toContain('border-color: #0000ff')
  })
})
