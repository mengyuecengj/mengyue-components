import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MYScrollbar from '../src/scrollbar.vue'

describe('MYScrollbar', () => {
  it('renders with default props', () => {
    const wrapper = mount(MYScrollbar)
    expect(wrapper.classes()).toContain('scrollbar-container')
    expect(wrapper.attributes('style')).toContain('height: 50vh')
  })

  it('applies height prop correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        height: '100px'
      }
    })
    expect(wrapper.attributes('style')).toContain('height: 100px')
  })

  it('applies Maxheight prop correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        Maxheight: '500px'
      }
    })
    expect(wrapper.classes()).toContain('scrollbar-container--Maxheight')
    expect(wrapper.attributes('style')).toContain('--max-height: 500px')
  })

  it('applies color props correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        thumbColor: 'red',
        thumbHoverColor: 'darkred',
        trackColor: 'gray'
      }
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--scrollbar-container-thumb-color: red')
    expect(style).toContain('--scrollbar-container-thumb-hover-color: darkred')
    expect(style).toContain('--scrollbar-container-track-color: gray')
  })

  it('applies ScrollWidth prop correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        ScrollWidth: '8px'
      }
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--scrollbar-container-scrollbar-width: 8px')
    expect(style).toContain('--scrollbar-container-scrollbar-height: 8px')
  })

  it('applies widthX prop correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        widthX: true
      }
    })
    expect(wrapper.classes()).toContain('scrollbar-container--widthX')
  })

  it('applies disabled props correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        disabledHeight: true,
        disabledWidth: true,
        disabledScroll: true
      }
    })
    expect(wrapper.classes()).toContain('scrollbar-container--disabledHeight')
    expect(wrapper.classes()).toContain('scrollbar-container--disabledWidth')
    expect(wrapper.classes()).toContain('scrollbar-container--disabledScroll')
  })

  it('applies corner prop correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        corner: true
      }
    })
    expect(wrapper.classes()).toContain('scrollbar-container--corner')
  })

  it('uses custom tag correctly', () => {
    const wrapper = mount(MYScrollbar, {
      props: {
        tag: 'section'
      }
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })
})