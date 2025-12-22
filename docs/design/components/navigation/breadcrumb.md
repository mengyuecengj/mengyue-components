# Breadcrumb 组件设计

## 概述

Breadcrumb 组件是本组件库中用于展示页面导航路径的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 breadcrumb.vue 和 breadcrumbItem.vue等核心组件实现了一套完整且易用的面包屑导航解决方案。

Breadcrumb 组件专注于处理页面导航路径的展示和导航功能，为用户提供了一套强大、灵活的面包屑导航管理功能，支持自定义分隔符、路由跳转和响应式布局，有效提升用户在多层级页面浏览时的体验。


## 设计理念

### 分层架构

Breadcrumb 组件严格按照三层架构设计：

1. **结构层** breadcrumb.vue breadcrumbItem.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** - 处理复杂的响应式计算和交互逻辑
3. **表现层** breadcrumb.scss breadcrumbItem.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Breadcrumb 组件将复杂的逻辑抽象为核心函数：

- **分隔符管理**：通过 provide/inject 机制在父组件和子组件间共享分隔符配置
- **路由判断**：通过 hasRouter 判断是否使用路由
- **最后一项判断**：通过 isLast 计算属性判断是否为最后一项

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Breadcrumb 容器组件的 props 设计：

```typescript
defineProps({
  /** 分隔符 */
  separator: {
    type: String,
    default: '/',
  },
  /** 分隔符图标 */
  separatorIcon: {
    type: [Object, Function],
    default: null,
  },
})
```

BreadcrumbItem 项组件的 props 设计：

```typescript
defineProps({
  /** 路由目标 */
  to: {
    type: [String, Object],
    default: '',
  },
  /** 是否替换历史 */
  replace: {
    type: Boolean,
    default: false,
  },
})
```

#### 参数说明：
- separator：面包屑项之间的分隔符，默认值为 `'/'`。
- separatorIcon：支持自定义分隔符图标。
- to：指定路由目标，支持字符串或路由对象。
- replace：控制是否替换历史记录。


### 交互设计

Breadcrumb 组件提供简洁的导航交互：

#### 路由支持
```vue
<MYBreadcrumb>
  <MYBreadcrumbItem to="/">首页</MYBreadcrumbItem>
  <MYBreadcrumbItem to="/components">组件</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

#### 静态文本
```vue
<MYBreadcrumb>
  <MYBreadcrumbItem>首页</MYBreadcrumbItem>
  <MYBreadcrumbItem>组件</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

#### 自定义分隔符
```vue
<MYBreadcrumb separator=">">
  <MYBreadcrumbItem>首页</MYBreadcrumbItem>
  <MYBreadcrumbItem>组件</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

#### 自定义图标分隔符
```vue
<MYBreadcrumb :separator-icon="ArrowRight">
  <MYBreadcrumbItem>首页</MYBreadcrumbItem>
  <MYBreadcrumbItem>组件</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

## 样式系统设计

### CSS 变量控制

Breadcrumb 组件通过 CSS 变量实现样式控制：

1. `--el-text-color-regular` - 常规文本颜色
2. `--el-color-primary` - 主要颜色
3. `--el-text-color-secondary` - 次要文本颜色

### 布局系统

Breadcrumb 组件支持灵活的布局控制：

1. **水平布局** - 使用 Flexbox 水平排列面包屑项
2. **响应式设计** - 适应不同屏幕尺寸
3. **分隔符间距** - 通过 SCSS 变量调整分隔符间距

### 状态样式

Breadcrumb 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准面包屑样式
2. **链接状态** - 可点击项的悬停效果
3. **最后一项** - 不显示分隔符

## 组件结构设计

### 整体结构

Breadcrumb 组件的整体结构如下：

```html
<nav class="my-breadcrumb" aria-label="Breadcrumb">
  <slot v-if="$slots.default" />
</nav>
```

BreadcrumbItem 组件的结构：

