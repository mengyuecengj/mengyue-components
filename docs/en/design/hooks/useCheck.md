# useCheckComputed

## Dedicated Logic Hooks for Radio and Checkbox Components

### Pain Points

Radio and Checkbox are among the most common interactive controls in forms, yet their implementation often involves a significant amount of repetitive logic:

- The logic for determining the `checked` state must be compatible with both standalone usage and usage within a Group wrapper.
- The disabled state must merge the component's own `disabled` prop with the Group's `disabled` context.
- Value changes must correctly handle updates for arrays (Checkbox) versus single values (Radio), and trigger both `update:modelValue` and `change` events.
- Integration with form components (e.g., Form / FormItem) requires lifecycle management for field registration, resetting, and clearing validation.
- Class states (e.g., `--checked`, `--disabled`) must be updated reactively.

Implementing this logic independently in each component leads not only to code redundancy but also to high risks of inconsistent behavior and overlooked edge cases.

## Design Goals

The `useCheckComputed.ts` file centralizes all common logic for radio and checkbox components. Through multiple small, focused composable hooks, it provides a **unified, reusable, and type-safe** solution, allowing the implementation of Radio and Checkbox components to be extremely streamlined while offering perfect support for:

- Standalone usage
- Usage within a Group wrapper
- Integration with Form / FormItem
- Two-way binding with `v-model`

## Core Hooks Composition

| Hook                | Responsibility                                                                              | Key Features                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **useFormField**    | Handles field registration, resetting, and clearing validation with FormItem.                | Automatically registers on `onMounted` and unregisters on `onBeforeUnmount`; supports `resetField`. |
| **useInputState**   | Computes `isChecked` and `isDisabled` states, compatible with both Group and standalone modes. | Prioritizes Group's `modelValue`/`disabled`; supports comparison with both arrays and single values. |
| **useInputClasses** | Generates an array of reactive class names based on checked/disabled states.                 | Concise and reusable; supports custom prefixes (e.g., `my-radio`, `my-checkbox`).                 |
| **useInputChange**  | Handles `change` events, correctly updating `modelValue` (array or single) and firing events. | Distinguishes between Checkbox (array manipulation) and Radio (direct assignment); prevents trigger when disabled. |

## Design Highlights

- **Flawless Group Compatibility**: Retrieves `radioGroup` or `checkboxGroup` context via `inject`. All state and change logic defers to the Group context first, eliminating duplicate implementations.
- **Type-Safe Generics**: `GroupContext<M>` supports arbitrary `modelValue` types. `useInputState` and `useInputChange` use generics to accurately infer differences between Radio (single value) and Checkbox (array).
- **Minimal Intrusiveness**: Each hook has a single responsibility. Components only need to compose the necessary hooks without concern for the underlying implementation details.
- **Deep Integration with Form System**: Automatically handles field registration and resetting, working seamlessly with FormItem's validation and `reset` functionality without requiring extra code.
- **Rigorous Edge Case Handling**: Prevents changes when disabled; uses `String()` for value comparison to avoid type pitfalls; employs spread operators for array updates to prevent reference issues.

## Design Value

`useCheckComputed` abstracts the complex state management, event handling, and form integration logic previously scattered across Radio and Checkbox implementations into four small, composable hooks, achieving:

- **Highly consistent behavior** (seamless switching between standalone and Group modes)
- **Minimal code** (component logic under 30 lines)
- **Ease of maintenance and extension** (new features can be added by enhancing this single file)
- **Flawless collaboration** with other component library systems (e.g., Form, Class/Style Hooks)