import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Scroll from '../src/scroll.vue';

// Mock useScrollComputed
vi.mock('./scrollComputed', () => ({
  useScrollComputed: vi.fn((props) => ({
    scrollClass: { value: props['custom-class'] ? ['custom-class'] : [] }, // 仅动态类
    scrollStyle: {
      value: {
        '--global-scroll-thumb-color': props.thumbColor || '',
        '--global-scroll-thumb-hover-color': props.thumbHoverColor || '',
        '--global-scroll-track-color': props.trackColor || '',
        width: props.width || '',
      },
    },
  })),
}));

describe('Scroll Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // 重置全局样式以避免干扰
    document.documentElement.style.removeProperty('--global-scroll-thumb-color');
    document.documentElement.style.removeProperty('--global-scroll-thumb-hover-color');
    document.documentElement.style.removeProperty('--global-scroll-track-color');
    document.documentElement.style.removeProperty('--global-scroll-width');
  });

  it('renders with default props and applies correct styles', () => {
    const wrapper = mount(Scroll, {
      props: {
        tag: 'div',
        thumbColor: '#FF0000',
        thumbHoverColor: '#00FF00',
        trackColor: '#0000FF',
        width: '12px',
      },
      slots: {
        default: 'Test Content',
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-thumb-color')).toBe('#FF0000');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-thumb-hover-color')).toBe('#00FF00');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-track-color')).toBe('#0000FF');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-width')).toBe('12px');
    expect(wrapper.text()).toBe('Test Content');
  });

  it('applies custom props correctly', () => {
    const wrapper = mount(Scroll, {
      props: {
        tag: 'div',
        thumbColor: '#FF0000',
        thumbHoverColor: '#00FF00',
        trackColor: '#0000FF',
        width: '16px',
        'custom-class': true,
      },
    });

    expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-thumb-color')).toBe('#FF0000');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-thumb-hover-color')).toBe('#00FF00');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-track-color')).toBe('#0000FF');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-width')).toBe('16px');
  });

  it('handles missing optional props', () => {
    const wrapper = mount(Scroll, {
      props: {
        tag: 'div',
      },
    });

    expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    expect(wrapper.classes()).toEqual([]); // 无动态类
    expect(document.documentElement.style.getPropertyValue('--global-scroll-thumb-color')).toBe('');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-track-color')).toBe('');
    expect(document.documentElement.style.getPropertyValue('--global-scroll-width')).toBe('');
  });
});
