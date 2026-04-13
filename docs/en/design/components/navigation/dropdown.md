# Dropdown Component Design Document

## Overview

The Dropdown component is a core component in this component library used to implement dropdown menu functionality. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use dropdown menu solution through core components such as dropdown.vue, dropdownMenu.vue, and dropdownItem.vue.

The Dropdown component focuses on handling the display, interaction, and style management of dropdown menus, providing users with a powerful and flexible dropdown menu management feature that supports multiple trigger methods, split buttons, keyboard navigation, and custom styles, effectively improving user experience during selection operations.

## Design Philosophy

### Layered Architecture

The Dropdown component strictly follows a three-layer architecture design:

1. **Structure Layer** dropdown.vue, dropdownItem.vue, dropdownMenu.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** dropdownComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** dropdown.scss, dropdownItem.scss, dropMenu.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Dropdown component abstracts complex logic into core functions:

- useDropdown - Handles the core logic of the dropdown menu
- open - Handles menu opening logic
- close - Handles menu closing logic
- updatePosition - Handles menu positioning logic
- onKeydown - Handles keyboard navigation logic

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the Dropdown component is concise and clear:

```typescript
export const dropdownProps = {
  /** Button type */
  type: {
    type: String,
    default: 'default'
  },
  /** Button size */
  size: {
    type: String,
    default: 'md'
  },
  /** Whether to use split button */
  splitButton: {
    type: Boolean,
    default: false
  },
  /** Whether to disable */
  disabled: {
    type: Boolean,
    default: false
  },
  /** Menu placement */
  placement: {
    type: String,
    default: 'bottom'
  },
  /** Trigger method */
  trigger: {
    type: String as () => UseDropdownOptions['trigger'], 
    default: 'hover'
  },
  /** Whether to hide the menu after clicking an item */
  hideOnClick: {
    type: Boolean,
    default: true
  },
  /** Background color */
  backGroundColor: {
    type: String,
    default: ''
  },
  /** Text color */
  textColor: {
    type: String,
    default: ''
  },
  /** Whether to hide the dropdown caret */
  noCaret: {
    type: Boolean,
    default: false
  }
}
```

#### Parameter Description:
- type: Supports `'default'` and `'primary'` types.
- size: Supports three sizes: `'sm'`, `'md'`, and `'lg'`.
- splitButton: Controls whether to use split button style.
- trigger: Supports three trigger methods: `'hover'`, `'click'`, and `'contextmenu'`.
- hideOnClick: Controls whether the menu is automatically hidden after clicking a menu item.
- backGroundColor and textColor: Support custom background and text colors.

### Interaction Design

The Dropdown component provides rich interaction methods:

#### Basic Usage
```vue
<MYDropdown>
  <button>Dropdown Menu</button>
  <template #dropdown>
    <MYDropdownItem>Option 1</MYDropdownItem>
    <MYDropdownItem>Option 2</MYDropdownItem>
    <MYDropdownItem>Option 3</MYDropdownItem>
  </template>
</MYDropdown>
```

#### Split Button
```vue
<MYDropdown splitButton>
  <template #default>Action</template>
  <template #dropdown>
    <MYDropdownItem>Option 1</MYDropdownItem>
    <MYDropdownItem>Option 2</MYDropdownItem>
  </template>
</MYDropdown>
```

#### Custom Trigger Method
```vue
<MYDropdown trigger="click">
  <button>Click Trigger</button>
  <template #dropdown>
    <MYDropdownItem>Option</MYDropdownItem>
  </template>
</MYDropdown>
```

#### Custom Style
```vue
<MYDropdown 
  :backGroundColor="'#2f6bfe'" 
  :textColor="'white'"
  :noCaret="true">
  <button>Custom Style</button>
  <template #dropdown>
    <MYDropdownItem>Option</MYDropdownItem>
  </template>
</MYDropdown>
```

## Style System Design

### CSS Variable Control

The Dropdown component implements style control through CSS variables:

1. `--m-primary` - Primary color
2. `--m-primary-600` - Dark version of primary color
3. `--m-text` - Text color
4. `--m-muted` - Secondary text color
5. `--m-bg` - Background color
6. `--m-border` - Border color

### Layout System

The Dropdown component supports flexible layout control:

1. **Menu Positioning** - Supports multiple placements (bottom, top, left, right)
2. **Responsive Design** - Adapts to different screen sizes
3. **Maximum Height** - Controls maximum menu height via maxHeight
4. **Scroll Support** - Shows scrollbar when menu exceeds maximum height

