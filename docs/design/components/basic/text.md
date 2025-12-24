# Text 组件设计
## 概述
Text 组件是本组件库中专门用于文本展示的基础组件。它延续了我们组件库一贯的设计理念，即"关注点分离"和"逻辑抽象"，通过 useClassComputed 和 useStyleComputed 两个核心 Hooks 实现了简洁而强大的文本样式控制功能。

Text 组件专注于处理文本的展示样式，包括类型、尺寸、颜色等常用属性，为用户提供了一套完整且易用的文本展示解决方案。

## 设计理念
### 分层架构
Text 组件严格按照三层架构设计：

1. 结构层 (text.vue) - 负责组件的 DOM 结构和基本布局
2. 逻辑层 (textComputed.ts) - 通过 Hooks 处理复杂的响应式计算
3. 表现层 (text.scss) - 定义组件的视觉呈现和样式规则

## 逻辑抽象
Text 组件将复杂的样式逻辑抽象为两个核心 Hooks：

· useClassComputed - 处理动态类名生成<br>
· useStyleComputed - 处理动态样式生成<br>
这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计
Props 结构化设计
Text 组件的 props 设计简洁明了：

```typescript
export const textProps = {
    type: {
        type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
        default: '',
    },
    size: {
        type: [String, Number] as PropType<'small' | 'medium' | 'large' | string | number>,
        default: '' as const
    },
    Tecolor: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: 'span'
    }
}
```
这种设计提供了足够的灵活性，既支持预设的类型和尺寸，也允许用户自定义数值。

## useClassComputed 的应用
Text 组件利用 useClassComputed Hook 来处理动态类名的生成：

```typescript
const textClass = useClassComputed<TextProps>({
    baseClass: 'my-text',
    propClasses: {
        type: props.type && props.type ? props.type : undefined,
        size: props.size && ['small', 'medium', 'large'].includes(String(props.size)) ? String(props.size) : undefined,
    },
    flagClasses: {
        disabled: props.disabled,
    },
});
```
这种设计确保了只有有效的预设值才会生成对应的类名。

## useStyleComputed 的应用
Text 组件使用 useStyleComputed Hook 来处理动态样式生成：

```typescript
const textStyle = useStyleComputed<TextProps>(props, {
    propToStyleMap: {
        Tecolor: 'color',
        size: 'fontSize',
    },
    fontSizeProp: 'size',
});
```
这种设计允许组件同时支持预设尺寸和自定义尺寸值。

## 样式系统设计
### BEM 命名规范
Text 组件采用 BEM 命名规范，确保类名语义清晰：

基础类名：.my-text<br>
修饰符类名：.my-text--primary, .my-text--medium, .my-text--disabled<br>

### 文本样式控制
Text 组件支持多种文本样式控制：

1. 文本类型：default、primary、success、warning、danger、info
2. 文本尺寸：small、medium、large 或自定义数值
3. 文本颜色：通过 Tecolor 属性自定义颜色
4. 禁用状态：通过 disabled 属性控制

## 响应式设计
Text 组件支持响应式文本尺寸设置，既可以使用预设尺寸，也可以指定具体数值。

## 组件结构设计
Text 组件在结构上做了一个特殊设计，在文本内容外包裹了一层 .my-text__content 容器：

```html
<component 
  :is="props.tag" 
  :class="textClass"
  :style="textStyle"
>
  <span class="my-text__content">
    <slot />
  </span>
</component>
```
这种设计为未来扩展提供了更多可能性，比如添加前缀、后缀图标等功能。

## 扩展性设计
Text 组件具备良好的扩展性：

1. 自定义标签支持：可通过 tag prop 渲染为不同 HTML 元素
2. 全面样式控制：支持类型、尺寸、颜色等完整样式设置
3. 灵活的尺寸控制：支持预设尺寸和自定义数值
4. 主题适配：通过 CSS 变量支持主题定制

## 性能优化
通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率

## 设计价值
Text 组件延续了我们组件库的设计哲学：

1. 关注点分离：结构、样式、逻辑完全解耦
2. 高度复用：通过 hooks 抽象通用逻辑
3. 易于维护：清晰的代码结构和命名规范
4. 可扩展性强：支持丰富的定制选项
5. 一致性：与 Button、Border 等其他组件保持一致的设计语言
