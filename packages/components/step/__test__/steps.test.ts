import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MYSteps from '../src/steps.vue'
import MYStep from '../src/step.vue'

describe('MYSteps Component', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(MYSteps, {
      slots: {
        default: [
          mount(MYStep, { props: { title: 'Step 1', index: 0 } }).html(),
          mount(MYStep, { props: { title: 'Step 2', index: 1 } }).html(),
        ],
      },
    })

    expect(wrapper.classes()).toContain('my-steps')
    expect(wrapper.classes()).toContain('my-steps--horizontal')
    expect(wrapper.classes()).toContain('my-steps--align-left')
  })

  it('updates step status based on active prop', () => {
    const wrapper = mount(MYSteps, {
      props: { active: 1 },
      slots: {
        default: [
          { template: '<MYStep title="Step 1" :index="0" />' },
          { template: '<MYStep title="Step 2" :index="1" />' },
        ],
      },
      global: {
        components: { MYStep }
      }
    })

    const steps = wrapper.findAllComponents(MYStep)
    expect(steps[0].vm.currentStatus).toBe('finish')
    expect(steps[1].vm.currentStatus).toBe('process')
  })

  it('supports vertical direction', () => {
    const wrapper = mount(MYSteps, {
      props: { direction: 'vertical' },
      slots: {
        default: [
          mount(MYStep, { props: { title: 'Step 1', index: 0 } }).html(),
        ],
      },
    })

    expect(wrapper.classes()).toContain('my-steps--vertical')
  })
})

describe('MYStep Component', () => {
  it('renders correctly with title and description', () => {
    const wrapper = mount(MYStep, {
      props: { title: 'Step 1', description: 'Description', index: 0 },
    })

    expect(wrapper.find('.my-step__title').text()).toBe('Step 1')
    expect(wrapper.find('.my-step__description').text()).toBe('Description')
  })

  it('displays custom icon when provided', () => {
    const wrapper = mount(MYStep, {
      props: { title: 'Step 1', index: 0 },
      slots: { icon: '<span>Custom Icon</span>' },
    })

    expect(wrapper.find('.my-step__icon').html()).toContain('Custom Icon')
  })

  it('updates status based on parent context', () => {
    const wrapper = mount(MYSteps, {
      props: { active: 1 },
      slots: {
        default: [
          { template: '<MYStep title="Step 1" :index="0" />' },
          { template: '<MYStep title="Step 2" :index="1" />' },
        ],
      },
      global: {
        components: { MYStep }
      }
    })

    const steps = wrapper.findAllComponents(MYStep)
    expect(steps[0].vm.currentStatus).toBe('finish')
    expect(steps[1].vm.currentStatus).toBe('process')
  })
})