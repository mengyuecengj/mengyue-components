// progress.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MYProgress from '../src/progress.vue'

describe('MYProgress', () => {
  it('should render default percentage', () => {
    const wrapper = mount(MYProgress)
    expect(wrapper.text()).toContain('50%')
  })

  it('should clamp percentage to max 100', () => {
    const wrapper = mount(MYProgress, {
      props: { percentage: 150 }
    })
    expect(wrapper.text()).toContain('100%')
    expect(wrapper.find('.my-progress__bar-inner').attributes('style')).toContain('width: 100%')
  })

  it('should clamp percentage to min 0', () => {
    const wrapper = mount(MYProgress, {
      props: { percentage: -20 }
    })
    expect(wrapper.text()).toContain('0%')
    expect(wrapper.find('.my-progress__bar-inner').attributes('style')).toContain('width: 0%')
  })

  it('should apply success class', () => {
    const wrapper = mount(MYProgress, {
      props: { status: 'success' }
    })
    expect(wrapper.find('.my-progress__bar-inner').classes()).toContain('my-progress__bar-inner--success')
  })

  it('should format text using format prop', () => {
    const wrapper = mount(MYProgress, {
      props: {
        percentage: 70,
        format: (val: number) => `当前进度：${val}`
      }
    })
    expect(wrapper.text()).toContain('当前进度：70')
  })
})
