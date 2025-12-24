# Input 组件设计

## 概述

Input 组件是本组件库中用于数据输入的基础表单组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useClassComputed 和 useStyleComputed等核心 Hooks 实现了强大而灵活的输入框控制功能。

Input 组件专注于处理用户的文本输入操作，为用户提供了一套完整且易用的数据录入解决方案，支持多种输入类型、状态控制和交互功能。

## 设计理念

### 分层架构

Input 组件严格按照三层架构设计：

1. **结构层** input.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** inputComputed.ts - 通过 Hooks 处理复杂的响应式计算
3. **表现层** input.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Input 组件将复杂的样式逻辑抽象为多个核心 Hooks：

- useClassComputed - 处理动态类名生成
- useStyleComputed - 处理动态样式生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### Props 结构化设计

Input 组件的 props 按照功能划分为多个逻辑组：

```typescript
// 输入类型与标签
const typeAndTagProps = {
  type: {
    type: String as PropType<string>,
    default: 'text'
  },
  tag: {
    type: String as PropType<string>,
    default: 'input'
  },
  textColor: {
    type: String as PropType<string>,
    default: ''
  }
}

// 尺寸相关
const sizeProps = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '100%'
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: '30px'
  }
}

// 状态控制
const stateProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
}
```

这种分组方式使得代码结构更加清晰，也方便后续的功能扩展。

### 输入类型支持

Input 组件支持多种输入类型：

1. **文本输入** - 默认的文本输入框
2. **密码输入** - 支持密码可见性切换
3. **多行文本** - 通过 `tag="textarea"` 实现
4. **数字输入** - 通过 `type="number"` 实现

### 状态控制功能

Input 组件提供了丰富的状态控制功能：

1. **清空功能** - 通过 clearable 属性启用清空按钮
2. **密码可见性切换** - 通过 showPassword 属性启用密码可见性切换
3. **禁用状态** - 通过 disabled 属性控制禁用状态
4. **字数统计** - 通过 wordLimit 和 maxlength 属性实现字数统计

## 样式系统设计

### CSS 变量控制

Input 组件通过 CSS 变量实现样式控制：

1. `--my-input-placeholder` - 占位符颜色控制

### 尺寸控制

Input 组件支持灵活的尺寸控制：

1. **宽度控制** - 支持像素值、百分比等单位
2. **高度控制** - 支持像素值、百分比等单位

### 状态样式

Input 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准输入框样式
2. **聚焦状态** - 聚焦时的边框和阴影效果
3. **悬停状态** - 鼠标悬停时的边框效果
4. **禁用状态** - 禁用时的半透明效果

## 组件结构设计

Input 组件采用包装器模式设计：

```html
<div class="my-input-wrapper">
  <component :is="props.tag" class="my-input" />
  <div v-if="hasAnySuffix" class="my-input__suffix">
    <!-- 后缀图标 -->
  </div>
</div>
```

这种设计允许组件支持多种输入类型（input、textarea等），并通过后缀区域显示功能图标。

## 交互设计

### 清空功能

Input 组件支持一键清空功能：

1. 鼠标悬停时显示清空按钮
2. 点击清空按钮清除输入内容
3. 清空后自动聚焦到输入框

### 密码可见性切换

Input 组件支持密码可见性切换：

1. 点击眼睛图标切换密码可见性
2. 通过showView状态控制输入类型

### 字数统计

Input 组件支持字数统计功能：

1. 显示当前输入字符数和最大限制数
2. 接近限制时高亮显示

## 扩展性设计

Input 组件具备良好的扩展性：

1. **自定义标签支持**：可通过 tag prop 渲染为不同 HTML 元素
2. **全面样式控制**：支持宽度、高度、文字颜色等完整样式设置
3. **状态控制**：支持禁用、清空、密码可见性等多种状态控制
4. **功能扩展**：支持字数统计、占位符颜色等附加功能
5. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

Input 组件在样式处理上有以下特点：

1. **标准化设计**：采用业界标准的输入框样式
2. **响应式设计**：支持灵活的宽高控制
3. **交互反馈**：提供聚焦、悬停等交互状态反馈
4. **无障碍设计**：支持键盘导航和屏幕阅读器
5. **图标布局**：通过后缀区域合理布局功能图标

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除

## 设计价值

Input 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Form、Button 等其他组件保持一致的设计语言
