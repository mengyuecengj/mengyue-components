# useClassComputed

In the architecture of this component library, Hooks are the core bearers of the **logic layer**. They are not auxiliary logic attached to components, but independent, reusable abstraction units responsible for completely stripping recurring interaction and computation patterns away from components.

This directly reflects the "layer separation" philosophy:

- **Structure Layer**: Only responsible for DOM layout
- **Presentation Layer**: Only responsible for style injection
- **Logic Layer**: Managed uniformly by Hooks

The existence of Hooks makes component implementations extremely minimal—components only need to **declare** the required logic; all reactive computation and driving are handled by Hooks.

## Dynamic Class Name Computation Hook

### Pain Points

When developing UI components, one of the most common repetitive tasks is dynamically generating class names based on props. For example:

- `size="large"` → need to add `xxx--large`
- `disabled={true}` → need to add `xxx--disabled`
- `round={true}` → need to add `xxx--round`

Implementing such logic independently in each component leads to:

- Highly redundant code
- Inconsistent naming conventions
- Potential oversight of reactive updates
- High maintenance costs when theme or naming conventions change (requires modifying each component individually)

## Design Goals

The goal of `useClassComputed` is to **provide a unified, type-safe, and configurable mechanism** that completely solves the dynamic class name generation needs for all components and strips this logic entirely from the component internals.

## Core Features

| Feature               | Description                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Reactive Output**   | Returns a `ComputedRef<string[]>` that updates automatically with prop changes, perfectly aligning with Vue's reactivity system |
| **BEM-like Convention** | Default format `${baseClass}--${modifier}` ensures semantically clear and predictable class names                               |
| **Dual Generation Mechanism** | `propClasses`: for valued properties (e.g., `size`, `type`) <br>`flagClasses`: for boolean flags (e.g., `disabled`, `round`) |
| **Highly Customizable** | Supports custom formatter functions via `classNameFormatter` for scenarios like multi-level BEM or theme prefixes               |
| **Type Safe**         | Generic `<T>` strongly binds to component props, providing complete TypeScript type inference and IntelliSense                   |
| **Clear Boundaries**  | Does not bind to DOM, handle style conflicts, or involve side effects (e.g., event listeners or DOM queries)                    |

## Design Value

`useClassComputed` may seem simple, but it precisely addresses the most common "style logic coupling" issue in component libraries. It centralizes class name computation logic in one place, ensuring:

- Globally uniform naming conventions
- Predictable and configurable class name generation behavior
- Extremely lean component code (no manual class concatenation)
- Easy future evolution (e.g., integrating theme tokens, automatic dark mode suffixes)