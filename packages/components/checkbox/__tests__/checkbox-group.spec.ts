import { mount } from '@vue/test-utils';
import MYCheckboxGroup from '../src/checkbox-group.vue';
import MYCheckbox from '../src/checkbox.vue';
import { describe, expect, it } from 'vitest';

describe('MYCheckboxGroup', () => {
  it('renders with default props', () => {
    const wrapper = mount(MYCheckboxGroup, {
      global: {
        components: { MYCheckbox }
      },
      slots: {
        default: [
          '<MYCheckbox label="option1" value="option1" />',  // 添加 value 属性
          '<MYCheckbox label="option2" value="option2" />'   // 添加 value 属性
        ]
      }
    });

    expect(wrapper.classes()).toContain('my-checkbox-group');
    expect(wrapper.classes()).toContain('is-horizontal');
    expect(wrapper.findComponent(MYCheckbox).exists()).toBe(true);
  });

  it('updates modelValue when checkbox is clicked', async () => {
    const wrapper = mount(MYCheckboxGroup, {
      global: {
        components: { MYCheckbox }
      },
      props: {
        modelValue: []
      },
      slots: {
        default: '<MYCheckbox label="option1" value="option1" />'
      }
    });

    await wrapper.findComponent(MYCheckbox).trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['option1']]);
  });

  it('changes direction when direction prop is updated', async () => {
    const wrapper = mount(MYCheckboxGroup, {
      global: {
        components: { MYCheckbox }
      },
      props: {
        direction: 'horizontal'
      },
      slots: {
        default: '<MYCheckbox label="option1" value="option1" />'  // 添加 value 属性
      }
    });

    expect(wrapper.classes()).toContain('is-horizontal');
    await wrapper.setProps({ direction: 'vertical' });
    expect(wrapper.classes()).toContain('is-vertical');
  });
});