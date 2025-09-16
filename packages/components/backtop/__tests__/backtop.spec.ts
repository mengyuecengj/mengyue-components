import { mount } from '@vue/test-utils'
import MYBacktop from '../src/backtop.vue'
import { describe, expect, it, vi } from 'vitest'

describe('MYBacktop', () => {
  it('renders correctly', () => {
    const wrapper = mount(MYBacktop)
    expect(wrapper.exists()).toBe(true)
  })

  it('scrolls to top when clicked', async () => {
    const wrapper = mount(MYBacktop, { attachTo: document.body })
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    
    // 确保组件可见
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 300, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()
    
    await wrapper.find('.my-backtop').trigger('click')
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('applies styles correctly', async () => {
    const wrapper = mount(MYBacktop, { 
      props: { right: 40, bottom: 40 },
      attachTo: document.body
    })
    
    // 确保组件可见
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 300, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()
    
    const element = wrapper.find('.my-backtop')
    expect(element.exists()).toBe(true)
    expect(element.attributes('style')).toContain('right: 40px')
    expect(element.attributes('style')).toContain('bottom: 40px')
  })
})