 # Timeline 组件设计

## 概述

Timeline 组件是本组件库中用于展示时间轴信息的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 MYTimeline 和 MYTimelineItem 等核心组件实现了一套完整且易用的时间轴解决方案。

Timeline 组件专注于处理时间序列信息的展示和组织，为用户提供了一套强大、灵活的时间轴管理功能，支持垂直和水平两种布局方向，有效提升用户在浏览时间序列数据时的体验。

## 设计理念

### 分层架构

Timeline 组件严格按照三层架构设计：

1. **结构层** timeline.vue, timelineItem.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** - 由于组件逻辑相对简单，主要逻辑直接在组件中实现
3. **表现层** timeline.scss, timelineItem.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Timeline 组件将核心逻辑抽象为：

- direction - 控制时间轴的布局方向
- 节点连接线逻辑 - 处理时间轴项之间的连接线
- 时间戳区域 - 处理时间信息的展示

这种设计使得组件保持简洁，同时提供足够的灵活性。

## 核心功能设计

### Props 结构化设计

Timeline 组件的 props 设计简洁明了：

```typescript
defineProps<{
  /** 时间轴方向 */
  direction?: 'vertical' | 'horizontal';
  /** 主题 */
  theme?: string;
  /** 自定义样式 */
  style?: import('vue').StyleValue;
}>();
```

TimelineItem 组件的 props 设计：

```typescript
defineProps<{
  /** 时间戳 */
  timestamp: string;
  /** 节点颜色 */
  color?: string;
  /** 图标 */
  icon?: string;
}>();
```

#### 参数说明：
- direction：支持 `'vertical'`（默认）和 `'horizontal'` 两种方向。
- timestamp：时间轴项的时间戳信息。
- color：节点的颜色，支持自定义。
- style：支持自定义内联样式。

### 布局系统

Timeline 组件支持两种主要布局：

```typescript
withDefaults(defineProps<{
  direction?: 'vertical' | 'horizontal';
  // ...
}>(), {
  direction: 'vertical'
});
```

#### 布局说明：
- vertical：垂直布局（默认），时间轴从上到下排列。
- horizontal：水平布局，时间轴从左到右排列。

## 样式系统设计

### CSS 变量控制

Timeline 组件通过 SCSS 实现样式控制：

1. `--timeline-node-color` - 节点颜色
2. `--timeline-line-color` - 连接线颜色
3. `--timeline-timestamp-color` - 时间戳颜色

### 布局系统

Timeline 组件支持灵活的布局控制：

1. **垂直布局** - 默认使用 Flexbox 垂直排列时间项
2. **水平布局** - 使用 Flexbox 水平排列时间项
3. **间距控制** - 通过 SCSS 变量调整时间项间距

### 状态样式

Timeline 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准时间轴样式
2. **自定义颜色状态** - 通过 color 属性自定义节点颜色
3. **末尾项状态** - 最后一个时间项不显示连接线

---

## 组件结构设计

### 整体结构

Timeline 组件的整体结构如下：

```html
<!-- 时间轴容器 -->
<div class="my-timeline" :class="[direction]" :style="style">
  <slot />
</div>

<!-- 时间轴项 -->
<div class="my-timeline-item">
  <div class="timeline-timestamp">
    <slot name="timestamp">{{ timestamp }}</slot>
  </div>
  <div class="timeline-node">
    <div class="timeline-dot" :style="{ backgroundColor: color }"></div>
    <div class="timeline-line"></div>
  </div>
  <div class="timeline-content">
    <slot />
  </div>
</div>
```

### 组件层次

Timeline 组件包含三个主要部分：

1. **时间轴容器** - `.my-timeline` - 包裹整个时间轴
2. **时间轴项** - `.my-timeline-item` - 单个时间点的容器
3. **时间戳区域** - `.timeline-timestamp` - 显示时间信息
4. **节点区域** - `.timeline-node` - 包含节点和连接线
5. **内容区域** - `.timeline-content` - 显示详细内容

## 交互设计

### 时间轴方向切换

Timeline 组件通过 direction 属性实现方向切换：

```scss
.my-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px 0;
}

.my-timeline.horizontal {
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
}
```

### 节点连接线处理

Timeline 组件通过 CSS 处理节点连接线：

```scss
.timeline-node {
  position: relative;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .timeline-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #409eff;
    z-index: 1;
    box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.2);
  }
  .timeline-line {
    position: absolute;
    top: 14px;
    bottom: -30px;
    width: 2px;
    background-color: #e4e7ed;
  }
  .my-timeline-item:last-child .timeline-line {
    display: none;
  }
}
```

### 自定义时间戳

Timeline 组件支持通过插槽自定义时间戳：

```vue
<MYTimelineItem timestamp="2023-01-01">
  <template #timestamp>
    <span class="custom-timestamp">自定义时间</span>
  </template>
  内容
</MYTimelineItem>
```

## 扩展性设计

Timeline 组件具备良好的扩展性：

1. **布局切换**：通过 direction 属性控制时间轴方向
2. **节点自定义**：通过 color 属性自定义节点颜色
3. **插槽支持**：通过插槽机制支持自定义时间戳和内容
4. **样式定制**：通过 style属性自定义内联样式

## 样式细节

Timeline 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保时间序列信息对屏幕阅读器友好
4. **清晰的视觉层次**：通过节点、连接线和时间戳创建清晰的视觉层次

## 性能优化

通过以下方式优化性能：

1. 使用简单的 CSS 实现连接线效果
2. 避免不必要的重排和重绘
3. 使用 Vue 3 Composition API 提高运行效率
4. 保持组件逻辑简单，减少计算量

## 设计价值

Timeline 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **简洁明了**：提供最核心的功能，避免过度设计
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Card、List 等其他组件保持一致的设计语言

Timeline 组件提供了一套完整的时间轴管理解决方案，专注于用户交互体验的优化，为用户提供了一套强大、灵活且易用的时间轴组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
