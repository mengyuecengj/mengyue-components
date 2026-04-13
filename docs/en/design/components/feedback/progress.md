# Progress Component Design Documentation

## Overview

The Progress component is a core component in this library used for displaying progress bars. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through reactive computation and dynamic style control, it provides a complete and user-friendly progress bar solution.

The Progress component focuses on handling progress bar display, state management, and text formatting functionality. It supports multiple states (success, warning, exception) and dynamic percentage display, offering users a powerful and flexible progress bar management tool.

## Design Philosophy

### Layered Architecture

The Progress component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`progress.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`progress.ts`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`progress.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Progress component abstracts complex logic into core functions and computed properties:

- `normalizedPercentage` - Handles percentage range clamping (0-100).
- `statusClass` - Dynamically generates status class names.
- `displayText` - Dynamically generates display text.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Progress component is clean and straightforward:

```typescript
export const progressProps = {
  /** Current progress percentage */
  percentage: {
    type: [Number, String],
    default: 50,
  },
  /** Progress bar status */
  status: {
    type: String as PropType<ProgressStatus | ''>,
    default: '',
  },
  /** Custom text formatting function */
  format: {
    type: Function as PropType<ProgressFormat>,
    default: undefined,
  },
}
```

#### Parameter Descriptions:
- percentage: Supports number or string type, default is `50`.
- status: Supports `success`, `warning`, `exception`, or empty string.
- format: Allows users to customize the progress bar text format.


### Percentage Normalization
The Progress component normalizes the percentage via a computed property:

```typescript
const normalizedPercentage = computed(() =>
  Math.min(100, Math.max(0, Number(props.percentage)))
)
```
This logic ensures the percentage always stays within the 0-100 range, avoiding display issues caused by invalid values.

## Style System Design
### CSS Variable Control
The Progress component achieves style control through SCSS:

1. `--bar-height` - Progress bar height.
2. `--bar-radius` - Progress bar border radius.
3. `--text-color` - Text color.

### Layout System
The Progress component supports flexible layout control:

1. **Horizontal Layout** - Default Flexbox layout.
2. ***Padding Control** - Adjusts padding via SCSS variables.

### State Styles

The Progress component provides corresponding styles for different states:

1. **Default State** - Blue progress bar`#409eff`）
2. **Success State** - Green progress bar（`#67c23a`）
3. **Warning State** - Yellow progress bar（`#e6a23c`）
4. **Excption State** - Red progress bar（`#f56c6c`）

## Component Structure Design
### Overall Structure
The overall structure of the Progress component is as follows:

```html
<div class="my-progress">
  <div class="my-progress__bar">
    <div class="my-progress__bar-inner" :style="{ width: `${normalizedPercentage}%` }" :class="statusClass"></div>
  </div>
  <div class="my-progress__text">{{ displayText }}</div>
</div>
```

### Component Hierarchy
The Progress component consists of two main parts:

1. `Container` - .my-progress - Wraps the entire progress bar.
2. `Progress Bar` - .my-progress__bar - Contains the progress bar background and inner fill.
3. `Progress Bar Inner Fill` - .my-progress__bar-inner - Dynamic width and status color.
4. `Text Area` - .my-progress__text - Displays the current progress text.

---

## Interaction Design
### Dynamic Text Formatting
The Progress component supports custom text formatting via the format property:

```typescript
const displayText = computed(() =>
  typeof props.format === 'function'
    ? props.format(normalizedPercentage.value)
    : `${normalizedPercentage.value}%`
)
```

### State Switching
The Progress component supports dynamic state switching via the status property:

```typescript
const statusClass = computed(() => ({
  'my-progress__bar-inner--success': props.status === 'success',
  'my-progress__bar-inner--warning': props.status === 'warning',
  'my-progress__bar-inner--exception': props.status === 'exception',
}))
```

## Extensibility Design
The Progress component offers excellent extensibility:

1. **Data Binding:** Dynamically updates progress via the percentage property.
2. **State Management:** Controls progress bar color via the status property.
3. **Text Formatting:** Customizes display text via the format property.
4. **Style Customization:** Adjusts component styles via SCSS variables.

## Style Details
The Progress component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Animation Effects:** Smooth transition effects when progress bar width changes.
4. **Accessibility Design:** Supports screen readers recognizing progress information.

## Performance Optimization
Performance is optimized through:

1. Caching computation results using computed properties.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
The Progress component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Button and Alert.