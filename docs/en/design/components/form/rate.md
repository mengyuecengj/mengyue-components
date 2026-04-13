# Rate Component Design Document

## Overview

The Rate component is an interactive component in this component library used for star rating. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use rating solution through core logic such as useRateLogic.

The Rate component focuses on handling users' rating operations, providing an intuitive and visually appealing star rating feature that supports half-star rating, disabled state, custom colors, and text display.

## Design Philosophy

### Layered Architecture

The Rate component strictly follows a three-layer architecture design:

1. **Structure Layer** rate.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** rateComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** rate.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Rate component abstracts complex logic into core functions:

- useRateLogic - Handles the core logic of the rating component

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the Rate component is concise and clear:

```typescript
export const rateProps = {
  modelValue: {
    type: Number as PropType<number>,
    default: 0
  },
  max: {
    type: Number as PropType<number>,
    default: 5
  },
  colors: {
    type: Array as unknown as PropType<[string, string, string]>,
    default: () => ['#F7BA2A', '#F7BA2A', '#C6D1DE'] as [string, string, string]
  },
  showText: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  texts: {
    type: Array as PropType<string[]>,
    default: () => ['极差', '失望', '一般', '满意', '惊喜']
  },
  showHalf: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
}
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### State Management

The Rate component manages core states through reactive data:

```typescript
const hoverValue = ref(0)
const currentValue = ref(props.modelValue)

const maxStars = computed(() => props.max)
const displayValue = computed(() => hoverValue.value || currentValue.value)
const currentText = computed(() => {
  const index = Math.ceil(currentValue.value) - 1
  return props.texts[index] || ''
})
```

This design ensures state consistency and reactivity.

## Style System Design

### CSS Class Name Control

The Rate component controls style states through dynamic class names:

```html
<span
  v-for="star in maxStars"
  :key="star"
  class="MYRate__star"
  :class="{
    'is-active': star <= displayValue,
    'is-half': showHalf && star === Math.ceil(displayValue) && displayValue % 1 > 0,
    'is-disabled': disabled
  }"
>
```

### Star Styles

The Rate component uses SVG to implement star icons:

```vue
<template>
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
      stroke="currentColor"
      stroke-width="1.5"
      fill="currentColor"
    />
  </svg>
</template>
```

### Color System

The Rate component supports three color states:

1. **Active Color** - Color of rated stars
2. **Inactive Color** - Color of unrated stars
3. **Half Star Color** - Color in half-star state

## Component Structure Design

The Rate component adopts a flexible structure design:

```html
<div class="MYRate">
  <span
    v-for="star in maxStars"
    :key="star"
    class="MYRate__star"
    :class="{
      'is-active': star <= displayValue,
      'is-half': showHalf && star === Math.ceil(displayValue) && displayValue % 1 > 0,
      'is-disabled': disabled
    }"
    @click="handleClick(star)"
    @mousemove="handleMouseMove(star, $event)"
    @mouseleave="resetHover"
  >
    <span class="MYRate__star-inner" :style="getStarStyle(star)">
      <Star />
    </span>
  </span>
  <span v-if="showText" class="MYRate__text">{{ currentText }}</span>
</div>
```

This structure supports dynamic number of stars display and text prompts.

## Interaction Design

### Click Rating

The Rate component supports clicking to rate:

```typescript
const handleClick = (star: number) => {
  if (props.disabled) return
  let newValue = star
  if (props.showHalf) {
    if (star === Math.ceil(currentValue.value) && currentValue.value % 1 > 0) {
      newValue = star - 0.5
    }
  }
  currentValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
```

### Hover Preview

The Rate component supports hover preview of rating effect:

```typescript
const handleMouseMove = (star: number, event: MouseEvent) => {
  if (props.disabled) return
  if (props.showHalf) {
    const target = event.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    hoverValue.value = mouseX <= rect.width / 2 ? star - 0.5 : star
  } else {
    hoverValue.value = star
  }
}
```

### Half-Star Rating

The Rate component supports half-star rating:

```typescript
const getStarStyle = (star: number) => {
  const isActive = star <= displayValue.value
  const isHalf = props.showHalf && star === Math.ceil(displayValue.value) && displayValue.value % 1 > 0
  return {
    color: isActive ? props.colors[0] : props.colors[2],
    width: isHalf ? '50%' : '100%'
  }
}
```

## Extensibility Design

The Rate component has excellent extensibility:

1. **Custom Star Count**: Control the number of stars through the `max` property
2. **Custom Colors**: Control colors for different states through the `colors` property
3. **Text Display**: Control text display through showText and texts properties
4. **Half-Star Support**: Control half-star rating through the showHalf property
5. **Disabled State**: Control disabled state through the disabled property
6. **Theme Adaptation**: Supports theme customization through CSS variables

## Style Details

The Rate component has the following characteristics in style handling:

1. **SVG Icons**: Uses vector icons to ensure clarity
2. **Transition Animation**: Smooth transition effects when rating state changes
3. **Responsive Design**: Supports flexible size adaptation
4. **Accessibility Design**: Supports keyboard navigation and screen readers
5. **Consistency**: Maintains style consistency with other form components in the component library

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners

## Design Value

The Rate component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Switch, Checkbox, and Radio
