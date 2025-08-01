import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SelectCascader from '../src/selectCascader.vue';
import { Option } from '../src/type';

const defaultOptions: Option[] = [
  { value: '1', label: '选项1' },
  { value: '2', label: '选项2', disabled: true },
  { value: '3', label: '选项3' }
];

describe('SelectCascader', () => {
  it('should render with default props', () => {
    const wrapper = mount(SelectCascader, {
      props: { options: defaultOptions },
      global: { stubs: ['MYScrollbar'] }
    });
    expect(wrapper.find('.select-e').exists()).toBe(true);
    expect(wrapper.find('.select-trigger').exists()).toBe(true);
    expect(wrapper.find('.selected-value').text()).toBe('请选择');
  });

  it('should render with custom placeholder', () => {
    const wrapper = mount(SelectCascader, {
      props: { placeholder: '选择选项', options: defaultOptions },
      global: { stubs: ['MYScrollbar'] }
    });
    expect(wrapper.find('.selected-value').text()).toBe('选择选项');
  });

  it('should handle disabled state', () => {
    const wrapper = mount(SelectCascader, {
      props: { disabled: true, options: defaultOptions },
      global: { stubs: ['MYScrollbar'] }
    });
    expect(wrapper.find('.select-e').classes()).toContain('is-disabled');
    expect(wrapper.find('.select-trigger').classes()).toContain('is-disabled');
  });
});
