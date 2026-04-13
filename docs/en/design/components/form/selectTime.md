# SelectTime Component Design Document

## Overview

The SelectTime component is an interactive component in this component library used for time selection. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use time selection solution through core logic such as useSelectTimeComputed.

The SelectTime component focuses on handling users' time selection operations, providing an intuitive and visually appealing time selection feature that supports two modes: single time selection and time range selection, with good customizability.

## Design Philosophy

### Layered Architecture

The SelectTime component strictly follows a three-layer architecture design:

1. **Structure Layer** selectTime.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** selectTimeComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** selectTime.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The SelectTime component abstracts complex logic into core functions:

- useSelectTimeComputed - Handles the core logic of the time picker

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the SelectTime component is concise and clear:

```typescript
export const selectTimeProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  range: { type: Boolean, default: false },
  hourOptions: {
    type: Array as PropType<number[]>,
    default: () => Array.from({ length: 24 }, (_, i) => i),
  },
  minuteOptions: {
    type: Array as PropType<number[]>,
    default: () => Array.from({ length: 60 }, (_, i) => i),
  },
};
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### Mode System

The SelectTime component supports two modes:

1. **Single Time Mode** - Select a single time point (default mode)
2. **Time Range Mode** - Select a time range (enabled via the range property)

## Style System Design

### CSS Style Control

The SelectTime component implements style control through SCSS:

1. **Dark Theme** - Default dark background and light text
2. **Hover Effect** - Background color change when mouse hovers
3. **Focus Effect** - Blue border highlight when focused
4. **Custom Scrollbar** - Custom scrollbar style for the dropdown list

### Size System

The SelectTime component has a fixed size design:

1. **Height** - Standard height of 30px
2. **Width** - Adaptive to content width
3. **Padding** - 8px top/bottom, 12px left/right

### State Styles

The SelectTime component provides corresponding styles according to different states:

1. **Default State** - Standard dropdown style
2. **Hover State** - Background color change when mouse hovers
3. **Focus State** - Blue border highlight when focused
4. **Disabled State** - Visual effect when option is disabled

## Component Structure Design

### Overall Structure

The overall structure of the SelectTime component is as follows:

```html
<div class="time-picker">
  <div v-if="range" class="time-range-picker">
    <!-- Start time selection -->
    <div class="time-input-group">
      <div class="custom-time-picker">
        <select v-model="selectedHourStart" class="time-select">...</select>
        <span class="time-separator">:</span>
        <select v-model="selectedMinuteStart" class="time-select">...</select>
      </div>
    </div>

    <span class="time-range-separator">to</span>

    <!-- End time selection -->
    <div class="time-input-group">
      <div class="custom-time-picker">
        <select v-model="selectedHourEnd" class="time-select">...</select>
        <span class="time-separator">:</span>
        <select v-model="selectedMinuteEnd" class="time-select">...</select>
      </div>
    </div>
  </div>

  <div v-else class="time-input-group single">
    <!-- Single time selection -->
    <div class="custom-time-picker single-picker">
      <select v-model="selectedHour" class="time-select">...</select>
      <span class="time-separator">:</span>
      <select v-model="selectedMinute" class="time-select">...</select>
    </div>
  </div>
</div>
```

### Dropdown Selection Structure

The time selection dropdown structure is as follows:

```html
<select v-model="selectedHour" class="time-select">
  <option value="" disabled hidden>Hour</option>
  <option v-for="h in hourOptions" :key="`hour-${h}`" :value="h">
    {{ String(h).padStart(2, '0') }}
  </option>
</select>
```

## Interaction Design

### Time Selection

The SelectTime component supports time selection:

```typescript
// Single time mode
const t = formatTime(selectedHour.value, selectedMinute.value);
if (t) emit('update:modelValue', t);

// Time range mode
const t1 = formatTime(selectedHourStart.value, selectedMinuteStart.value);
const t2 = formatTime(selectedHourEnd.value, selectedMinuteEnd.value);
if (t1 && t2) emit('update:modelValue', [t1, t2]);
```

### Time Formatting

The SelectTime component supports time formatting:

```typescript
function formatTime(h: string | number, m: string | number): string {
  if (h === '' || m === '') return '';
  const hh = typeof h === 'string' ? parseInt(h) : h;
  const mm = typeof m === 'string' ? parseInt(m) : m;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}
```

### Mode Switching

The SelectTime component supports state reset when switching modes:

```typescript
watch(
  () => props.range,
  (newRange) => {
    emit('update:modelValue', newRange ? ['', ''] : '');
  }
);
```

## Extensibility Design

The SelectTime component has excellent extensibility:

1. **Custom Time Options**: Customize available times through hourOptions and minuteOptions properties
2. **Dual Mode Support**: Supports single time selection and time range selection
3. **Two-way Binding**: Supports v-model two-way data binding
4. **Style Customization**: Supports style customization through CSS variables
5. **Theme Adaptation**: Default dark theme, easy to adapt to other themes

## Style Details

The SelectTime component has the following characteristics in style handling:

1. **Dropdown Arrow**: Uses SVG icons for custom dropdown arrows
2. **Scrollbar Style**: Custom scrollbar style to match the overall design
3. **Responsive Design**: Component size fits various layout environments
4. **Accessibility Design**: Supports keyboard navigation and screen readers
5. **Consistency**: Maintains style consistency with other form components in the component library

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably use watch and watchEffect for state listening

## Design Value

The SelectTime component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as SelectDate, Select, PickColor, Rate, Switch, Checkbox, and Radio
