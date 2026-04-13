# useSelectComputed

### useSelectComputed: Generic Dropdown Selector Interaction Hook

## Pain Points

Dropdown selectors (Select, Dropdown, etc.) are highly interactive form controls, yet their core interaction logic is heavily duplicated across multiple components:

- Need to manage dropdown panel visibility state
- Handle focus state (`focused`) for styling and keyboard interaction
- Implement click-outside-to-close behavior
- Prevent all interactions when disabled
- Sync internal state when external `v-model` changes
- Event listeners must be properly added and removed within component lifecycle to avoid memory leaks

If each Select-like component implements this logic independently, it leads to redundant code and common issues such as:

- Click-outside failure or false triggers
- Memory leaks due to improperly removed event listeners
- Inconsistent handling of disabled states
- Focus and dropdown states out of sync

## Design Goals

The goal of `useSelect` is to **provide a lightweight, generic, and reusable dropdown interaction management solution**, completely abstracting core interactive logic like visibility, focus, and click-outside for Select-like components. Components only need to focus on option rendering and value selection logic.

## Core Features

| Feature                       | Description                                                                                                                       |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Reactive Dropdown State**   | `dropdownVisible` is a `ref<boolean>` for real-time panel visibility control                                                      |
| **Focus State Management**    | `isFocused` supports styling (e.g., border highlight) and keyboard navigation foundation                                          |
| **Click-Outside Auto-Close**  | Implemented via global `click` event listener, using selector `.select-e` as basis (customizable)                                 |
| **Disabled State Safety**     | All interaction entry points (e.g., toggle) check `disabled` first, preventing unintended operations                              |
| **Automatic Lifecycle Management** | Listener added on `onMounted`, automatically removed on `onUnmounted`; no manual handling required                            |
| **External modelValue Watching** | Reserved `watch` position for syncing selected label or other derived states                                                    |
| **Generic Type Safety**       | Supports `modelValue` of any type `T`, perfectly adapting to strings, numbers, objects, etc.                                      |

## Design Value

`useSelect` completely strips away the most error-prone and repetitive interaction control logic from Select-like components, making component implementations clean and reliable:

- All dropdown components (Select, Cascader, TreeSelect, etc.) can share the same interaction behavior, ensuring a highly consistent experience
- Click-outside logic is centrally managed, avoiding repeated implementations and missed cleanup
- Focus and disabled states are handled uniformly, supporting accessibility and visual feedback
- Component templates only need to focus on "presentation" and "option selection"; interaction details are fully delegated to the Hook
- Clear space reserved for future extensions (e.g., keyboard navigation, search filtering)