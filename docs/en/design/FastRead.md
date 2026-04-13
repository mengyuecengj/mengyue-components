# 💡 Component Design Philosophy

> **mengyue-components** is not about "building components"—it's about "distilling ideas."<br />
> Through reusable structures, semantic design, and a unified logical model, we aim to shift frontend development from "piling up code" to "constructing systems."<br />
> The design philosophy has always been: **achieve the richest and most complex functionality with the fewest lines of code.**

This is not an introduction to component usage, but rather a record of the **thinking logic and philosophical principles** behind the entire component library design process.  
What follows is not "how to use a specific component," but "why this component exists" and "how this component was designed."

## 🧭 The Starting Point of Design: Beginning with Problems

Every component is born from a "pain point."
In real-world projects, the challenge we face is not a "lack of components," but a "lack of a coherent solution."
Therefore, the design of this library has never been about stacking features; it revolves around two fundamental questions:

1. **What constitutes a truly universal abstraction?**  
   We want components to be reusable across multiple projects, not one-off artifacts.  
2. **How can we decouple interaction logic from visual presentation?**  
   This allows components to be reused across different themes, platforms, or interaction layers.

In other words, every component emerges as "problem-driven."
There is no design without a purpose—only targeted solutions.

## 🧩 The Boundaries of Abstraction: Design Is Not Creation, But Deliberate Choice

The core of component design lies not in "what it can do," but in "**what it does not do**."  
Over-encapsulation makes components bloated, while over-abstraction strips away practical value.

The strategy of `mengyue-components` is to clearly define three layers of boundaries within each component's lifecycle:

- **Structural Boundary**: Define only the foundational structure; do not interfere with the user's business styles.
- **Logical Boundary**: Responsible solely for internal component logic; does not assume external state management.
- **Extensibility Boundary**: Provide slots and event interfaces, leaving room for external "re-design."

> Design maturity is not measured by the number of features, but by knowing exactly where to stop.

## 🧠 The Philosophy of Components: From "Parts" to "Language"

In the early stages of design, we identified a critical issue: if components are merely "parts," they can only be assembled mechanically. But if they can become a "language," developers can use them to "express ideas."

Thus, we established a goal: equip every component with **semantic consistency** and **composability**, enabling them to combine into complex logic and interactions much like words form sentences.
This philosophy gave rise to three design principles:

1. **Everything is Expression**: A button is not just a clicker; it is a declaration of an action.  
2. **Everything is Composable**: A component is not a black box; it is a piece of a larger puzzle.  
3. **Everything Has Semantics**: Component naming, properties, and behaviors must serve clear expression.

## ⚙️ The "Layer Separation" Concept: From Visuals to Logic

Traditional UI component libraries often tightly couple "visuals + logic," leading to poor reusability. Therefore, we decompose into three parallel layers:

1. **Structure Layer**: The component's foundational DOM and interactive regions.  
2. **Logic Layer**: Manages internal state and event flows via Composition API.
3. **Presentation Layer**: A unified styling system based on Design Tokens, responsible for visual consistency.

The significance of this design is:
> When styles change, logic remains untouched;
> When logic changes, structure stays intact.  

This clear layer separation ensures the library's maintainability and long-term evolution within complex projects.

## 🧭 State and Controllability: Making Components "Obedient" but Not "Rigid"

Components should operate autonomously yet remain fully controllable. Therefore, we emphasize the coexistence of **"Controlled and Uncontrolled Modes."**

- **Uncontrolled Mode**: Users provide minimal necessary configuration; the component manages its internal state automatically.  
- **Controlled Mode**: Through mechanisms like `v-model`/`modelValue` and event callbacks, users can take over internal logic.

This dual-mode approach makes components both "plug-and-play" and "deeply customizable."  
We call this pattern **"Progressive Controllability"** — developers only need to engage with complexity as required.

## 🔄 Composable Logic and Extensible Architecture

With the widespread adoption of Vue 3's Composition API, we view logic reuse as a core competitive advantage. The internal logic of `mengyue-components` is almost entirely implemented using composable encapsulation:

- Common state logic is extracted into Hooks (e.g., `useVisible`, `useKeyboard`, `useTheme`).
- Components communicate via custom events and context to avoid tight coupling.
- A plugin mechanism allows developers to extend functionality through a unified entry point without modifying source code.

> A component library is not a closed system; it is a thriving ecosystem.

## 🧩 Accessibility and Interaction Ethics

A modern component library must consider **Accessibility**.  
Our design philosophy holds that "interaction is not merely a visual experience, but an inclusive design."

- All interactive elements support keyboard navigation and ARIA attributes.
- Animation pacing adheres to the "perceptual comfort principle," avoiding abruptness and harsh flashing.
- Error messages and state changes incorporate non-visual cues (e.g., screen reader announcements or focus management).

> The warmth of technology comes from thoughtful design.

## 🧾 From Tools to Ideas

Looking back at the entire design process, we have not been pursuing "more components," but rather "better ways of expression."

The significance of **mengyue-components** lies in:

- Establishing a design language that can be understood, inherited, and adapted;
- Ensuring every component has clear boundaries and purpose;
- Making "componentization" not just an engineering method, but a way of thinking about problems.

> 💬 "What we create are not buttons, tables, or dialogs—they are the grammar of frontend expression."  
> When developers begin to speak using this language, the design of the component library is truly complete.

## Note
> Some components in the library utilize hooks or utility functions. It is recommended to familiarize yourself with the meanings of these functions before reading further.