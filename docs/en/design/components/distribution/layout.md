# Layout Component Design

## Overview

The Layout component is a collection of components in this library used for creating responsive grid layouts. It consists of two core components: `MYRow` (row component) and `MYCol` (column component), which together form a powerful Flexbox-based grid system. This suite of components adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core Hooks like `useLayoutOverAllComputed`, it achieves powerful and flexible layout control.

The Layout component focuses on handling the grid layout structure of a page, providing users with a complete and user-friendly responsive layout solution suitable for various complex page layout needs.

## Design Philosophy

### Layered Architecture

The Layout component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`row.vue`, `col.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`computedLayout.ts`) - Handles complex reactive computations via Hooks.
3. **Presentation Layer** (`row.scss`, `col.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Layout component abstracts complex style logic into a core Hook:

- `useLayoutOverAllComputed` - Handles layout class name and style generation.

This design allows the component itself to simply declare the required logic, while the specific computations are delegated to the Hooks.

## Core Feature Design

### Component Architecture

The Layout component adopts a modular design, consisting of the following two core components:

1. **MYRow** - Row component, serving as the container for column components.
2. **MYCol** - Column component, serving as the actual container for content.

### Structured Props Design

The props of the Layout component are grouped into logical categories based on functionality:

#### Row Component Props

```typescript
export const layoutProps = {
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  justify: {
    type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
    default: undefined,
  },
  align: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'row' | 'column' | 'row-reverse' | 'column-reverse'>,
    default: 'row',
  },
} as const;
```

#### Col Component Props

```typescript
export const colProps = {
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
  },
  offsetLeft: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  offsetRight: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  pull: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  push: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
} as const;
```

### Data Validation
The Layout component includes comprehensive props validation:

1. **Gutter Validation:** Ensures gutter value is within 0-24.
2. **Span Validation:** Ensures span value is an integer between 1-24.
3. **Offset Validation:** Ensures offset values are within 0-24.
4. **Direction Validation:** Ensures direction values are valid Flexbox direction values.

## Style System Design
### 24-Column Grid System
The Layout component adopts the industry-standard 24-column grid system:

```scss
@for $i from 1 through 24 {
  &--span-#{$i} {
    width: calc(#{$i} / 24 * 100%);
  }
}
```

### Flexbox Layout
The Row component implements layout based on Flexbox:

```scss
.my-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  position: relative;
}
```

### Spacing Control
Flexible spacing control is achieved through CSS variables:

```scss
margin-left: calc(var(--row-gutter, 0px) / -2);
margin-right: calc(var(--row-gutter, 0px) / -2);
```

### Alignment
Supports multiple alignment options:

1. Horizontal Alignment: start, end, center, space-around, space-between.
2. Vertical Alignment: align, alignCenter.
3. Direction Control: row, column, row-reverse, column-reverse.

## Component Structure Design
### Overall Structure
The overall structure of the Layout component is as follows:

```html
<MYRow :gutter="20" justify="center">
  <MYCol :span="6">内容1</MYCol>
  <MYCol :span="6">内容2</MYCol>
  <MYCol :span="6">内容3</MYCol>
</MYRow>
```

### Component Design
Each component adopts a similar structure:

```html
<component :is="props.tag" :class="classComponent" :style="styleComponent">
    <slot />
</component>
```

This design allows customizing the rendered HTML tag via the tag property.

## Extensibility Design
The Layout component offers excellent extensibility:

1. **Custom Tag Support:** Each component can render as different HTML elements via the tag prop.
2. **Comprehensive Layout Control:** Supports span, offset, push/pull, and other layout controls.
3. **Flexible Spacing Control:** Supports custom gutter values.
4. **Diverse Alignment Options:** Supports multiple horizontal and vertical alignment options.
5. **Direction Control:** Supports various Flexbox direction controls.
6. **Theme Adaptation:** Supports theme customization via CSS variables.

## Style Details
The Layout component features the following style handling characteristics:

1. **Standardized Grid:** Adopts the 24-column grid system, aligning with industry standards.
2. **Responsive Design:** Achieves responsive layout through percentage widths.
3. **Spacing Control:*** Cleverly implements column gutters using negative margins and padding.
4. **Flexible Offsets:** Supports left and right offset control.
5. **Push/Pull Effects:** Supports relative positioning adjustment of columns.
6. **Alignment Control:** Supports multiple alignment options.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent hooks.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Reducing style calculations through judicious use of CSS variables.

## Design Value
The Layout component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via hooks.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Container and Button.
