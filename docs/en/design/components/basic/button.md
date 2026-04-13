# Button Component Design

## Overview

The Button component is one of the most fundamental and important interactive components in this library. It not only provides rich style and interaction features but, more importantly, embodies the overall design philosophy of our component library: Separation of Concerns and Logic Abstraction.

The Button component's design fully utilizes our self-developed Hooks, `useClassComputed` and `useColorComputed`, to strip complex style logic away from the component itself, making the component lighter and easier to maintain.

## Design Philosophy
### Layered Architecture
The Button component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`button.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`computedStyle.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`button.scss`) - Defines the component's visual presentation and style rules.

This separation ensures clear responsibilities for each layer, facilitating maintenance and extension.

## Logic Abstraction
The Button component abstracts complex logic into two core Hooks:

- `useClassComputed` - Handles dynamic class name generation.
- `useColorComputed` - Handles color calculations.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design
### Structured Props Design
To improve maintainability and readability, we've grouped the Button props into logical categories:
```ts
// Type-related props
const buttonTypeProps = {
  type: {
    type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'default' as const,
  },
  size: {
    type: String as PropType<'supersmall' | 'small' | 'medium' | 'large' | 'superbig'>,
    default: 'medium',
  },
}

// Style-related props
const buttonStyleProps = {
  rounded: { type: Boolean, default: false },
  circular: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
}

// Color-related props
const buttonColorProps = {
  colorBackground: { type: String, default: '' },
  colorText: { type: String, default: '' },
  colorBorder: { type: String, default: '' },
}

// Behavior-related props
const buttonBehaviorProps = {
  disabled: { type: Boolean, default: false },
  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
}
```

### Application of useClassComputed
The Button component fully leverages the useClassComputed Hook to handle dynamic class name generation. Within the useButtonStyle function:

```typescript
const btnClass = useClassComputed<ButtonProps>({
  baseClass: 'my-btn',
  propClasses: {
    type: props.type === '' ? 'default' : props.type ?? 'default',
    size: props.size ?? 'medium'
  },
  flagClasses: {
    rounded: props.round,
    circular: props.circle,
    disabled: props.disabled,
    plain: props.plain,
    iconOnly: props.iconOnly,
  }
})
```

This design brings the following advantages:
1. Unified naming convention (BEM-like).
2. Reactive class name updates.
3. High maintainability and extensibility.

## Application of useColorComputed
The Button component uses the useColorComputed Hook to handle custom color calculations:
```typescript
const customStyle = useColorComputed({
  colorBackground: props.colorBg,
  colorText: props.colorText,
  colorBorder: props.colorBorder,
  plain: props.plain,
  isHovered: isHovered,
  isActive: isActive,
  disabled: props.disabled,
  type: props.type
})
```

## Style System Design
### BEM Naming Convention
The Button component adopts the BEM naming convention to ensure semantic clarity of class names:

· Base class: .my-btn
· Modifier classes: .my-btn--primary, .my-btn--large, .my-btn--round

## State Management
Manages various interaction states via CSS classes and pseudo-classes:

· Hover state (:hover)
· Active state (:active)
· Disabled state (.my-btn--disabled)

## Responsive Design
Supports five size specifications:

· supersmall
· small
· medium (default)
· large
· superbig
Each size has corresponding padding and font-size definitions.

## Interaction Design
The Button component supports comprehensive mouse interaction feedback:

1. Style changes on mouse hover.
2. Active feedback on mouse down.
3. Prevents interaction and provides visual feedback when disabled.
These interactive effects are implemented using Vue's reactivity system and event handling mechanisms:
```typescript
const isHovered = ref(false);
const isActive = ref(false);

const onMouseOver = () => { isHovered.value = true; };
const onMouseOut = () => { isHovered.value = false; isActive.value = false; };
const onMouseDown = () => { isActive.value = true; };
const onMouseUp = () => { isActive.value = false; };
```

## Accessibility Design
The Button component incorporates accessibility considerations:

· Uses semantic HTML tags.
· Supports native button type attributes (button/submit/reset).
· Correctly handles the disabled state.
· Provides sufficient contrast and clear visual feedback.

## Extensibility Design
The Button component offers excellent extensibility:

1. Custom Tag Support: Can render as different HTML elements via the tag prop.
2. Custom Colors: Supports fully custom background, text, and border colors.
3. Icon Support: Built-in icon slot support and icon button mode.
4. Theme Adaptation: Supports theme customization via CSS variables.


## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
As a foundational component of the library, the Button component's design reflects our overall design philosophy:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via hooks.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Adheres to a unified design language and interaction pattern.