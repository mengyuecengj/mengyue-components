# useStyleComputed

## Dynamic Style Computation Hook

### Pain Points

Another high-frequency repetitive task in UI component development is dynamically generating inline styles based on props. Common scenarios include:

- `size="large"` → need to set larger `font-size`, `padding`, etc.
- `width={200}` or `width="200px"` → need to correctly convert to pixel values
- Components need uniform injection of CSS variables (e.g., `--primary-color`)
- Certain styles require complex combination logic (e.g., computing `border-radius` from multiple props)

Manually constructing style objects in templates or setup leads to redundant code and common pitfalls:

- Inconsistent unit handling (numbers not appended with `px`)
- Missing type checks
- Scattered CSS variable management
- Difficult-to-extend custom style logic

## Design Goals

The goal of `useStyleComputed` is to **provide a unified, type-safe, and configurable inline style computation mechanism**, completely stripping all style-related logic from components and allowing them to focus solely on structure and behavior.

## Core Features

| Feature                 | Description                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Reactive Output**     | Returns `ComputedRef<CSSProperties>`, automatically updating the style object with prop changes                                    |
| **Prop-to-Style Mapping** | Maps props directly to CSS properties via `propToStyleMap`, with automatic `px` addition for common dimension properties           |
| **Intelligent Unit Handling** | For properties like `fontSize`, `width`, `height`, automatically converts numbers to `px` strings                               |
| **CSS Variable Support** | Uniformly injects custom CSS variables via `cssVariables`, facilitating theme system usage                                        |
| **Custom Extension**    | `customStyleLogic` callback allows injection of complex style computation logic (e.g., multi-prop combinations)                    |
| **Type Safe**           | Generic `<T>` strongly binds to component props, providing complete TypeScript IntelliSense                                        |
| **Clear Boundaries**    | Only responsible for computing style objects; does not deal with class names, DOM operations, or media queries                     |

## Design Value

`useStyleComputed` and `useClassComputed` form a dual approach for class names and inline styles:

- `useClassComputed` handles structured, theme-overridable BEM class names (main force of the presentation layer)
- `useStyleComputed` handles dynamic, precise inline styles that are difficult to achieve with class names (logic layer supplement)

Through this Hook, the entire component library achieves:

- Highly centralized style logic, avoiding inconsistencies caused by scattering across components
- Uniform unit and type handling, eliminating low-level errors
- Standardized CSS variable injection for deep integration of theme system and dynamic styles
- Easy extension of complex style combinations without polluting component core logic
- Extremely clean component templates requiring only a single `:style` binding