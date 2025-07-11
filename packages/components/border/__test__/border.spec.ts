import { mount } from '@vue/test-utils'
import MYBorder from '../src/border.vue'
import { describe, expect, it } from 'vitest'

describe('MYBorder Component', () => {
  it('should render with default props', () => {
    const wrapper = mount(MYBorder, {
      slots: {
        default: 'Test Content'
      }
    })
    
    expect(wrapper.text()).toContain('Test Content')
    expect(wrapper.classes()).toContain('my-border')
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
    expect(wrapper.attributes('style')).toContain('border-style: solid')
    expect(wrapper.attributes('style')).toContain('border-width: 1px')
  })

  it('should render with custom tag', () => {
    const wrapper = mount(MYBorder, {
      props: {
        tag: 'span'
      }
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })

  it('should apply border styles correctly', () => {
    const wrapper = mount(MYBorder, {
      props: {
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderColor: '#ff0000'
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('border-style: dashed')
    expect(style).toContain('border-width: 2px')
    expect(style).toContain('border-color: #ff0000')
  })

  it('should apply dotted class when dotted prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: {
        dotted: true
      }
    })
    
    expect(wrapper.classes()).toContain('my-border--dotted')
  })

  it('should apply round class when round prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: {
        round: true
      }
    })
    
    expect(wrapper.classes()).toContain('my-border--round')
  })

  it('should apply circle class when circle prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: {
        circle: true
      }
    })
    
    expect(wrapper.classes()).toContain('my-border--circle')
  })

  it('should apply center class when center prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: {
        center: true
      }
    })
    
    expect(wrapper.classes()).toContain('my-border--center')
  })

  it('should apply single side border colors', () => {
    const wrapper = mount(MYBorder, {
      props: {
        topColor: '#ff0000',
        rightColor: '#00ff00',
        bottomColor: '#0000ff',
        leftColor: '#ffff00'
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('border-top-color: #ff0000')
    expect(style).toContain('border-right-color: #00ff00')
    expect(style).toContain('border-bottom-color: #0000ff')
    expect(style).toContain('border-left-color: #ffff00')
  })

  it('should apply width and height correctly', () => {
    const wrapper = mount(MYBorder, {
      props: {
        width: '100px',
        height: '50px'
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 100px')
    expect(style).toContain('height: 50px')
  })

  it('should apply background and text color', () => {
    const wrapper = mount(MYBorder, {
      props: {
        colorBg: '#f0f0f0',
        textColor: '#333333'
      },
      slots: {
        default: 'Colored Content'
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('background: #f0f0f0')
    expect(style).toContain('color: #333333')
    expect(wrapper.text()).toContain('Colored Content')
  })

  it('should apply box shadow', () => {
    const wrapper = mount(MYBorder, {
      props: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    })
    
    expect(wrapper.attributes('style')).toContain('box-shadow: 0 2px 4px rgba(0,0,0,0.1)')
  })

  it('should combine multiple props correctly', () => {
    const wrapper = mount(MYBorder, {
      props: {
        borderStyle: 'dotted',
        borderWidth: '3px',
        borderColor: '#ff00ff',
        round: true,
        center: true,
        width: '200px',
        height: '100px',
        colorBg: '#eeeeee'
      },
      slots: {
        default: 'Combined Props'
      }
    })
    
    const classes = wrapper.classes()
    const style = wrapper.attributes('style')
    
    expect(classes).toContain('my-border--round')
    expect(classes).toContain('my-border--center')
    expect(style).toContain('border-style: dotted')
    expect(style).toContain('border-width: 3px')
    expect(style).toContain('border-color: #ff00ff')
    expect(style).toContain('width: 200px')
    expect(style).toContain('height: 100px')
    expect(style).toContain('background: #eeeeee')
    expect(wrapper.text()).toContain('Combined Props')
  })
})