# Result Component Design

## Overview

The Result component is a core component in this library used for displaying result feedback. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through dynamic icon loading and slot mechanisms, it provides a complete and user-friendly result feedback solution.

The Result component focuses on handling the display of result pages, state management, and content customization. It supports multiple states (success, failure, warning, info, etc.) and flexible content expansion, offering users a powerful and flexible result feedback tool.

## Design Philosophy

### Layered Architecture

The Result component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`result.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`type.ts` and logic within `result.vue`) - Handles dynamic icon loading and slot logic.
3. **Presentation Layer** (`result.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Result component abstracts complex logic into core functions and computed properties:

- `iconMap` - Dynamically loads icon components.
- `currentIcon` - Dynamically selects an icon based on the `icon` property.
- Slot Mechanism - Supports custom subtitles and extra content.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Result component is clean and straightforward:

```typescript
export interface Props {
  /** Icon type */
  icon?: IconType;
  /** Main title */
  title?: string;
  /** Subtitle */
  subTitle?: string;
}
```

#### Parameter Descriptions:
· icon: Supports `primary`, `success`, `warning`, `error`, `info`, default is `info`.
· title: Main title text.
· subTitle: Subtitle text.

### Dynamic Icon Loading
The Result component implements dynamic icon loading via `defineAsyncComponent`:

```typescript
const iconMap: Record<IconType, Component> = {
  primary: defineAsyncComponent(() => import('./primary.vue')),
  success: defineAsyncComponent(() => import('./success.vue')),
  warning: defineAsyncComponent(() => import('./warning.vue')),
  error: defineAsyncComponent(() => import('./error.vue')),
  info: defineAsyncComponent(() => import('./info.vue')),
};

const currentIcon = iconMap[props.icon || 'info'];
```
This logic ensures icons are loaded on demand, improving performance.

## Style System Design
### CSS Variable Control
The Result component achieves style control through SCSS:

1. --icon-size - Icon size.
2. --title-color - Main title color.
3. --subtitle-color - Subtitle color.

## Layout System
The Result component supports flexible layout control:

1. Vertical Centered Layout - Default Flexbox layout.
2. Spacing Control - Adjusts spacing via SCSS variables.

## State Styles
The Result component provides corresponding styles for different states:

1. Default State - Uses info icon (gray).
2. Success State - Uses green icon.
3. Warning State - Uses yellow icon.
4. Error State - Uses red icon.
5. Primary State - Uses blue icon.

## Component Structure Design
### Overall Structure
The overall structure of the Result component is as follows:

```html
<div class="result">
  <component :is="currentIcon" class="result-icon" />
  <div class="result-title">{{ title }}</div>
  <div class="result-subtitle">
    <slot v-if="slots['sub-title']" name="sub-title"></slot>
    <span v-else>{{ subTitle }}</span>
  </div>
  <div class="result-extra">
    <slot name="extra"></slot>
  </div>
</div>
```

### Component Hierarchy
The Result component consists of four main parts:

1. **Container** - `.result` - Wraps the entire result feedback area.
2. **Icon Area** - `.result-icon` - Dynamically loaded icon.
3. **Main Title** - `.result-title` - Displays the main title text.
4. **Subtitle** - `.result-subtitle` - Displays the subtitle or slot content.
5. **Extra Content** - `.result-extra` - Displays extra content slot.

## Interaction Design
### Slot Support
The Result component supports custom content via slots:

1. Subtitle Slot - sub-title: Allows users to customize the subtitle content.
2. Extra Content Slot - extra: Allows users to add buttons or other action elements.

Example:
```vue
<MYResult title="操作成功" icon="success">
  <template #sub-title>
    <span class="custom-subtitle">自定义副标题内容</span>
  </template>
  <template #extra>
    <button class="retry-button">重试</button>
  </template>
</MYResult>
```

## Extensibility Design
The Result component offers excellent extensibility:

1. **Icon Switching:** Dynamically switches icons via the icon property.
2. **Content Customization:** Supports custom subtitles and extra content via slots.
3. **Style Customization:** Adjusts component styles via SCSS variables.

## Style Details
The Result component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Accessibility Design:** Supports screen readers recognizing text content.
4. **Animation Effects:** Smooth transition effects for icons and text.

## Performance Optimization
Performance is optimized through:

1. Using defineAsyncComponent to load icon components on demand.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.

## Design Value
The Result component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via functions.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like Button and Alert.