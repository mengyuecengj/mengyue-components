# Menu 组件设计文档

## 概述

Menu 组件是本组件库中用于实现导航菜单功能的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 menu.vue, menuItem.vue 和 menusubMenu.vue等核心组件实现了一套完整且易用的导航菜单解决方案。

Menu 组件专注于处理导航菜单的结构、交互和样式管理，为用户提供了一套强大、灵活的导航菜单管理功能，支持垂直/水平布局、折叠展开、唯一展开、自定义样式和丰富的交互方式，有效提升用户在导航和选择操作时的体验。

## 设计理念

### 分层架构

Menu 组件严格按照三层架构设计：

1. **结构层** menu.vue, menuItem.vue, menusubMenu.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** menu.ts, menuItem.ts, menusubMenu.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** menu.scss, menuItem.scss, menusubMenu.scss- 定义组件的视觉呈现和样式规则

### 逻辑抽象

Menu 组件将复杂的逻辑抽象为清晰的上下文提供机制：

- `menuContext` - 通过 `provide/inject` 机制向子组件传递核心状态和方法
- `handleSelec` - 处理菜单项选择逻辑
- `openMenu`, `loseMenu`，`toggleMenu` - 处理菜单展开/折叠逻辑
- `indexPath` - 通过递归提供当前菜单项的路径

这种设计使得组件之间能够高效通信，同时保持松耦合。

## 核心功能设计

### Props 结构化设计

Menu 组件的 props 设计简洁明了：

```typescript
export const menuProps = {
  /** 默认激活的菜单项 */
  defaultActive: {
    type: String,
    default: ''
  },
  /** 菜单模式 */
  mode: {
    type: String as PropType<'vertical' | 'horizontal'>, 
    default: 'vertical'
  },
  /** 是否折叠 */
  collapse: {
    type: Boolean,
    default: false
  },
  /** 背景颜色 */
  backgroundColor: {
    type: String,
    default: '#2f3b46'
  },
  /** 文本颜色 */
  textColor: {
    type: String,
    default: '#bfcbd9'
  },
  /** 激活项文本颜色 */
  activeTextColor: {
    type: String,
    default: '#409EFF'
  },
  /** 触发方式 */
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  },
  /** 是否只保持一个子菜单展开 */
  uniqueOpened: {
    type: Boolean,
    default: false
  },
  /** 默认展开的菜单 */
  defaultOpeneds: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  /** 是否使用折叠动画 */
  collapseTransition: {
    type: Boolean,
    default: true
  }
}
```

#### 参数说明：
- mode：支持 `'vertical'`（垂直）和 `'horizontal'`（水平）两种模式。
- collapse：控制菜单是否折叠（侧边栏模式）。
- trigger：支持 `'click'`（点击）和 `'hover'`（悬停）两种触发方式。
- uniqueOpened：控制是否只保持一个子菜单展开。
- backgroundColor、textColor 和 activeTextColor：支持自定义菜单颜色。

### 交互设计

Menu 组件提供丰富的交互方式：

#### 基本使用
```vue
<MYMenu mode="vertical" defaultActive="1">
  <MYMenuItem index="1">导航一</MYMenuItem>
  <MYMenuItem index="2">导航二</MYMenuItem>
  <MYMenuItem index="3">导航三</MYMenuItem>
</MYMenu>
```

#### 带子菜单
```vue
<MYMenu mode="vertical" defaultActive="1-1">
  <MYMenuItem index="1">导航一</MYMenuItem>
  <MYMenuSubMenu index="2" title="导航二">
    <MYMenuItem index="2-1">选项1</MYMenuItem>
    <MYMenuItem index="2-2">选项2</MYMenuItem>
  </MYMenuSubMenu>
  <MYMenuItem index="3">导航三</MYMenuItem>
</MYMenu>
```

#### 水平菜单
```vue
<MYMenu mode="horizontal">
  <MYMenuItem index="1">导航一</MYMenuItem>
  <MYMenuSubMenu index="2" title="导航二">
    <MYMenuItem index="2-1">选项1</MYMenuItem>
    <MYMenuItem index="2-2">选项2</MYMenuItem>
  </MYMenuSubMenu>
  <MYMenuItem index="3">导航三</MYMenuItem>
</MYMenu>
```

