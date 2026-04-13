# Breadcrumb Component Design

## Overview

The Breadcrumb component is a core component in this component library used to display page navigation paths. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use breadcrumb navigation solution through core components such as breadcrumb.vue and breadcrumbItem.vue.

The Breadcrumb component focuses on displaying page navigation paths and providing navigation functionality, offering users a powerful and flexible breadcrumb navigation management feature that supports custom separators, route jumping, and responsive layout, effectively improving user experience when browsing multi-level pages.

## Design Philosophy

### Layered Architecture

The Breadcrumb component strictly follows a three-layer architecture design:

1. **Structure Layer** breadcrumb.vue, breadcrumbItem.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** - Handles complex reactive computations and interaction logic
3. **Presentation Layer** breadcrumb.scss, breadcrumbItem.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Breadcrumb component abstracts complex logic into core functions:

- **Separator Management**: Shares separator configuration between parent and child components through the provide/inject mechanism
- **Route Detection**: Determines whether routing is used via hasRouter
- **Last Item Detection**: Determines whether it is the last item through the isLast computed property

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

Props design for the Breadcrumb container component:

```typescript
defineProps({
  /** Separator */
  separator: {
    type: String,
    default: '/',
  },
  /** Separator icon */
  separatorIcon: {
    type: [Object, Function],
    default: null,
  },
})
```

Props design for the BreadcrumbItem component:

```typescript
defineProps({
  /** Route target */
  to: {
    type: [String, Object],
    default: '',
  },
  /** Whether to replace history */
  replace: {
    type: Boolean,
    default: false,
  },
})
```

#### Parameter Description:
- separator: The separator between breadcrumb items. Default is `'/'`.
- separatorIcon: Supports custom separator icons.
- to: Specifies the route target, supporting string or route object.
- replace: Controls whether to replace history records.

### Interaction Design

The Breadcrumb component provides clean navigation interaction:

#### Route Support
```vue
<MYBreadcrumb>
  <MYBreadcrumbItem to="/">Home</MYBreadcrumbItem>
  <MYBreadcrumbItem to="/components">Components</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

#### Static Text
```vue
<MYBreadcrumb>
  <MYBreadcrumbItem>Home</MYBreadcrumbItem>
  <MYBreadcrumbItem>Components</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

#### Custom Separator
```vue
<MYBreadcrumb separator=">">
  <MYBreadcrumbItem>Home</MYBreadcrumbItem>
  <MYBreadcrumbItem>Components</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

#### Custom Icon Separator
```vue
<MYBreadcrumb :separator-icon="ArrowRight">
  <MYBreadcrumbItem>Home</MYBreadcrumbItem>
  <MYBreadcrumbItem>Components</MYBreadcrumbItem>
  <MYBreadcrumbItem>Breadcrumb</MYBreadcrumbItem>
</MYBreadcrumb>
```

## Style System Design

### CSS Variable Control

The Breadcrumb component implements style control through CSS variables:

1. `--el-text-color-regular` - Regular text color
2. `--el-color-primary` - Primary color
3. `--el-text-color-secondary` - Secondary text color

### Layout System

The Breadcrumb component supports flexible layout control:

1. **Horizontal Layout** - Uses Flexbox to arrange breadcrumb items horizontally
2. **Responsive Design** - Adapts to different screen sizes
3. **Separator Spacing** - Adjusts separator spacing through SCSS variables

### State Styles

The Breadcrumb component provides corresponding styles according to different states:

1. **Default State** - Standard breadcrumb style
2. **Link State** - Hover effect for clickable items
3. **Last Item** - No separator is displayed

## Component Structure Design

### Overall Structure

The overall structure of the Breadcrumb component is as follows:

```html
<nav class="my-breadcrumb" aria-label="Breadcrumb">
  <slot v-if="$slots.default" />
