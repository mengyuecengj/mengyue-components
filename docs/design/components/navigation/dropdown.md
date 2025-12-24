# Dropdown 组件设计文档

## 概述

Dropdown 组件是本组件库中用于实现下拉菜单功能的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 dropdown.vue, dropdownMenu.vue 和 dropdownItem.vue 等核心组件实现了一套完整且易用的下拉菜单解决方案。

Dropdown 组件专注于处理下拉菜单的展示、交互和样式管理，为用户提供了一套强大、灵活的下拉菜单管理功能，支持多种触发方式、分割按钮、键盘导航和自定义样式，有效提升用户在选择操作时的体验。

## 设计理念

### 分层架构

Dropdown 组件严格按照三层架构设计：

1. **结构层** dropdown.vue, dropdownItem.vue, dropdownMenu.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** dropdownComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** dropdown.scss, dropdownItem.scss, dropMenu.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Dropdown 组件将复杂的逻辑抽象为核心函数：

- useDropdown - 处理下拉菜单的核心逻辑
- open - 处理菜单打开逻辑
- close - 处理菜单关闭逻辑
- updatePosition - 处理菜单定位逻辑
- onKeydown - 处理键盘导航逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Dropdown 组件的 props 设计简洁明了：

```typescript
export const dropdownProps = {
  /** 按钮类型 */
  type: {
    type: String,
    default: 'default'
  },
  /** 按钮尺寸 */
  size: {
    type: String,
    default: 'md'
  },
  /** 是否分割按钮 */
  splitButton: {
    type: Boolean,
    default: false
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 菜单位置 */
  placement: {
    type: String,
    default: 'bottom'
  },
  /** 触发方式 */
  trigger: {
    type: String as () => UseDropdownOptions['trigger'], 
    default: 'hover'
  },
  /** 点击菜单项后是否隐藏 */
  hideOnClick: {
    type: Boolean,
    default: true
  },
  /** 背景颜色 */
  backGroundColor: {
    type: String,
    default: ''
  },
  /** 文字颜色 */
  textColor: {
    type: String,
    default: ''
  },
  /** 是否隐藏下拉箭头 */
  noCaret: {
    type: Boolean,
    default: false
  }
}
```

#### 参数说明：
- type：支持 `'default'` 和 `'primary'` 两种类型。
- size：支持 `'sm'`、`'md'` 和 `'lg'` 三种尺寸。
- splitButton：控制是否为分割按钮样式。
- trigger：支持 `'hover'`、`'click'` 和 `'contextmenu'` 三种触发方式。
- hideOnClick：控制点击菜单项后是否自动隐藏菜单。
- backGroundColor 和 textColor：支持自定义背景色和文字颜色。

### 交互设计

Dropdown 组件提供丰富的交互方式：

#### 基本使用
```vue
<MYDropdown>
  <button>下拉菜单</button>
  <template #dropdown>
    <MYDropdownItem>选项1</MYDropdownItem>
    <MYDropdownItem>选项2</MYDropdownItem>
    <MYDropdownItem>选项3</MYDropdownItem>
  </template>
</MYDropdown>
```

#### 分割按钮
```vue
<MYDropdown splitButton>
  <template #default>操作</template>
  <template #dropdown>
    <MYDropdownItem>选项1</MYDropdownItem>
    <MYDropdownItem>选项2</MYDropdownItem>
  </template>
</MYDropdown>
```

#### 自定义触发方式
```vue
<MYDropdown trigger="click">
  <button>点击触发</button>
  <template #dropdown>
    <MYDropdownItem>选项</MYDropdownItem>
  </template>
</MYDropdown>
```

#### 自定义样式
```vue
<MYDropdown 
  :backGroundColor="'#2f6bfe'" 
  :textColor="'white'"
  :noCaret="true">
  <button>自定义样式</button>
  <template #dropdown>
    <MYDropdownItem>选项</MYDropdownItem>
  </template>
</MYDropdown>
```

## 样式系统设计

### CSS 变量控制

Dropdown 组件通过 CSS 变量实现样式控制：

1. `--m-primary` - 主要颜色
2. `--m-primary-600` - 主要颜色深色版本
3. `--m-text` - 文本颜色
4. `--m-muted` - 次要文本颜色
5. `--m-bg` - 背景颜色
6. `--m-border` - 边框颜色

### 布局系统

Dropdown 组件支持灵活的布局控制：

1. **菜单定位** - 支持多种位置（bottom, top, left, right）
2. **响应式设计** - 适应不同屏幕尺寸
3. **最大高度** - 通过 maxHeight 控制菜单最大高度
4. **滚动支持** - 菜单超出最大高度时显示滚动条

### 状态样式

