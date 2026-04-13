# Scroll Component Design Documentation

## Overview

The Scroll component is a container component in this library specifically designed for customizing scrollbar styles. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core Hooks like [useClassComputed](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\hooks\useClassComputed.ts#L19-L51) and [useScrollStyles](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\hooks\useScrollCommon.ts#L67-L80), it achieves concise yet powerful scrollbar style control.

The Scroll component focuses on handling scrollbar style customization, including track color, thumb color, size, and other properties, providing users with a complete and user-friendly scrollbar beautification solution.

## Design Philosophy

### Layered Architecture

The Scroll component is strictly designed with a three-layer architecture:

1. **Structure Layer** ([scroll.vue](file://c:\Users\zy\Desktop\mengyue\mengyue-components\play\src\views\scroll.vue)) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** ([scrollComputed.ts](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\components\scroll\src\scrollComputed.ts)) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** ([scroll.scss](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\components\scroll\style\scroll.scss), [thumb.scss](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\components\scroll\style\thumb.scss)) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Scroll component abstracts complex style logic into two core Hooks:

- [useClassComputed](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\hooks\useClassComputed.ts#L19-L51) - Handles dynamic class name generation.
- [useScrollStyles](file://c:\Users\zy\Desktop\mengyue\mengyue-components\packages\hooks\useScrollCommon.ts#L67-L80) - Handles scrollbar style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design

### Structured Props Design

The props of the Scroll component are grouped into logical categories based on functionality:

```typescript
// Scrollbar color configuration
const scrollColorProps = {
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

// Scrollbar size configuration
const scrollSizeProps = {
    width: {
        type: String,
        default: ''
    }
};

// Container tag configuration
const scrollTagProps = {
    tag: {
        type: String,
        default: 'div'
    }
};
```

This grouping makes the code structure clearer and facilitates future feature extensions.


### Application of useClassComputed
The Scroll component utilizes the useClassComputed Hook to handle dynamic class name generation:

```typescript
const scrollClass = useClassComputed<ScrollProps>({
    baseClass: '',
    propClasses: {
        width: props.width,
        thumbColor: props.thumbColor,
        thumbHoverColor: props.thumbHoverColor,
        trackColor: props.trackColor,
    },
});
```

This design ensures consistency and maintainability in class name generation.

### Application of useScrollStyles
The Scroll component uses the useScrollStyles Hook to handle scrollbar style generation:

```typescript
const scrollStyle = useScrollStyles(props);
```

This design encapsulates complex scrollbar styling logic within an independent Hook, simplifying the complexity of the component itself.

## Style System Design
### CSS Variable Control
The Scroll component achieves scrollbar style control through CSS variables:

1. `--global-scroll-track-color` - Scrollbar track color.
2. `--global-scroll-thumb-color` - Scrollbar thumb color.
3. `--global-scroll-thumb-hover-color` - Scrollbar thumb hover color.
4. `--global-scroll-width` - Scrollbar width.

### WebKit Browser Support
The component supports scrollbar style customization for WebKit browsers via the following CSS rules:

```scss
html {
    --global-scroll-track-color: #2C2C2C;
    --global-scroll-width: 12px;

    /* Webkit browser support */
    &::-webkit-scrollbar {
        width: var(--global-scroll-width);
    }

    // Track style
    &::-webkit-scrollbar-track {
        background-color: var(--global-scroll-track-color);
        border-radius: 10px;
    }
}
```

### Scrollbar Thumb Style
The component also supports customization of the scrollbar thumb style:

```scss
html {
  --global-scroll-thumb-color: #9F9F9F;
  --global-scroll-thumb-hover-color: #D1D1D1;

  &::-webkit-scrollbar-thumb {
    background-color: var(--global-scroll-thumb-color);
    border-radius: 10px;
    border: 3px solid transparent;
    background-clip: content-box;

    &:hover {
      background-color: var(--global-scroll-thumb-hover-color);
    }
  }
}
```

## Component Structure Design
The Scroll component adopts a flexible tag rendering mechanism:

```html
<div :is="props.tag" :class="scrollClass" :style="scrollStyle">
    <slot></slot>
</div>
```

This design allows the component to be rendered as different HTML elements, defaulting to `<div>` but customizable to other tags via the tag property.


## Extensibility Design
The Scroll component offers excellent extensibility:

1. **Custom Tag Support:** Can render as different HTML elements via the tag prop.
2. **Comprehensive Style Control:** Supports full style settings for track color, thumb color, hover color, width, etc.
3. **Theme Adaptation:** Supports theme customization via CSS variables.
4. **Flexible Size Control:** Supports custom scrollbar width.

## Style Details
The Scroll component features the following style handling characteristics:

1. **Default Styles:** Provides a dark-themed default scrollbar style.
2. **Rounded Corners:** Scrollbar track and thumb feature rounded corner design.
3. **Hover Effect:** Thumb color changes on hover.
4. **Transparent Borders:** Thumb uses transparent borders to achieve a content-box background clipping effect.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
The Scroll component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via hooks.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Button, Border, and Text.
