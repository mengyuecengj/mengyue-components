import { mount } from '@vue/test-utils';
import MYSwitch from '../src/switch.vue';
import { describe, expect, it } from 'vitest';

describe('MYSwitch', () => {
  // 基础功能测试
  it('should toggle when clicked', async () => {
    const wrapper = mount(MYSwitch, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.find('input').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  // 禁用状态测试
  it('should not toggle when disabled', async () => {
    const wrapper = mount(MYSwitch, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    await wrapper.find('input').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  // 尺寸测试
  it('should render with correct size class', () => {
    const wrapper = mount(MYSwitch, {
      props: {
        size: 'mini',
      },
    });

    expect(wrapper.classes()).toContain('my-switch--mini');
  });

  // 文本显示测试
  it('should display text when provided', () => {
    const wrapper = mount(MYSwitch, {
      props: {
        text: 'T',
      },
    });

    expect(wrapper.find('.slider-text').text()).toBe('T');
  });
});
