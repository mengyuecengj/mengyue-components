import { mount } from '@vue/test-utils'
import MYText from '../src/text.vue'
import { describe, expect, it } from 'vitest'

describe('MYText Component', () => {
  it('renders default text', () => {
    const wrapper = mount(MYText, {
      slots: {
        default: 'Default Text'
      }
    })
    
    expect(wrapper.text()).toBe('Default Text')
    expect(wrapper.classes()).toContain('my-text')
    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })

  it('renders with different types', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    
    types.forEach(type => {
      const wrapper = mount(MYText, {
        props: undefined
      })
      expect(wrapper.classes()).toContain(`my-text--${type}`)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large']
    
    sizes.forEach(size => {
      const wrapper = mount(MYText, {
        props: { size }
      })
      expect(wrapper.classes()).toContain(`my-text--${size}`)
    })

    // Test numeric size
    const wrapper1 = mount(MYText, {
      props: { size: 16 }
    })
    expect(wrapper1.attributes('style')).toContain('font-size: 16px')

    // Test rem size
    const wrapper2 = mount(MYText, {
      props: { size: '1.2rem' }
    })
    expect(wrapper2.attributes('style')).toContain('font-size: 1.2rem')
  })

  it('renders with custom color', () => {
    const wrapper = mount(MYText, {
      props: { Tecolor: '#ff0000' }
    })
    expect(wrapper.attributes('style')).toContain('color: #ff0000')
  })

  it('renders with different tags', () => {
    const tags = ['div', 'p', 'strong']
    
    tags.forEach(tag => {
      const wrapper = mount(MYText, {
        props: { tag }
      })
      expect(wrapper.element.tagName.toLowerCase()).toBe(tag)
    })
  })

  it('renders with combined props', () => {
    const wrapper = mount(MYText, {
      props: {
        type: 'danger',
        size: 'large',
        Tecolor: 'rgba(255,0,0,0.4)',
        tag: 'strong'
      },
      slots: {
        default: 'Combined Text'
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('strong')
    expect(wrapper.classes()).toContain('my-text--danger')
    expect(wrapper.classes()).toContain('my-text--large')
    expect(wrapper.attributes('style')).toContain('color: rgba(255,0,0,0.4)')
    expect(wrapper.text()).toBe('Combined Text')
  })
})