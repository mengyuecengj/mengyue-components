# Menu Component Design Document

## Overview

The Menu component is a core component in this component library used to implement navigation menu functionality. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use navigation menu solution through core components such as menu.vue, menuItem.vue, and menuSubMenu.vue.

The Menu component focuses on handling the structure, interaction, and style management of navigation menus, providing users with a powerful and flexible navigation menu management feature that supports vertical/horizontal layout, collapse/expand, unique opened mode, custom styles, and rich interaction methods, effectively improving user experience during navigation and selection operations.

## Design Philosophy

### Layered Architecture

The Menu component strictly follows a three-layer architecture design:

1. **Structure Layer** menu.vue, menuItem.vue, menuSubMenu.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** menu.ts, menuItem.ts, menuSubMenu.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** menu.scss, menuItem.scss, menuSubMenu.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Menu component abstracts complex logic into a clear context providing mechanism:

- `menuContext` - Passes core states and methods to child components through the `provide/inject` mechanism
- `handleSelect` - Handles menu item selection logic
- `openMenu`, `closeMenu`, `toggleMenu` - Handles menu expand/collapse logic
- `indexPath` - Provides the current menu item's path recursively

This design enables efficient communication between components while maintaining loose coupling.

## Core Feature Design

### Structured Props Design

The props design of the Menu component is concise and clear:

```typescript
export const menuProps = {
  /** Default active menu item */
  defaultActive: {
    type: String,
    default: ''
  },
  /** Menu mode */
  mode: {
    type: String as PropType<'vertical' | 'horizontal'>, 
    default: 'vertical'
  },
  /** Whether to collapse */
  collapse: {
    type: Boolean,
    default: false
  },
  /** Background color */
  backgroundColor: {
    type: String,
    default: '#2f3b46'
  },
  /** Text color */
  textColor: {
    type: String,
    default: '#bfcbd9'
  },
  /** Active item text color */
  activeTextColor: {
    type: String,
    default: '#409EFF'
  },
  /** Trigger method */
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  },
  /** Whether to keep only one sub-menu open */
  uniqueOpened: {
    type: Boolean,
    default: false
  },
  /** Default opened menus */
  defaultOpeneds: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  /** Whether to use collapse transition */
  collapseTransition: {
    type: Boolean,
    default: true
  }
}
```

#### Parameter Description:
- mode: Supports two modes: `'vertical'` (vertical) and `'horizontal'` (horizontal).
- collapse: Controls whether the menu is collapsed (sidebar mode).
- trigger: Supports two trigger methods: `'click'` (click) and `'hover'` (hover).
- uniqueOpened: Controls whether to keep only one sub-menu open.
- backgroundColor, textColor, and activeTextColor: Support custom menu colors.

### Interaction Design

The Menu component provides rich interaction methods:

#### Basic Usage
```vue
<MYMenu mode="vertical" defaultActive="1">
  <MYMenuItem index="1">Navigation 1</MYMenuItem>
  <MYMenuItem index="2">Navigation 2</MYMenuItem>
  <MYMenuItem index="3">Navigation 3</MYMenuItem>
</MYMenu>
```

#### With Sub-menu
```vue
<MYMenu mode="vertical" defaultActive="1-1">
  <MYMenuItem index="1">Navigation 1</MYMenuItem>
  <MYMenuSubMenu index="2" title="Navigation 2">
    <MYMenuItem index="2-1">Option 1</MYMenuItem>
    <MYMenuItem index="2-2">Option 2</MYMenuItem>
  </MYMenuSubMenu>
  <MYMenuItem index="3">Navigation 3</MYMenuItem>
</MYMenu>
```

#### Horizontal Menu
```vue
<MYMenu mode="horizontal">
  <MYMenuItem index="1">Navigation 1</MYMenuItem>
  <MYMenuSubMenu index="2" title="Navigation 2">
    <MYMenuItem index="2-1">Option 1</MYMenuItem>
    <MYMenuItem index="2-2">Option 2</MYMenuItem>
  </MYMenuSubMenu>
  <MYMenuItem index="3">Navigation 3</MYMenuItem>
</MYMenu>
```

#### Collapsed Menu
```vue
<MYMenu mode="vertical" :collapse="isCollapse">
  <MYMenuItem index="1">Navigation 1</MYMenuItem>
  <MYMenuSubMenu index="2" title="Navigation 2">
    <MYMenuItem index="2-1">Option 1</MYMenuItem>
    <MYMenuItem index="2-2">Option 2</MYMenuItem>
  </MYMenuSubMenu>
  <MYMenuItem index="3">Navigation 3</MYMenuItem>
</MYMenu>
```

## Style System Design

### CSS Variable Control

The Menu component implements style control through CSS variables:

1. `--menu-bg` - Menu background color
2. `--menu-text` - Menu text color
3. `--menu-active` - Active item text color

### Layout System

The Menu component supports flexible layout control:

1. **Vertical/Horizontal Layout** - Controlled via the mode property
2. **Collapse/Expand** - Controlled via the collapse property
3. **Responsive Design** - Automatically adapts to different screen sizes
4. **Transition Animation** - Controls collapse animation via the collapseTransition property

### State Styles

The Menu component provides corresponding styles according to different states:

1. **Default State** - Standard menu style
2. **Active State** - Controlled via the `is-active` class
3. **Collapsed State** - Controlled via the `is-collapse` class
4. **Expanded State** - Controlled via the `is-open` class
5. **Disabled State** - Controlled via the `is-disabled` class

