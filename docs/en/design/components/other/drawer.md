# Drawer Component Design Document

## Overview

The Drawer component is a core component in this component library used to implement drawer-style popup functionality. It continues the consistent design philosophy of our component library, adopting the principles of "containerization" and "animation-driven" design. It implements a complete and easy-to-use drawer-style popup solution through drawer.vue.

The Drawer component focuses on handling temporary content display on the side of the page, providing users with a smooth and intuitive drawer-style interaction experience. It supports multiple directions, size configurations, custom styles, and rich interaction controls, effectively improving user experience when viewing additional information or performing auxiliary operations.

## Design Philosophy

### Containerized Design

The Drawer component adopts a containerized design approach:

1. **Independent Container** - Renders the component to the body via Teleport to ensure correct layering and positioning
2. **Complete Structure** - Built-in title, content, and footer areas to provide a full container structure
3. **State Isolation** - Internally manages display state, decoupled from external application logic

This design ensures the component’s independence and reusability.

### Animation-Driven Architecture

The Drawer component adopts an animation-driven architecture:

- **Transition Animation** - Implements fade and slide animations for the mask and drawer body using the Transition component
- **Direction Awareness** - Animation effects automatically adjust based on the direction property
- **State Synchronization** - Animation state is tightly coupled with the component’s display state

This design makes the interaction experience smoother and more natural while keeping the code clear.

## Core Feature Design

### Display Control Mechanism

The core of the Drawer component lies in its display control mechanism:

```typescript
const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }
)
```

#### Display Control Features:
- **Two-way Binding** - Achieves v-model two-way binding through modelValue
- **State Synchronization** - Keeps internal state consistent with external state
- **Lifecycle Management** - Triggers corresponding lifecycle events when opening/closing
- **Scroll Control** - Controls page scrolling through the lockScroll property

### Direction and Size Management

The Drawer component’s direction and size management is designed as follows:

```typescript
const drawerStyle = computed(() => {
  if (['rtl', 'ltr'].includes(props.direction)) {
    return {
      width:
        typeof props.size === 'number'
          ? `${props.size}px`
          : props.size
    }
  } else {
    return {
      height:
        typeof props.size === 'number'
          ? `${props.size}px`
          : props.size
    }
  }
})
```

#### Direction and Size Features:
- **Multi-Direction Support** - Supports four directions: ltr, rtl, ttb, btt
- **Flexible Sizing** - Supports both percentage and pixel values
- **Adaptive Layout** - Automatically adjusts width or height based on direction
- **Responsive Design** - Adapts to different screen sizes

## Component Structure Design

### Overall Structure

The overall structure of the Drawer component is as follows:

```html
<Teleport to="body">
  <div v-if="visible" class="my-drawer__wrapper">
    <!-- Mask layer -->
    <Transition name="my-drawer-fade">
      <div v-show="visible" class="my-drawer__mask" @click="handleMaskClick" />
    </Transition>

    <!-- Drawer body -->
    <Transition name="my-drawer-slide" :style="dialogStyle">
      <div v-if="visible" class="my-drawer" :class="`my-drawer--${props.direction}`" :style="drawerStyle">
        <!-- Header -->
        <header class="my-drawer__header" v-if="props.withHeader">
          <slot name="title">{{ props.title }}</slot>
          <button class="my-drawer__close" @click="handleClose" v-if="props.showClose">
            ×
          </button>
        </header>

        <!-- Body -->
        <section class="my-drawer__body">
          <slot></slot>
        </section>

        <!-- Footer -->
        <footer class="my-drawer__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </Transition>
  </div>
</Teleport>
```

### Component Hierarchy

The Drawer component contains several key parts:

1. **Wrapper Layer** - `.my-drawer__wrapper` - Wraps the entire drawer component with fixed positioning
2. **Mask Layer** - `.my-drawer__mask` - Background mask; clicking can close the drawer
3. **Drawer Body** - `.my-drawer` - Main content area of the drawer
4. **Header Area** - `.my-drawer__header` - Title and close button area
5. **Content Area** - `.my-drawer__body` - Primary content display area
6. **Footer Area** - `.my-drawer__footer` - Footer content such as action buttons

