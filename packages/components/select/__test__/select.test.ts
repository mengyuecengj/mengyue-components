import { describe, it, expect } from 'vitest';
import { selectProps } from '../src/select';

describe('selectProps', () => {
  it('should have correct default values', () => {
    expect(selectProps.modelValue.default).toBe('');
    expect(selectProps.placeholder.default).toBe('请选择');
    expect(selectProps.disabled.default).toBe(false);
    expect(selectProps.width.default).toBe('260px');
    expect(selectProps.height.default).toBe('40px');
  });

  it('should have correct types', () => {
    expect(selectProps.modelValue.type).toEqual([String, Number]);
    expect(selectProps.placeholder.type).toBe(String);
    expect(selectProps.disabled.type).toBe(Boolean);
    expect(selectProps.width.type).toEqual([String, Number]);
    expect(selectProps.height.type).toEqual([String, Number]);
  });
});