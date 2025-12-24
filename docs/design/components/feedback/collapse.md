# Collapse 组件设计文档

## 概述

Collapse 组件是本组件库中用于折叠面板管理和展示的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过父子组件通信机制实现了一套完整且易用的折叠面板解决方案。

Collapse 组件专注于处理折叠面板的展开、收起操作，支持手风琴模式（Accordion）和多面板模式（Multi-panel），为用户提供了一套强大、灵活的折叠面板管理功能，支持动态切换、状态绑定和样式控制等功能。

---

## 设计理念

### 分层架构

Collapse 组件严格按照三层架构设计：

1. **结构层** collapse.vue, collapseItem.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** collapse.vue 的逻辑部分 - 处理复杂的响应式计算和交互逻辑
3. **表现层** collapse.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Collapse 组件将复杂的逻辑抽象为核心函数：

- `toggleItem` - 处理折叠面板的展开/收起逻辑
- `activeNames` - 管理当前激活的面板名称列表或单个名称

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

---

## 核心功能设计

### Props 结构化设计

Collapse 组件的 props 设计简洁明了：

```typescript
export const collapseProps = {
  /** 当前激活的面板名称 */
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: () => [],
    required: true,
  },
  /** 是否启用手风琴模式 */
  accordion: {
    type: Boolean,
    default: false,
  },
}
```

CollapseItem 组件的 props 设计：

```typescript
export const collapseItemProps = {
  /** 唯一标识符 */
  name: {
    type: String,
    required: true,
  },
  /** 面板标题 */
  title: {
    type: String,
    default: '',
  },
}
```

这种设计提供了足够的灵活性，支持多种使用场景。

---

### 依赖注入机制

Collapse 组件通过 Vue 的依赖注入机制实现父子组件通信：

```typescript
// 提供上下文
provide('collapse', {
  activeNames,
  toggleItem(name: string) {
    // 手风琴模式逻辑
    if (props.accordion) {
      activeNames.value = activeNames.value === name ? '' : name;
    } else {
      // 多面板模式逻辑
      const names = Array.isArray(activeNames.value) ? activeNames.value : [];
      activeNames.value = names.includes(name)
        ? names.filter((n) => n !== name)
        : [...names, name];
    }
  },
});

// 注入上下文
const collapse = inject('collapse') as {
  activeNames: { value: string | string[] };
  toggleItem: (name: string) => void;
};
```

这种设计使得 CollapseItem 组件能够与其父级 Collapse 组件无缝协作。

---

## 样式系统设计

### CSS 变量控制

Collapse 组件通过 CSS 变量实现样式控制：

1. `--border-color` - 边框颜色
2. `--header-bg-color` - 面板头部背景颜色

### 布局系统

Collapse 组件支持灵活的布局控制：

1. **块级布局** - 默认垂直排列
2. **内边距控制** - 通过 SCSS 变量调整内边距

### 状态样式

Collapse 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准折叠面板样式
2. **激活状态** - 展开时的高亮效果
3. **悬停状态** - 鼠标悬停时的背景色变化

---

## 组件结构设计

### 整体结构

Collapse 组件的整体结构如下：

```html
<div class="my-collapse">
  <slot></slot>
</div>
```

CollapseItem 组件的结构：

```html
<div class="my-collapse-item">
  <div class="my-collapse-item__header" @click="toggle">
    <slot name="title">{{ title }}</slot>
  </div>
  <div v-show="isActive" class="my-collapse-item__content">
    <slot></slot>
  </div>
</div>
```

### 组件层次

Collapse 组件包含两个主要部分：

1. **容器** - `.my-collapse` - 包裹整个折叠面板
2. **子项** - `.my-collapse-item` - 包含头部和内容区域
3. **头部** - `.my-collapse-item__header` - 折叠面板的标题部分
4. **内容区域** - `.my-collapse-item__content` - 折叠面板的内容部分

---

## 交互设计

### 面板切换

Collapse 组件支持动态切换面板：

```typescript
function toggle() {
  collapse.toggleItem(props.name);
}
```

### 手风琴模式

在手风琴模式下，每次只能展开一个面板：

```typescript
if (props.accordion) {
  activeNames.value = activeNames.value === name ? '' : name;
}
```

### 多面板模式

在多面板模式下，可以同时展开多个面板：

```typescript
const names = Array.isArray(activeNames.value) ? activeNames.value : [];
activeNames.value = names.includes(name)
  ? names.filter((n) => n !== name)
  : [...names, name];
```

---

## 扩展性设计

Collapse 组件具备良好的扩展性：

1. **数据绑定**：通过 modelValue 属性实现双向数据绑定
2. **模式切换**：通过 `accordion` 属性控制手风琴模式或多面板模式
3. **插槽支持**：通过 title 插槽自定义面板标题
4. **样式定制**：通过 SCSS 变量调整组件样式

---

## 样式细节

Collapse 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **动画效果**：内容区域展开/收起时有平滑的过渡效果
4. **无障碍设计**：支持键盘导航和屏幕阅读器

---

## 性能优化

通过以下方式优化性能：

1. 使用 `computed` 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除

---

## 设计价值

Collapse 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Tabs、Card 等其他组件保持一致的设计语言
