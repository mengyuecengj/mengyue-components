# SelectDate Component Design Document

## Overview

The SelectDate component is an interactive component in this component library used for date selection. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use date selection solution through core logic such as useSelectDate.

The SelectDate component focuses on handling users' date selection operations, providing an intuitive and visually appealing date selection feature that supports multiple date modes (date, month, year), range selection, time selection, and custom styles.

## Design Philosophy

### Layered Architecture

The SelectDate component strictly follows a three-layer architecture design:

1. **Structure Layer** selectDate.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** selectDateComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** selectDate.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The SelectDate component abstracts complex logic into core functions:

- useSelectDate - Handles the core logic of the date picker

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the SelectDate component is concise and clear:

```typescript
export const selectDateProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  type: {
    type: String,
    default: 'date'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  year: {
    type: Boolean,
    default: false
  },
  month: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  time: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number] as PropType<SelectSize>,
    default: '260px'
  },
  height: {
    type: [String, Number] as PropType<SelectSize>,
    default: '20px'
  },
};
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### Mode System

The SelectDate component supports multiple modes:

1. **Date Mode** - Select a specific date
2. **Month Mode** - Select a month
3. **Year Mode** - Select a year
4. **Range Mode** - Select a date range
5. **Time Mode** - Select time

## Style System Design

### CSS Variable Control

The SelectDate component implements style control through SCSS variables:

1. `$bg` - Background color
2. `$border` - Border color
3. `$text` - Text color
4. `$hover` - Hover color
5. `$sel` - Selected color
6. `$today` - Today indicator color

### Size System

The SelectDate component supports flexible size control:

1. **Default Size** - 350px × 20px
2. **Custom Size** - Supports px, em, % and other units
3. **Responsive Design** - Supports adaptation to different screen sizes

### State Styles

The SelectDate component provides corresponding styles according to different states:

1. **Default State** - Standard input box style
2. **Hover State** - Style when mouse hovers
3. **Focus State** - Style when focused
4. **Disabled State** - Semi-transparent effect when disabled
5. **Selected State** - Highlight effect when a date is selected
6. **Range State** - Indicator effect within the date range

## Component Structure Design

### Overall Structure

The overall structure of the SelectDate component is as follows:

```html
<div class="date-picker-container">
  <div class="input-container">
    <input :value="formattedDateTime" class="my-selectDate" :placeholder="placeholderText" readonly
      @click="toggleDropdown" :style="selectStyle" />
    <date-range-icon class="date-range-icon" />
  </div>

  <div v-if="showDropdown" class="date-picker-dropdown">
    <!-- Time picker -->
    <div v-if="props.time" class="time-picker-container">
      <!-- ... -->
    </div>

    <!-- Range picker -->
    <div v-if="mode.startsWith('range')" class="range-container">
      <!-- ... -->
    </div>

    <!-- Single picker -->
    <div v-else-if="mode === 'year'" class="year-picker">
      <!-- ... -->
    </div>

    <div v-else-if="mode === 'month'" class="month-picker">
      <!-- ... -->
    </div>

    <div v-else class="date-picker-default">
      <!-- ... -->
    </div>
  </div>
</div>
```

### Calendar Grid Structure

The date selection grid structure is as follows:

```html
<div class="date-grid grid-date">
  <div v-for="d in daysOfWeek" :key="d" class="day-header">{{ d }}</div>
  <div v-for="cell in calendarCells" :key="cell.key" class="day-cell">
    <button type="button" v-if="cell.date" :class="{
      selected: isSelected(cell.date),
      disabled: !cell.isCurrentMonth,
      today: isToday(cell.date)
    }" :disabled="!cell.isCurrentMonth" @click="selectDate(cell.date)">
      {{ cell.date.getDate() }}
      <span v-if="isToday(cell.date)" class="today-badge">今</span>
    </button>
  </div>
</div>
```

## Interaction Design

### Dropdown Expand/Collapse

The SelectDate component supports clicking to expand/collapse the dropdown:

```typescript
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) initFromModelValue();
}
```

### Date Selection

The SelectDate component supports multiple date selection methods:

```typescript
function selectDate(date: Date) {
  const val = formatDateTime(date, false, false);
  emit('update:modelValue', val);
  emit('change', val);
  showDropdown.value = false;
}

function selectRangeDate(date: Date) {
  if (isSelectingStart.value) {
    startDate.value = date;
    isSelectingStart.value = false;
    emit('update:modelValue', [formatDateTime(date, true, true)]);
  } else {
    endDate.value = date;
    const s = formatDateTime(startDate.value!, true, true);
    const e = formatDateTime(date, true, false);
    emit('update:modelValue', [s, e]);
    emit('change', [s, e]);
    showDropdown.value = false;
    isSelectingStart.value = true;
  }
}
```

### Close on Outside Click

The SelectDate component supports closing the dropdown when clicking outside:

```typescript
function handleOutsideClick(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('.date-picker-container')) {
    showDropdown.value = false;
  }
}
```

## Extensibility Design

The SelectDate component has excellent extensibility:

1. **Multiple Mode Support**: Supports date, month, year, range, and time selection
2. **Custom Size**: Control component size through width and height properties
3. **Disabled State**: Control disabled state through the disabled property
4. **Time Selection**: Control time selection functionality through the time property
5. **Today Indicator**: Control today indicator display through the showToday property
6. **Style Customization**: Support style customization through CSS variables
7. **Theme Adaptation**: Supports theme customization through CSS variables

## Style Details

The SelectDate component has the following characteristics in style handling:

1. **Transition Animation**: Smooth transition effects when the dropdown expands/collapses
2. **Responsive Design**: Supports flexible size adaptation
3. **Accessibility Design**: Supports keyboard navigation and screen readers
4. **Consistency**: Maintains style consistency with other form components in the component library
5. **Highlighting**: Selected dates and ranges have obvious highlight effects
6. **Today Indicator**: Today’s date has a special indicator

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners
6. Delay initialization of state to improve first render performance

## Design Value

The SelectDate component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Select, PickColor, Rate, Switch, Checkbox, and Radio
