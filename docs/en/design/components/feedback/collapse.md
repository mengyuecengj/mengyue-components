# Collapse Component Design Documentation

## Overview

The Collapse component is a core component in this library used for managing and displaying collapsible panels. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through a parent-child component communication mechanism, it provides a complete and user-friendly collapse panel solution.

The Collapse component focuses on handling the expanding and collapsing of panels, supporting both accordion mode and multi-panel mode. It offers users a powerful and flexible collapse panel management feature, supporting dynamic switching, state binding, and style control.

---

## Design Philosophy

### Layered Architecture

The Collapse component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`collapse.vue`, `collapseItem.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (logic within `collapse.vue`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`collapse.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Collapse component abstracts complex logic into core functions:

- `toggleItem` - Handles expand/collapse logic for panels.
- `activeNames` - Manages the currently active panel name(s).

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

---

## Core Feature Design

### Structured Props Design

The props design for the Collapse component is clean and straightforward:

```typescript
export const collapseProps = {
  /** Currently active panel name(s) */
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: () => [],
    required: true,
  },
  /** Whether to enable accordion mode */
  accordion: {
    type: Boolean,
    default: false,
  },
}
```

Props design for the CollapseItem component:

```typescript
export const collapseItemProps = {
  /** Unique identifier */
  name: {
    type: String,
    required: true,
  },
  /** Panel title */
  title: {
    type: String,
    default: '',
  },
}
```

This design provides sufficient flexibility to support various usage scenarios.

---

### Dependency Injection Mechanism
The Collapse component implements parent-child communication via Vue's dependency injection mechanism:

```typescript
// Provide context
provide('collapse', {
  activeNames,
  toggleItem(name: string) {
    // Accordion mode logic
    if (props.accordion) {
      activeNames.value = activeNames.value === name ? '' : name;
    } else {
      // Multi-panel mode logic
      const names = Array.isArray(activeNames.value) ? activeNames.value : [];
      activeNames.value = names.includes(name)
        ? names.filter((n) => n !== name)
        : [...names, name];
    }
  },
});

// Inject context
const collapse = inject('collapse') as {
  activeNames: { value: string | string[] };
  toggleItem: (name: string) => void;
};
```
This design enables seamless collaboration between the CollapseItem component and its parent Collapse component.

---

## Style System Design
### CSS Variable Control
The Collapse component achieves style control through CSS variables:

1. **--border-color** - Border color.
2. **--header-bg-color** - Panel header background color.

### Layout System
The Collapse component supports flexible layout control:

1. **Block Layout** - Default vertical arrangement.
2. **Padding Control** - Adjusts padding via SCSS variables.

### State Styles
The Collapse component provides corresponding styles for different states:

1. **Default State** - Standard collapse panel style.
2. **Active State** - Highlight effect when expanded.
3. **Hover State** - Background color change on mouse hover.

---

## Component Structure Design
### Overall Structure
The overall structure of the Collapse component is as follows:

```html
<div class="my-collapse">
  <slot></slot>
</div>
```

Structure of the CollapseItem component:

```html
<div class="my-collapse-item">
  <div class="my-collapse-item__header" @click="toggle">
    <slot name="title">{{ title }}</slot>
  </div>
  <div v-show="isActive" class="my-collapse-item__content">
    <slot></slot>
  </div>
</div>
```

### Component Hierarchy
The Collapse component consists of two main parts:

1. **Container** - .my-collapse - Wraps the entire collapse panel group.
2. **Item** - .my-collapse-item - Contains the header and content areas.
3. **Header** - .my-collapse-item__header - The title section of the panel.
4. **Content Area** - .my-collapse-item__content - The content section of the panel.

---

## Interaction Design
### Panel Toggling
The Collapse component supports dynamic panel toggling:

```typescript
function toggle() {
  collapse.toggleItem(props.name);
}
```

### Accordion Mode
In accordion mode, only one panel can be expanded at a time:

```typescript
if (props.accordion) {
  activeNames.value = activeNames.value === name ? '' : name;
}
```

### Multi-panel Mode
In multi-panel mode, multiple panels can be expanded simultaneously:

```typescript
const names = Array.isArray(activeNames.value) ? activeNames.value : [];
activeNames.value = names.includes(name)
  ? names.filter((n) => n !== name)
  : [...names, name];
```

---

## Extensibility Design
The Collapse component offers excellent extensibility:

1. **Data Binding:** Two-way data binding via the modelValue property.
2. **Mode Switching:** Controls accordion or multi-panel mode via the accordion property.
3. **Slot Support:** Custom panel title via the title slot.
4. **Style Customization:** Adjust component styles via SCSS variables.
---

## Style Details
The Collapse component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Animation Effects:** Smooth transition effects when content expands/collapses.
4. **Accessibility Design:** Supports keyboard navigation and screen readers.

---

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Properly adding and removing event listeners.

---

## Design Value
The Collapse component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Tabs and Card.