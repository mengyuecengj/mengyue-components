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
          '<MYCheckbox label="option1" />',
          '<MYCheckbox label="option2" />'
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

  it('disables all checkboxes when disabled prop is true', () => {
    const wrapper = mount(MYCheckboxGroup, {
      global: {
        components: { MYCheckbox }
      },
      props: {
        disabled: true
      },
      slots: {
        default: '<MYCheckbox label="option1" />'
      }
    });

    expect(wrapper.classes()).toContain('is-disabled');
    expect(wrapper.findComponent(MYCheckbox).vm.isDisabled).toBe(true);
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
        default: '<MYCheckbox label="option1" />'
      }
    });

    expect(wrapper.classes()).toContain('is-horizontal');
    await wrapper.setProps({ direction: 'vertical' });
    expect(wrapper.classes()).toContain('is-vertical');
  });
});