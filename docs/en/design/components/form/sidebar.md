# Slidebar Component Design Document

## Overview

The Slidebar component is an interactive component in this component library used for numerical adjustment. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use slider solution through core logic such as useSlidebarComputed.

The Slidebar component focuses on handling users' numerical adjustment operations, providing an intuitive and visually appealing sliding adjustment feature that supports custom sizes, colors, disabled state, and numerical display.

## Design Philosophy

### Layered Architecture

The Slidebar component strictly follows a three-layer architecture design:

1. **Structure Layer** slidebar.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** slidebarComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** slidebar.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Slidebar component abstracts complex logic into core functions:

- useSlidebarComputed - Handles the core logic of the slider

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the Slidebar component is concise and clear:

```typescript
export const silderbarProps = {
    size: {
        type: String,
    },
    thumbColor: {
        type: String,
    },
    trackColor: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    noNum: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
}
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### State Management

The Slidebar component manages core states through reactive data:

```typescript
const num = ref<number | string>(1); // num supports number or string
const progressWidth = ref(0);
const track = ref<HTMLElement | null>(null);
let isDragging = false;
```

This design ensures state consistency and reactivity.

## Style System Design

### CSS Variable Control

The Slidebar component implements style control through SCSS variables:

1. `$track-height` - Track height
2. `$thumb-size` - Thumb size
3. `$primary-color` - Primary color
4. `$thumb-bg` - Thumb background color

### Size System

The Slidebar component supports flexible size control:

1. **Default Size** - 100% width, maximum 320px
2. **Custom Size** - Control width through the size property
3. **Responsive Design** - Supports adaptation to different screen sizes

### State Styles

The Slidebar component provides corresponding styles according to different states:

1. **Default State** - Standard slider style
2. **Hover State** - Style when mouse hovers
3. **Dragging State** - Style changes during dragging
4. **Disabled State** - Semi-transparent effect when disabled

## Component Structure Design

### Overall Structure

The overall structure of the Slidebar component is as follows:

```html
<div class="slider-container" :style="containerStyle" :class="{ disabled: disabled }">
  <div
    ref="track"
    class="slider-track"
    :style="{ background: props.trackColor || defaultTrackBg }"
    @mousedown="startDrag"
  >
    <div
      class="slider-progress"
      :style="{ width: progressWidth + '%', background: props.thumbColor || defaultProgressColor }"
    ></div>
    <div
      class="slider-thumb"
      :style="{ left: progressWidth + '%', borderColor: props.thumbColor || defaultProgressColor }"
      @mousedown.stop="startDrag"
    >
      <span v-if="!noNum" class="slider-value">{{ num }}</span>
    </div>
  </div>
</div>
```

### Component Hierarchy

The Slidebar component contains three main parts:

1. **Container** - `.slider-container` - Wraps the entire component
2. **Track** - `.slider-track` - Displays the sliding track
3. **Progress Bar** - `.slider-progress` - Displays the completed progress
4. **Thumb** - `.slider-thumb` - Draggable user interaction element
5. **Value Display** - `.slider-value` - Displays the current value

## Interaction Design

### Dragging Operation

The Slidebar component supports mouse dragging:

```typescript
const startDrag = (e: MouseEvent) => {
  if (props.disabled) return;
  isDragging = true;
  updateValue(e.clientX);
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging || props.disabled) return;
  updateValue(e.clientX);
};

const stopDrag = () => {
  isDragging = false;
};
```

### Value Update

The Slidebar component supports real-time value updating:

```typescript
const updateValue = (clientX: number) => {
  if (!track.value || props.disabled) return;
  const rect = track.value.getBoundingClientRect();
  let percentage = ((clientX - rect.left) / rect.width) * 100;
  percentage = Math.max(0, Math.min(100, percentage));
  progressWidth.value = percentage;
  num.value = Math.round(percentage);

  // Decide whether to emit string or number based on the type of modelValue
  const emitValue = typeof props.modelValue === 'string' ? String(num.value) : num.value;
  emit('update:modelValue', emitValue);
};
```

### Disabled State

The Slidebar component supports disabled state:

```scss
&.disabled {
  opacity: 0.6;
  cursor: not-allowed;

  .slider-track,
  .slider-thumb {
    cursor: not-allowed;
    pointer-events: none;
  }
}
```

## Extensibility Design

The Slidebar component has excellent extensibility:

1. **Custom Size**: Control component width through the size property
2. **Custom Color**: Control colors through thumbColor and trackColor properties
3. **Disabled State**: Control disabled state through the disabled property
4. **Value Display Control**: Control value display through the noNum property
5. **Two-way Binding**: Supports v-model two-way data binding
6. **Theme Adaptation**: Supports theme customization through SCSS variables

## Style Details

The Slidebar component has the following characteristics in style handling:

1. **Transition Animation**: Smooth transition effects when the thumb and progress bar change
2. **Responsive Design**: Supports flexible size adaptation
3. **Accessibility Design**: Supports keyboard navigation and screen readers
4. **Consistency**: Maintains style consistency with other form components in the component library
5. **Interaction Feedback**: Clear visual feedback during dragging
6. **Value Display**: Current value is displayed as a bubble above the thumb

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners
6. Use event delegation to reduce the number of event listeners

## Design Value

The Slidebar component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as SelectCascader, Select, SelectTime, SelectDate, PickColor, Rate, Switch, Checkbox, and Radio
