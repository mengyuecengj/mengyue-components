# Backtop Component Design Document

## Overview

The Backtop component is a core component in this component library used to implement the "back to top" functionality. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use back-to-top solution through core logic such as backtop.vue.

The Backtop component focuses on monitoring page scroll status and handling the return-to-top operation, providing users with a powerful and flexible back-to-top feature that supports custom display conditions, positioning, and styling, effectively improving user experience when browsing long pages.

## Design Philosophy

### Layered Architecture

The Backtop component strictly follows a three-layer architecture design:

1. **Structure Layer** backtop.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** backtop.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** backtop.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Backtop component abstracts complex logic into core functions:

- getScrollTop - Handles scroll position retrieval
- handleScroll - Handles scroll events
- scrollToTop - Handles the return-to-top operation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the Backtop component is concise and clear:

```typescript
export const backTopProps = {
  /** Scroll height threshold for display */
  visibilityHeight: {
    type: Number,
    default: 200
  },
  /** Distance from the right */
  right: {
    type: [Number, String],
    default: 40
  },
  /** Distance from the bottom */
  bottom: {
    type: [Number, String],
    default: 40
  },
  /** Scroll target element selector */
  target: {
    type: String,
    default: ''
  }
}
```

#### Parameter Description:
- visibilityHeight: The component is displayed when the page scroll exceeds this height. Default is `200`.
- right: Distance from the right side of the page. Default is `40`.
- bottom: Distance from the bottom of the page. Default is `40`.
- target: Specifies the scroll target container. Defaults to `window`.

### Interaction Design

The Backtop component provides clean interaction logic:

```typescript
const getScrollTop = () => {
  if (props.target) {
    const el = document.querySelector(props.target) as HTMLElement
    return el?.scrollTop || 0
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop
  }
}

const handleScroll = () => {
  visible.value = getScrollTop() >= props.visibilityHeight
}

const scrollToTop = () => {
  if (props.target) {
    const el = document.querySelector(props.target) as HTMLElement
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
```

#### Interaction Flow:
1. **Listen for scroll events**: When the page scrolls, check whether the scroll position exceeds visibilityHeight
2. **Show/Hide component**: Display the Backtop component based on the scroll position
3. **Click to return to top**: Smoothly scroll to the top of the page when the component is clicked

## Style System Design

### CSS Variable Control

The Backtop component implements style control through SCSS:

1. `--backtop-bg-color` - Background color
2. `--backtop-text-color` - Text color
3. `--backtop-box-shadow` - Shadow effect

### Layout System

The Backtop component supports flexible layout control:

1. **Fixed Positioning** - Uses `position: fixed` to position at the bottom-right corner of the page
2. **Position Control** - Controls position through right and bottom properties
3. **Fade In/Out** - Uses Vue's Transition component to implement show/hide animation

### State Styles

The Backtop component provides corresponding styles according to different states:

1. **Default State** - Semi-transparent blue background
2. **Hover State** - Visual feedback when mouse hovers
3. **Transition State** - Fade in/out effect during show/hide

## Component Structure Design

### Overall Structure

The overall structure of the Backtop component is as follows:

```html
<Transition name="fade">
  <div
    v-if="visible"
    class="my-backtop"
    :style="{
      right: `${right}px`,
      bottom: `${bottom}px`
    }"
    @click="scrollToTop"
  >
    <slot>
      <div class="default-content">↑</div>
    </slot>
  </div>
</Transition>
```

### Component Hierarchy

The Backtop component contains two main parts:

1. **Container** - `.my-backtop` - Wraps the entire back-to-top button
2. **Default Content** - `.default-content` - Default back-to-top icon

### Slot Support

The Backtop component supports custom content through slots:

```vue
<MYBacktop :visibilityHeight="300" :right="50" :bottom="50">
  <div class="custom-backtop">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    </svg>
  </div>
</MYBacktop>
```

## Interaction Design

### Scroll Position Monitoring

The Backtop component retrieves scroll position through the getScrollTop method:

```typescript
const getScrollTop = () => {
  if (props.target) {
    const el = document.querySelector(props.target) as HTMLElement
    return el?.scrollTop || 0
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop
  }
}
```

#### Supports two scroll targets:
- **Global Scroll**: When target is empty, listens to `window` scroll
- **Local Scroll**: When target specifies an element selector, listens to that element's scroll

### Smooth Scroll Implementation

The Backtop component implements smooth scrolling through the scrollToTop method:

```typescript
const scrollToTop = () => {
  if (props.target) {
    const el = document.querySelector(props.target) as HTMLElement
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
```

#### Implementation Features:
- Uses `behavior: 'smooth'` for smooth scrolling effect
- Compatible with both global and local scroll targets
- Provides excellent user experience

## Extensibility Design

The Backtop component has excellent extensibility:

1. **Position Control**: Control button position through right and bottom properties
2. **Display Threshold**: Control display conditions through visibilityHeight property
3. **Scroll Target**: Specify scroll target through target property
4. **Content Customization**: Support custom button content through slot mechanism
5. **Style Customization**: Adjust component style through CSS variables

## Style Details

The Backtop component has the following characteristics in style handling:

1. **Responsive Design**: Supports different screen sizes
2. **Consistency**: Maintains style consistency with other components in the component library
3. **Accessibility Design**: Ensures keyboard navigation and screen reader friendliness
4. **Smooth Transition**: Uses CSS transitions for smooth show/hide effects
5. **Visual Feedback**: Provides clear hover effects

## Performance Optimization

Performance is optimized through the following methods:

1. Use event delegation to reduce the number of event listeners
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Listen and remove scroll events on demand
6. Use CSS transitions instead of JavaScript animations

## Design Value

The Backtop component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **Simplicity**: Provides the most essential functionality without over-design
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as ScrollToTop and BackToTop
