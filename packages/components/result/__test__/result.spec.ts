import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import MYResult from '../src/result.vue'

// Stub 所有异步图标组件
const stubs = {
  // 模拟组件名称以便测试中选择 class
  primary: {
    template: '<div class="primary-icon"></div>'
  },
  success: {
    template: '<div class="success-icon"></div>'
  },
  warning: {
    template: '<div class="warning-icon"></div>'
  },
  error: {
    template: '<div class="error-icon"></div>'
  },
  info: {
    template: '<div class="info-icon"></div>'
  }
}

describe('MYResult.vue', () => {
  it('renders default icon (info) and text content', async () => {
    const wrapper = mount(MYResult, {
      props: {
        title: 'Hello',
        subTitle: 'This is a subtitle'
      },
      global: {
        stubs
      }
    })
    expect(wrapper.find('.result-title').text()).toBe('Hello')
    expect(wrapper.find('.result-subtitle').text()).toBe('This is a subtitle')
  })

  it('renders custom subtitle slot if provided', async () => {
    const wrapper = mount(MYResult, {
      props: {
        title: 'Slot Test',
        subTitle: 'Should not show this'
      },
      global: {
        stubs
      },
      slots: {
        'sub-title': '<span class="custom-subtitle">Custom Slot Subtitle</span>'
      }
    })

    await flushPromises()

    expect(wrapper.find('.custom-subtitle').exists()).toBe(true)
    expect(wrapper.find('.result-subtitle').text()).toBe('Custom Slot Subtitle')
  })

  it('renders extra slot content', async () => {
    const wrapper = mount(MYResult, {
      props: { title: 'With Extra' },
      global: {
        stubs
      },
      slots: {
        extra: '<button class="retry-button">Retry</button>'
      }
    })

    await flushPromises()

    expect(wrapper.find('.retry-button').exists()).toBe(true)
    expect(wrapper.find('.result-extra').text()).toContain('Retry')
  })
})
