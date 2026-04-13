# Step Component Design Document

## Overview

The Step component is a core component in this component library used to implement step guidance functionality. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "parent-child collaboration." It implements a complete and easy-to-use step guidance solution through core components such as steps.vue and step.vue.

The Step component focuses on handling the structure, state management, and visual presentation of the step bar, providing users with a clear and intuitive step guidance experience. It supports horizontal/vertical layout, multiple status displays, custom icons, and flexible alignment, effectively improving user navigation experience in multi-step processes.

## Design Philosophy

### Layered Architecture

The Step component strictly follows a three-layer architecture design:

1. **Structure Layer** steps.vue, step.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** - Implements parent-child component communication through the `provide/inject` mechanism and manages step state flow
3. **Presentation Layer** steps.scss, step.scss - Defines the component's visual presentation and style rules

### Parent-Child Collaboration Pattern

The Step component adopts a well-designed parent-child collaboration pattern:

- **Steps as Container** - Manages overall state and layout
- **Step as Child Item** - Focuses on its own state display
- **Context Communication** - Provides unified state management through stepsContext

This design keeps parent and child components loosely coupled while enabling efficient collaboration and avoiding cumbersome prop passing.

## Core Feature Design

### State Management Mechanism

The core of the Step component lies in its state management mechanism:

```typescript
const stepsContext = inject<{
  active: number
  finishStatus: string
  direction: 'horizontal' | 'vertical'
  stepCount: number
}>('stepsContext')

const currentStatus = computed(() => {
  if (props.status) return props.status
  if (props.index < active.value) return finishStatus.value
  if (props.index === active.value) return 'process'
  return 'wait'
})
```

#### State Flow Rules:
- **Automatic Calculation** - Step status is automatically calculated based on the active property of Steps
- **Priority Mechanism** - Explicitly set status property takes precedence over automatic calculation
- **Finish Status** - Custom finish status indicator is supported through the finishStatus property

### Layout System Design

The Step component supports multiple display modes through a flexible layout system:

```typescript
const direction = computed(() => stepsContext?.direction ?? 'horizontal')
```

#### Layout Features:
- **Direction Control** - Supports horizontal/vertical layout through the direction property
- **Alignment** - Supports left/center/right alignment through the align property
- **Adaptive** - Connecting lines automatically adjust position and style according to layout direction

## Component Structure Design

### Overall Structure

The overall structure of the Steps container component:

```html
<div class="my-steps" :class="[
  `my-steps--${direction}`,
  `my-steps--align-${align}`,
]">
  <slot />
</div>
```

### Component Hierarchy

The Step component contains several key parts:

1. **Step Container** - `.my-step` - Wrapper for a single step
2. **Icon Area** - `.my-step__icon-container` - Container for step status icon
3. **Status Icon** - `.my-step__icon` - Circular icon displaying step status
4. **Content Area** - `.my-step__content-wrapper` - Area containing title and description
5. **Connecting Line** - `.my-step__line` - Line connecting steps

Core structure of the Step component:

```html
<div class="my-step" :class="[
  `my-step--${direction}`,
  `my-step--status-${currentStatus}`,
]">
  <div class="my-step__icon-container">
    <div class="my-step__icon">
      <!-- Custom icon slot -->
    </div>
  </div>
  
  <div class="my-step__content-wrapper">
    <div class="my-step__content">
      <div class="my-step__title">{{ title }}</div>
      <div v-if="description" class="my-step__description">{{ description }}</div>
    </div>
  </div>
  
  <!-- Connecting line -->
  <div v-if="!isLast" class="my-step__line" :class="`my-step__line--${direction}`"></div>
</div>
```

### Connecting Line Implementation Principle

The connecting line of the Step component uses precise positioning strategy:

```scss
/* Horizontal connecting line */
.my-step__line--horizontal {
  top: 12px; /* Half of icon height */
  left: calc(50% + 12px); /* Starts from right side of icon */
  width: calc(50% - 12px); /* Extends only to left side of next icon */
  height: 2px;
}
```

#### Connecting Line Design Features:
- **Dynamic Calculation** - Precisely calculates start and end points based on icon position
- **Layout Adaptation** - Automatically adapts to horizontal/vertical layout
- **Visual Hierarchy** - Ensures icons are above connecting lines via z-index

## Interaction Design

### State Flow Design

The state flow design of the Step component follows clear rules:

- **Finished State** - Steps with index less than active
- **In Progress State** - Step with index equal to active
- **Waiting State** - Steps with index greater than active
- **Error State** - Steps explicitly set to error

This design ensures predictability and consistency of state transitions.

### Step Count Management

The Steps component manages step count in a clever way:

```typescript
onMounted(() => {
  const nodes = document.querySelectorAll('.my-step') // Depends on class
  stepCount.value = nodes.length
})
```

#### Step Count Management Features:
- **Automatic Detection** - Automatically calculates step count through DOM query
- **Reactive Update** - Automatically updates when step count changes
- **Avoid Circular Dependency** - Does not directly depend on child component instances, reducing coupling

## Extensibility Design

The Step component has excellent extensibility:

1. **Status Extension** - Supports custom statuses through status and finishStatus properties
2. **Icon Extension** - Supports custom icons through the icon slot
3. **Layout Extension** - Supports horizontal/vertical layout and multiple alignment options
4. **Style Extension** - Supports style customization through CSS variables and class names
5. **Content Extension** - Supports custom title and description content

## Style Details

The Step component has the following characteristics in style handling:

1. **Flexible Layout** - Uses flex layout to achieve adaptive step bar
2. **Status Styles** - Distinguishes different statuses through class names
   ```scss
   .my-step--status-wait .my-step__icon {
     background-color: #c0c4cc;
   }
   .my-step--status-process .my-step__icon {
     background-color: #409eff;
   }
   ```
3. **Layout Adaptation** - Uses different style rules for horizontal and vertical layouts
4. **Visual Hierarchy** - Ensures correct stacking order of elements through z-index
5. **Responsive Design** - Automatically adapts to different screen sizes

## Performance Optimization

Performance is optimized through the following methods:

1. **Lightweight State Management** - Uses computed properties instead of complex state machines
2. **Precise Update Scope** - Updates only relevant components when necessary
3. **Avoid Unnecessary Reflow** - Uses CSS class switching instead of inline styles
4. **Efficient DOM Query** - Performs DOM queries only when necessary
5. **Reasonable Rendering Strategy** - Renders only visible elements

## Design Value

The Step component continues the design philosophy of our component library:

1. **Separation of Concerns** - Clearly separates responsibilities of the steps container and individual step items
2. **Context-Driven** - Implements efficient communication through the `provide/inject` mechanism
3. **State Consistency** - Ensures unified management and display of step states
4. **Layout Flexibility** - Supports multiple layout methods and alignment strategies
5. **Extensibility** - Supports rich customization capabilities through slots and properties
