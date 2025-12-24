# Switch 组件设计文档

## 概述

Switch 组件是本组件库中用于二元状态切换的表单组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useClassComputed 和 useStyleComputed等核心 Hooks 实现了强大而灵活的开关控制功能。

Switch 组件专注于处理用户的二元状态切换操作，为用户提供了一套完整且易用的状态切换解决方案，支持多种尺寸、禁用状态和文本显示等功能。

## 设计理念

### 分层架构

Switch 组件严格按照三层架构设计：

1. **结构层** switch.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** switchComputed.ts - 通过 Hooks 处理复杂的响应式计算
3. **表现层** switch.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Switch 组件将复杂的逻辑抽象为多个核心 Hooks：

- useClassComputed - 处理动态类名生成
- useStyleComputed - 处理动态样式生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### Props 结构化设计

Switch 组件的 props 设计简洁明了：

```typescript
export const switchProps = {
    modelValue: {
        type: Boolean,
        default: false
    },
    value: {
        type: [Boolean, String, Number],
        default: false
    },
    size: {
        type: String,
        default: undefined
    },
    text: {
        type: String,
        default: undefined
    },
    disabled: {
        type: Boolean,
        default: false 
    }
}
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 状态管理

Switch 组件通过计算属性管理核心状态：

```typescript
// 基本状态
const isChecked = computed(() => Boolean(props.modelValue))
const isDisabled = computed(() => Boolean(props.disabled))
```

这种设计确保了状态的一致性和响应性。

### 表单集成

Switch 组件支持与表单组件集成：

```typescript
// 表单上下文注入
const formItemContext = inject<Partial<FormItemContext> | null>('myFormItemContext', null)

// 监听props变化，只用于清除校验
watch(() => props.modelValue, () => {
  formItemContext?.clearValidate?.()
})
```

## 样式系统设计

### CSS 变量控制

Switch 组件通过 CSS 变量实现样式控制：

1. `--my-switch-text` - 文本内容控制

### 尺寸系统

Switch 组件支持多种尺寸：

1. **mini** - 最小尺寸
2. **supersmall** - 超小尺寸
3. **small** - 小尺寸
4. **medium** - 中等尺寸（默认）
5. **large** - 大尺寸
6. **biglarge** - 超大尺寸
7. **superlarge** - 超超大尺寸

### 状态样式

Switch 组件根据不同状态提供相应的样式：

1. **默认状态** - 关闭状态的样式
2. **选中状态** - 开启状态的样式
3. **禁用状态** - 禁用时的半透明效果

## 组件结构设计

Switch 组件采用经典的开关结构：

```html
<label class="my-switch" :class="[classSwitch, { 'is-checked': isChecked }]" :style="styleSwitch">
  <input type="checkbox" hidden :checked="isChecked" :disabled="isDisabled" @change="onInput" />
  <span class="slider">
    <span v-if="props.text" class="slider-text">{{ props.text }}</span>
  </span>
  <span class="text">
    <slot />
  </span>
</label>
```

这种结构利用了原生 checkbox 的语义化特性，同时通过 CSS 实现了美观的视觉效果。

## 交互设计

### 状态切换

Switch 组件支持点击切换状态：

```typescript
const onInput = () => {
  if (isDisabled.value) return
  
  const newValue = !isChecked.value
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
```

### 禁用状态

Switch 组件支持禁用状态：

```scss
input:disabled+.slider {
  opacity: 0.5;
  cursor: not-allowed !important;
}
```

### 键盘导航

Switch 组件支持键盘导航：

1. **Tab 键** - 在组件间切换焦点
2. **空格键** - 切换开关状态

## 扩展性设计

Switch 组件具备良好的扩展性：

1. **多种尺寸支持**：支持从 mini 到 superlarge 的多种尺寸
2. **文本显示**：支持在开关上显示自定义文本
3. **禁用状态**：支持禁用状态控制
4. **插槽支持**：支持通过插槽添加额外文本
5. **主题适配**：通过 CSS 变量支持主题定制
6. **表单集成**：可与表单组件无缝集成

## 样式细节

Switch 组件在样式处理上有以下特点：

1. **平滑动画**：开关切换时具有平滑的过渡动画
2. **响应式设计**：支持多种尺寸适配
3. **无障碍设计**：支持键盘导航和屏幕阅读器
4. **文本定位**：开关上的文本能够随着状态切换而移动
5. **一致性**：与组件库其他表单组件保持样式一致性

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除

## 设计价值

Switch 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Checkbox、Radio、Input 等其他组件保持一致的设计语言
