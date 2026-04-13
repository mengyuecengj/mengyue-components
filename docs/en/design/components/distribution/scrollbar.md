# Scrollbar Component Design Documentation

## Overview

The Scrollbar component is an advanced container component in this library used for customizing scrollbar styles. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core Hooks like `useClassComputed`, `useStyleComputed`, and `useScrollVariables`, it achieves powerful and flexible scrollbar style control.

The Scrollbar component provides richer functionality than the Scroll component, including dimension control, behavior control, color customization, and other multi-dimensional scrollbar customization options.

## Design Philosophy

### Layered Architecture

The Scrollbar component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`scrollbar.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`scrollbarComputed.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`scrollbar.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Scrollbar component abstracts complex style logic into multiple core Hooks:

- `useClassComputed` - Handles dynamic class name generation.
- `useStyleComputed` - Handles dynamic style generation.
- `useScrollVariables` - Handles scrollbar CSS variable generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design

### Structured Props Design

The props of the Scrollbar component are grouped into logical categories based on functionality:

```typescript
// Dimension-related properties
export const scrollbarDimensionProps = {
    height: {
        type: String,
        default: '' as const
    },
    Maxheight: {
        type: String,
        default: '' as const
    },
    ScrollWidth: {
        type: String,
        default: ''
    },
    widthX: {
        type: Boolean,
        default: false
    }
};

// Color-related properties
export const scrollbarColorProps = {
    thumbColor: {
        type: String,
        default: ''
    },
    thumbHoverColor: {
        type: String,
        default: ''
    },
    trackColor: {
        type: String,
        default: ''
    }
};

// Behavior-related properties
export const scrollbarBehaviorProps = {
    disabledHeight: {
        type: Boolean,
        default: false
    },
    disabledWidth: {
        type: Boolean,
        default: false
    },
    disabledScroll: {
        type: Boolean,
        default: false
    }
};
```

This grouping makes the code structure clearer and facilitates future feature extensions.

### Application of useClassComputed
The Scrollbar component utilizes the useClassComputed Hook to handle dynamic class name generation:

```typescript
const scrollbarClass = useClassComputed<ScrollbarProps>({
    baseClass: 'scrollbar-container',
    flagClasses: {
        Maxheight: !!props.Maxheight,
        widthX: props.widthX,
        disabledHeight: props.disabledHeight,
        disabledWidth: props.disabledWidth,
        disabledScroll: props.disabledScroll,
        corner: props.corner,
    },
});
```
This design ensures consistency and maintainability in class name generation.


### Application of useStyleComputed and useScrollVariables
The Scrollbar component uses the useStyleComputed and useScrollVariables Hooks to handle style generation:

```typescript
const scrollbarStyle = useStyleComputed<ScrollbarProps>(props, {
    propToStyleMap: {
        height: 'height',
        Maxheight: 'maxHeight',
        ScrollWidth: 'scrollWidth',
    },
    cssVariables: useScrollVariables({
        thumbColor: props.thumbColor,
        thumbHoverColor: props.thumbHoverColor,
        trackColor: props.trackColor,
        scrollWidth: props.ScrollWidth,
        scrollHeight: props.ScrollWidth,
    }),
});
```

This design encapsulates complex styling logic within independent Hooks, simplifying the complexity of the component itself.

## Style System Design
### CSS Variable Control
The Scrollbar component achieves scrollbar style control through CSS variables:

1. `--scrollbar-container-track-color` - Scrollbar track color.
2. `--scrollbar-container-thumb-color` - Scrollbar thumb color.
3. `--scrollbar-container-thumb-hover-color` - Scrollbar thumb hover color.
4. `--scrollbar-container-scrollbar-width` - Scrollbar width.
5. `--scrollbar-container-scrollbar-height` - Scrollbar height.

### WebKit Browser Support
The component supports scrollbar style customization for WebKit browsers via the following CSS rules:

```scss
&::-webkit-scrollbar {
    width: var(--scrollbar-container-scrollbar-width, $scrollbar-default-size);
    height: var(--scrollbar-container-scrollbar-height, $scrollbar-default-size);
}

&::-webkit-scrollbar-track {
    background-color: var(--scrollbar-container-track-color);
}

&::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-container-thumb-color);
    border-radius: 10px;
    
    &:hover {
        background-color: var(--scrollbar-container-thumb-hover-color);
    }
}
```

### Scrollbar Behavior Control
The component supports multiple scroll behavior controls:

1. widthX - Controls horizontal scrollbar display.
2. disabledHeight - Disables vertical scrolling.
3. disabledWidth - Disables horizontal scrolling.
4. disabledScroll - Completely disables scrolling.
5. corner - Controls scrollbar corner styles.

## Component Structure Design
The Scrollbar component adopts a flexible tag rendering mechanism:

```html
<div :is="props.tag" :class="scrollbarClass" :style="scrollbarStyle">
    <slot />
</div>
```

This design allows the component to be rendered as different HTML elements, defaulting to `<div>` but customizable to other tags via the tag property.


## Extensibility Design
The Scrollbar component offers excellent extensibility:

1. **Custom Tag Support:** Can render as different HTML elements via the tag prop.
2. **Comprehensive Style Control:** Supports full style settings for track color, thumb color, hover color, width, etc.
3. **Behavior Control:** Supports multiple scroll behavior control options.
4. **Dimension Control:** Supports height, max-height, scrollbar width, and other dimension controls.
5. **Theme Adaptation:** Supports theme customization via CSS variables.

## Style Details
The Scrollbar component features the following style handling characteristics:

1. **Default Styles:** Provides a dark-themed default scrollbar style.
2. **Rounded Corners:** Scrollbar thumb features rounded corner design.
3. **Hover Effect:** Thumb color changes on hover.
4. **Multi-Dimensional Control:** Supports separate control of vertical and horizontal scrollbars.
5. **Corner Styles:** Supports customization of scrollbar corner styles.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
The Scrollbar component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via hooks.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Button, Border, and Text.