#### Direction Class Design:

- `.my-drawer--rtl` - Slides in from right to left
- `.my-drawer--ltr` - Slides in from left to right
- `.my-drawer--ttb` - Slides in from top to bottom
- `.my-drawer--btt` - Slides in from bottom to top

## Interaction Design

### Close Mechanism

The Drawer component provides multiple ways to close:

```typescript
const handleClose = () => {
  if (props.beforeClose) {
    props.beforeClose(closeDrawer)
  } else {
    closeDrawer()
  }
}

const handleMaskClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}

onMounted(() => {
  if (props.closeOnPressEscape) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && visible.value) {
        handleClose()
      }
    })
  }
})
```

#### Close Methods:
- **Close Button** - Click the close button in the header area
- **Mask Click** - Click the mask to close (configurable)
- **ESC Key** - Press ESC to close (configurable)
- **Custom Close** - Implement custom close logic through the beforeClose callback

### Animation Implementation

The Drawer component uses a carefully designed transition strategy for animations:

```scss
/* Mask fade in/out */
.my-drawer-fade-enter-active,
.my-drawer-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.my-drawer-fade-enter-from,
.my-drawer-fade-leave-to {
  opacity: 0;
}

/* Drawer slide animation */
.my-drawer-slide-enter-active,
.my-drawer-slide-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.my-drawer-slide-enter-from,
.my-drawer-slide-leave-to {
  opacity: 0.9;
}
```

#### Animation Features:
- **Mask Layer** - Uses fade in/out effect
- **Drawer Body** - Uses slide + slight scale effect
- **Direction Adaptation** - Automatically adjusts animation direction based on the direction property
- **Visual Feedback** - Adds slight scale effect to enhance visual feedback

## Extensibility Design

The Drawer component has excellent extensibility:

1. **Direction Extension** - Supports four directions through the direction property
2. **Size Extension** - Supports flexible size configuration through the size property
3. **Content Extension** - Supports custom title, content, and footer through slots
4. **Style Extension** - Supports custom background color through the backgroundColor property
5. **Interaction Extension** - Supports custom interaction logic through beforeClose and event mechanisms

## Style Details

The Drawer component has the following characteristics in style handling:

1. **Hierarchical Structure** - Precisely controls element stacking order through z-index
   ```scss
   .my-drawer__wrapper {
     position: fixed;
     inset: 0;
     z-index: 3000;
   }
   
   .my-drawer__mask {
     z-index: 2000;
   }
   
   .my-drawer {
     z-index: 2100;
   }
   ```
2. **Animation Optimization** - Uses high-performance transform and opacity properties
3. **Visual Hierarchy** - Creates clear visual hierarchy through borders, shadows, and spacing
4. **Responsive Design** - Adapts to different screen sizes and directions
5. **Transition Effects** - Uses easing functions (ease-in-out) for more natural animations

## Performance Optimization

Performance is optimized through the following methods:

1. **Conditional Rendering** - Renders drawer content only when needed
   ```html
   <div v-if="visible" class="my-drawer__wrapper">
   ```
2. **Efficient Animation** - Uses transform and opacity for GPU-accelerated animations
3. **Event Management** - Listens and removes events on demand
4. **Scroll Control** - Disables page scrolling only when the drawer is open
5. **Memory Management** - Properly releases resources after the drawer is closed

## Design Value

The Drawer component continues the design philosophy of our component library:

1. **Separation of Concerns** - Clearly separates structure, styles, and logic
2. **Containerized Design** - Provides a complete drawer container to reduce usage complexity
3. **Animation-Driven** - Enhances user experience through carefully designed animations
4. **Multi-Direction Support** - Meets drawer display needs in different scenarios
5. **Customizability** - Provides high customization capability through rich properties and slots
