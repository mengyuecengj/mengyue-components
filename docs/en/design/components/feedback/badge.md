# Badge Component Design

## Overview

The Badge component is a core component in this library used for displaying badges or small red dots. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core logic like `useBadgeComputed`, it provides a complete and user-friendly badge management solution.

The Badge component focuses on handling badge content display, position control, and style adjustments, offering users a powerful and flexible badge presentation tool that supports dynamic content binding, position adjustment, and color customization.

## Design Philosophy

### Layered Architecture

The Badge component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`badge.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`badgeComputed.ts`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`badge.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Badge component abstracts complex logic into core functions:

- `useBadgeComputed` - Handles core badge logic.
- `useStyleComputed` - Handles dynamic style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Badge component is clean and straightforward:

```typescript
export const badgeProps = {
  /** Badge content */
  content: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  /** Whether to display as a small red dot */
  dot: {
    type: Boolean,
    default: false
  },
  /** Badge background color */
  color: {
    type: String,
    default: '#ff4d4f'
  },
  /** Badge position */
  position: {
    type: String as PropType<BadgeProps['position']>,
    default: 'top-right',
    validator: (value: string) => {
      return ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value);
    }
  },
  /** Maximum display value */
  max: {
    type: Number,
    default: 99,
    validator: (value: number) => {
      return value >= 0;
    }
  }
};
```
This design provides sufficient flexibility to support various usage scenarios.

## Dependency Injection Mechanism
The Badge component implements parent-child communication via Vue's Composition API:

```typescript
const props = defineProps(badgeProps);

const {
  displayContent,
  badgeStyle,
  wrapperStyle
} = useBadgeComputed(props);
```
This design enables seamless collaboration between the Badge component and its parent container.

## Style System Design
### CSS Variable Control
The Badge component achieves style control through CSS variables:

· --badge-color - Controls badge background color.

### Layout System
The Badge component supports flexible layout control:
· Default Layout - Default positioning at top-right.
· Position Adjustment - Controls positioning at four corners via the position property.


### State Styles
The Badge component provides corresponding styles for different states:

· Default State - Standard badge style.
· Dot State - Pure dot display mode.
· Max Value State - Displays "max+" format when exceeding the maximum value.

## Component Structure Design
### Overall Structure
The overall structure of the Badge component is as follows:

```html
<div class="my-badge-wrapper" :style="wrapperStyle">
  <slot />
  <span v-if="(content !== null && content !== '') || dot" class="my-badge" :class="{ 'dot': dot }" :style="badgeStyle">
    {{ displayContent }}
  </span>
</div>
```

## Component Hierarchy
The Badge component consists of two main parts:

1. Container - .my-badge-wrapper - Wraps the entire badge and its content.
2. Badge - .my-badge - Displays the actual badge content.
3. Dot - .my-badge.dot - Special styling for dot mode.

## Interaction Design
### Dynamic Content Display
The Badge component supports multiple content display modes:

```typescript
const displayContent = computed(() => {
  if (props.dot) return '';
  if (typeof props.content === 'number' && props.content > props.max) {
    return `${props.max}+`;
  }
  return props.content;
});
```

### Dynamic Style Adjustment
The Badge component supports dynamic style adjustment:

```typescript
const badgeStyle = useStyleComputed(props, {
  propToStyleMap: {
    color: 'backgroundColor',
  },
  customStyleLogic: (props, style) => {
    switch (props.position) {
      case 'top-right':
        Object.assign(style, { top: '-5px', right: '-5px' });
        break;
      case 'top-left':
        Object.assign(style, { top: '-5px', left: '-5px' });
        break;
      case 'bottom-right':
        Object.assign(style, { bottom: '-5px', right: '-5px' });
        break;
      case 'bottom-left':
        Object.assign(style, { bottom: '-5px', left: '-5px' });
        break;
    }
  },
});
```

## Extensibility Design
The Badge component offers excellent extensibility:

1. **Content Binding:** Dynamic content binding via the content property.
2. **Position Control:** Defines badge position via the position property.
3. **Color Customization:** Controls badge background color via the color property.
4. **Maximum Value Limit:** Controls the maximum display value via the max property.
5. **Dot Mode:** Switches to dot mode via the dot property.

## Style Details
The Badge component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Error Feedback:** Clear visual feedback on validation failure.
4. **Accessibility Design:** Supports keyboard navigation and screen readers.

## Performance Optimization
### Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Properly adding and removing event listeners.

## Design Value
The Badge component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Button, Icon, and Avatar.
