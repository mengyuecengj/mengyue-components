import { describe, it, expect } from 'vitest';
import { useAComputed } from '../src/computedA';
import { AProps } from '../src/type';

describe('useAComputed', () => {
  it('should return default class and style when no props are provided', () => {
    const props: AProps = {};
    const { aClass, aStyle } = useAComputed(props);
    expect(aClass.value).toEqual(['my-a']);
    expect(aStyle.value).toEqual({});
  });

  it('should handle type prop correctly', () => {
    const props: AProps = { type: 'primary' };
    const { aClass } = useAComputed(props);
    expect(aClass.value).toContain('my-a--primary');
  });

  it('should handle size prop correctly', () => {
    const props: AProps = { size: 'large' };
    const { aClass, aStyle } = useAComputed(props);
    expect(aClass.value).toContain('my-a--large');
    expect(aStyle.value).toHaveProperty('fontSize');
  });

  it('should handle disabled flag correctly', () => {
    const props: AProps = { disabled: true };
    const { aClass } = useAComputed(props);
    expect(aClass.value).toContain('my-a--disabled');
  });

  it('should handle underline flag correctly', () => {
    const props: AProps = { underline: true };
    const { aClass } = useAComputed(props);
    expect(aClass.value).toContain('my-a--underline');
  });

  it('should handle custom color style correctly', () => {
    const props: AProps = { color: 'red' };
    const { aStyle } = useAComputed(props);
    expect(aStyle.value).toHaveProperty('color', 'red');
  });
});