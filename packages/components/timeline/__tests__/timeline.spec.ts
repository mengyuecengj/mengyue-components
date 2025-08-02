import { mount } from '@vue/test-utils';
import MYTimeline from '../src/timeline.vue';
import { describe, expect, it } from 'vitest';

describe('MYTimeline', () => {
  it('renders default timeline', () => {
    const wrapper = mount(MYTimeline);
    expect(wrapper.classes()).toContain('my-timeline');
    expect(wrapper.classes()).toContain('vertical'); // Default direction
  });

  it('renders horizontal timeline', () => {
    const wrapper = mount(MYTimeline, {
      props: {
        direction: 'horizontal'
      }
    });
    expect(wrapper.classes()).toContain('horizontal');
  });

  it('applies custom theme and style', () => {
    const wrapper = mount(MYTimeline, {
      props: {
        theme: 'dark',
        style: { color: 'red' }
      }
    });
    expect(wrapper.attributes('style')).toContain('color: red');
  });

  it('renders with slots', () => {
    const wrapper = mount(MYTimeline, {
      slots: {
        default: '<div class="timeline-item">Item</div>'
      }
    });
    expect(wrapper.find('.timeline-item').exists()).toBe(true);
  });
});