# Form 组件设计文档

## 概述

Form 组件是本组件库中用于表单管理和验证的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useFormComputed 和 useFormItemComputed 等核心逻辑实现了一套完整且易用的表单管理解决方案。

Form 组件专注于处理表单数据收集、验证和提交操作，为用户提供了一套强大、灵活的表单管理功能，支持数据绑定、验证规则、错误提示和表单控制等功能。

## 设计理念

### 分层架构

Form 组件严格按照三层架构设计：

1. **结构层** form.vue, formItem.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** formComputed.ts, formItemComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** form.scss, formItem.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Form 组件将复杂的逻辑抽象为核心函数：

- useFormComputed - 处理表单的核心逻辑
- useFormItemComputed - 处理表单项的核心逻辑
- useClassComputed - 处理动态类名生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Form 组件的 props 设计简洁明了：

```typescript
export const formProps = {
  /** 表单绑定数据 */
  modelValue: {
    type: Object as PropType<FormModelValue>,
    default: getDefaultModelValue,
    required: true,
  },
  /** 校验规则 */
  rules: {
    type: Object as PropType<FormRules>,
    default: getDefaultRules,
    validator: validateRules,
  },
  /** 标签宽度，支持像素值和 `auto` */
  labelWidth: {
    type: [String, Number] as PropType<LabelWidth>,
    default: 'auto',
    validator: validateLabelWidth,
  },
  /** 是否行内布局 */
  inline: {
    type: Boolean,
    default: false,
  },
  /** 大小, 可选 large, medium, small, mini */
  size: {
    type: String as PropType<FormSize>,
    default: 'medium',
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
}
```

FormItem 组件的 props 设计：

```typescript
export const formItemProps = {
  ...formProps,
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  validateTrigger: {
    type: String as PropType<ValidateTrigger>,
    default: 'blur'
  },
  // ...
}
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 依赖注入机制

Form 组件通过 Vue 的依赖注入机制实现父子组件通信：

```typescript
// 提供上下文
provide('form', reactive({
  ...toRefs(props),
  emit,
  formRef,
  validate,
  validateField,
  resetFields,
  clearValidate,
  emitter,
  formClass,
  updateFieldValue,
}))

// 注入上下文
const form = inject<FormContext>('form')
if (!form) {
  throw new Error('FormItem must be used inside Form component')
}
```

这种设计使得 FormItem 组件能够与其父级 Form 组件无缝协作。

## 样式系统设计

### CSS 变量控制

Form 组件通过 CSS 变量实现样式控制：

1. `--label-width` - 标签宽度控制

### 布局系统

Form 组件支持灵活的布局控制：

1. **块级布局** - 默认垂直排列
2. **行内布局** - 通过 inline 属性控制水平排列

### 状态样式

Form 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准表单样式
2. **禁用状态** - 禁用时的半透明效果
3. **错误状态** - 验证失败时的红色边框

## 组件结构设计

### 整体结构

Form 组件的整体结构如下：

```html
<form ref="formRef" :class="formClass" :style="{ '--label-width': labelWidth }">
  <slot />
</form>
```

FormItem 组件的结构：

```html
<div ref="formItemRef" :class="formItemClass">
  <label v-if="props.label" :for="props.prop" class="my-form-item__label" :style="{ width: labelWidth }">
    {{ props.label }}
  </label>
  <div class="my-form-item__control">
    <slot />
    <div v-if="errorMessage" class="my-form-item__error">{{ errorMessage }}</div>
  </div>
</div>
```

### 组件层次

Form 组件包含两个主要部分：

1. **容器** - `.my-form` - 包裹整个表单
2. **表单项** - `.my-form-item` - 包含标签和控件的表单项
3. **标签** - `.my-form-item__label` - 表单项标签
4. **控件容器** - `.my-form-item__control` - 包含实际控件和错误信息
5. **错误信息** - `.my-form-item__error` - 显示验证错误信息

## 交互设计

### 表单验证

Form 组件支持多种验证方式：

```typescript
async function validateField(prop: string) {
  if (!props.rules || !props.rules[prop]) return true

  const rules = props.rules[prop] as FormRule[]
  const model = props.modelValue as Record<string, any>
  const value = model[prop]

  for (const rule of rules) {
    if (typeof rule === 'object') {
      const { required, message, validator, len } = rule

      // 必填验证
      if (required && (value === undefined || value === null || value === '')) {
        throw new Error(message || `${prop} is required`)
      }

      // 长度验证
      if (len !== undefined && value !== undefined && value !== null) {
        if (typeof value === 'string' && value.length !== len) {
          throw new Error(message || `${prop} length must be ${len}`)
        }
      }

      // 自定义验证器
      if (validator) {
        const result = await validator(rule, value)
        if (!result) throw new Error(message || `${prop} validation failed`)
      }
    }
  }
  return true
}
```

### 表单重置

Form 组件支持表单重置：

```typescript
function resetFields() {
  const model = props.modelValue as unknown as Record<string, string>
  const newModel = { ...model } // 浅拷贝即可，如果字段是基本类型
  Object.keys(newModel).forEach(key => {
    newModel[key] = ''
  })
  emit('update:modelValue', newModel)
  clearValidate()
  emit('reset-fields')
}
```

### 清除验证

Form 组件支持清除验证状态：

```typescript
function clearValidate(field?: string) {
  emitter.emit('clear-validate', field)
  emit('clear-validate', field)
}
```

## 扩展性设计

Form 组件具备良好的扩展性：

1. **数据绑定**：通过 modelValue 属性实现双向数据绑定
2. **验证规则**：通过 rules 属性定义验证规则
3. **布局控制**：通过 inline 属性控制布局方式
4. **尺寸控制**：通过 size 属性控制组件尺寸
5. **禁用状态**：通过 disabled 属性控制禁用状态
6. **标签宽度**：通过 labelWidth 属性控制标签宽度
7. **验证触发**：通过 validateTrigger 属性控制验证触发时机

## 样式细节

Form 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他表单组件保持样式一致性
3. **错误反馈**：验证失败时有明确的视觉反馈
4. **无障碍设计**：支持键盘导航和屏幕阅读器

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除
6. 使用 mitt 实现事件总线以减少组件间直接通信

## 设计价值

Form 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Input、Select、Switch、Checkbox、Radio 等其他表单组件保持一致的设计语言

Form 组件提供了一套完整的表单管理解决方案，专注于用户表单操作体验的优化，为用户提供了一套强大、灵活且易用的表单组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
