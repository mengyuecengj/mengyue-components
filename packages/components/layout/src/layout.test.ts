import { describe, expect, it } from 'vitest';
import { layoutProps, colProps } from './layout';

describe('layoutProps', () => {
  it('should have correct default values', () => {
    expect(layoutProps.tag.default).toBe('div');
    expect(layoutProps.gutter.default).toBe(0);
    expect(layoutProps.justify.default).toBeUndefined();
    expect(layoutProps.align.default).toBe(false);
    expect(layoutProps.alignCenter.default).toBe(false);
    expect(layoutProps.direction.default).toBe('row');
  });

  it('should validate gutter correctly', () => {
    const validator = layoutProps.gutter.validator;
    expect(validator(0)).toBe(true);
    expect(validator(24)).toBe(true);
    expect(validator('12')).toBe(true);
    expect(validator(-1)).toBe(false);
    expect(validator(25)).toBe(false);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });

  it('should validate justify correctly', () => {
    const validator = layoutProps.justify.validator;
    expect(validator('start')).toBe(true);
    expect(validator('end')).toBe(true);
    expect(validator('center')).toBe(true);
    expect(validator('space-around')).toBe(true);
    expect(validator('space-between')).toBe(true);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });

  it('should validate direction correctly', () => {
    const validator = layoutProps.direction.validator;
    expect(validator('row')).toBe(true);
    expect(validator('column')).toBe(true);
    expect(validator('row-reverse')).toBe(true);
    expect(validator('column-reverse')).toBe(true);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });
});

describe('colProps', () => {
  it('should have correct default values', () => {
    expect(colProps.tag.default).toBe('div');
    expect(colProps.span.default).toBe(24);
    expect(colProps.offsetLeft.default).toBe(0);
    expect(colProps.offsetRight.default).toBe(0);
    expect(colProps.pull.default).toBe(0);
    expect(colProps.push.default).toBe(0);
  });

  it('should validate span correctly', () => {
    const validator = colProps.span.validator;
    expect(validator(1)).toBe(true);
    expect(validator(24)).toBe(true);
    expect(validator(0)).toBe(false);
    expect(validator(25)).toBe(false);
  });

  it('should validate offsetLeft correctly', () => {
    const validator = colProps.offsetLeft.validator;
    expect(validator(0)).toBe(true);
    expect(validator(24)).toBe(true);
    expect(validator('12')).toBe(true);
    expect(validator(-1)).toBe(false);
    expect(validator(25)).toBe(false);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });

  it('should validate offsetRight correctly', () => {
    const validator = colProps.offsetRight.validator;
    expect(validator(0)).toBe(true);
    expect(validator(24)).toBe(true);
    expect(validator('12')).toBe(true);
    expect(validator(-1)).toBe(false);
    expect(validator(25)).toBe(false);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });

  it('should validate pull correctly', () => {
    const validator = colProps.pull.validator;
    expect(validator(0)).toBe(true);
    expect(validator(24)).toBe(true);
    expect(validator('12')).toBe(true);
    expect(validator(-1)).toBe(false);
    expect(validator(25)).toBe(false);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });

  it('should validate push correctly', () => {
    const validator = colProps.push.validator;
    expect(validator(0)).toBe(true);
    expect(validator(24)).toBe(true);
    expect(validator('12')).toBe(true);
    expect(validator(-1)).toBe(false);
    expect(validator(25)).toBe(false);
    expect(layoutProps.gutter.validator('invalid')).toBe(false);
  });
});
