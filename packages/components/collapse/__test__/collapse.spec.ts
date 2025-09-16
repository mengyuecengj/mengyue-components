import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MYCollapse from '../src/collapse.vue'
import MYCollapseItem from '../src/collapseItem.vue'

describe('MYCollapse', () => {
  it('renders collapse items', () => {
    const wrapper = mount(MYCollapse, {
      props: { modelValue: [] },
      slots: {
        default: `
          <MYCollapseItem name="a" title="Panel A">Content A</MYCollapseItem>
          <MYCollapseItem name="b" title="Panel B">Content B</MYCollapseItem>
        `
      },
      global: {
        components: { MYCollapseItem }
      }
    })

    expect(wrapper.findAll('.my-collapse-item__header')).toHaveLength(2)
  })

  it('toggles item in accordion mode', async () => {
    const wrapper = mount(MYCollapse, {
      props: {
        modelValue: '',
        accordion: true
      },
      slots: {
        default: `
          <MYCollapseItem name="item1" title="Title 1">Content</MYCollapseItem>
        `
      },
      global: {
        components: { MYCollapseItem }
      }
    })

    const header = wrapper.find('.my-collapse-item__header')
    await header.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('toggles item in non-accordion mode', async () => {
    const wrapper = mount(MYCollapse, {
      props: {
        modelValue: [],
        accordion: false
      },
      slots: {
        default: `
          <MYCollapseItem name="item1" title="Title 1">Content</MYCollapseItem>
        `
      },
      global: {
        components: { MYCollapseItem }
      }
    })

    const header = wrapper.find('.my-collapse-item__header')
    await header.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toEqual([[['item1']]])
    expect(wrapper.emitted('change')).toEqual([[['item1']]])
  })
})
