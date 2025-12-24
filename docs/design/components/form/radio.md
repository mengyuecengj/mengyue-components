# Radio 组件设计

## 概述

Radio 组件是本组件库中用于单项选择的表单组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useInputState、useInputClasses等核心 Hooks 实现了强大而灵活的单选框控制功能。

Radio 组件专注于处理用户的单项选择操作，为用户提供了一套完整且易用的选择解决方案，支持单个单选框、单选框组以及按钮样式的单选框等多种形态。

## 设计理念

### 分层架构

Radio 组件严格按照三层架构设计：

1. **结构层** radio.vue, radio-group.vue, radio-button.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** radioComputed.ts - 通过 Hooks 处理复杂的响应式计算
3. **表现层** radio.scss, radio-group.scss, radio-button.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Radio 组件将复杂的逻辑抽象为多个核心 Hooks：

- useInputState - 处理输入状态计算
- useInputClasses - 处理类名生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### 组件体系结构

Radio 组件采用模块化设计，包含以下三个核心组件：

1. **MYRadio** - 基础单选框组件
2. **MYRadioGroup** - 单选框组容器组件
3. **MYRadioButton** - 按钮样式的单选框组件

### Props 结构化设计

Radio 组件的 props 按照功能划分为多个逻辑组：

```typescript
// 基础单选框属性
export const radioProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  name: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<string>,
    default: ''
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const;
```

```typescript
// 单选框组属性
export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  gap: {
    type: String,
    default: '12px',
  },
} as const
```

### 依赖注入机制

Radio 组件通过 Vue 的依赖注入机制实现父子组件通信：

```typescript
// 提供上下文
provide('radioGroup', {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  change: updateValue
})

// 注入上下文
const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)
```

这种设计使得单选框组件能够与其父级组组件无缝协作。

## 样式系统设计

### 基础单选框样式

基础单选框采用经典的设计：

```scss
.my-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &__inner {
    width: 14px;
    height: 14px;
    border: 1px solid #dcdfe6;
    border-radius: 50%;
    background: #fff;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
  }

  &--checked {
    .my-radio__inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
```

### 按钮样式单选框

按钮样式单选框提供现代化的外观：

```scss
.my-radio-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #dcdfe6;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0;
  padding: 0 16px;
  border-radius: 0;
  outline: none;
}
```

### 布局控制

通过单选框组控制布局方向：

1. **水平布局** - 默认布局方式
2. **垂直布局** - 通过 `direction="vertical"` 实现

## 组件结构设计

### 整体结构

Radio 组件的整体结构如下：

```html
<!-- 基础单选框 -->
<label class="my-radio">
  <span class="my-radio__input">
    <input class="my-radio__original" type="radio" />
    <span class="my-radio__inner"></span>
  </span>
  <span class="my-radio__label">
    <slot></slot>
  </span>
</label>

<!-- 单选框组 -->
<div class="my-radio-group">
  <slot></slot>
</div>
```

### 按钮样式结构

按钮样式单选框具有特殊的结构：

```html
<label class="my-radio-button">
  <input class="my-radio-button__original" type="radio" />
  <span class="my-radio-button__inner">
    <slot></slot>
  </span>
</label>
```

## 交互设计

### 选中状态切换

Radio 组件支持点击切换选中状态：

```typescript
function handleClick() {
  if (isDisabled.value) return

  if (isGroup.value) {
    radioGroup!.change?.(props.value)
  } else {
    emit('update:modelValue', props.value)
    emit('change', props.value)
  }
}
```

### 禁用状态

Radio 组件支持禁用状态：

1. **组件级别禁用** - 通过 disabled 属性控制
2. **组级别禁用** - 通过 MYRadioGroup 的 disabled属性控制

### 键盘导航

Radio 组件支持键盘导航：

1. **Tab 键** - 在组件间切换焦点
2. **空格键** - 选中当前聚焦的单选框

## 扩展性设计

Radio 组件具备良好的扩展性：

1. **多种展现形式**：支持基础单选框、按钮样式单选框
2. **灵活布局控制**：支持水平和垂直布局
3. **尺寸控制**：支持多种尺寸选项
4. **状态控制**：支持禁用状态
5. **主题适配**：通过 CSS 变量支持主题定制
6. **组合使用**：可与表单组件无缝集成

## 样式细节

Radio 组件在样式处理上有以下特点：

1. **标准化设计**：采用业界标准的单选框样式
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

Radio 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Input、Form 等其他组件保持一致的设计语言
