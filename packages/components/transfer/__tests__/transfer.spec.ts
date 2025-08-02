import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MYTransfer from '../src/transfer.vue'
import MYTransferPanel from '../src/transferPanel.vue'

describe('MYTransfer.vue', () => {
  const mockData = [
    { key: 1, label: 'Item 1', disabled: false },
    { key: 2, label: 'Item 2', disabled: false },
    { key: 3, label: 'Item 3', disabled: true },
  ]

  it('renders correctly', () => {
    const wrapper = mount(MYTransfer, {
      props: {
        modelValue: [],
        data: mockData,
      },
      global: {
        components: { MYTransferPanel },
      },
    })

    expect(wrapper.find('.my-transfer').exists()).toBe(true)
    expect(wrapper.findAllComponents(MYTransferPanel)).toHaveLength(2)
  })

  it('passes data to panels correctly', () => {
    const wrapper = mount(MYTransfer, {
      props: {
        modelValue: [1],
        data: mockData,
      },
      global: {
        components: { MYTransferPanel },
      },
    })

    const panels = wrapper.findAllComponents(MYTransferPanel)
    expect(panels[0].props('data')).toEqual([mockData[1], mockData[2]])
    expect(panels[1].props('data')).toEqual([mockData[0]])
  })

  it('handles selection correctly', async () => {
    const wrapper = mount(MYTransfer, {
      props: {
        modelValue: [],
        data: mockData,
      },
      global: {
        components: { MYTransferPanel },
      },
    })

    const leftPanel = wrapper.findAllComponents(MYTransferPanel)[0]
    await leftPanel.vm.$emit('update:selected', [2])
    expect(wrapper.emitted('update:modelValue')).toBeFalsy() // 验证未触发 modelValue 更新
  })

  it('moves items to right panel', async () => {
    const wrapper = mount(MYTransfer, {
      props: {
        modelValue: [],
        data: mockData,
      },
      global: {
        components: { MYTransferPanel },
      },
    })

    const leftPanel = wrapper.findAllComponents(MYTransferPanel)[0]
    await leftPanel.vm.$emit('update:selected', [2])
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[[2]]])
  })

  it('does not select disabled items', async () => {
    const wrapper = mount(MYTransfer, {
      props: {
        modelValue: [],
        data: mockData,
      },
      global: {
        components: { MYTransferPanel },
      },
    })

    const leftPanel = wrapper.findAllComponents(MYTransferPanel)[0]
    await leftPanel.vm.$emit('update:selected', [3])
    expect(wrapper.emitted('update:modelValue')).toBeFalsy() // 验证未触发 modelValue 更新
  })
})