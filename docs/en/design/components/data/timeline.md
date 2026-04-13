# Timeline Component Design

## Overview

The Timeline component is a core component in this library used for displaying chronological information. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core components like `MYTimeline` and `MYTimelineItem`, it provides a complete and user-friendly timeline solution.

The Timeline component focuses on handling the display and organization of chronological sequence information, offering users a powerful and flexible timeline management feature. It supports both vertical and horizontal layout directions, effectively enhancing the user experience when browsing time-series data.

## Design Philosophy

### Layered Architecture

The Timeline component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`timeline.vue`, `timelineItem.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** - Due to the relatively simple component logic, the primary logic is implemented directly within the components.
3. **Presentation Layer** (`timeline.scss`, `timelineItem.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Timeline component abstracts core logic into:

- `direction` - Controls the layout direction of the timeline.
- Node Connector Logic - Handles the connecting lines between timeline items.
- Timestamp Area - Handles the display of time information.

This design keeps the component concise while providing sufficient flexibility.

## Core Feature Design

### Structured Props Design

The props design for the Timeline component is clean and straightforward:

```typescript
defineProps<{
  /** Timeline direction */
  direction?: 'vertical' | 'horizontal';
  /** Theme */
  theme?: string;
  /** Custom style */
  style?: import('vue').StyleValue;
}>();
```

Props design for the TimelineItem component:

```typescript
defineProps<{
  /** Timestamp */
  timestamp: string;
  /** Node color */
  color?: string;
  /** Icon */
  icon?: string;
}>();
```

#### Parameter Descriptions:
- direction: Supports 'vertical' (default) and 'horizontal' directions.
- timestamp: Timestamp information for the timeline item.
- color: Node color, supports customization.
- style: Supports custom inline styles.

### Layout System
The Timeline component supports two primary layouts:

```typescript
withDefaults(defineProps<{
  direction?: 'vertical' | 'horizontal';
  // ...
}>(), {
  direction: 'vertical'
});
```

#### Layout Descriptions:
· vertical: Vertical layout (default), timeline items arranged from top to bottom.
· horizontal: Horizontal layout, timeline items arranged from left to right.

## Style System Design
### CSS Variable Control
The Timeline component achieves style control through SCSS:
1. --timeline-node-color - Node color.
2. --timeline-line-color - Connecting line color.
3. --timeline-timestamp-color - Timestamp color.

### Layout System
The Timeline component supports flexible layout control:
1. Vertical Layout - Uses Flexbox to vertically arrange timeline items by default.
2. Horizontal Layout - Uses Flexbox to horizontally arrange timeline items.
3. Spacing Control - Adjusts item spacing via SCSS variables.

### State Styles
The Timeline component provides corresponding styles for different states:
1. Default State - Standard timeline style.
2. Custom Color State - Node color customized via the color property.
3. Last Item State - The last timeline item does not display a connecting line.

---

## Component Structure Design
### Overall Structure
The overall structure of the Timeline component is as follows:

```html
<!-- Timeline Container -->
<div class="my-timeline" :class="[direction]" :style="style">
  <slot />
</div>

<!-- Timeline Item -->
<div class="my-timeline-item">
  <div class="timeline-timestamp">
    <slot name="timestamp">{{ timestamp }}</slot>
  </div>
  <div class="timeline-node">
    <div class="timeline-dot" :style="{ backgroundColor: color }"></div>
    <div class="timeline-line"></div>
  </div>
  <div class="timeline-content">
    <slot />
  </div>
</div>
```

### Component Hierarchy
The Timeline component consists of three main parts:

1. Timeline Container - .my-timeline - Wraps the entire timeline.
2. Timeline Item - .my-timeline-item - Container for a single time point.
3. Timestamp Area - .timeline-timestamp - Displays time information.
4. Node Area - .timeline-node - Contains the node and connecting line.
5. Content Area - .timeline-content - Displays detailed content.

## Interaction Design
### Timeline Direction Switching
The Timeline component achieves direction switching via the direction property:

```scss
.my-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px 0;
}

.my-timeline.horizontal {
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
}
```

### Node Connector Handling
The Timeline component handles node connectors via CSS:

```scss
.timeline-node {
  position: relative;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .timeline-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #409eff;
    z-index: 1;
    box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.2);
  }
  .timeline-line {
    position: absolute;
    top: 14px;
    bottom: -30px;
    width: 2px;
    background-color: #e4e7ed;
  }
  .my-timeline-item:last-child .timeline-line {
    display: none;
  }
}
```

### Custom Timestamp
The Timeline component supports custom timestamps via slots:

```vue
<MYTimelineItem timestamp="2023-01-01">
  <template #timestamp>
    <span class="custom-timestamp">自定义时间</span>
  </template>
  内容
</MYTimelineItem>
```

## Extensibility Design
The Timeline component offers excellent extensibility:

1. Layout Switching: Control timeline direction via the direction property.
2. Node Customization: Customize node color via the color property.
3. Slot Support: Supports custom timestamps and content via slots.
4. Style Customization: Customize inline styles via the style property.

## Style Details
The Timeline component features the following style handling characteristics:

1. Responsive Design: Supports flexible layout adaptation.
2. Consistency: Maintains style consistency with other library components.
3. Accessibility Design: Ensures timeline information is screen-reader friendly.
4. Clear Visual Hierarchy: Creates a clear visual hierarchy through nodes, lines, and timestamps.

## Performance Optimization
Performance is optimized through:

1. Implementing connector effects using simple CSS.
2. Avoiding unnecessary reflows and repaints.
3. Leveraging Vue 3 Composition API for runtime efficiency.
4. Keeping component logic simple to reduce computation.

## Design Value
The Timeline component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. Simplicity and Clarity: Provides core functionality, avoiding over-engineering.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like Card and List.