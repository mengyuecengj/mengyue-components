import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Scrollbar from '../src/scrollbar.vue';
import { scrollbarProps } from '../src/scrollbar';
import type { ScrollbarProps } from '../src/type';

describe('Scrollbar 组件', () => {
  // 辅助函数创建带自定义 props 的 wrapper
  const createWrapper = (props: Partial<ScrollbarProps> = {}) => {
    // 规范化 props，确保 Maxheight 和其他可能为 number 的属性转换为 string
    const normalizedProps = {
      ...props,
      Maxheight: props.Maxheight?.toString() || undefined,
      height: props.height?.toString() || undefined,
      ScrollWidth: props.ScrollWidth?.toString() || undefined,
    };
    return mount(Scrollbar, {
      props: { ...normalizedProps },
      slots: { default: '测试内容' },
    });
  };

  // Test 1: Render with default tag (div)
  it('Render with default tag (div)', () => {
    const wrapper = createWrapper();
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('scrollbar-container');
    expect(wrapper.text()).toBe('测试内容');
  });

  // Test 2: Apply dimension props to styles
  it('Apply dimension props to styles', () => {
    const wrapper = createWrapper({
      height: '200px',
      Maxheight: '300px',
      ScrollWidth: '10px',
      widthX: true,
    });

    expect(wrapper.attributes('style')).toContain('height: 200px');
    expect(wrapper.attributes('style')).toContain('max-height: 300px');
    expect(wrapper.classes()).toContain('scrollbar-container--widthX');
  });

  // Test 3: Apply color props via CSS variables
  it('Apply color props via CSS variables', () => {
    const wrapper = createWrapper({
      thumbColor: '#666666',
      thumbHoverColor: '#999999',
      trackColor: '#333333',
      ScrollWidth: '8px',
    });

    expect(wrapper.attributes('style')).toContain('--scrollbar-container-track-color: #333333');
    expect(wrapper.attributes('style')).toContain('--scrollbar-container-thumb-color: #666666');
    expect(wrapper.attributes('style')).toContain('--scrollbar-container-thumb-hover-color: #999999');
    expect(wrapper.attributes('style')).toContain('--scrollbar-container-scrollbar-width: 8px');
  });

  // Test 4: Apply behavior-related classes based on props
  it('Apply behavior-related classes based on props', () => {
    const wrapper = createWrapper({
      disabledHeight: true,
      disabledWidth: true,
      disabledScroll: true,
    });

    expect(wrapper.classes()).toContain('scrollbar-container--disabledHeight');
    expect(wrapper.classes()).toContain('scrollbar-container--disabledWidth');
    expect(wrapper.classes()).toContain('scrollbar-container--disabledScroll');
  });

  // Test 5: Apply corner class when corner prop is true
  it('Apply corner class when corner prop is true', () => {
    const wrapper = createWrapper({ corner: true });

    expect(wrapper.classes()).toContain('scrollbar-container--corner');
  });

  // Test 6: Respect default prop values
  it('Respect default prop values', () => {
    const wrapper = createWrapper();
    expect(wrapper.props('height')).toBe('');
    expect(wrapper.props('Maxheight')).toBe('');
    expect(wrapper.props('ScrollWidth')).toBe('');
    expect(wrapper.props('widthX')).toBe(false);
    expect(wrapper.props('thumbColor')).toBe('');
    expect(wrapper.props('thumbHoverColor')).toBe('');
    expect(wrapper.props('trackColor')).toBe('');
    expect(wrapper.props('disabledHeight')).toBe(false);
    expect(wrapper.props('disabledWidth')).toBe(false);
    expect(wrapper.props('disabledScroll')).toBe(false);
    expect(wrapper.props('corner')).toBe(false);
    expect(wrapper.props('tag')).toBe('div');
  });

  // Test 7: Verify scrollbarProps definition
  it('Verify scrollbarProps definition', () => {
    expect(scrollbarProps.height.type).toBe(String);
    expect(scrollbarProps.height.default).toBe('');
    expect(scrollbarProps.Maxheight.type).toBe(String);
    expect(scrollbarProps.Maxheight.default).toBe('');
    expect(scrollbarProps.ScrollWidth.type).toBe(String);
    expect(scrollbarProps.ScrollWidth.default).toBe('');
  });
});
