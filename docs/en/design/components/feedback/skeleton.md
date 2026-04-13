# Skeleton Component Design

## Overview

The Skeleton component is a core component in this library used for displaying content loading states. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core components like `MYSkeleton` and `MYSkeletonItem`, it provides a complete and user-friendly skeleton screen solution.

The Skeleton component focuses on handling the display of content loading states, offering users a powerful and flexible skeleton screen management feature. It supports multiple skeleton types, animation effects, and theme switching, effectively enhancing the user experience during content loading.

## Design Philosophy

### Layered Architecture

The Skeleton component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`skeleton.vue`, `skeletonItem.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`skeleton.ts`, `skeletonItem.ts`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`skeleton.scss`, `skeletonItem.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Skeleton component abstracts complex logic into core functions:

- `useStyleComputed` - Handles dynamic style computation.
- `skeletonProps` - Defines the property interface for the skeleton component.
- `skeletonItemProps` - Defines the property interface for the skeleton item component.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Skeleton component is clean and straightforward:

```typescript
export const skeletonProps = {
  /** Whether to show loading state */
  loading: {
    type: Boolean,
    default: true,
  },
  /** Whether to enable animation */
  animated: {
    type: Boolean,
    default: true,
  },
  /** Number of skeleton items */
  count: {
    type: Number,
    default: 3,
  },
  /** Whether to use random width */
  randomWidth: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false,
  },
  /** Theme */
  theme: {
    type: String as PropType<SkeletonTheme>,
    default: 'light',
  },
}
```

Props design for the SkeletonItem component:

```typescript
export const skeletonItemProps = {
  /** Skeleton type */
  variant: {
    type: String as PropType<SkeletonItemVariant>,
    default: 'text',
  },
  /** Width */
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '100%',
  },
  /** Height */
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 16,
  },
}
```

#### Parameter Descriptions:
· **loading:** Controls whether to show the skeleton screen; true shows skeleton, false shows actual content.
· **animated:** Controls whether animation effects are enabled.
· **count:** Sets the default number of skeleton items.
· **randomWidth:** Sets whether text skeleton items use random width.
· **theme:** Supports 'light' or 'dark' themes.
· **variant:** Supports multiple skeleton types like 'text', 'circle', 'rect'.

### Skeleton Type Support
The Skeleton component supports multiple skeleton types:

```typescript
export type SkeletonItemVariant = 'text' | 'circle' | 'rect' | string
```

#### Type Descriptions:
- text: Text skeleton, default height 1.2em.
- circle: Circular skeleton, height equals width, border-radius 50%.
- rect: Rectangular skeleton, has fixed border radius.
- image: Image skeleton, has fixed aspect ratio.

## Style System Design
### CSS Variable Control

The Skeleton component achieves style control through CSS variables:

1. `--skeleton-bg` - Skeleton background color.
2. `--skeleton-animation-bg` - Animation background color.
3. `--skeleton-animation-speed` - Animation speed.

### Layout System
The Skeleton component supports flexible layout control:

1. **Vertical Layout** - Default Flexbox layout arranging items vertically.
2. **Spacing Control** - Adjusts item spacing via SCSS variables.

### State Styles
The Skeleton component provides corresponding styles for different states:
1. **Loading State** - Displays skeleton screen.
2. **Completed State** - Displays actual content.
3. **Animation State** - Displays shimmer animation effect.

## Component Structure Design
### Overall Structure
The overall structure of the Skeleton component is as follows:

```html
<div class="my-skeleton" :class="{ 'my-skeleton--animated': animated }" :style="skeletonStyles">
  <div v-if="loading" class="my-skeleton__wrapper">
    <slot v-if="$slots.template" name="template"></slot>
    <div v-else class="my-skeleton__default">
      <MYSkeletonItem v-for="index in count" :key="index" variant="text" />
    </div>
  </div>
  <div v-else class="my-skeleton__content">
    <slot></slot>
  </div>
</div>
```
Structure of the SkeletonItem component:
```html
<div class="my-skeleton-item" :class="`my-skeleton-item--${variant}`" :style="itemStyles"></div>
```

### Component Hierarchy
The Skeleton component consists of four main parts:

1. **Container** - .my-skeleton - Wraps the entire skeleton screen area.
2. **Skeleton Wrapper** - .my-skeleton__wrapper - Container for skeleton items.
3. **Default Skeleton** - .my-skeleton__default - Default skeleton structure.
4. **Actual Content** - .my-skeleton__content - Actual content displayed after loading.

The SkeletonItem component includes basic skeleton items:

1. **Base Class** - .my-skeleton-item - Base styles for skeleton items.
2. **Type Classes** - .my-skeleton-item--text/--circle/--rect - Different skeleton item types.

## Interaction Design
### Animation Implementation
The Skeleton component uses CSS animation for the shimmer effect:

```scss
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

This animation is implemented via pseudo-elements for performance optimization:

```scss
.my-skeleton--animated .my-skeleton-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skeleton-animation-bg),
    transparent
  );
  animation: shimmer var(--skeleton-animation-speed) infinite;
}
```

### Custom Skeleton Structure
The Skeleton component supports custom skeleton structures via slots:

```vue
<MYSkeleton :loading="isLoading">
  <template #template>
    <div class="custom-skeleton">
      <MYSkeletonItem variant="circle" width="40" height="40" />
      <div class="text-group">
        <MYSkeletonItem variant="text" width="80%" />
        <MYSkeletonItem variant="text" width="60%" />
      </div>
    </div>
  </template>
  <ActualContent />
</MYSkeleton>
```

## Extensibility Design
The Skeleton component offers excellent extensibility:

1. **State Management:** Controls display state via the loading property.
2. **Skeleton Types:** Controls skeleton type via the variant property.
3. **Theme Switching:** Controls theme via the theme property.
4. **Custom Structure:** Supports custom skeleton structures via slots.
5. **Style Customization:** Adjusts component styles via CSS variables.

## Style Details
The Skeleton component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Animation Effects:** Smooth shimmer effect using CSS animation.
4. **Accessibility Design:** Ensures loading state is screen-reader friendly.

## Performance Optimization
Performance is optimized through:
1. Using CSS animations instead of JavaScript animations.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Dynamically adjusting styles using CSS variables.
6. Rendering skeleton items on demand to reduce DOM operations.

## Design Value
The Skeleton component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Card and List.
