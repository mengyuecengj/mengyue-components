import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';
import MYSelect from '../src/select.vue';
import MYScrollbar from '../../scrollbar/src/scrollbar.vue';

// 获取组件实例的类型
type MYSelectInstance = ComponentPublicInstance<{}, { dropdownVisible: boolean }>;

describe('MYSelect', () => {
  let wrapper: ReturnType<typeof mount>;

  const createWrapper = (props = {}) => {
    return mount(MYSelect, {
      props: {
        modelValue: '',
        placeholder: '请选择',
        disabled: false,
        width: '260px',
        height: '40px',
        ...props,
      },
      global: {
        components: { MYScrollbar },
      },
      slots: {
        default: '<div class="option">Option 1</div><div class="option">Option 2</div>',
      },
    });
  };

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('renders correctly with default props', () => {
    expect(wrapper.find('.select-e').exists()).toBe(true);
    expect(wrapper.find('.selected-value').text()).toBe('请选择');
    expect(wrapper.find('.arrow-icon').exists()).toBe(true);
  });

  it('closes dropdown on blur', async () => {
    await wrapper.find('.select-trigger').trigger('click');
    expect((wrapper.vm as MYSelectInstance).dropdownVisible).toBe(true);

    await wrapper.find('.select-e').trigger('blur');
    expect((wrapper.vm as MYSelectInstance).dropdownVisible).toBe(false);
  });

  it('does not open dropdown when disabled', async () => {
    wrapper = createWrapper({ disabled: true });
    await wrapper.find('.select-trigger').trigger('click');
    expect((wrapper.vm as MYSelectInstance).dropdownVisible).toBe(false);
  });
});