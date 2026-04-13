# useColorUtils

### useColorUtils: Collection of Color Utility Functions

## Pain Points

In modern UI component libraries, color handling is central to visual consistency, yet it often involves scattered, repetitive, and error-prone logic:

- Need to convert hex or rgb colors to `rgba` with transparency
- Theme or dynamic colors need global injection into `:root` CSS variables (e.g., `--primary-color`)
- Plain modes often require adding transparency to theme variables (e.g., `rgba(var(--el-color-primary), 0.2)`)
- Server-side rendering (SSR) environments cannot access `document`; global style injection must be handled safely
- Dynamically injected global variables can cause memory leaks or multi-instance pollution if not cleaned up

These seemingly simple requirements, if implemented disparately across components, lead to inconsistent conversion rules, SSR errors, and style leaks.

## Design Goals

`useColorUtils` is not a traditional reactive Hook but a **pure collection of utility functions** dedicated to providing unified, safe, and reusable implementations for color-related operations. It serves as the underlying foundation for color Hooks like `useColorComputed`, aiming to:

- Centralize all color conversion and global injection logic
- Ensure SSR compatibility and client-side safety
- Provide automatic cleanup mechanisms to prevent style pollution

## Core Utility Functions

| Function              | Responsibility                                                                                       | Key Features                                                                                             |
|-----------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **toRGBA**            | Converts `#xxx`, `#xxxxxx`, or `rgb()` color to `rgba(..., opacity)`                                | Pure string processing, no DOM dependency, fully SSR safe<br>Supports 3-digit and 6-digit hex<br>Returns `transparent` for invalid input |
| **applyGlobalColor**  | Dynamically injects a color value into `:root` CSS custom properties                                  | Client-only (automatically skipped in SSR)<br>Auto-cleans up variable on `onUnmounted`<br>Prevents stale values on multi-instance/switching |

## Design Highlights

- **SSR Friendly**: All DOM-related operations strictly check `typeof document !== 'undefined'`, preventing server-side crashes.
- **Automatic Resource Management**: `applyGlobalColor` registers an `onUnmounted` cleanup function when injecting global variables, ensuring removal upon component destruction—perfect for dynamic theme switching or multi-instance scenarios.
- **Lightweight Pure Functions**: `toRGBA` has no dependency on Vue reactivity or lifecycle; it's pure string parsing, safe to call in any environment (setup, utils, or even non-Vue contexts).
- **Deep Collaboration with Theme System**: Designed specifically for CSS variables (e.g., `var(--btn-color-primary)`), easily achieving transparency overlay effects with `toRGBA`.

## Design Value

Though small, `useColorUtils` resolves all the "hidden pains" of color handling in component libraries:

- Unifies conversion rules, avoiding disparate implementations across components
- Safely handles SSR and client boundaries
- Automatically cleans up global styles, preventing leaks
- Provides a solid foundation for higher-level color Hooks like `useColorComputed`