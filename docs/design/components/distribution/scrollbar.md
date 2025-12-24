# Scrollbar 组件设计文档

## 概述

Scrollbar 组件是本组件库中用于自定义滚动条样式的高级容器组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useClassComputed、useStyleComputed和 useScrollVariables 等核心 Hooks 实现了强大而灵活的滚动条样式控制功能。

Scrollbar 组件提供了比 Scroll 组件更丰富的功能，包括尺寸控制、行为控制、颜色定制等多个维度的滚动条定制选项。

## 设计理念

### 分层架构

Scrollbar 组件严格按照三层架构设计：

1. **结构层** scrollbar.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** scrollbarComputed.ts - 通过 Hooks 处理复杂的响应式计算
3. **表现层** scrollbar.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Scrollbar 组件将复杂的样式逻辑抽象为多个核心 Hooks：

- useClassComputed - 处理动态类名生成
- useStyleComputed - 处理动态样式生成
- useScrollVariables - 处理滚动条 CSS 变量生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### Props 结构化设计

Scrollbar 组件的 props 按照功能划分为多个逻辑组：

```typescript
// 尺寸相关属性
export const scrollbarDimensionProps = {
    height: {
        type: String,
        default: '' as const
    },
    Maxheight: {
        type: String,
        default: '' as const
    },
    ScrollWidth: {
        type: String,
        default: ''
    },
    widthX: {
        type: Boolean,
        default: false
    }
};

// 颜色相关属性
export const scrollbarColorProps = {
    thumbColor: {
        type: String,
        default: ''
    },
    thumbHoverColor: {
        type: String,
        default: ''
    },
    trackColor: {
        type: String,
        default: ''
    }
};

// 行为相关属性
export const scrollbarBehaviorProps = {
    disabledHeight: {
        type: Boolean,
        default: false
    },
    disabledWidth: {
        type: Boolean,
        default: false
    },
    disabledScroll: {
        type: Boolean,
        default: false
    }
};
```

这种分组方式使得代码结构更加清晰，也方便后续的功能扩展。

### useClassComputed 的应用

Scrollbar 组件利用 useClassComputed Hook 来处理动态类名的生成：

```typescript
const scrollbarClass = useClassComputed<ScrollbarProps>({
    baseClass: 'scrollbar-container',
    flagClasses: {
        Maxheight: !!props.Maxheight,
        widthX: props.widthX,
        disabledHeight: props.disabledHeight,
        disabledWidth: props.disabledWidth,
        disabledScroll: props.disabledScroll,
        corner: props.corner,
    },
});
```

这种设计确保了类名生成的一致性和可维护性。

### useStyleComputed 和 useScrollVariables 的应用

Scrollbar 组件使用 useStyleComputed 和 useScrollVariables Hooks 来处理样式生成：

```typescript
const scrollbarStyle = useStyleComputed<ScrollbarProps>(props, {
    propToStyleMap: {
        height: 'height',
        Maxheight: 'maxHeight',
        ScrollWidth: 'scrollWidth',
    },
    cssVariables: useScrollVariables({
        thumbColor: props.thumbColor,
        thumbHoverColor: props.thumbHoverColor,
        trackColor: props.trackColor,
        scrollWidth: props.ScrollWidth,
        scrollHeight: props.ScrollWidth,
    }),
});
```

这种设计将复杂的样式逻辑封装在独立的 Hooks 中，简化了组件本身的复杂度。

## 样式系统设计

### CSS 变量控制

Scrollbar 组件通过 CSS 变量实现滚动条样式控制：

1. `--scrollbar-container-track-color` - 滚动条轨道颜色
2. `--scrollbar-container-thumb-color` - 滚动条滑块颜色
3. `--scrollbar-container-thumb-hover-color` - 滚动条滑块悬停颜色
4. `--scrollbar-container-scrollbar-width` - 滚动条宽度
5. `--scrollbar-container-scrollbar-height` - 滚动条高度

### WebKit 浏览器支持

组件通过以下 CSS 规则支持 WebKit 浏览器的滚动条样式定制：

```scss
&::-webkit-scrollbar {
    width: var(--scrollbar-container-scrollbar-width, $scrollbar-default-size);
    height: var(--scrollbar-container-scrollbar-height, $scrollbar-default-size);
}

&::-webkit-scrollbar-track {
    background-color: var(--scrollbar-container-track-color);
}

&::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-container-thumb-color);
    border-radius: 10px;
    
    &:hover {
        background-color: var(--scrollbar-container-thumb-hover-color);
    }
}
```

### 滚动条行为控制

组件支持多种滚动行为控制：

1. widthX - 控制水平滚动条显示
2. disabledHeight - 禁用垂直滚动
3. disabledWidth - 禁用水平滚动
4. disabledScroll - 完全禁用滚动
5. corner - 控制滚动条角落样式

## 组件结构设计

Scrollbar 组件采用灵活的标签渲染机制：

```html
<div :is="props.tag" :class="scrollbarClass" :style="scrollbarStyle">
    <slot />
</div>
```

这种设计允许组件渲染为不同的 HTML 元素，默认为 `<div>` 标签，但可以通过 tag 属性自定义为其他标签。

## 扩展性设计

Scrollbar 组件具备良好的扩展性：

1. **自定义标签支持**：可通过 tag prop 渲染为不同 HTML 元素
2. **全面样式控制**：支持轨道颜色、滑块颜色、悬停颜色、宽度等完整样式设置
3. **行为控制**：支持多种滚动行为控制选项
4. **尺寸控制**：支持高度、最大高度、滚动条宽度等尺寸控制
5. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

Scrollbar 组件在样式处理上有以下特点：

1. **默认样式**：提供深色主题的默认滚动条样式
2. **圆角设计**：滚动条滑块采用圆角设计
3. **悬停效果**：滑块在悬停时会改变颜色
4. **多维度控制**：支持垂直和水平滚动条分别控制
5. **角落样式**：支持滚动条角落的样式定制

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率

## 设计价值

Scrollbar 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Button、Border、Text 等其他组件保持一致的设计语言