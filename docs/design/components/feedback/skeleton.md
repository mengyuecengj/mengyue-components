# Skeleton 组件设计

## 概述

Skeleton 组件是本组件库中用于展示内容加载状态的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 MYSkeleton 和 MYSkeletonItem 等核心组件实现了一套完整且易用的骨架屏解决方案。

Skeleton 组件专注于处理内容加载状态的展示，为用户提供了一套强大、灵活的骨架屏管理功能，支持多种骨架类型、动画效果和主题切换，有效提升用户在内容加载过程中的体验。

## 设计理念

### 分层架构

Skeleton 组件严格按照三层架构设计：

1. **结构层** skeleton.vue, skeletonItem.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** skeleton.ts， skeletonItem.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** skeleton.scss, skeletonItem.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Skeleton 组件将复杂的逻辑抽象为核心函数：

- useStyleComputed - 处理动态样式计算
- skeletonProps - 定义骨架屏组件的属性接口
- skeletonItemProps - 定义骨架项组件的属性接口

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Skeleton 组件的 props 设计简洁明了：

```typescript
export const skeletonProps = {
  /** 是否显示加载状态 */
  loading: {
    type: Boolean,
    default: true,
  },
  /** 是否启用动画 */
  animated: {
    type: Boolean,
    default: true,
  },
  /** 骨架项数量 */
  count: {
    type: Number,
    default: 3,
  },
  /** 是否随机宽度 */
  randomWidth: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false,
  },
  /** 主题 */
  theme: {
    type: String as PropType<SkeletonTheme>,
    default: 'light',
  },
}
```

SkeletonItem 组件的 props 设计：

```typescript
export const skeletonItemProps = {
  /** 骨架类型 */
  variant: {
    type: String as PropType<SkeletonItemVariant>,
    default: 'text',
  },
  /** 宽度 */
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '100%',
  },
  /** 高度 */
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 16,
  },
}
```

#### 参数说明：
- loading：控制是否显示骨架屏，`true` 时显示骨架屏，`false` 时显示实际内容。
- animated：控制是否启用动画效果。
- count：设置默认骨架项数量。
- randomWidth：设置文本骨架项是否随机宽度。
- theme：支持 `'light'` 或 `'dark'` 主题。
- variant：支持 `'text'`、`'circle'`、`'rect'` 等多种骨架类型。

### 骨架类型支持

Skeleton 组件支持多种骨架类型：

```typescript
export type SkeletonItemVariant = 'text' | 'circle' | 'rect' | string
```

#### 类型说明：
- text：文本骨架，高度默认为 `1.2em`。
- circle：圆形骨架，高度等于宽度，`border-radius` 为 `50%`。
- rect：矩形骨架，有固定圆角。
- image：图像骨架，有固定宽高比。

## 样式系统设计

### CSS 变量控制

Skeleton 组件通过 CSS 变量实现样式控制：

1. `--skeleton-bg` - 骨架背景色
2. `--skeleton-animation-bg` - 动画背景色
3. `--skeleton-animation-speed` - 动画速度

### 布局系统

Skeleton 组件支持灵活的布局控制：

1. **垂直布局** - 默认使用 Flexbox 垂直排列骨架项
2. **间距控制** - 通过 SCSS 变量调整骨架项间距

### 状态样式

Skeleton 组件根据不同状态提供相应的样式：

1. **加载状态** - 显示骨架屏
2. **完成状态** - 显示实际内容
3. **动画状态** - 显示 shimmer 动画效果

## 组件结构设计

### 整体结构

Skeleton 组件的整体结构如下：

```html
<div class="my-skeleton" :class="{ 'my-skeleton--animated': animated }" :style="skeletonStyles">
  <div v-if="loading" class="my-skeleton__wrapper">
    <slot v-if="$slots.template" name="template"></slot>
    <div v-else class="my-skeleton__default">
      <MYSkeletonItem v-for="index in count" :key="index" variant="text" />
    </div>
  </div>
  <div v-else class="my-skeleton__content">
    <slot></slot>
  </div>
</div>
```

SkeletonItem 组件的结构：

```html
<div class="my-skeleton-item" :class="`my-skeleton-item--${variant}`" :style="itemStyles"></div>
```

### 组件层次

Skeleton 组件包含四个主要部分：

1. **容器** - `.my-skeleton` - 包裹整个骨架屏区域
2. **骨架屏包装器** - `.my-skeleton__wrapper` - 包含骨架项的容器
3. **默认骨架** - `.my-skeleton__default` - 默认的骨架结构
4. **实际内容** - `.my-skeleton__content` - 加载完成后显示的实际内容

SkeletonItem 组件包含基础骨架项：

1. **基础类** - `.my-skeleton-item` - 骨架项基础样式
2. **类型类** - `.my-skeleton-item--text`/`--circle`/`--rect` - 不同类型的骨架项

## 交互设计

### 动画实现

Skeleton 组件使用 CSS 动画实现 shimmer 效果：

```scss
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

该动画通过伪元素实现，确保性能优化：

```scss
.my-skeleton--animated .my-skeleton-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skeleton-animation-bg),
    transparent
  );
  animation: shimmer var(--skeleton-animation-speed) infinite;
}
```

### 自定义骨架结构

Skeleton 组件支持通过插槽自定义骨架结构：

```vue
<MYSkeleton :loading="isLoading">
  <template #template>
    <div class="custom-skeleton">
      <MYSkeletonItem variant="circle" width="40" height="40" />
      <div class="text-group">
        <MYSkeletonItem variant="text" width="80%" />
        <MYSkeletonItem variant="text" width="60%" />
      </div>
    </div>
  </template>
  <ActualContent />
</MYSkeleton>
```

## 扩展性设计

Skeleton 组件具备良好的扩展性：

1. **状态管理**：通过 loading 属性控制显示状态
2. **骨架类型**：通过 variant 属性控制骨架类型
3. **主题切换**：通过 theme 属性控制主题
4. **自定义结构**：通过插槽机制支持自定义骨架结构
5. **样式定制**：通过 CSS 变量调整组件样式

## 样式细节

Skeleton 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **动画效果**：使用 CSS 动画实现平滑的 shimmer 效果
4. **无障碍设计**：确保加载状态对屏幕阅读器友好

## 性能优化

通过以下方式优化性能：

1. 使用 CSS 动画而不是 JavaScript 动画
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 使用 CSS 变量动态调整样式
6. 按需渲染骨架项，减少 DOM 操作

## 设计价值

Skeleton 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Card、List 等其他组件保持一致的设计语言

Skeleton 组件提供了一套完整的加载状态管理解决方案，专注于用户交互体验的优化，为用户提供了一套强大、灵活且易用的骨架屏组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
