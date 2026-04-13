# Container Component Design

## Overview

The Container component is a collection of container components in this library used for page layout. It includes five sub-components: `MYContainer`, `MYHeader`, `MYMain`, `MYFooter`, and `MYAside`, which together form a complete page layout solution. This suite of components adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core Hooks like `useContainerOverAllComputed` and `useContainerStyle`, it achieves powerful and flexible layout control.

The Container component focuses on handling the overall layout structure of a page, providing users with a complete and user-friendly page layout solution.

## Design Philosophy

### Layered Architecture

The Container component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`container.vue`, etc.) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`containerComputed.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`container.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Container component abstracts complex style logic into multiple core Hooks:

- `useContainerOverAllComputed` - Handles container class name generation.
- `useContainerStyle` - Handles container style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design

### Component Architecture

The Container component adopts a modular design, consisting of the following five sub-components:

1. **MYContainer** - Main container component, responsible for overall layout control.
2. **MYHeader** - Header component, supports fixed positioning and scroll effects.
3. **MYMain** - Main content component.
4. **MYFooter** - Footer component.
5. **MYAside** - Sidebar component, supports left/right positioning.

### Structured Props Design

The props of the Container component are grouped into logical categories based on functionality:

```typescript
// Base container properties
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

Each sub-component extends this base to form its own set of props.


### Automatic Descendant Component Ordering
The MYContainer component features a unique automatic ordering capability for its descendant components:

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

This design allows users to insert child components in any order; the component automatically arranges them in the standard layout sequence.

## Style System Design
### Flexbox Layout
The Container component implements layout based on Flexbox:

```scss
.my-container {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
```

### Responsive Design
The component supports responsive layout design:

1. **Main Content Area:** Uses flex: 1 to automatically fill remaining space.
2. **Sidebar:** Fixed width, non-shrinkable.
3. **Header/Footer:** Fixed height, non-shrinkable.

### Fixed Positioning Support
The MYHeader component supports fixed positioning and scroll effects:

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

## Component Structure Design
### Overall Structure
The overall structure of the Container component is as follows:

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

### Sub-component Design
Each sub-component adopts a similar structure:

```html
<component :is="props.tag" :class="classComponent" :style="styleContainer">
    <slot />
</component>
```
This design allows customizing the rendered HTML tag via the tag property.

## Extensibility Design
The Container component offers excellent extensibility:

1. **Custom Tag Support:** Each component can render as different HTML elements via the tag prop.
2. **Comprehensive Style Control:** Supports full style settings for height, width, background color, etc.
3. **Position Control:** Sidebar supports left/right position control.
4. **Fixed Positioning:** Header supports fixed positioning and scroll effects.
5. **Theme Adaptation:** Supports theme customization via CSS variables.

## Style Details
The Container component features the following style handling characteristics:

1. **Standardized Layout:** Follows the classic header-body-footer layout pattern.
2. **Flexible Body:** The main content area adapts to fill remaining space.
3. **Fixed Sidebars:** Sidebars have fixed widths and do not affect the main content area.
4. **Scroll Control:** Supports horizontal scroll control.
5. **Transition Effects:** Supports smooth transition effects when the header is fixed.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Properly adding and removing event listeners.

## Design Value
The Container component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via hooks.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Button, Border, and Text.
