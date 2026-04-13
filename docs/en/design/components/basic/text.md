# Text Component Design

## Overview
The Text component is a foundational component in this library specifically for displaying text. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." By leveraging the core Hooks `useClassComputed` and `useStyleComputed`, it achieves concise yet powerful text styling control.

The Text component focuses on handling text presentation styles, including type, size, color, and other common properties, providing users with a complete and user-friendly text display solution.

## Design Philosophy
### Layered Architecture
The Text component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`text.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`textComputed.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`text.scss`) - Defines the component's visual presentation and style rules.

## Logic Abstraction
The Text component abstracts complex style logic into two core Hooks:

- `useClassComputed` - Handles dynamic class name generation.
- `useStyleComputed` - Handles dynamic style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design
### Structured Props Design
The props design for the Text component is clean and concise:
```typescript
export const textProps = {
    type: {
        type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
        default: '',
    },
    size: {
        type: [String, Number] as PropType<'small' | 'medium' | 'large' | string | number>,
        default: '' as const
    },
    textColor: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: 'span'
    }
}
```
This design provides sufficient flexibility, supporting both preset types and sizes, as well as allowing users to specify custom values.

## Application of useClassComputed
The Text component utilizes the useClassComputed Hook to handle dynamic class name generation:

```typescript
const textClass = useClassComputed<TextProps>({
    baseClass: 'my-text',
    propClasses: {
        type: props.type && props.type ? props.type : undefined,
        size: props.size && ['small', 'medium', 'large'].includes(String(props.size)) ? String(props.size) : undefined,
    },
    flagClasses: {
        disabled: props.disabled,
    },
});
```
This design ensures that only valid preset values generate corresponding class names.

## Application of useStyleComputed
The Text component uses the useStyleComputed Hook to handle dynamic style generation:

```typescript
const textStyle = useStyleComputed<TextProps>(props, {
    propToStyleMap: {
        textColor: 'color',
        size: 'fontSize',
    },
    fontSizeProp: 'size',
});
```
This design allows the component to support both preset sizes and custom size values simultaneously.

## Style System Design
### BEM Naming Convention
The Text component adopts the BEM naming convention to ensure semantic clarity of class names:

· Base class: .my-text
· Modifier classes: .my-text--primary, .my-text--medium, .my-text--disabled

### Text Style Control
The Text component supports various text style controls:

1. Text Types: default, primary, success, warning, danger, info
2. Text Sizes: small, medium, large, or custom numeric values
3. Text Color: Custom color via the textColor property
4. Disabled State: Controlled via the disabled property

## Responsive Design
The Text component supports responsive text sizing, allowing the use of both preset sizes and specific numeric values.

## Component Structure Design
The Text component features a special structural design: a .my-text__content container wraps the text content:

```html
<component 
  :is="props.tag" 
  :class="textClass"
  :style="textStyle"
>
  <span class="my-text__content">
    <slot />
  </span>
</component>
```
This design provides more possibilities for future extensions, such as adding prefix/suffix icons.

## Extensibility Design
The Text component offers excellent extensibility:

1. Custom Tag Support: Can render as different HTML elements via the tag prop.
2. Comprehensive Style Control: Supports full style settings for type, size, color, etc.
3. Flexible Size Control: Supports both preset sizes and custom numeric values.
4. Theme Adaptation: Supports theme customization via CSS variables.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
The Text component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via hooks.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like Button and Border.