#### 折叠菜单
```vue
<MYMenu mode="vertical" :collapse="isCollapse">
  <MYMenuItem index="1">导航一</MYMenuItem>
  <MYMenuSubMenu index="2" title="导航二">
    <MYMenuItem index="2-1">选项1</MYMenuItem>
    <MYMenuItem index="2-2">选项2</MYMenuItem>
  </MYMenuSubMenu>
  <MYMenuItem index="3">导航三</MYMenuItem>
</MYMenu>
```

## 样式系统设计

### CSS 变量控制

Menu 组件通过 CSS 变量实现样式控制：

1. `--menu-bg` - 菜单背景颜色
2. `--menu-text` - 菜单文本颜色
3. `--menu-active` - 激活项文本颜色

### 布局系统

Menu 组件支持灵活的布局控制：

1. **垂直/水平布局** - 通过 mode 属性控制
2. **折叠展开** - 通过 collapse 属性控制
3. **响应式设计** - 自动适应不同屏幕尺寸
4. **过渡动画** - 通过 collapseTransition 属性控制折叠动画

### 状态样式

Menu 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准菜单样式
2. **激活状态** - 通过 is-active 类控制
3. **折叠状态** - 通过 is-collapse 类控制
4. **展开状态** - 通过 is-open 类控制
5. **禁用状态** - 通过 is-disabled 类控制

## 组件结构设计

### 整体结构

Menu 组件的整体结构如下：

```html
<ul class="my-menu" :class="[`my-menu--${props.mode}`, { 'is-collapse': props.collapse }]" :style="{
  '--menu-bg': props.backgroundColor,
  '--menu-text': props.textColor,
  '--menu-active': props.activeTextColor
}">
  <slot />
</ul>
```

### 组件层次

Menu 组件包含多个主要部分：

1. **主菜单** - `.my-menu` - 包裹整个菜单组件
2. **菜单项** - `.my-menu-item` - 单个菜单项
3. **子菜单** - `.my-submenu` - 包含子菜单的容器
4. **子菜单标题** - `.submenu-title` - 子菜单的标题区域
5. **子菜单列表** - `.submenu-list` - 子菜单项的容器

MenuItem 组件的结构：

```html
<li class="my-menu-item" :class="{ 'is-active': isActive, 'is-disabled': disabled }" @click.stop="handleClick">
  <span class="menu-icon">
    <slot name="icon" />
  </span>
  <span class="menu-label" v-show="showLabel">
    <slot />
  </span>
</li>
```

MenuSubMenu 组件的结构：

```html
<li class="my-submenu" :class="{ 'is-open': isOpen }">
  <div
    class="submenu-title"
    ref="titleRef"
    @click.stop="onTitleClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <span class="menu-icon"><slot name="icon" /></span>
    <span class="menu-label" v-show="showLabel"><slot name="title" /></span>
    <span class="submenu-arrow" v-show="!collapsed">
      <svg width="12" height="12" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M384 192l256 320-256 320z" />
      </svg>
    </span>
  </div>

  <!-- 折叠态浮层 -->
  <teleport v-if="collapsed" to="body">
    <ul
      v-show="showPopup"
      class="submenu-list teleported-list"
      ref="listRef"
      @mouseenter="onPopupEnter"
      @mouseleave="onPopupLeave"
      :style="popupStyle"
    >
      <slot />
    </ul>
  </teleport>

  <!-- 非折叠态 -->
  <transition name="slide">
    <ul v-show="!collapsed && isOpen" class="submenu-list">
      <slot />
    </ul>
  </transition>
</li>
```

## 交互设计

### 菜单展开/折叠

Menu 组件通过 openMenu、closeMenu 和 toggleMenu 方法实现菜单展开/折叠：

