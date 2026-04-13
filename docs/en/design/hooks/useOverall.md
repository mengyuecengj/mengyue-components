# useOverallComputed

### useOverallComputed: Layout and Container Overall Computation Hooks

## Pain Points

Layout systems (Layout / Row / Col) and container systems (Container / Header / Main / Aside / Footer) are the most fundamental structural components in a component library, yet they often come with massive repetitive class name and style computation logic:

- Need to generate numerous modifier classes based on props like `gutter`, `justify`, `span`, `offset`, `push/pull`
- Containers must support layout properties like `fixed` and `position`, while handling fixed positioning of header/footer
- Grid system requires precise conversion of numeric props to CSS variables (e.g., `calc(span / 24 * 100%)`)
- Width, height, background, and other dimensional styles require unified unit handling and CSS variable injection
- Each sub-region (e.g., header, main) requires independent class names and potential state classes

Implementing this logic separately in each layout component leads to highly redundant code, inconsistent naming, and difficult-to-maintain style variables.

## Design Goals

This file centrally encapsulates **overall class name and style computation logic** for layout and container components. By reusing existing `useClassComputed` and `useStyleComputed`, it provides highly consistent, configurable computation solutions, making the implementation of Layout and Container series components extremely minimal and standardized.

## Core Hooks Composition

| Hook                            | Responsibility                                                                | Applicable Components                 |
|---------------------------------|-------------------------------------------------------------------------------|---------------------------------------|
| **useContainerOverAllComputed** | Computes class names for Container and its regions (header/main/aside/footer)  | Container, Header, Main, etc.         |
| **useContainerStyle**           | Computes inline styles and CSS variables for Container dimensions, background, etc. | Container                             |
| **useLayoutOverAllComputed**    | Simultaneously computes class names and styles for Row and Col (including grid variable calculation) | Row, Col (often used together)        |

## Core Features

| Feature                           | Description                                                                                                         |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Deep Reuse of Generic Hooks**   | Fully based on `useClassComputed` and `useStyleComputed`, maintaining logical consistency                           |
| **Precise Class Name Generation** | Supports BEM `--modifier` format, automatically handling flag and prop-value classes                                 |
| **Intelligent CSS Variable Injection** | Automatically handles units (number → px), `calc` computations (grid percentages, offset, push/pull)                |
| **Full Grid System Support**      | Accurately implements all 24-grid properties: `span`, `offset`, `pull`, `push`                                       |
| **Container Layout Flexibility**  | Supports `fixed` positioning, `position-right` layout, and other common requirements                                 |
| **Type-Safe Composition**         | Uses interface merging (`CombinedProps`) to unify handling of Row and Col props                                      |
| **Zero Redundancy Design**        | All repetitive logic is centralized here; components simply call and bind the return values                          |

## Design Value

These Hooks centrally manage the most tedious aspects of layout systems—class name explosion and style variable computation—ensuring:

- Highly unified visual and behavioral consistency across all layout components
- Precise, deviation-free grid calculations
- Standardized injection of CSS variables for easy theme overrides and dynamic adjustments
- Extremely lean component code (only responsible for structure and slots)
- Ease of future extension (e.g., responsive breakpoints, more justify modes)