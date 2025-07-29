import { mount } from '@vue/test-utils'
import MYButton from '../src/button.vue'
import { describe, expect, it, vi } from 'vitest'

// Mock canvas implementation for tests
vi.mock('../../../hooks/useColorUtils', () => ({
  useColorUtils: () => ({
    toRGBA: (color: string) => color,
    parseHexOrRgb: () => null
  })
}))

vi.mock('virtual:svg-icons-register', () => ({
  default: vi.fn(),
}))

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
    expect(wrapper.classes()).toContain('my-btn--medium')
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

  it('renders with href when tag is a', () => {
    const wrapper = mount(MYButton, {
      props: {
        tag: 'a',
        href: 'https://example.com'
      }
    })

    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('renders different button types', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const
    
    types.forEach(type => {
      const wrapper = mount(MYButton, {
        props: { type }
      })
      
      expect(wrapper.classes()).toContain(`my-btn--${type}`)
    })
  })

  it('renders different button sizes', () => {
    const sizes = ['supersmall', 'small', 'medium', 'large', 'superbig'] as const
    
    sizes.forEach(size => {
      const wrapper = mount(MYButton, {
        props: { size }
      })
      
      expect(wrapper.classes()).toContain(`my-btn--${size}`)
    })
  })

  it('renders round button', () => {
    const wrapper = mount(MYButton, {
      props: { round: true }
    })

    expect(wrapper.classes()).toContain('my-btn--round')
  })

  it('renders circle button', () => {
    const wrapper = mount(MYButton, {
      props: { circle: true }
    })

    expect(wrapper.classes()).toContain('my-btn--circle')
  })

  it('renders disabled button', () => {
    const wrapper = mount(MYButton, {
      props: { disabled: true }
    })

    expect(wrapper.classes()).toContain('my-btn--disabled')
    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('renders plain button', () => {
    const wrapper = mount(MYButton, {
      props: { plain: true }
    })

    expect(wrapper.classes()).toContain('my-btn--plain')
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
    expect(style).toMatch(/background(?:-color)?:\s*(?:rgb\(255,\s*0,\s*0\)|#ff0000)/i)
    expect(style).toMatch(/color:\s*(?:rgb\(0,\s*255,\s*0\)|#00ff00)/i)
    expect(style).toMatch(/border(?:-color)?:\s*(?:rgb\(0,\s*0,\s*255\)|#0000ff)/i)
  })

  it('emits click event', async () => {
    const wrapper = mount(MYButton)
    
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(MYButton, {
      props: { disabled: true }
    })
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('handles mouse events correctly', async () => {
    const wrapper = mount(MYButton)
    
    await wrapper.trigger('mouseover')
    expect(wrapper.classes()).toContain('my-btn')
    
    await wrapper.trigger('mouseout')
    expect(wrapper.classes()).toContain('my-btn')
  })

  it('renders slot content', () => {
    const slotContent = 'Custom Button Text'
    const wrapper = mount(MYButton, {
      slots: {
        default: slotContent
      }
    })

    expect(wrapper.text()).toBe(slotContent)
  })

  it('combines multiple props correctly', () => {
    const wrapper = mount(MYButton, {
      props: {
        type: 'danger',
        size: 'large',
        round: true,
        plain: true,
        colorBg: '#fff',
        colorText: '#f44336',
        colorBorder: '#f44336'
      }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      'my-btn',
      'my-btn--danger',
      'my-btn--large',
      'my-btn--round',
      'my-btn--plain'
    ]))
    
    const style = wrapper.attributes('style')
    expect(style).toMatch(/background(?:-color)?:\s*(?:rgb\(255,\s*255,\s*255\)|#fff)/i)
    expect(style).toMatch(/color:\s*(?:rgb\(244,\s*67,\s*54\)|#f44336)/i)
    expect(style).toMatch(/border(?:-color)?:\s*(?:rgb\(244,\s*67,\s*54\)|#f44336)/i)
  })

  it('renders default type when type is empty string', () => {
    const wrapper = mount(MYButton, {
      props: { 
        type: '' as const,
        size: 'medium'
      }
    })

    expect(wrapper.classes()).toContain('my-btn--default')
    expect(wrapper.classes()).not.toContain('my-btn--')
  })
})
