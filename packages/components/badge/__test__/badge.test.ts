import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MYBadge from './badge.vue';

describe('MYBadge', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(MYBadge, {
      slots: {
        default: 'Content'
      }
    });
    expect(wrapper.text()).toContain('Content');
    expect(wrapper.find('.my-badge').exists()).toBe(false);
  });

  it('renders badge content when content prop is provided', () => {
    const wrapper = mount(MYBadge, {
      props: {
        content: '5'
      },
      slots: {
        default: 'Content'
      }
    });
    expect(wrapper.find('.my-badge').text()).toBe('5');
  });

  it('renders dot when dot prop is true', () => {
    const wrapper = mount(MYBadge, {
      props: {
        dot: true
      },
      slots: {
        default: 'Content'
      }
    });
    expect(wrapper.find('.my-badge.dot').exists()).toBe(true);
  });
});
