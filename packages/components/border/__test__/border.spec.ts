import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { useBorderComputed } from '../src/borderComputed';
import MYBorder from '../src/border.vue';
import { borderProps } from '../src/border';
import { ExtractPropTypes } from 'vue';

// Define a partial type for testing to satisfy BorderPropsWithDynamic
type TestBorderProps = Partial<ExtractPropTypes<typeof borderProps>> & { [key: string]: unknown };

// Mock the hooks with proper TypeScript types
vi.mock('../../../hooks/useClassComputed', () => ({
  useClassComputed: vi.fn((config: { baseClass: string; flagClasses: Partial<Record<keyof TestBorderProps, boolean>> }) => {
    const classes = [config.baseClass];
    Object.entries(config.flagClasses).forEach(([key, value]) => {
      if (value) classes.push(`my-border--${key}`);
    });
    return classes.join(' ');
  }),
}));

vi.mock('../../../hooks/useStyleComputed', () => ({
  useStyleComputed: vi.fn((props: TestBorderProps, config: { propToStyleMap: Record<string, string>; customStyleLogic?: (props: TestBorderProps, style: Record<string, string>) => void }) => {
    const style: Record<string, string> = {};
    Object.entries(config.propToStyleMap).forEach(([prop, styleKey]) => {
      if (props[prop as keyof TestBorderProps]) style[styleKey] = props[prop as keyof TestBorderProps] as string;
    });
    if (config.customStyleLogic) config.customStyleLogic(props, style);
    return style;
  }),
}));

describe('useBorderComputed', () => {
  it('should generate correct borderClass with default props', () => {
    const props: TestBorderProps = { round: false, circle: false, center: false };
    const { borderClass } = useBorderComputed(props as any); // Type assertion due to dynamic nature
    expect(borderClass).toBe('my-border');
  });

  it('should include round class when round prop is true', () => {
    const props: TestBorderProps = { round: true, circle: false, center: false };
    const { borderClass } = useBorderComputed(props as any);
    expect(borderClass).toBe('my-border my-border--round');
  });

  it('should include circle class when circle prop is true', () => {
    const props: TestBorderProps = { round: false, circle: true, center: false };
    const { borderClass } = useBorderComputed(props as any);
    expect(borderClass).toBe('my-border my-border--circle');
  });

  it('should include center class when center prop is true', () => {
    const props: TestBorderProps = { round: false, circle: false, center: true };
    const { borderClass } = useBorderComputed(props as any);
    expect(borderClass).toBe('my-border my-border--center');
  });

  it('should apply default borderColor when no border colors are provided', () => {
    const props: TestBorderProps = { borderColor: '', topColor: '', bottomColor: '', leftColor: '', rightColor: '' };
    const { borderStyle } = useBorderComputed(props as any);
    expect(borderStyle).toEqual({ borderColor: '#000' });
  });
it('should apply topColor with solid style and 1px width', () => {
  const props: TestBorderProps = { topColor: '#ff0000' };
  const { borderStyle } = useBorderComputed(props as any);
  expect(borderStyle).toEqual({
    borderTopColor: '#ff0000',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
  });
});

it('should apply bottomColor with solid style and 1px width', () => {
  const props: TestBorderProps = { bottomColor: '#00ff00' };
  const { borderStyle } = useBorderComputed(props as any);
  expect(borderStyle).toEqual({
    borderBottomColor: '#00ff00',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
  });
});

it('should apply leftColor with solid style and 1px width', () => {
  const props: TestBorderProps = { leftColor: '#0000ff' };
  const { borderStyle } = useBorderComputed(props as any);
  expect(borderStyle).toEqual({
    borderLeftColor: '#0000ff',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
  });
});

it('should apply rightColor with solid style and 1px width', () => {
  const props: TestBorderProps = { rightColor: '#ffff00' };
  const { borderStyle } = useBorderComputed(props as any);
  expect(borderStyle).toEqual({
    borderRightColor: '#ffff00',
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
  });
});
  it('should map props to styles correctly', () => {
    const props: TestBorderProps = {
      borderStyle: 'dashed',
      borderWidth: '2px',
      borderColor: '#123456',
      width: '100px',
      height: '50px',
      paddingText: '10px',
      colorBg: '#ffffff',
      textColor: '#333333',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    };
    const { borderStyle } = useBorderComputed(props as any);
    expect(borderStyle).toEqual({
      borderStyle: 'dashed',
      borderWidth: '2px',
      borderColor: '#123456',
      width: '100px',
      height: '50px',
      padding: '10px',
      background: '#ffffff',
      color: '#333333',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    });
  });
});

describe('MYBorder Component', () => {
  it('should render with default props', () => {
    const wrapper = mount(MYBorder, {
      props: {} as TestBorderProps,
    });
    expect(wrapper.classes()).toContain('my-border');
    expect(wrapper.element.tagName.toLowerCase()).toBe('div');
    expect(wrapper.attributes('style')).toContain('border-color: #000');
  });

  it('should render with custom tag', () => {
    const wrapper = mount(MYBorder, {
      props: { tag: 'span' } as TestBorderProps,
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('span');
  });

  it('should apply round class when round prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: { round: true } as TestBorderProps,
    });
    expect(wrapper.classes()).toContain('my-border--round');
  });

  it('should apply circle class when circle prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: { circle: true } as TestBorderProps,
    });
    expect(wrapper.classes()).toContain('my-border--circle');
  });

  it('should apply center class when center prop is true', () => {
    const wrapper = mount(MYBorder, {
      props: { center: true } as TestBorderProps,
    });
    expect(wrapper.classes()).toContain('my-border--center');
  });

  it('should apply directional border styles', () => {
    const wrapper = mount(MYBorder, {
      props: {
        topColor: '#ff0000',
        bottomColor: '#00ff00',
        leftColor: '#0000ff',
        rightColor: '#ffff00',
      } as TestBorderProps,
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('border-top-color: #ff0000');
    expect(style).toContain('border-top-style: solid');
    expect(style).toContain('border-top-width: 1px');
    expect(style).toContain('border-bottom-color: #00ff00');
    expect(style).toContain('border-bottom-style: solid');
    expect(style).toContain('border-bottom-width: 1px');
    expect(style).toContain('border-left-color: #0000ff');
    expect(style).toContain('border-left-style: solid');
    expect(style).toContain('border-left-width: 1px');
    expect(style).toContain('border-right-color: #ffff00');
    expect(style).toContain('border-right-style: solid');
    expect(style).toContain('border-right-width: 1px');
  });

  it('should render slot content', () => {
    const wrapper = mount(MYBorder, {
      slots: { default: 'Test Content' },
      props: {} as TestBorderProps,
    });
    expect(wrapper.text()).toBe('Test Content');
  });

  it('should handle invalid prop values gracefully', () => {
    const wrapper = mount(MYBorder, {
      props: { borderWidth: null as any, borderColor: undefined as any } as TestBorderProps,
    });
    expect(wrapper.classes()).toContain('my-border');
    expect(wrapper.attributes('style')).toContain('border-color: #000');
  });
});
