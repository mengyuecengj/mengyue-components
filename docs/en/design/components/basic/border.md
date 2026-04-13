# Border Component Design

## Overview
The Border component is a foundational component in this library focused on borders and container styles. Similar to the Button component, it adopts the "Separation of Concerns" design philosophy, completely decoupling structure, style, and logic, reflecting the library's unified design principles.

The Border component achieves flexible border style control through the core Hooks `useClassComputed` and `useStyleComputed`, easily accommodating various complex border presentation needs.

## Design Philosophy
### Layered Architecture
The Border component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`border.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`borderComputed.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`border.scss`) - Defines the component's visual presentation and style rules.

## Logic Abstraction
The Border component abstracts complex style logic into two core Hooks:

- `useClassComputed` - Handles dynamic class name generation.
- `useStyleComputed` - Handles dynamic style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design
### Structured Props Design
The Border component groups its props into logical categories based on functionality:

```typescript
// Base border properties
const baseBorderProps = {
  borderStyle: {
    type: String as PropType<'solid' | 'dashed' | 'dotted' | 'double'>,
    default: 'solid'
  },
  borderWidth: {
    type: String,
    default: '1px'
  },
  borderColor: {
    type: String,
    default: ''
  },
}

// Directional border properties (supports independent per-side settings)
const directionBorderProps = {
  topColor: { type: String, default: '' },
  bottomColor: { type: String, default: '' },
  leftColor: { type: String, default: '' },
  rightColor: { type: String, default: '' }
}

// Other style properties
const otherStyleProps = {
  width: { type: String, default: '' },
  height: { type: String, default: '' },
  rounded: { type: Boolean, default: false },
  circular: { type: Boolean, default: false },
  paddingText: { type: String, default: '' },
  center: { type: Boolean, default: false },
  colorBackground: { type: String, default: '' },
  textColor: { type: String, default: '' },
  boxShadow: { type: String, default: '' }
}
```
This grouping makes the code structure clearer and facilitates future feature extensions.

### Application of useClassComputed
The Border component utilizes the useClassComputed Hook to handle dynamic class name generation:

```typescript
const borderClass = useClassComputed<BorderProps>({
  baseClass: 'my-border',
  flagClasses: {
    rounded: props.round,
    circular: props.circle,
    center: props.center,
  },
});
```
This approach ensures consistency and maintainability in class name generation.


### Application of useStyleComputed
The Border component uses the useStyleComputed Hook to handle dynamic style generation:

```typescript
const borderStyle = useStyleComputed<BorderProps>(props, {
  propToStyleMap,
  customStyleLogic: (props, style) => {
    // Set default border color
    if (!props.borderColor && !props.topColor && !props.bottomColor && 
        !props.leftColor && !props.rightColor) {
      Object.assign(style, { borderColor: '#000' });
    }
    
    // Independent per-side color settings
    if (props.topColor) {
      Object.assign(style, {
        borderTopColor: props.topColor,
        borderTopStyle: 'solid',
        borderTopWidth: '1px'
      });
    }
  }
})
```
This design allows the component to support complex border styling needs, including independent per-side color settings.

## Style System Design
### BEM Naming Convention
The Border component adopts the BEM naming convention to ensure semantic clarity of class names:

· Base class: .my-border<br />
· Modifier classes: .my-border--round, .my-border--circle, .my-border--center

### Border Style Control
The Border component supports various border style controls:

1. Base Border Styles: solid, dashed, dotted, double
2. Border Width: Customizable to any width.
3. Border Color: Supports uniform color or independent per-side settings.
4. Special Shapes: Rounded corners, circular, centered layout.

## Responsive Design
The Border component supports fully customizable width and height settings, adapting to content or fixed dimensions as needed.

## Extensibility Design
The Border component offers excellent extensibility:

1. Custom Tag Support: Can render as different HTML elements via the tag prop.
2. Comprehensive Style Control: Supports full style settings like background color, text color, and shadows.
3. Flexible Layout: Supports common layout modes like centering.
4. Theme Adaptation: Supports theme customization via CSS variables.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
The Border component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via hooks.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like Button.