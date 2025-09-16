import { describe, expect, it } from 'vitest';
import { useTextComputed } from '../src/textComputed';
import { TextProps } from '../src/type';

describe('useTextComputed', () => {
  it('should handle empty props', () => {
    const props = {} as TextProps;
    const { textClass, textStyle } = useTextComputed(props);
    expect(textClass.value).toEqual(['my-text']);
    expect(textStyle.value).toEqual({});
  });

  it('should handle valid type and size', () => {
    const props = { type: 'primary', size: 'medium' } as TextProps;
    const { textClass, textStyle } = useTextComputed(props);
    expect(textClass.value).toContain('my-text');
    expect(textClass.value).toContain('my-text--primary');
    expect(textClass.value).toContain('my-text--medium');
    expect(textStyle.value).toEqual({ fontSize: 'medium' });
  });

  it('should ignore invalid size', () => {
    const props = { size: 'invalid' } as TextProps;
    const { textClass } = useTextComputed(props);
    expect(textClass.value).not.toContain('invalid');
    expect(textClass.value).toEqual(['my-text']);
  });

  it('should handle disabled flag', () => {
    const props = { disabled: true } as TextProps;
    const { textClass } = useTextComputed(props);
    expect(textClass.value).toContain('my-text--disabled');
  });
});