```html
<span class="my-breadcrumb-item">
  <!-- 渲染内容 -->
  <component
    :is="hasRouter ? 'router-link' : 'a'"
    v-if="to"
    :to="hasRouter ? to : undefined"
    :href="!hasRouter ? (typeof to === 'string' ? to : to.path) : undefined"
    :replace="replace"
    class="my-breadcrumb-link"
  >
    <slot v-if="$slots.default" />
  </component>
  <span v-else class="my-breadcrumb-link">
    <slot v-if="$slots.default" />
  </span>

  <!-- 分隔符 -->
  <span v-if="!isLast" class="my-breadcrumb-separator">
    <component :is="separatorIcon" v-if="separatorIcon" />
    <template v-else>{{ separator }}</template>
  </span>
</span>
```

### 组件层次

Breadcrumb 组件包含多个主要部分：

1. **容器** - `.my-breadcrumb` - 包裹整个面包屑导航
2. **面包屑项** - `.my-breadcrumb-item` - 单个面包屑项的容器
3. **链接** - `.my-breadcrumb-link` - 可点击的链接区域
4. **分隔符** - `.my-breadcrumb-separator` - 项之间的分隔符

## 交互设计

### 路由支持

Breadcrumb 组件通过 hasRouter 检测路由环境：

```typescript
// 是否使用 router
const instance = getCurrentInstance()
const hasRouter = !!instance?.appContext.config.globalProperties.$router
```

#### 路由实现：
```vue
<component
  :is="hasRouter ? 'router-link' : 'a'"
  v-if="to"
  :to="hasRouter ? to : undefined"
  :href="!hasRouter ? (typeof to === 'string' ? to : to.path) : undefined"
  :replace="replace"
  class="my-breadcrumb-link"
>
  <slot v-if="$slots.default" />
</component>
```

### 分隔符处理

Breadcrumb 组件通过 isLast 判断是否显示分隔符：

```typescript
const isLast = computed(() => {
  const parent = instance?.parent?.subTree
  if (!parent) return false
  const children = Array.isArray(parent.children) ? parent.children.filter((v: import('vue').VNodeChild) => typeof v === 'object' && v !== null && 'type' in v && (v.type as { name?: string })?.name === 'MYBreadcrumbItem') : []
  const lastChild = children?.[children.length - 1]
  return lastChild && typeof lastChild === 'object' && 'props' in lastChild ? lastChild.props?.to === props.to &&
    instance?.vnode === lastChild : false
})
```

#### 分隔符渲染：
```vue
<span v-if="!isLast" class="my-breadcrumb-separator">
  <component :is="separatorIcon" v-if="separatorIcon" />
  <template v-else>{{ separator }}</template>
</span>
```

### 分隔符共享机制

Breadcrumb 组件通过 provide/inject 实现分隔符配置共享：

```typescript
provide('breadcrumbSeparator', computed(() => props.separator))
provide('breadcrumbSeparatorIcon', computed(() => props.separatorIcon))
```

## 扩展性设计

Breadcrumb 组件具备良好的扩展性：

1. **分隔符自定义**：通过 separator 和 separatorIcon 属性支持自定义分隔符
2. **路由兼容**：自动检测路由环境，兼容 Vue Router
3. **样式定制**：通过 CSS 变量调整组件样式
4. **无障碍设计**：设置 `aria-label="Breadcrumb"` 提高可访问性
5. **插槽支持**：通过默认插槽自定义内容

## 样式细节

Breadcrumb 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：符合 WAI-ARIA 规范
   - 设置 `aria-label="Breadcrumb"`
   - 确保键盘导航友好
4. **清晰的视觉层次**：通过颜色区分可点击项和当前位置
5. **间距控制**：合理设置分隔符间距，确保可读性

## 性能优化

通过以下方式优化性能：

1. 使用计算属性缓存路由环境和最后一项判断结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 按需渲染分隔符（最后一项不渲染分隔符）
6. 使用 CSS 变量动态调整样式

## 设计价值

Breadcrumb 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 NavMenu、Steps 等其他组件保持一致的设计语言

Breadcrumb 组件提供了一套完整的面包屑导航管理解决方案，专注于用户交互体验的优化，为用户提供了一套强大、灵活且易用的面包屑组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
