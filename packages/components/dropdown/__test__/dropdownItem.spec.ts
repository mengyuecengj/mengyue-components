import { mount } from '@vue/test-utils';
import MYDropdownItem from '../src/dropdownItem.vue';
import { describe, expect, it } from 'vitest';

describe('MYDropdownItem', () => {
  it('renders with default props', () => {
    const wrapper = mount(MYDropdownItem);
    expect(wrapper.classes()).toContain('my-dropdown-item');
    expect(wrapper.classes()).not.toContain('disabled');
    expect(wrapper.classes()).not.toContain('divided');
  });

  it('renders with disabled prop', () => {
    const wrapper = mount(MYDropdownItem, {
      props: { disabled: true },
    });
    expect(wrapper.classes()).toContain('disabled');
  });

  it('renders with divided prop', () => {
    const wrapper = mount(MYDropdownItem, {
      props: { divided: true },
    });
    expect(wrapper.classes()).toContain('divided');
  });

  it('emits click event when not disabled', async () => {
    const wrapper = mount(MYDropdownItem);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(MYDropdownItem, {
      props: { disabled: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});