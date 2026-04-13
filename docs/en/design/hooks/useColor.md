# useColorComputed

## useColorComputed: Color and State Style Computation Hook

## Pain Points

In UI components (e.g., Button, Tag, Badge), handling colors and interaction state styles is often one of the most complex and repetitive logic sets:

- Need to support custom `colorBg`, `colorText`, `colorBorder`
- In `plain` (plain) mode, background, text, and border colors must use theme variables based on type (e.g., primary, success) and handle transparency
- Different interaction states (hover, active) require dynamic color switching
- Disabled state requires uniform transparent background with fixed text/border colors
- Colors may be CSS variables (e.g., `var(--el-color-primary)`) and require transparency conversion (e.g., `rgba(var(...), 0.2)`)

Implementing these rules independently in each component leads not only to redundant logic but also to visual inconsistency, theme switching failures, and difficult dark mode adaptation.

## Design Goals

The goal of `useColorComputed` is to **centrally and uniformly handle all color and state style logic for components**, providing a reactive, configurable inline style computation solution deeply integrated with the theme system. Components only need to pass a few color-related props to obtain complete visual state representation.

## Core Features

| Feature                       | Description                                                                                                                       |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Reactive Style Output**     | Returns `ComputedRef<CSSProperties>`, supporting real-time reactivity for `Ref` types like `isHovered`/`isActive`                |
| **Complete State Coverage**   | Prioritization: `disabled` → `plain` → custom colors → base fallback; clear and conflict-free logic                             |
| **Intelligent Plain Mode Handling** | Distinguishes between `default` type and colored types (e.g., primary), automatically uses theme variables and handles hover/active switching with transparency |
| **Deep Theme Variable Support** | Uses `useColorUtils.toRGBA` to achieve transparency conversion for `var(--xxx)`, ensuring seamless collaboration with CSS variable systems |
| **Custom Color Priority**     | When `colorBg`, `colorText`, or `colorBorder` are passed, they directly override theme logic, supporting full customization      |
| **Uniform Disabled State**    | Fixed as transparent background + white text/border for strong visual consistency                                                |
| **Type Safe**                 | `ColorComputedProps` interface clearly constrains props, supporting full TypeScript inference                                    |

## Design Value

`useColorComputed` is a critical part of visual consistency in the component library. Together with `useClassComputed` and `useStyleComputed`, it forms a complete presentation layer solution:

- `useClassComputed` → Handles structured class names (BEM)
- `useStyleComputed` → Handles general inline styles like dimensions and layout
- `useColorComputed` → Focuses on color and states (plain, hover, active, disabled)

Through this Hook:

- Color behavior is highly consistent across all components, eliminating repetitive complex conditionals
- Deeply bound to the theme system (CSS variables), automatically adapting when themes switch
- Supports custom colors and plain mode, balancing flexibility and standards
- Smooth reactive state switching for a unified interactive experience