# Dialog Component Design Documentation

## Overview

The Dialog component is a core component in this library used for displaying modal dialogs. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core mechanisms like `useDialog` and `Teleport`, it provides a complete and user-friendly dialog solution.

The Dialog component focuses on handling modal dialog display, interaction, and style management, offering users a powerful and flexible dialog management feature. It supports custom content, sizing, animation effects, and interaction behaviors, effectively enhancing the user experience in critical operation scenarios.

## Design Philosophy

### Layered Architecture

The Dialog component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`dialog.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`dialogComputed.ts`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`dialog.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Dialog component abstracts complex logic into core functions:

- `useDialog` - Handles core dialog logic.
- `useStyleComputed` - Handles dynamic style computation.
- `useClassComputed` - Handles dynamic class name generation.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Dialog component is clean and straightforward:

```typescript
export const dialogProps = {
  /** Controls dialog visibility */
  modelValue: {
    type: Boolean,
    default: false
  },
  /** Dialog title */
  title: {
    type: String,
    default: ''
  },
  /** Dialog width */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: 400
  },
  /** Dialog height */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: 200
  },
  /** Whether clicking the overlay closes the dialog */
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  /** Whether pressing Esc key closes the dialog */
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  /** Background color */
  backgroundColor: {
    type: String,
    default: ''
  },
  /** Border color */
  borderColor: {
    type: String,
    default: ''
  },
  /** Text color */
  textColor: {
    type: String,
    default: ''
  },
  /** Whether to allow overflow */
  overflow: {
    type: Boolean,
    default: false
  }
}
```

#### Parameter Descriptions:
- modelValue: Controls the visibility state of the dialog.
- title: The title text of the dialog.
- width and height: Control the dimensions of the dialog.
- closeOnClickModal: Controls whether clicking the overlay closes the dialog.
- closeOnPressEscape: Controls whether pressing Esc key closes the dialog.
- backgroundColor, borderColor, textColor: Support custom styling.
- overflow: Controls content overflow behavior.

### Event System
The Dialog component provides rich event support:

```typescript
export interface DialogEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'open'): void
  (e: 'close'): void
}
```

#### Event Descriptions:
· update:modelValue: Triggered when dialog visibility state changes.
· open: Triggered when the dialog opens.
· close: Triggered when the dialog closes.

## Style System Design
### CSS Variable Control
The Dialog component achieves style control through CSS variables:

1. --dialog-bg-color - Dialog background color.
2. --dialog-text-color - Dialog text color.
3. --overlay-bg-color - Overlay background color.

### Layout System
The Dialog component supports flexible layout control:

1. **Modal Window** - Uses Teleport to render the dialog under body.
2. **Centered Positioning** - Uses Flexbox for vertical and horizontal centering.
3. **Dimension Control** - Controls dialog dimensions via width and height properties.

### State Styles
The Dialog component provides corresponding styles for different states:

1. **Open State** - Fade-in animation.
2. **Closed State** - Fade-out animation.
3. **Overflow State** - Controls content overflow behavior via the overflow property.

## Component Structure Design
### Overall Structure
The overall structure of the Dialog component is as follows:

```html
<Teleport to="body">
  <Transition name="dialog-fade">
    <div v-if="visible" class="my-overlay" @click.self="handleOverlayClick">
      <div class="my-dialog" role="dialog" aria-modal="true" :style="dialogStyle" :class="dialogClass">
        <header class="my-dialog__header">
          <slot name="header">
            <span class="my-dialog__title">{{ props.title }}</span>
          </slot>
          <button class="my-dialog__close" @click="close">×</button>
        </header>

        <div class="my-dialog__body">
          <slot />
        </div>

        <footer class="my-dialog__footer" v-if="$slots.footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Transition>
</Teleport>
```

### Component Hierarchy
The Dialog component consists of four main parts:

1. **Overlay** - .my-overlay - A semi-transparent background covering the entire viewport.
2. **Dialog Container** - .my-dialog - Wraps the entire dialog.
3. **Dialog Header** - .my-dialog__header - Contains the title and close button.
4. **Dialog Body** - .my-dialog__body - Contains the main content.
5. **Dialog Footer** - .my-dialog__footer - Contains action buttons.



---

## Interaction Design
### Dialog Visibility
The Dialog component controls visibility via modelValue:
```typescript
const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) emit('open')
  }
)
```

### Overlay Click Handling
The Dialog component supports closing via overlay click:

```typescript
const handleOverlayClick = () => {
  if (props.closeOnClickModal) close()
}
```

### Keyboard Event Handling
The Dialog component supports closing via Esc key:

```typescript
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnPressEscape) close()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
```

### Animation Effects
The Dialog component uses Vue's Transition component for fade animations:

```scss
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
```

## Extensibility Design
The Dialog component offers excellent extensibility:

1. **Slot Support:** Supports custom header, body, and footer via slots.
  · header: Custom dialog header.
  · Default slot: Custom dialog content.
  · footer: Custom dialog footer.
2. Style Customization: Supports custom background, text colors via props.
3. Interaction Configuration: Controls closing behavior via props.
4. Dimension Control: Flexibly adjusts dialog dimensions via width and height properties.

## Style Details
The Dialog component features the following style handling characteristics:

1. Responsive Design: Supports flexible layout adaptation.
2. Consistency: Maintains style consistency with other library components.
3. Accessibility Design: Complies with WAI-ARIA specifications.
  · Sets role="dialog" and aria-modal="true".
  · Supports keyboard navigation.
4. Animation Effects: Smooth show/hide effects using CSS transitions.

## Performance Optimization
Performance is optimized through:

1. Using `Teleport` to avoid layout nesting issues.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Listening to and removing keyboard events on demand.
6. Using CSS animations instead of JavaScript animations.

## Design Value
The Dialog component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Modal and Popover.
