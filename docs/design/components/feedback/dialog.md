# Dialog 组件设计文档

## 概述

Dialog 组件是本组件库中用于展示模态对话框的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useDialog和 `Teleport` 等核心机制实现了一套完整且易用的对话框解决方案。

Dialog 组件专注于处理模态对话框的展示、交互和样式管理，为用户提供了一套强大、灵活的对话框管理功能，支持自定义内容、尺寸、动画效果和交互行为，有效提升用户在关键操作场景中的体验。

## 设计理念

### 分层架构

Dialog 组件严格按照三层架构设计：

1. **结构层** dialog.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** dialogComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** dialog.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Dialog 组件将复杂的逻辑抽象为核心函数：

- useDialog - 处理对话框的核心逻辑
- useStyleComputed - 处理动态样式计算
- useClassComputed - 处理动态类名生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Dialog 组件的 props 设计简洁明了：

```typescript
export const dialogProps = {
  /** 控制对话框显示/隐藏 */
  modelValue: {
    type: Boolean,
    default: false
  },
  /** 对话框标题 */
  title: {
    type: String,
    default: ''
  },
  /** 对话框宽度 */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: 400
  },
  /** 对话框高度 */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: 200
  },
  /** 是否点击遮罩层关闭 */
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  /** 是否按 Esc 键关闭 */
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  /** 背景颜色 */
  backgroundColor: {
    type: String,
    default: ''
  },
  /** 边框颜色 */
  borderColor: {
    type: String,
    default: ''
  },
  /** 文本颜色 */
  textColor: {
    type: String,
    default: ''
  },
  /** 是否允许溢出 */
  overflow: {
    type: Boolean,
    default: false
  }
}
```

#### 参数说明：
- modelValue：控制对话框的显示/隐藏状态。
- title：对话框的标题文本。
- width 和 height：控制对话框的尺寸。
- closeOnClickModal：控制是否点击遮罩层关闭对话框。
- closeOnPressEscape：控制是否按 Esc 键关闭对话框。
- backgroundColor、borderColor、textColor：支持自定义样式。
- overflow：控制内容溢出行为。

### 事件系统

Dialog 组件提供丰富的事件支持：

```typescript
export interface DialogEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'open'): void
  (e: 'close'): void
}
```

#### 事件说明：
- update:modelValu：当对话框显示状态变化时触发。
- open：当对话框打开时触发。
- close：当对话框关闭时触发。

## 样式系统设计

### CSS 变量控制

Dialog 组件通过 CSS 变量实现样式控制：

1. `--dialog-bg-color` - 对话框背景色
2. `--dialog-text-color` - 对话框文本颜色
3. `--overlay-bg-color` - 遮罩层背景色

### 布局系统

Dialog 组件支持灵活的布局控制：

1. **模态窗口** - 使用 `Teleport` 将对话框渲染到 body 下
2. **居中定位** - 使用 Flexbox 垂直水平居中
3. **尺寸控制** - 通过 width 和 height 属性控制对话框尺寸

### 状态样式

Dialog 组件根据不同状态提供相应的样式：

1. **打开状态** - 显示淡入动画
2. **关闭状态** - 显示淡出动画
3. **溢出状态** - 通过 overflow 属性控制内容溢出行为

## 组件结构设计

### 整体结构

Dialog 组件的整体结构如下：

```html
<Teleport to="body">
  <Transition name="dialog-fade">
    <div v-if="visible" class="my-overlay" @click.self="handleOverlayClick">
      <div class="my-dialog" role="dialog" aria-modal="true" :style="dialogStyle" :class="dialogClass">
        <header class="my-dialog__header">
          <slot name="header">
            <span class="my-dialog__title">{{ props.title }}</span>
          </slot>
          <button class="my-dialog__close" @click="close">×</button>
        </header>

        <div class="my-dialog__body">
          <slot />
        </div>

        <footer class="my-dialog__footer" v-if="$slots.footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Transition>
</Teleport>
```

### 组件层次

Dialog 组件包含四个主要部分：

1. **遮罩层** - `.my-overlay` - 覆盖整个视口的半透明背景
2. **对话框容器** - `.my-dialog` - 包裹整个对话框
3. **对话框头部** - `.my-dialog__header` - 包含标题和关闭按钮
4. **对话框主体** - `.my-dialog__body` - 包含主要内容
5. **对话框底部** - `.my-dialog__footer` - 包含操作按钮

---

## 交互设计

### 对话框显示与隐藏

Dialog 组件通过 modelValue 控制显示与隐藏：

```typescript
const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) emit('open')
  }
)
```

### 遮罩层点击处理

Dialog 组件支持通过点击遮罩层关闭对话框：

```typescript
const handleOverlayClick = () => {
  if (props.closeOnClickModal) close()
}
```

### 键盘事件处理

Dialog 组件支持通过 Esc 键关闭对话框：

```typescript
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnPressEscape) close()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
```

### 动画效果

Dialog 组件使用 Vue 的 Transition 组件实现淡入淡出动画：

```scss
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
```

## 扩展性设计

Dialog 组件具备良好的扩展性：

1. **插槽支持**：通过插槽机制支持自定义头部、内容和底部
   - `header`：自定义对话框头部
   - 默认插槽：自定义对话框内容
   - footer：自定义对话框底部
2. **样式定制**：通过 props 支持自定义背景色、文本颜色等
3. **交互配置**：通过 props 控制关闭行为
4. **尺寸控制**：通过 width 和 height 属性灵活调整对话框尺寸

## 样式细节

Dialog 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：符合 WAI-ARIA 规范
   - 设置 `role="dialog"` 和 `aria-modal="true"`
   - 支持键盘导航
4. **动画效果**：使用 CSS 过渡实现平滑的显示/隐藏效果

## 性能优化

通过以下方式优化性能：

1. 使用 `Teleport` 避免布局嵌套问题
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 按需监听和移除键盘事件
6. 使用 CSS 动画而不是 JavaScript 动画

## 设计价值

Dialog 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Modal、Popover 等其他组件保持一致的设计语言
