# Checkbox 组件设计

## 概述

Checkbox 组件是本组件库中用于多项选择的表单组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useInputState、useInputClasses等核心 Hooks 实现了强大而灵活的复选框控制功能。

Checkbox 组件专注于处理用户的多项选择操作，为用户提供了一套完整且易用的选择解决方案，支持单个复选框、复选框组等多种形态。

## 设计理念

### 分层架构

Checkbox 组件严格按照三层架构设计：

1. **结构层** checkbox.vue, checkbox-group.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** checkboxComputed.ts - 通过 Hooks 处理复杂的响应式计算
3. **表现层** checkbox.scss, checkbox-group.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Checkbox 组件将复杂的逻辑抽象为多个核心 Hooks：

- useInputState - 处理输入状态计算
- useInputClasses - 处理类名生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### 组件体系结构

Checkbox 组件采用模块化设计，包含以下两个核心组件：

1. **MYCheckbox** - 基础复选框组件
2. **MYCheckboxGroup** - 复选框组容器组件

### Props 结构化设计

Checkbox 组件的 props 按照功能划分为多个逻辑组：

```typescript
// 基础复选框属性
export const checkboxProps = {
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    required: true
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  indeterminate: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const
```

```typescript
// 复选框组属性
export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<Array<string | number | boolean>>,
    default: () => []
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  gap: {
    type: String as PropType<string>,
    default: '12px'
  },
} as const
```

### 依赖注入机制

Checkbox 组件通过 Vue 的依赖注入机制实现父子组件通信：

```typescript
// 提供上下文
provide('checkboxGroup', {
  modelValue, // 保持为 Ref 对象
  disabled: props.disabled,
  change: (value: string[]) => {
    emit('update:modelValue', value)
  }
})

// 注入上下文
const checkboxGroup = inject<{
  modelValue: import('vue').Ref<Array<string | number | boolean>>,
  disabled?: boolean,
  change: (val: Array<string | number | boolean>) => void
} | null>('checkboxGroup', null)
```

这种设计使得复选框组件能够与其父级组组件无缝协作。

## 样式系统设计

### 基础复选框样式

基础复选框采用经典的设计：

```scss
.my-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  .my-checkbox__inner {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    background-color: #fff;
    transition: all 0.2s;

    &::after {
      content: "";
      position: absolute;
      top: 1px;
      left: 4px;
      width: 3px;
      height: 7px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg) scale(0);
      transition: transform .15s ease-in;
    }
  }
}

.my-checkbox--checked {
  .my-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;

    &::after {
      transform: rotate(45deg) scale(1);
    }
  }
}
```

### 复选框组样式

复选框组支持灵活的布局控制：

```scss
.my-checkbox-group {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;

  // 水平排列 (默认)
  &.is-horizontal {
    flex-direction: row;
    align-items: center;
    gap: var(--checkbox-group-gap, 12px);
  }

  // 垂直排列
  &.is-vertical {
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--checkbox-group-gap, 12px) * 0.8);
  }
}
```

## 组件结构设计

### 整体结构

Checkbox 组件的整体结构如下：

```html
<!-- 基础复选框 -->
<label class="my-checkbox">
  <span class="my-checkbox__input">
    <input type="checkbox" class="my-checkbox__original" />
    <span class="my-checkbox__inner"></span>
  </span>
  <span class="my-checkbox__label">
    <slot></slot>
  </span>
</label>

<!-- 复选框组 -->
<div class="my-checkbox-group">
  <slot></slot>
</div>
```

## 交互设计

### 选中状态切换

Checkbox 组件支持点击切换选中状态：

```typescript
const isChecked = computed<boolean>({
  get() {
    if (isGroup.value) {
      return checkboxGroup!.modelValue.value.includes(props.value)
    }
    return !!props.modelValue
  },
  set(val: boolean) {
    if (isGroup.value) {
      const groupValues = [...checkboxGroup!.modelValue.value]
      const index = groupValues.indexOf(props.value)

      if (val && index === -1) {
        groupValues.push(props.value)
      } else if (!val && index > -1) {
        groupValues.splice(index, 1)
      }

      checkboxGroup!.change(groupValues)
      emit('change', groupValues)
    } else {
      emit('update:modelValue', val)
      emit('change', val)
    }
  }
})
```

### 要禁用状态

Checkbox 组件支持禁用状态：

1. **组件级别禁用** - 通过 disabled 属性控制
2. **组级别禁用** - 通过 MYCheckboxGroup 的 disabled 属性控制

### 不确定状态

Checkbox 组件支持不确定状态（indeterminate）：

```html
<span class="my-checkbox__inner" :class="{ 'is-indeterminate': indeterminate }"></span>
```

## 扩展性设计

Checkbox 组件具备良好的扩展性：

1. **灵活布局控制**：支持水平和垂直布局
2. **间距控制**：通过 CSS 变量控制复选框间距
3. **状态控制**：支持禁用状态和不确定状态
4. **主题适配**：通过 CSS 变量支持主题定制
5. **组合使用**：可与表单组件无缝集成

## 样式细节

Checkbox 组件在样式处理上有以下特点：

1. **标准化设计**：采用业界标准的复选框样式
2. **动画效果**：选中状态切换时具有平滑的动画效果
3. **响应式设计**：支持灵活的布局控制
4. **无障碍设计**：支持键盘导航和屏幕阅读器
5. **一致性**：与组件库其他表单组件保持样式一致性

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用依赖注入减少组件间传递

## 设计价值

Checkbox 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Radio、Input、Form 等其他组件保持一致的设计语言