### State Styles

The Dropdown component provides corresponding styles according to different states:

1. **Default State** - Standard dropdown menu style
2. **Hover State** - Visual feedback when mouse hovers
3. **Disabled State** - Controlled via the disabled property
4. **Visible State** - Transition effect when menu is expanded
5. **Split Button State** - Special style for split buttons

## Component Structure Design

### Overall Structure

The overall structure of the Dropdown component is as follows:

```html
<div class="m-dropdown" :class="{ 'is-disabled': disabled }">
  <!-- Trigger area -->
  <div class="m-dropdown__trigger" ref="triggerRef" @click="onTriggerClick" @mouseenter="onTriggerMouseEnter"
    @mouseleave="onTriggerMouseLeave">
    <!-- Split button support -->
    <template v-if="splitButton">
      <div class="m-split">
        <button class="m-btn" :class="['m-btn--' + (type || 'default'), sizeClass]" :disabled="disabled"
          :style="{ backgroundColor: props.backGroundColor, color: props.textColor }" @click.stop="onPrimaryClick"
          @keydown.prevent>
          <slot name="default">Action</slot>
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

    <!-- Normal trigger button -->
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

  <!-- Menu -->
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

### Component Hierarchy

The Dropdown component contains several main parts:

1. **Container** - `.m-dropdown` - Wraps the entire dropdown menu component
2. **Trigger Area** - `.m-dropdown__trigger` - Area that triggers menu display
3. **Trigger Button** - `.m-btn` - Button that triggers the menu
4. **Menu Container** - `.m-dropdown__menu` - Container that wraps menu items
5. **Menu Item** - `.my-dropdown-item` - Individual menu item

DropdownItem component structure:

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

## Interaction Design

### Trigger Mechanism

The Dropdown component supports multiple trigger methods:

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

#### Trigger Methods:
- hover: Trigger on mouse hover (default)
- click: Trigger on click
- contextmenu: Trigger on right-click

### Menu Positioning

The Dropdown component implements menu positioning through the updatePosition method:

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

#### Positioning Rules:
- Supports 8 placement options: `bottom`, `bottom-start`, `bottom-end`, `top`, `top-start`, `top-end`, `left`, `right`
- Automatically adjusts position when exceeding viewport
- Supports maximum height setting with scrollbar when exceeded

### Keyboard Navigation

The Dropdown component implements keyboard navigation through the onKeydown method:

```typescript
function onKeydown(e: KeyboardEvent) {
  if (options.disabled) return;
  const key = e.key;
  const triggerKeys = options.triggerKeys ?? ['Enter', ' ', 'ArrowDown', 'NumpadEnter'];
  if (!visible.value && triggerKeys.includes(key)) {
    e.preventDefault();
    open('key');  // Specify 'key'
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

#### Keyboard Operations:
- `ArrowDown`/`ArrowUp`: Navigate between menu items
- `Enter`/`Space`: Select current item
- `Escape`: Close menu
- `Enter`/`Space`/`ArrowDown`: Open menu (when focus is on trigger)

## Extensibility Design

The Dropdown component has excellent extensibility:

1. **Multiple Trigger Methods**: Supports multiple trigger methods through the trigger property
2. **Custom Style**: Supports custom styles through backGroundColor and textColor properties
3. **Split Button**: Supports split button style through the splitButton property
4. **Menu Item Customization**: Supports custom menu items through slot mechanism
5. **Command System**: Supports command system through the command property
6. **Divider Support**: Supports dividers through the divided property

## Style Details

The Dropdown component has the following characteristics in style handling:

1. **Responsive Design**: Supports flexible layout adaptation
2. **Consistency**: Maintains style consistency with other components in the component library
3. **Accessibility Design**: Ensures keyboard navigation and screen reader friendliness
   - Sets `role="menu"` and `role="menuitem"`
   - Supports keyboard navigation
   - Sets `aria-expanded` attribute
4. **Clear Visual Hierarchy**: Creates clear visual hierarchy through colors and shadows
5. **Smooth Transition**: Uses CSS transitions for smooth show/hide effects

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache style calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Listen and remove events on demand
6. Dynamically adjust styles using CSS variables
7. Optimize menu positioning calculations to reduce reflow and repaint

## Design Value

The Dropdown component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Select and Menu
