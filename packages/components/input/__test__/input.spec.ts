import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MYInput from '../src/input.vue'

describe('MYInput', () => {
  it('renders input element by default', () => {
    const wrapper = mount(MYInput)
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
  })

  it('renders textarea when tag is textarea', () => {
    const wrapper = mount(MYInput, {
      props: { tag: 'textarea' }
    })
    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
  })

  it('binds modelValue correctly', async () => {
    const wrapper = mount(MYInput, {
      props: { modelValue: 'hello' }
    })
    const input = wrapper.find('input')
    expect((input.element as HTMLInputElement).value).toBe('hello')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(MYInput)
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
  })

  it('clears value when clear icon is clicked', async () => {
    const wrapper = mount(MYInput, {
      props: {
        modelValue: 'clear me',
        clearable: true
      }
    })

    // 模拟鼠标悬停激活 clear 显示
    await wrapper.trigger('mouseenter')

    // 需要更新悬浮状态并显示 clear 图标
    await wrapper.vm.$nextTick()

    const clearIcon = wrapper.find('.my-input__clear')
    expect(clearIcon.exists()).toBe(true)

    await clearIcon.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.slice(-1)[0]).toEqual([''])
  })

  it('toggles password visibility when icon is clicked', async () => {
    const wrapper = mount(MYInput, {
      props: {
        showPassword: true,
        type: 'password',
        tag: 'input'
      }
    })

    await wrapper.trigger('mouseenter') // 激活图标
    await wrapper.vm.$nextTick()

    const passwordIcon = wrapper.find('.my-input__password')
    expect(passwordIcon.exists()).toBe(true)

    await passwordIcon.trigger('click')
    expect(wrapper.emitted('update:showPassword')).toBeTruthy()
  })

  it('displays word count when wordLimit and maxlength are enabled', () => {
    const wrapper = mount(MYInput, {
      props: {
        modelValue: '12345',
        maxlength: 10,
        wordLimit: true
      }
    })
    const counter = wrapper.find('.my-input__word-limit')
    expect(counter.exists()).toBe(true)
    expect(counter.text()).toBe('5/10')
  })

  it('applies disabled attribute when disabled is true', () => {
    const wrapper = mount(MYInput, {
      props: { disabled: true }
    })
    const input = wrapper.find('input')
    expect(input.attributes()).toHaveProperty('disabled')
  })
})
