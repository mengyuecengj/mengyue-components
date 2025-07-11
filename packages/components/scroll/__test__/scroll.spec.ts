import { mount } from '@vue/test-utils';
import MYScroll from '../src/scroll.vue';
import { describe, expect, it, afterEach } from 'vitest';

describe('MYScroll Component', () => {
  afterEach(() => {
    // 清理全局样式
    const html = document.documentElement;
    html.style.removeProperty('--global-scroll-thumb-color');
    html.style.removeProperty('--global-scroll-thumb-hover-color');
    html.style.removeProperty('--global-scroll-track-color');
    html.style.removeProperty('--global-scroll-width');
  });

  it('should render with default props', () => {
    const wrapper = mount(MYScroll);
    expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    expect(wrapper.classes()).toContain('my-scroll-container');
  });

  it('should render with custom tag prop', () => {
    const wrapper = mount(MYScroll, {
      props: { tag: 'section' }
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('section');
  });

  it('should set global scroll styles when props are provided', () => {
    const props = {
      thumbColor: '#ff0000',
      thumbHoverColor: '#00ff00',
      trackColor: '#0000ff',
      width: '8px'
    };
    
    mount(MYScroll, { props });

    const html = document.documentElement;
    expect(html.style.getPropertyValue('--global-scroll-thumb-color')).toBe('#ff0000');
    expect(html.style.getPropertyValue('--global-scroll-thumb-hover-color')).toBe('#00ff00');
    expect(html.style.getPropertyValue('--global-scroll-track-color')).toBe('#0000ff');
    expect(html.style.getPropertyValue('--global-scroll-width')).toBe('8px');
  });

  it('should not set global styles when props are empty', () => {
    mount(MYScroll);

    const html = document.documentElement;
    expect(html.style.getPropertyValue('--global-scroll-thumb-color')).toBe('');
    expect(html.style.getPropertyValue('--global-scroll-thumb-hover-color')).toBe('');
    expect(html.style.getPropertyValue('--global-scroll-track-color')).toBe('');
    expect(html.style.getPropertyValue('--global-scroll-width')).toBe('');
  });

  // 测试注释掉的卸载逻辑
  // it('should clean up global styles when unmounted', async () => {
  //   const wrapper = mount(MYScroll, {
  //     props: {
  //       thumbColor: '#ff0000',
  //       thumbHoverColor: '#00ff00',
  //       trackColor: '#0000ff',
  //       width: '8px'
  //     }
  //   });
    
  //   await wrapper.unmount();
    
  //   const html = document.documentElement;
  //   expect(html.style.getPropertyValue('--global-scroll-thumb-color')).toBe('');
  //   expect(html.style.getPropertyValue('--global-scroll-thumb-hover-color')).toBe('');
  //   expect(html.style.getPropertyValue('--global-scroll-track-color')).toBe('');
  // });
});