Dropdown 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准下拉菜单样式
2. **悬停状态** - 鼠标悬停时的视觉反馈
3. **禁用状态** - 通过 disabled 属性控制
4. **显示状态** - 菜单展开时的过渡效果
5. **分割按钮状态** - 分割按钮的特殊样式

## 组件结构设计

### 整体结构

Dropdown 组件的整体结构如下：

```html
<div class="m-dropdown" :class="{ 'is-disabled': disabled }">
  <!-- 触发区域 -->
  <div class="m-dropdown__trigger" ref="triggerRef" @click="onTriggerClick" @mouseenter="onTriggerMouseEnter"
    @mouseleave="onTriggerMouseLeave">
    <!-- 支持分割按钮 -->
    <template v-if="splitButton">
      <div class="m-split">
        <button class="m-btn" :class="['m-btn--' + (type || 'default'), sizeClass]" :disabled="disabled"
          :style="{ backgroundColor: props.backGroundColor, color: props.textColor }" @click.stop="onPrimaryClick"
          @keydown.prevent>
          <slot name="default">操作</slot>
        </button>
        <button class="m-split__caret" :disabled="disabled"
          :style="{ backgroundColor: props.backGroundColor, color: props.textColor }" @click.stop="toggle()"
          aria-haspopup="menu" :aria-expanded="isVisible" @keydown.prevent>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1l6 6 6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </template>

    <!-- 普通触发按钮 -->
    <template v-else>
      <button :class="['m-btn', 'm-btn--' + (type || 'default'), sizeClass]" :disabled="disabled" aria-haspopup="menu"
        :aria-expanded="isVisible" :style="{ backgroundColor: props.backGroundColor, color: props.textColor }"
        @keydown.prevent>
        <slot></slot>
        <span v-if="!props.noCaret" style="margin-left:8px;display:inline-flex" class="m-dropdown__caret"
          :class="carectClass">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </span>
      </button>
    </template>
  </div>

  <!-- 菜单 -->
  <Teleport v-if="teleported" to="body">
    <div v-show="isVisible" :class="['m-dropdown__menu', isVisible ? 'm-visible' : 'm-hidden', popperClass]"
      ref="menuRef" :style="{ ...menuStyle, backgroundColor: props.backGroundColor, color: props.textColor }"
      role="menu" @mouseenter="onMenuMouseEnter" @mouseleave="onMenuMouseLeave">
      <slot name="dropdown">
        <slot />
      </slot>
    </div>
  </Teleport>
</div>
```

### 组件层次

Dropdown 组件包含多个主要部分：

1. **容器** - `.m-dropdown` - 包裹整个下拉菜单组件
2. **触发区域** - `.m-dropdown__trigger` - 触发菜单显示的区域
3. **触发按钮** - `.m-btn` - 触发菜单的按钮
4. **菜单容器** - `.m-dropdown__menu` - 包裹菜单项的容器
5. **菜单项** - `.my-dropdown-item` - 单个菜单项

DropdownItem 组件的结构：

```html
<li
  class="my-dropdown-item"
  :class="{
    'is-disabled': disabled,
    'is-divided': divided
  }"
  role="menuitem"
  tabindex="0"
  data-dropdown-item="true"
  :data-disabled="disabled || undefined"
  @click="handleClick"
  @keydown="handleKeydown"
>
  <span v-if="icon" class="my-dropdown-item__icon">
    <component :is="icon" />
  </span>
  <span class="my-dropdown-item__content">
    <slot />
  </span>
</li>
```

## 交互设计

### 触发机制

Dropdown 组件支持多种触发方式：

```typescript
const onTriggerClick = () => {
  if (props.disabled) return;
  if (props.trigger === 'click') toggle();
  emit('click', e);
}

const onTriggerMouseEnter = () => {
  if (options.trigger !== 'hover') return;
  clearTimers();
  const ms = options.showTimeout ?? 150;
  showTimer.value = window.setTimeout(() => open('mouse'), ms);
}

const onTriggerMouseLeave = () => {
  if (options.trigger !== 'hover') return;
  clearTimers();
  const ms = options.hideTimeout ?? 150;
  hideTimer.value = window.setTimeout(() => close(), ms);
}
```

#### 触发方式：
- hover：鼠标悬停触发（默认）
- click：点击触发
- contextmenu：右键菜单触发

### 菜单定位

Dropdown 组件通过 updatePosition 方法实现菜单定位：

