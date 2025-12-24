# Container 组件设计

## 概述

Container 组件是本组件库中用于页面布局的容器组件集合。它包括五个子组件：MYContainer、MYHeader、MYMain、MYFooter 和 MYAside，共同构成了一套完整的页面布局解决方案。这套组件延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过useContainerOverAllComputed 和 useContainerStyle 等核心 Hooks 实现了强大而灵活的布局控制功能。

Container 组件专注于处理页面的整体布局结构，为用户提供了一套完整且易用的页面布局解决方案。

## 设计理念

### 分层架构

Container 组件严格按照三层架构设计：

1. **结构层** container.vue 等 - 负责组件的 DOM 结构和基本布局
2. **逻辑层** containerComputed.ts - 通过 Hooks 处理复杂的响应式计算
3. **表现层** container.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Container 组件将复杂的样式逻辑抽象为多个核心 Hooks：

- useContainerOverAllComputed - 处理容器类名生成
- useContainerStyle - 处理容器样式生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### 组件体系结构

Container 组件采用模块化设计，包含以下五个子组件：

1. **MYContainer** - 主容器组件，负责整体布局控制
2. **MYHeader** - 页头组件，支持固定定位和滚动效果
3. **MYMain** - 主体内容组件
4. **MYFooter** - 页脚组件
5. **MYAside** - 侧边栏组件，支持左右位置控制

### Props 结构化设计

Container 组件的 props 按照功能划分为多个逻辑组：

```typescript
// 基础容器属性
export const containerProps = {
    tag: {
        type: String,
        default: 'div',
    },
    height: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    width: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    background: {
        type: String,
        default: '',
    },
    fixed: {
        type: Boolean,
        default: false,
    },
    position: {
        type: String as PropType<'left' | 'right'>,
        default: 'left',
    },
} as const;
```

每个子组件在此基础上进行扩展，形成各自的 props 集合。

### 子孙组件自动排序

MYContainer 组件具有独特的子孙组件自动排序功能：

```typescript
const processedChildren = computed(() => {
  const children = (slots as { default?: () => VNode[] }).default?.() || [];
  const headers: ProcessedVNode[] = [];
  const footers: ProcessedVNode[] = [];
  const leftAsides: ProcessedVNode[] = [];
  const rightAsides: ProcessedVNode[] = [];
  const mains: ProcessedVNode[] = [];
  const others: ProcessedVNode[] = [];

  children.forEach((vnode: VNode) => {
    const name = (vnode.type as { name?: string })?.name || '';
    if (name.includes('Header')) headers.push(vnode);
    else if (name.includes('Footer')) footers.push(vnode);
    else if (name.includes('Aside')) {
      const position = vnode.props?.position || 'left';
      if (position === 'right') rightAsides.push(vnode);
      else leftAsides.push(vnode);
    }
    else if (name.includes('Main')) mains.push(vnode);
    else others.push(vnode);
  });

  const body = (leftAsides.length || mains.length || rightAsides.length)
    ? h('div', { class: 'my-body' }, [...leftAsides, ...mains, ...rightAsides])
    : null;

  return [...headers, body, ...footers, ...others].filter(Boolean);
});
```

这种设计允许用户以任意顺序插入子组件，组件会自动按照标准布局顺序排列。

## 样式系统设计

### Flexbox 布局

Container 组件基于 Flexbox 实现布局：

```scss
.my-container {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
```

### 响应式设计

组件支持响应式布局设计：

1. **主内容区域**：使用 `flex: 1` 自动填充剩余空间
2. **侧边栏**：固定宽度，不可收缩
3. **页头/页脚**：固定高度，不可收缩

### 固定定位支持

MYHeader组件支持固定定位和滚动效果：

```typescript
const handleScroll = () => {
    const scrollThreshold = 100;
    if (props.fixed) {
        const currentScroll = window.scrollY;
        isFixed.value = currentScroll > scrollThreshold;
        isScrolled.value = currentScroll > 0;
    }
}
```

## 组件结构设计

### 整体结构

Container 组件的整体结构如下：

```html
<MYContainer>
  <MYHeader />
  <div class="my-body">
    <MYAside position="left" />
    <MYMain />
    <MYAside position="right" />
  </div>
  <MYFooter />
</MYContainer>
```

### 子组件设计

每个子组件都采用类似的结构：

```html
<component :is="props.tag" :class="classComponent" :style="styleContainer">
    <slot />
</component>
```

这种设计允许通过 tag 属性自定义渲染的 HTML 标签。

## 扩展性设计

Container 组件具备良好的扩展性：

1. **自定义标签支持**：每个组件都可通过 tag prop 渲染为不同 HTML 元素
2. **全面样式控制**：支持高度、宽度、背景色等完整样式设置
3. **位置控制**：侧边栏支持左/右位置控制
4. **固定定位**：页头支持固定定位和滚动效果
5. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

Container 组件在样式处理上有以下特点：

1. **标准化布局**：遵循经典的页头-主体-页脚布局模式
2. **弹性主体**：主内容区域能够自适应填充剩余空间
3. **固定侧边栏**：侧边栏具有固定宽度，不影响主内容区域
4. **滚动控制**：支持水平滚动控制
5. **过渡动画**：页头固定时支持平滑过渡效果

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 事件监听器的合理添加和移除

## 设计价值

Container 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Button、Border、Text 等其他组件保持一致的设计语言
