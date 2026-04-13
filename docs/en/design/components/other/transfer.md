# Transfer Component Design Document

## Overview

The Transfer component is a core component in this component library used to implement the shuttle (transfer) box functionality. It continues the consistent design philosophy of our component library, adopting the principles of "container-panel separation" and "state-driven" design. It implements a complete and easy-to-use shuttle box solution through core components such as transfer.vue and transferPanel.vue.

The Transfer component focuses on handling data flow and interaction experience in bidirectional selection scenarios, providing users with an intuitive and efficient batch selection interface. It supports custom styles, disabled items, title configuration, and flexible data binding, effectively improving user experience during data migration and selection operations.

## Design Philosophy

### Container-Panel Separation Architecture

The Transfer component adopts a clear container-panel separation architecture:

1. **Container Layer** transfer.vue - Responsible for overall layout, data management, and state flow
2. **Panel Layer** transferPanel.vue - Focuses on data display and interaction for a single panel
3. **Data Layer** type.ts - Defines data structures and types

This design makes each part of the component have a single responsibility, making it easy to maintain and extend.

### State-Driven Design

The Transfer component adopts a state-driven design approach:

- **Data-Driven** - The interface is driven by modelValue and data properties
- **State Isolation** - The states of the left and right panels are isolated from each other, with unified management at the container level
- **Event-Driven** - Data flow is achieved through the event mechanism

This design ensures the predictability and consistency of the component’s state.

## Core Feature Design

### Data Management Mechanism

The core of the Transfer component lies in its data management mechanism:

```typescript
const leftData = computed(() => props.data.filter(item => !props.modelValue.includes(item.key)))
const rightData = computed(() => props.data.filter(item => props.modelValue.includes(item.key)))
```

#### Data Management Features:
- **Two-way Binding** - Achieves v-model two-way binding through modelValue
- **Automatic Splitting** - Automatically splits left and right panel data based on modelValue
- **Data Isolation** - Left and right panel data do not affect each other; unified management is handled at the container level

### Operation Interaction Design

The operation interaction design of the Transfer component is clean and efficient:

```typescript
const addToRight = () => {
  const newKeys = [...props.modelValue, ...leftSelected.value]
  emit('update:modelValue', newKeys)
  leftSelected.value = []
}

const removeFromRight = () => {
  const newKeys = props.modelValue.filter(k => !rightSelected.value.includes(k))
  emit('update:modelValue', newKeys)
  rightSelected.value = []
}
```

#### Interaction Features:
- **Unidirectional Flow** - Data can only be moved between left and right panels via operation buttons
- **Batch Operation** - Supports selecting multiple items for simultaneous movement
- **Disabled Control** - Disabled items cannot be selected or moved
- **State Feedback** - Button states change dynamically based on selection

## Component Structure Design

### Overall Structure

The overall structure of the Transfer component is as follows:

```html
<div class="my-transfer">
  <TransferPanel
    v-model:selected="leftSelected"
    :title="leftTitle"
    :data="leftData"
    :style="transferStyle"
    :hoverBackground="hoverBackground"
  />
  <div class="my-transfer__buttons">
    <button :disabled="!leftSelected.length" @click="addToRight">→</button>
    <button :disabled="!rightSelected.length" @click="removeFromRight">←</button>
  </div>
  <TransferPanel
    v-model:selected="rightSelected"
    :title="rightTitle"
    :data="rightData"
    :style="transferStyle"
    :hoverBackground="hoverBackground"
  />
</div>
```

### Component Hierarchy

The Transfer component contains several key parts:

1. **Container** - `.my-transfer` - Wraps the entire transfer component
2. **Operation Button Area** - `.my-transfer__buttons` - Contains left and right movement buttons
3. **Panel** - `.transfer-panel` - Individual data panel
4. **Panel Title** - `.transfer-panel__title` - Panel title area
5. **Data List** - `.transfer-panel__list` - List of data items
6. **Data Item** - `.transfer-panel__item` - Individual data item

Core structure of the TransferPanel component:

