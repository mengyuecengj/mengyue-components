import { describe, it, expect } from 'vitest'
import { FormItemProps } from '../src/type'
import { formItemProps } from '../src/formItem'

// 测试类型定义
describe('Type Definitions', () => {
  it('should export FormItemProps type', () => {
    const props: FormItemProps = {
      label: 'test',
      prop: 'field',
      validateTrigger: 'blur',
      modelValue: { field: 'value' },
      rules: { field: [{ required: true }] },
      labelWidth: '100px',
      size: 'medium',
      inline: false,
      disabled: false
    }
    expect(props).toBeDefined()
  })
})

// 测试工具函数
describe('Utility Functions', () => {
  it('should generate default model value', () => {
    const defaultValue = formItemProps.modelValue.default()
    expect(defaultValue).toEqual({})
  })

  it('should generate default rules', () => {
    const defaultValue = formItemProps.rules.default()
    expect(defaultValue).toEqual({})
  })
})

// 测试校验逻辑
describe('Validation Logic', () => {
  it('should validate rules correctly', () => {
    const validRules = { field: [{ required: true }] }
    const invalidRules = { field: [{} as any] }

    expect(formItemProps.rules.validator(validRules)).toBe(true)
    expect(formItemProps.rules.validator(invalidRules)).toBe(false)
  })
})

// 测试 Props 定义
describe('Props Definition', () => {
  it('should contain required props', () => {
    expect(formItemProps).toHaveProperty('label')
    expect(formItemProps).toHaveProperty('prop')
    expect(formItemProps).toHaveProperty('validateTrigger')
    expect(formItemProps).toHaveProperty('modelValue')
    expect(formItemProps).toHaveProperty('rules')
  })
})