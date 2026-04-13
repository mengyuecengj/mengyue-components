# useScrollComputed

### useScrollComputed: Unified Scrollbar Style Management Hooks

## Pain Points

Native browser scrollbar styles vary widely, are difficult to unify, and modern UI designs often require custom appearances (colors, width, hover effects). Common issues include:

- Global scrollbar styles cannot be directly controlled via ordinary CSS variables (must be applied to `:root`)
- Different components (Scrollbar, Virtual List, overflowing containers) have repetitive scrollbar styling needs
- Dynamic theme switching requires real-time scrollbar color updates and cleanup on component destruction
- Coexistence of local and global scrollbar requirements (global affects entire page, local only affects container)
- Inconsistent handling of width/height units, often missing `px` conversion
- Uncleaned global styles lead to residue or pollution during multi-instance or switching scenarios

If each scroll-related component handles this logic independently, it results in style inconsistency, missed cleanup, and difficult theme adaptation.

## Design Goals

This file provides two complementary scrollbar style management solutions:

- `useScrollStyles`: **Global scrollbar style control**, dynamically injected into `:root` with automatic cleanup
- `useScrollVariables`: **Local scrollbar style control**, returns a CSS variables object suitable for individual containers

The common goal is to **unify scrollbar visual specifications, support both global and local modes, and perfectly adapt to dynamic themes and component lifecycles**.

## Core Utility Comparison

| Hook                     | Applicable Scenario                                   | Scope          | Key Features                                                                                     |
|--------------------------|-------------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------|
| **useScrollStyles**      | Affecting entire page scrollbar (e.g., global theme)  | Global `:root` | Automatically injects/cleans global variables<br>Reactive `ComputedRef`<br>Lifecycle safe       |
| **useScrollVariables**   | Custom Scrollbar container or local overflow area      | Local container | Returns plain object, no side effects<br>Auto unit handling<br>Variable name prefix isolation |

## Core Features

| Feature                               | Description                                                                                                            |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Automatic Lifecycle Management for Global Styles** | Injects `:root` variables on `onMounted`, automatically removes on `onUnmounted`, preventing style leaks             |
| **Reactive Local Styles**             | `useScrollStyles` returns `ComputedRef<CSSProperties>`, supporting real-time updates with prop changes                 |
| **Intelligent Unit Handling**         | `scrollWidth`/`scrollHeight` numbers auto-appended with `px`, strings passed through as-is                            |
| **Variable Name Isolation**           | Local variables use `--scrollbar-container-*` prefix to avoid conflicts with global ones                               |
| **Unified Global Variables**          | Uses `--global-scroll-*` series to ensure consistent scrollbar visuals across the entire library                       |
| **SSR Safe**                          | DOM operations only execute on client side (implicitly via `onMounted`/`onUnmounted`)                                  |

## Design Value

These two tools together form a complete scrollbar style solution for the component library:

- **Global consistency**: `useScrollStyles` ensures all native scrollbars update synchronously during theme changes
- **Local flexibility**: `useScrollVariables` supports independent custom appearance for individual containers
- **Safe and reliable**: Automatic cleanup mechanisms prevent style pollution, ideal for dynamically loaded components
- **Seamless theme integration**: Standardized variable names and unified color props
- **Reduced repetition**: All scrollbar-related style logic is centralized here; components need not worry about implementation details