</nav>
```

BreadcrumbItem component structure:

```html
<span class="my-breadcrumb-item">
  <!-- Render content -->
  <component
    :is="hasRouter ? 'router-link' : 'a'"
    v-if="to"
    :to="hasRouter ? to : undefined"
    :href="!hasRouter ? (typeof to === 'string' ? to : to.path) : undefined"
    :replace="replace"
    class="my-breadcrumb-link"
  >
    <slot v-if="$slots.default" />
  </component>
  <span v-else class="my-breadcrumb-link">
    <slot v-if="$slots.default" />
  </span>

  <!-- Separator -->
  <span v-if="!isLast" class="my-breadcrumb-separator">
    <component :is="separatorIcon" v-if="separatorIcon" />
    <template v-else>{{ separator }}</template>
  </span>
</span>
```

### Component Hierarchy

The Breadcrumb component contains several main parts:

1. **Container** - `.my-breadcrumb` - Wraps the entire breadcrumb navigation
2. **Breadcrumb Item** - `.my-breadcrumb-item` - Container for individual breadcrumb items
3. **Link** - `.my-breadcrumb-link` - Clickable link area
4. **Separator** - `.my-breadcrumb-separator` - Separator between items

## Interaction Design

### Route Support

The Breadcrumb component detects the routing environment through hasRouter:

```typescript
// Whether to use router
const instance = getCurrentInstance()
const hasRouter = !!instance?.appContext.config.globalProperties.$router
```

#### Route Implementation:
```vue
<component
  :is="hasRouter ? 'router-link' : 'a'"
  v-if="to"
  :to="hasRouter ? to : undefined"
  :href="!hasRouter ? (typeof to === 'string' ? to : to.path) : undefined"
  :replace="replace"
  class="my-breadcrumb-link"
>
  <slot v-if="$slots.default" />
</component>
```

### Separator Handling

The Breadcrumb component determines whether to display the separator through isLast:

```typescript
const isLast = computed(() => {
  const parent = instance?.parent?.subTree
  if (!parent) return false
  const children = Array.isArray(parent.children) ? parent.children.filter((v: import('vue').VNodeChild) => typeof v === 'object' && v !== null && 'type' in v && (v.type as { name?: string })?.name === 'MYBreadcrumbItem') : []
  const lastChild = children?.[children.length - 1]
  return lastChild && typeof lastChild === 'object' && 'props' in lastChild ? lastChild.props?.to === props.to &&
    instance?.vnode === lastChild : false
})
```

#### Separator Rendering:
```vue
<span v-if="!isLast" class="my-breadcrumb-separator">
  <component :is="separatorIcon" v-if="separatorIcon" />
  <template v-else>{{ separator }}</template>
</span>
```

### Separator Sharing Mechanism

The Breadcrumb component implements separator configuration sharing through provide/inject:

```typescript
provide('breadcrumbSeparator', computed(() => props.separator))
provide('breadcrumbSeparatorIcon', computed(() => props.separatorIcon))
```

## Extensibility Design

The Breadcrumb component has excellent extensibility:

1. **Custom Separator**: Supports custom separators through separator and separatorIcon properties
2. **Route Compatibility**: Automatically detects routing environment and is compatible with Vue Router
3. **Style Customization**: Adjust component style through CSS variables
4. **Accessibility Design**: Sets `aria-label="Breadcrumb"` to improve accessibility
5. **Slot Support**: Supports custom content through the default slot

## Style Details

The Breadcrumb component has the following characteristics in style handling:

1. **Responsive Design**: Supports flexible layout adaptation
2. **Consistency**: Maintains style consistency with other components in the component library
3. **Accessibility Design**: Complies with WAI-ARIA specifications
   - Sets `aria-label="Breadcrumb"`
   - Ensures keyboard navigation friendliness
4. **Clear Visual Hierarchy**: Distinguishes clickable items and current position by color
5. **Spacing Control**: Reasonably sets separator spacing to ensure readability

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache routing environment and last item judgment results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Render separators on demand (no separator for the last item)
6. Dynamically adjust styles using CSS variables

## Design Value

The Breadcrumb component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as NavMenu and Steps