```typescript
function openMenu(index: string, indexPath: string[] = []) {
  if (openedMenus.value.includes(index)) return

  const parentKey = indexPath.slice(0, -1).join('/') || '__root__'
  
  if (uniqueOpened.value) {
    const currentBranch = new Set(indexPath)
    
    // 找出需要关闭的菜单（不在当前分支中的菜单）
    const toClose = openedMenus.value.filter(i => {
      return !currentBranch.has(i)
    })
    
    if (toClose.length) {
      openedMenus.value = openedMenus.value.filter(i => !toClose.includes(i))
      toClose.forEach(i => delete openedParentMap[i])
    }
  } else {
    // 原来的非 uniqueOpened 逻辑
    const toClose = openedMenus.value.filter(i => openedParentMap[i] !== parentKey)
    if (toClose.length) {
      openedMenus.value = openedMenus.value.filter(i => !toClose.includes(i))
      toClose.forEach(i => delete openedParentMap[i])
    }
  }

  openedMenus.value.push(index)
  openedParentMap[index] = parentKey
  
  // 触发 open 事件
  emit('open', index, indexPath)
}

function closeMenu(index: string) {
  if (!openedMenus.value.includes(index)) return
  // 递归关闭子菜单
  const children = Object.keys(openedParentMap).filter(key => openedParentMap[key] === index)
  children.forEach(child => closeMenu(child))
  // 移除自身
  openedMenus.value = openedMenus.value.filter(i => i !== index)
  delete openedParentMap[index]
  
  // 触发 close 事件
  emit('close', index, [index])
}

function toggleMenu(index: string, indexPath: string[] = []) {
  if (openedMenus.value.includes(index)) {
    closeMenu(index)
  } else {
    openMenu(index, indexPath)
  }
}
```

#### 展开/折叠规则：
- 支持点击和悬停两种触发方式
- 支持唯一展开模式（uniqueOpened）
- 折叠时缓存展开状态，展开时恢复

### 触发机制

Menu 组件支持多种触发方式：

```typescript
function onTitleClick() {
  if (collapsed.value) {
    showPopup.value = !showPopup.value
  } else {
    menu?.toggleMenu(props.index, myPath)
  }
}

function onMouseEnter() {
  if (effectiveTrigger.value === 'hover') {
    if (collapsed.value) {
      if (closeTimer) clearTimeout(closeTimer)
      showPopup.value = true
    } else {
      if (closeTimer) clearTimeout(closeTimer)
      menu?.openMenu(props.index, myPath)
    }
  }
}

function onMouseLeave() {
  if (effectiveTrigger.value === 'hover') {
    closeTimer = setTimeout(() => {
      if (collapsed.value) showPopup.value = false
      else menu?.closeMenu(props.index)
      closeTimer = null
    }, 150)
  }
}
```

#### 触发方式：
- click：点击触发（默认）
- hover：鼠标悬停触发
- 折叠状态下，子菜单默认使用 hover 触发

### 键盘导航

Menu 组件通过事件监听实现键盘导航：

```typescript
// 在 menu.vue 中
function handleClick() {
  if (props.disabled) return
  const indexPath = [...(parentPath || []), props.index]
  menu?.handleSelect(props.index, indexPath)
}
```

#### 键盘操作：
- `ArrowDown`/`ArrowUp`：在菜单项间导航
- `Enter`：选择当前项
- `Escape`：关闭子菜单
- `ArrowRight`：展开子菜单
- `ArrowLeft`：关闭子菜单

## 扩展性设计

Menu 组件具备良好的扩展性：

1. **多模式支持**：通过 mode 属性支持垂直/水平布局
2. **折叠功能**：通过 collapse 属性支持侧边栏折叠
3. **唯一展开**：通过 uniqueOpened 属性支持唯一展开模式
4. **自定义样式**：通过 backgroundColor、textColor 和 activeTextColor 属性支持自定义样式
5. **过渡动画**：通过 collapseTransition 属性控制折叠动画
6. **插槽机制**：支持自定义图标和标题内容

## 样式细节

Menu 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保键盘导航和屏幕阅读器友好
   - 设置适当的 ARIA 属性
   - 支持键盘导航
4. **清晰的视觉层次**：通过颜色和间距创建清晰的视觉层次
5. **平滑过渡**：使用 CSS 过渡实现平滑的展开/折叠效果

## 性能优化

通过以下方式优化性能：

1. **高效的状态管理**：使用响应式系统精确控制组件更新
2. **避免不必要的重绘**：通过条件渲染减少 DOM 操作
3. **使用 Vue 3 Composition API**：提高运行效率和代码可维护性
4. **智能的事件监听**：按需监听和移除事件
5. **CSS 变量动态调整**：减少样式重计算
6. **缓存机制**：折叠时缓存展开状态，提高性能

## 设计价值

Menu 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 `provide/inject` 机制实现组件间高效通信
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项和布局方式
5. **一致性**：与 Dropdown、Select 等其他组件保持一致的设计语言

Menu 组件提供了一套完整的导航菜单管理解决方案，专注于用户交互体验的优化，为用户提供了一套强大、灵活且易用的导航菜单组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。