```html
<div class="transfer-panel" :style="{ ...transferStyle, '--hover-background': hoverBackground }">
  <div class="transfer-panel__title">{{ title }}</div>
  <ul class="transfer-panel__list">
    <li
      v-for="item in data"
      :key="item.key"
      :class="['transfer-panel__item', { 'is-disabled': item.disabled, 'is-selected': selected.includes(item.key) }]"
      :style="{ '--hover-background': hoverBackground }"
      @click="toggleSelect(item)"
    >
      <input class="transfer-panel__checkbox" type="checkbox" :checked="selected.includes(item.key)" :disabled="item.disabled" />
      {{ item.label }}
    </li>
  </ul>
</div>
```

## Interaction Design

### Selection Mechanism

The selection mechanism of the TransferPanel component is designed as follows:

```typescript
const toggleSelect = (item: Option) => {
  if (item.disabled) return
  const selected = [...props.selected]
  const index = selected.indexOf(item.key)
  if (index > -1) {
    selected.splice(index, 1)
  } else {
    selected.push(item.key)
  }
  emit('update:selected', selected)
}
```

#### Selection Rules:
- **Click to Select** - Clicking a data item toggles its selection state
- **Disabled Control** - Disabled items cannot be selected
- **State Synchronization** - Selection state is synchronized via the update:selected event
- **Batch Operation** - Supports selecting multiple items simultaneously

### Data Flow

The data flow design of the Transfer component is as follows:

1. **Initial State** - Calculates left and right panel data based on modelValue and data
2. **Selection State** - User selects data items in left and right panels
3. **Data Movement** - User clicks operation buttons to trigger data movement
4. **State Update** - Updates modelValue, triggering interface re-render

#### Data Flow Features:
- **Unidirectional Data Flow** - Data can only be moved between panels via operation buttons
- **State Consistency** - Ensures modelValue remains consistent with interface display
- **Atomic Operations** - Each move operation is atomic

## Extensibility Design

The Transfer component has excellent extensibility:

1. **Style Extension** - Supports custom styles through backgroundColor, colorText, and hoverBackground properties
2. **Title Extension** - Supports custom titles through the titles property
3. **Data Extension** - Supports custom data structures through the Option interface
4. **Interaction Extension** - Supports custom interaction logic through the event mechanism
5. **Style Variables** - Supports fine-grained style control through CSS variables

## Style Details

The Transfer component has the following characteristics in style handling:

1. **Visual Hierarchy** - Creates clear visual hierarchy through colors and spacing
2. **State Feedback** - Provides clear visual feedback for different states
   ```scss
   &.is-disabled {
     color: $disabled-color;
     cursor: not-allowed;
   }
   
   &.is-selected {
     background-color: var(--hover-background, $selected-color) !important;
     font-weight: 500;
   }
   ```
3. **Transition Effects** - Uses transitions to enhance user experience
4. **Scroll Optimization** - Optimized scrolling experience for long lists
   ```scss
   &__list {
     max-height: 350px;
     overflow-y: auto;
     scrollbar-width: thin;
     scrollbar-color: $border-color transparent;
   }
   ```
5. **Responsive Design** - Adapts to different screen sizes

## Performance Optimization

Performance is optimized through the following methods:

1. **Computed Properties** - Uses computed properties to cache data splitting results
2. **Virtual Scrolling** - Achieves virtual scrolling effect by limiting maximum height and optimizing scroll
3. **Event Delegation** - Reduces the number of event listeners through event delegation
4. **Style Optimization** - Uses CSS variables to dynamically adjust styles and reduce reflow
5. **Batch Operations** - Supports batch selection and movement to reduce operation count

## Design Value

The Transfer component continues the design philosophy of our component library:

1. **Responsibility Separation** - Clear separation of responsibilities between container and panels
2. **State-Driven** - Drives interface updates through state changes
3. **Data Abstraction** - Abstracts data structure through the Option interface
4. **Interaction Consistency** - Maintains interaction patterns consistent with other components in the library
5. **Customizability** - Provides rich customization capabilities through properties and style variables