## Component Structure Design

### Overall Structure

The overall structure of the Menu component is as follows:

```html
<ul class="my-menu" :class="[`my-menu--${props.mode}`, { 'is-collapse': props.collapse }]" :style="{
  '--menu-bg': props.backgroundColor,
  '--menu-text': props.textColor,
  '--menu-active': props.activeTextColor
}">
  <slot />
</ul>
```

### Component Hierarchy

The Menu component contains several main parts:

1. **Main Menu** - `.my-menu` - Wraps the entire menu component
2. **Menu Item** - `.my-menu-item` - Individual menu item
3. **Sub-menu** - `.my-submenu` - Container for sub-menus
4. **Sub-menu Title** - `.submenu-title` - Title area of the sub-menu
5. **Sub-menu List** - `.submenu-list` - Container for sub-menu items

MenuItem component structure:

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

MenuSubMenu component structure:

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

  <!-- Collapsed floating layer -->
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

  <!-- Non-collapsed state -->
  <transition name="slide">
    <ul v-show="!collapsed && isOpen" class="submenu-list">
      <slot />
    </ul>
  </transition>
</li>
```

## Interaction Design

### Menu Expand/Collapse

The Menu component implements menu expand/collapse through the openMenu, closeMenu, and toggleMenu methods:

```typescript
function openMenu(index: string, indexPath: string[] = []) {
  if (openedMenus.value.includes(index)) return

  const parentKey = indexPath.slice(0, -1).join('/') || '__root__'
  
  if (uniqueOpened.value) {
    const currentBranch = new Set(indexPath)
    
    // Find menus that need to be closed (menus not in the current branch)
    const toClose = openedMenus.value.filter(i => {
      return !currentBranch.has(i)
    })
    
    if (toClose.length) {
      openedMenus.value = openedMenus.value.filter(i => !toClose.includes(i))
      toClose.forEach(i => delete openedParentMap[i])
    }
  } else {
    const toClose = openedMenus.value.filter(i => openedParentMap[i] !== parentKey)
    if (toClose.length) {
      openedMenus.value = openedMenus.value.filter(i => !toClose.includes(i))
      toClose.forEach(i => delete openedParentMap[i])
    }
  }

  openedMenus.value.push(index)
  openedParentMap[index] = parentKey
  
  // Trigger open event
  emit('open', index, indexPath)
}

function closeMenu(index: string) {
  if (!openedMenus.value.includes(index)) return
  // Recursively close child menus
  const children = Object.keys(openedParentMap).filter(key => openedParentMap[key] === index)
  children.forEach(child => closeMenu(child))
  // Remove self
  openedMenus.value = openedMenus.value.filter(i => i !== index)
  delete openedParentMap[index]
  
  // Trigger close event
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

#### Expand/Collapse Rules:
- Supports click and hover trigger methods
- Supports unique opened mode (uniqueOpened)
- Caches expanded state when collapsed and restores it when expanded

### Trigger Mechanism

The Menu component supports multiple trigger methods:

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

#### Trigger Methods:
- click: Trigger on click (default)
- hover: Trigger on mouse hover
- In collapsed state, sub-menus default to hover trigger

### Keyboard Navigation

The Menu component implements keyboard navigation through event listening:

```typescript
// In menu.vue
function handleClick() {
  if (props.disabled) return
  const indexPath = [...(parentPath || []), props.index]
  menu?.handleSelect(props.index, indexPath)
}
```

#### Keyboard Operations:
- `ArrowDown`/`ArrowUp`: Navigate between menu items
- `Enter`: Select current item
- `Escape`: Close sub-menu
- `ArrowRight`: Expand sub-menu
- `ArrowLeft`: Close sub-menu

## Extensibility Design

The Menu component has excellent extensibility:

1. **Multiple Mode Support**: Supports vertical/horizontal layout through the mode property
2. **Collapse Functionality**: Supports sidebar collapse through the collapse property
3. **Unique Opened Mode**: Supports unique opened mode through the uniqueOpened property
4. **Custom Style**: Supports custom styles through backgroundColor, textColor, and activeTextColor properties
5. **Transition Animation**: Controls collapse animation through the collapseTransition property
6. **Slot Mechanism**: Supports custom icons and title content

## Style Details

The Menu component has the following characteristics in style handling:

1. **Responsive Design**: Supports flexible layout adaptation
2. **Consistency**: Maintains style consistency with other components in the component library
3. **Accessibility Design**: Ensures keyboard navigation and screen reader friendliness
   - Sets appropriate ARIA attributes
   - Supports keyboard navigation
4. **Clear Visual Hierarchy**: Creates clear visual hierarchy through colors and spacing
5. **Smooth Transition**: Uses CSS transitions for smooth expand/collapse effects

## Performance Optimization

Performance is optimized through the following methods:

1. **Efficient State Management**: Uses reactive system to precisely control component updates
2. **Avoid Unnecessary Redraws**: Reduces DOM operations through conditional rendering
3. **Vue 3 Composition API**: Improves runtime efficiency and code maintainability
4. **Smart Event Listening**: Listens and removes events on demand
5. **CSS Variables Dynamic Adjustment**: Reduces style recalculation
6. **Caching Mechanism**: Caches expanded state when collapsed to improve performance

## Design Value

The Menu component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Implements efficient communication between components through the `provide/inject` mechanism
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options and layout methods
5. **Consistency**: Maintains a consistent design language with other components such as Dropdown and Select
