# A Component Design Documentation

## Overview
The `a` component is a foundational component in this library used for creating hyperlinks. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." By leveraging the core Hooks `useClassComputed` and `useStyleComputed`, it achieves concise yet powerful link styling control.

The `a` component focuses on handling link presentation styles, including type, size, color, underline, and other common properties, providing users with a complete and user-friendly link display solution.

## Design Philosophy
### Layered Architecture
The `a` component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`a.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`computedA.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`a.scss`) - Defines the component's visual presentation and style rules.

## Logic Abstraction
The `a` component abstracts complex style logic into two core Hooks:

- `useClassComputed` - Handles dynamic class name generation.
- `useStyleComputed` - Handles dynamic style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design
### Structured Props Design
The props of the `a` component are divided into logical groups based on functionality:

```typescript
// Appearance-related properties
const appearanceProps = {
    type: {
        type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
};

// Behavior-related properties
const behaviorProps = {
    disabled: {
        type: Boolean,
        default: false
    },
    underline: {
        type: Boolean,
        default: false
    }
};

// Layout-related properties
const layoutProps = {
    size: {
        type: [String, Number] as PropType<string | number>,
        default: undefined
    },
    tag: {
        type: String,
        default: 'a'
    }
};
```
This grouping makes the code structure clearer and facilitates future feature extensions.


## Application of useClassComputed
The a component utilizes the useClassComputed Hook to handle dynamic class name generation:

```typescript
const aClass = useClassComputed<AProps>({
    baseClass: 'my-a',
    propClasses: {
        type: props.type,
        size: props.size && ['large', 'medium', 'small', 'mini'].includes(String(props.size)) ? String(props.size) : undefined,
    },
    flagClasses: {
        disabled: props.disabled,
        underline: props.underline
    }
});
```
This design ensures consistency and maintainability in class name generation.


## Application of useStyleComputed
The a component uses the useStyleComputed Hook to handle dynamic style generation:


```typescript
const aStyle = useStyleComputed<AProps>(props, {
    propToStyleMap: {
        color: 'color',
        size: 'fontSize',
    },
    fontSizeProp: 'size',
})
```
This design allows the component to support both preset sizes and custom size values simultaneously.


## Style System Design
### BEM Naming Convention
The a component adopts the BEM naming convention to ensure semantic clarity of class names:
· Base class: .my-a
· Modifier classes: .my-a--primary, .my-a--medium, .my-a--disabled

## Link Style Control
The a component supports various link style controls:

1. Link Types: primary, success, warning, danger, info, text
2. Link Sizes: large, medium, small, mini, or custom numeric values
3. Link Color: Custom color via the color property
4. Disabled State: Controlled via the disabled property
Underline Control: Toggle underline display via the underline property

## Responsive Design
The a component supports responsive link sizing, allowing the use of both preset sizes and specific numeric values.

## Extensibility Design
The a component offers excellent extensibility:
1. Custom Tag Support: Can render as different HTML elements via the tag prop.
2. Comprehensive Style Control: Supports full style settings for type, size, color, etc.
3. Flexible Size Control: Supports both preset sizes and custom numeric values.
4. Theme Adaptation: Supports theme customization via CSS variables.
5. Behavior Control: Supports disabled state and underline control.

## Style Details
The a component features the following style handling characteristics:

1. Default Styles: No underline; underline appears on mouse hover.
2. Type Styles: Different link types have distinct color themes.
3. Disabled State: Reduced opacity and removal of hover effects when disabled.
4. Size Control: Supports four preset sizes and custom sizes.

## 性能优化
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.



## Design Value
The a component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via hooks.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like Button, Border, and Text.