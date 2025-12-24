# Step 组件设计文档

## 概述

Step 组件是本组件库中用于实现步骤引导功能的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"父子协作"的原则，通过 steps.vue 和 step.vue 等核心组件实现了一套完整且易用的步骤引导解决方案。

Step 组件专注于处理步骤条的结构、状态管理和视觉呈现，为用户提供了一套清晰、直观的步骤引导体验，支持水平/垂直布局、多种状态展示、自定义图标和灵活的对齐方式，有效提升用户在多步骤流程中的导航体验。

## 设计理念

### 分层架构

Step 组件严格按照三层架构设计：

1. **结构层** steps.vue, step.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** - 通过 `provide/inject` 机制实现父子组件通信，管理步骤状态流转
3. **表现层** steps.scss, step.scss - 定义组件的视觉呈现和样式规则

### 父子协作模式

Step 组件采用精心设计的父子协作模式：

- **Steps 作为容器** - 管理整体状态和布局
- **Step 作为子项** - 专注于自身状态展示
- **上下文通信** - 通过 stepsContext 提供统一的状态管理

这种设计使父子组件之间保持松耦合，同时又能高效协作，避免了繁琐的 props 传递。

## 核心功能设计

### 状态管理机制

Step 组件的核心在于状态管理机制：

```typescript
const stepsContext = inject<{
  active: number
  finishStatus: string
  direction: 'horizontal' | 'vertical'
  stepCount: number
}>('stepsContext')

const currentStatus = computed(() => {
  if (props.status) return props.status
  if (props.index < active.value) return finishStatus.value
  if (props.index === active.value) return 'process'
  return 'wait'
})
```

#### 状态流转规则：
- **自动计算** - Step 的状态基于 Steps 的 active 属性自动计算
- **优先级机制** - 显式设置的 status 属性优先于自动计算结果
- **完成状态** - 通过 finishStatus 属性可自定义完成状态标识

### 布局系统设计

Step 组件通过灵活的布局系统支持多种展示方式：

```typescript
const direction = computed(() => stepsContext?.direction ?? 'horizontal')
```

#### 布局特点：
- **方向控制** - 通过 direction  属性支持水平/垂直布局
- **对齐方式** - 通过 align  属性支持左对齐/居中/右对齐
- **自适应** - 连线自动根据布局方向调整位置和样式

## 组件结构设计

### 整体结构

Steps 组件作为容器的整体结构：

```html
<div class="my-steps" :class="[
  `my-steps--${direction}`,
  `my-steps--align-${align}`,
]">
  <slot />
</div>
```

### 组件层次

Step 组件包含多个关键部分：

1. **步骤容器** - `.my-step` - 包裹单个步骤的容器
2. **图标区域** - `.my-step__icon-container` - 包含步骤状态图标的容器
3. **状态图标** - `.my-step__icon` - 显示步骤状态的圆形图标
4. **内容区域** - `.my-step__content-wrapper` - 包含标题和描述的区域
5. **连线元素** - `.my-step__line` - 连接步骤的线条

Step 组件的核心结构：

```html
<div class="my-step" :class="[
  `my-step--${direction}`,
  `my-step--status-${currentStatus}`,
]">
  <div class="my-step__icon-container">
    <div class="my-step__icon">
      <!-- 自定义图标插槽 -->
    </div>
  </div>
  
  <div class="my-step__content-wrapper">
    <div class="my-step__content">
      <div class="my-step__title">{{ title }}</div>
      <div v-if="description" class="my-step__description">{{ description }}</div>
    </div>
  </div>
  
  <!-- 连线 -->
  <div v-if="!isLast" class="my-step__line" :class="`my-step__line--${direction}`"></div>
</div>
```

### 连线实现原理

Step 组件的连线实现采用精确的定位策略：

```scss
/* 水平连线 */
.my-step__line--horizontal {
  top: 12px; /* 图标高度的一半 */
  left: calc(50% + 12px); /* 从图标右侧开始 */
  width: calc(50% - 12px); /* 只延伸到下一个图标的左侧 */
  height: 2px;
}
```

#### 连线设计特点：
- **动态计算** - 根据图标位置精确计算连线起点和终点
- **布局适配** - 自动适应水平/垂直布局
- **视觉层次** - 通过 z-index 确保图标在连线上方

## 交互设计

### 状态流转设计

Step 组件的状态流转设计遵循清晰的规则：

- **完成状态** - 索引小于 active 的步骤
- **进行中状态** - 索引等于 active 的步骤
- **等待状态** - 索引大于 active 的步骤
- **错误状态** - 显式设置为 error 的步骤

这种设计确保了状态流转的可预测性和一致性。

### 步骤数量管理

Steps 组件通过巧妙的方式管理步骤数量：

```typescript
onMounted(() => {
  const nodes = document.querySelectorAll('.my-step') // 依赖 class
  stepCount.value = nodes.length
})
```

#### 步骤数量管理特点：
- **自动检测** - 通过 DOM 查询自动计算步骤数量
- **响应式更新** - 当步骤数量变化时自动更新
- **避免循环依赖** - 不直接依赖子组件实例，降低耦合

## 扩展性设计

Step 组件具备出色的扩展性：

1. **状态扩展** - 通过 status 属性和 finishStatus 属性支持自定义状态
2. **图标扩展** - 通过 icon 插槽支持自定义图标
3. **布局扩展** - 支持水平/垂直布局和多种对齐方式
4. **样式扩展** - 通过 CSS 变量和类名支持样式定制
5. **内容扩展** - 支持标题和描述的自定义内容

## 样式细节

Step 组件在样式处理上有以下特点：

1. **弹性布局** - 使用 flex 布局实现自适应步骤条
2. **状态样式** - 通过类名区分不同状态
   ```scss
   .my-step--status-wait .my-step__icon {
     background-color: #c0c4cc;
   }
   .my-step--status-process .my-step__icon {
     background-color: #409eff;
   }
   ```
3. **布局适配** - 针对水平和垂直布局使用不同的样式规则
4. **视觉层次** - 通过 z-index 确保元素的正确堆叠顺序
5. **响应式设计** - 自动适应不同屏幕尺寸

## 性能优化

通过以下方式优化性能：

1. **轻量级状态管理** - 使用计算属性而非复杂状态机
2. **精确的更新范围** - 仅在必要时更新相关组件
3. **避免不必要的重排** - 通过 CSS 类切换而非内联样式
4. **高效的 DOM 查询** - 仅在必要时进行 DOM 查询
5. **合理的渲染策略** - 仅渲染可见元素

## 设计价值

Step 组件延续了我们组件库的设计哲学：

1. **关注点分离** - 将步骤容器和步骤项的职责清晰分离
2. **上下文驱动** - 通过 `provide/inject` 机制实现高效通信
3. **状态一致性** - 确保步骤状态的统一管理和展示
4. **布局灵活性** - 支持多种布局方式和对齐策略
5. **扩展性** - 通过插槽和属性支持丰富的自定义能力