```typescript
function updatePosition(mouseX?: number, mouseY?: number) {
  const trg = triggerEl.value;
  const menu = menuEl.value;
  if (!menu) return;
  const placement = options.placement ?? 'bottom';
  let top = 0;
  let left = 0;

  if (mouseX != null && mouseY != null) {
    // contextmenu open at mouse
    left = mouseX + window.scrollX;
    top = mouseY + window.scrollY;
  } else if (trg) {
    const t = trg.getBoundingClientRect();
    const m = menu.getBoundingClientRect();
    if (placement.startsWith('bottom')) {
      top = t.bottom + 6 + window.scrollY;
      left = placement === 'bottom-end' ? t.right - m.width + window.scrollX : t.left + window.scrollX;
    } else if (placement.startsWith('top')) {
      top = t.top - m.height - 6 + window.scrollY;
      left = placement === 'top-end' ? t.right - m.width + window.scrollX : t.left + window.scrollX;
    } else if (placement === 'right') {
      left = t.right + 6 + window.scrollX;
      top = t.top + window.scrollY;
    } else {
      left = t.left - m.width - 6 + window.scrollX;
      top = t.top + window.scrollY;
    }
  }

  // clamp to viewport
  const vw = document.documentElement.clientWidth + window.scrollX;
  const vh = document.documentElement.clientHeight + window.scrollY;
  const mrect = menu.getBoundingClientRect();
  if (left + mrect.width > vw) left = Math.max(window.scrollX + 8, vw - mrect.width - 8);
  if (left < window.scrollX) left = window.scrollX + 8;
  if (top + mrect.height > vh) top = Math.max(window.scrollY + 8, vh - mrect.height - 8);
  if (top < window.scrollY) top = window.scrollY + 8;

  // apply
  menuStyle.top = `${Math.round(top)}px`;
  menuStyle.left = `${Math.round(left)}px`;
  menuStyle.position = 'absolute';
  if (options.maxHeight) {
    menuStyle.maxHeight = typeof options.maxHeight === 'number' ? `${options.maxHeight}px` : `${options.maxHeight}`;
    menuStyle.overflowY = 'auto';
  } else {
    menuStyle.maxHeight = '';
    menuStyle.overflowY = '';
  }
}
```

#### 定位规则：
- 支持 8 种定位方式：`bottom`, `bottom-start`, `bottom-end`, `top`, `top-start`, `top-end`, `left`, `right`
- 超出视口时自动调整位置
- 支持最大高度设置，超出时显示滚动条

### 键盘导航

Dropdown 组件通过onKeydown方法实现键盘导航：

```typescript
function onKeydown(e: KeyboardEvent) {
  if (options.disabled) return;
  const key = e.key;
  const triggerKeys = options.triggerKeys ?? ['Enter', ' ', 'ArrowDown', 'NumpadEnter'];
  if (!visible.value && triggerKeys.includes(key)) {
    e.preventDefault();
    open('key');  // 指定 'key'
    return;
  }
  if (visible.value) {
    if (key === 'Escape') {
      e.preventDefault();
      close();
      triggerEl.value?.focus();
      return;
    }
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      e.preventDefault();
      const items = Array.from(menuEl.value?.querySelectorAll<HTMLElement>('[data-dropdown-item]:not([data-disabled])') ?? []);
      if (!items.length) return;
      const idx = items.findIndex(i => i === document.activeElement);
      if (key === 'ArrowDown') {
        items[(idx + 1) % items.length].focus();
      } else {
        items[(idx - 1 + items.length) % items.length].focus();
      }
      return;
    }
    if (key === 'Enter' || key === ' ') {
      // enter/space on focused item triggers click naturally (no-op here)
    }
  }
}
```

#### 键盘操作：
- `ArrowDown`/`ArrowUp`：在菜单项间导航
- `Enter`/`Space`：选择当前项
- `Escape`：关闭菜单
- `Enter`/`Space`/`ArrowDown`：打开菜单（当焦点在触发器上）

## 扩展性设计

Dropdown 组件具备良好的扩展性：

1. **多种触发方式**：通过 trigger 属性支持多种触发方式
2. **自定义样式**：通过 backGroundColor 和 textColor 属性支持自定义样式
3. **分割按钮**：通过 splitButton 属性支持分割按钮样式
4. **菜单项定制**：通过插槽机制支持自定义菜单项
5. **命令系统**：通过 command 属性支持命令系统
6. **分隔线支持**：通过 divided 属性支持分隔线


## 样式细节

Dropdown 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保键盘导航和屏幕阅读器友好
   - 设置 `role="menu"` 和 `role="menuitem"`
   - 支持键盘导航
   - 设置 `aria-expanded` 属性
4. **清晰的视觉层次**：通过颜色和阴影创建清晰的视觉层次
5. **平滑过渡**：使用 CSS 过渡实现平滑的显示/隐藏效果

## 性能优化

通过以下方式优化性能：

1. 使用计算属性缓存样式计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 按需监听和移除事件
6. 使用 CSS 变量动态调整样式
7. 优化菜单定位计算，减少重排和重绘

## 设计价值

Dropdown 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Select、Menu 等其他组件保持一致的设计语言
