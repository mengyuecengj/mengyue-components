import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import MYSelect from '../src/select.vue';
import MYScrollbar from '../../scrollbar/src/scrollbar.vue';

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
    expect((wrapper.vm as any).dropdownVisible).toBe(true);

    await wrapper.find('.select-e').trigger('blur');
    expect((wrapper.vm as any).dropdownVisible).toBe(false);
  });

  it('does not open dropdown when disabled', async () => {
    wrapper = createWrapper({ disabled: true });
    await wrapper.find('.select-trigger').trigger('click');
    expect((wrapper.vm as any).dropdownVisible).toBe(false);
  });

  it('updates selectedLabel when modelValue changes', async () => {
    await wrapper.setProps({ modelValue: 'Option 1' });
    expect((wrapper.vm as any).selectedLabel).toBe('Option 1');
  });
});