import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { useBorderComputed } from '../src/borderComputed';
import MYBorder from '../src/border.vue';
import { borderProps } from '../src/border';
import type { ExtractPropTypes } from 'vue';

type TestBorderProps = Partial<ExtractPropTypes<typeof borderProps>>;

/** mock useClassComputed */
vi.mock('../../../hooks/useClassComputed', () => ({
  useClassComputed: vi.fn(
    (config: {
      baseClass: string;
      flagClasses: Partial<Record<keyof TestBorderProps, boolean>>;
    }) => {
      const classes = [config.baseClass];
      Object.entries(config.flagClasses).forEach(([key, value]) => {
        if (value) classes.push(`my-border--${key}`);
      });
      return classes.join(' ');
    }
  ),
}));

/** mock useStyleComputed */
vi.mock('../../../hooks/useStyleComputed', () => ({
  useStyleComputed: vi.fn(
    (
      props: TestBorderProps,
      config: {
        propToStyleMap: Record<string, string>;
        customStyleLogic?: (
          props: TestBorderProps,
          style: Record<string, string>
        ) => void;
      }
    ) => {
      const style: Record<string, string> = {};

      Object.entries(config.propToStyleMap).forEach(([prop, styleKey]) => {
        const value = props[prop as keyof TestBorderProps];
        if (typeof value === 'string' && value !== '') {
          style[styleKey] = value;
        }
      });

      config.customStyleLogic?.(props, style);
      return style;
    }
  ),
}));

describe('useBorderComputed', () => {
  it('should generate correct borderClass with default props', () => {
    const props: TestBorderProps = {
      rounded: false,
      circular: false,
      center: false,
    };
    const { borderClass } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
    expect(borderClass).toBe('my-border');
  });

  it('should include round class when rounded prop is true', () => {
    const props: TestBorderProps = { rounded: true };
    const { borderClass } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
    expect(borderClass).toBe('my-border my-border--rounded');
  });

  it('should include circle class when circular prop is true', () => {
    const props: TestBorderProps = { circular: true };
    const { borderClass } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
    expect(borderClass).toBe('my-border my-border--circular');
  });

  it('should include center class when center prop is true', () => {
    const props: TestBorderProps = { center: true };
    const { borderClass } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
    expect(borderClass).toBe('my-border my-border--center');
  });

  it('should apply default borderColor when no border colors are provided', () => {
    const props: TestBorderProps = {};
    const { borderStyle } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
    expect(borderStyle).toEqual({ borderColor: '#000' });
  });

  it('should apply topColor with solid style and 1px width', () => {
    const props: TestBorderProps = { topColor: '#ff0000' };
    const { borderStyle } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
    expect(borderStyle).toEqual({
      borderTopColor: '#ff0000',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
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
      colorBackground: '#ffffff',
      textColor: '#333333',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    };

    const { borderStyle } = useBorderComputed(props as ExtractPropTypes<typeof borderProps>);
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
  it('should handle invalid prop values gracefully', () => {
    const wrapper = mount(MYBorder, {
      props: {
        borderWidth: null,
        borderColor: undefined,
      } as unknown as TestBorderProps,
    });

    expect(wrapper.classes()).toContain('my-border');
    expect(wrapper.attributes('style')).toContain('border-color: #000');
  });
});