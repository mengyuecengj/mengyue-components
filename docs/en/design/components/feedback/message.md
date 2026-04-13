# Message Component Design Documentation

## Overview

The Message component is a core component in this library used for displaying message notifications. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core components like `messageContainer.vue` and `message.vue`, it provides a complete and user-friendly message notification solution.

The Message component focuses on handling the display, management, and interaction of message notifications, offering users a powerful and flexible message notification feature. It supports multiple types (info, success, warning, error), auto-close, manual close, and position configuration, effectively enhancing the user experience in operation feedback scenarios.

---

## Design Philosophy

### Layered Architecture

The Message component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`message.vue`, `messageContainer.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`type.ts` and global `messageManager`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`message.scss`, `messageContainer.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Message component abstracts complex logic into core functions:

- `showMessage` - Handles message creation and display.
- `configureGlobal` - Handles global configuration.
- `closeAll` - Handles batch closing of messages.
- Message Timer Logic - Handles auto-close and pause functionality.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

---

## Core Feature Design

### Structured Props Design

The props design for the Message component is clean and straightforward:

```typescript
export interface MessageOption {
  /** Unique message identifier */
  id?: string;
  /** Message content */
  content?: string | VNode;
  /** Message type */
  type?: MessageType;
  /** Display duration (milliseconds) */
  duration?: number;
  /** Whether to show close button */
  showClose?: boolean;
  /** Whether to allow HTML strings (XSS risk) */
  dangerouslyUseHTMLString?: boolean;
  /** Custom icon */
  icon?: VNode | string;
  /** Message position */
  position?: Position;
  /** z-index value */
  zIndex?: number;
  /** Close callback */
  onClose?: () => void;
}
```

#### Parameter Descriptions:
· content: The message text content or VNode.
· type: Supports 'info', 'success', 'warning', 'error', 'default' types.
· duration: Message display duration; 0 or negative means no auto-close.
· showClose: Whether to show the close button.
· dangerouslyUseHTMLString: Whether to allow HTML strings (XSS risk).
· position: Supports multiple position configurations, e.g., 'top-right', 'bottom-center'.

---

### Global API Design
The Message component provides a concise global API:

```typescript
export const message = {
  success: (content: string, options?: MessageOption) => MessageHandle,
  warning: (content: string, options?: MessageOption) => MessageHandle,
  error: (content: string, options?: MessageOption) => MessageHandle,
  info: (content: string, options?: MessageOption) => MessageHandle,
  default: (content: string, options?: MessageOption) => MessageHandle
}
```

#### API Descriptions:
· message.success: Displays a success message.
· message.warning: Displays a warning message.
· message.error: Displays an error message.
· message.info: Displays an info message.
· message.default: Displays a default message.

---

## Style System Design
### CSS Variable Control
The Message component achieves style control through SCSS:

1. --message-bg - Message background color.
2. --message-color - Message text color.
3. --message-border - Message border color.

### Layout System
The Message component supports flexible layout control:

1. Position Configuration - Supports 6 position configurations:
  · top-right (default)
  · top-left
  · bottom-right
  · bottom-left
  · top-center
  · bottom-center
2. Stacked Layout - Messages stack sequentially.
3. Spacing Control - Adjusts message spacing via SCSS variables.

### State Styles
The Message component provides corresponding styles for different types:

1. Success State - Green-themed style (`.my-message--success`).
2. Warning State - Yellow-themed style (`.my-message--warning`).
3. Error State - Red-themed style (`.my-message--error`).
4. Info State - Blue-themed style (`.my-message--info`).
5. Default State - Blue-themed style (`.my-message--default`).

---

## Component Structure Design
### Overall Structure
The overall structure of the Message component is as follows:

```html
<!-- Single Message -->
<div class="my-message" :class="'my-message--' + type" @mouseenter="pause" @mouseleave="resume">
  <div class="my-message--content">{{ content }}</div>
  <button class="my-message--close" v-if="showClose" @click="close">×</button>
</div>

<!-- Message Container -->
<div class="my-message-container" :class="positionClass" :style="{ zIndex }">
  <div v-for="msg in list" :key="msg.id" class="my-message-wrapper" style="margin-top: 8px;">
    <MessageItem :id="msg.id!" v-bind="msg" @close="() => msg.id && onClose(msg.id)" />
  </div>
</div>
```

### Component Hierarchy
The Message component consists of three main parts:

1. **Message Container** - .my-message-container - Container wrapping all messages.
2. **Message Item** - .my-message - Container for a single message.
3. **Message Content** - .my-message--content - The text content of the message.
4. **Close Button*** - .my-message--close - The message's close button.


---

## Interaction Design
### Auto-Close and Pause
The Message component implements auto-close via timers and supports pausing on mouse hover:

```typescript
function startTimer() {
  if (!duration || duration <= 0) return
  clearTimer()
  start = Date.now()
  timer = window.setTimeout(() => { doClose() }, remaining)
}

function pause() {
  if (timer === null) return
  const elapsed = Date.now() - start
  remaining = Math.max(0, remaining - elapsed)
  clearTimer()
}

function resume() {
  if (duration && duration > 0) startTimer()
}
```

### Message Management
The Message component implements message creation and destruction via a global manager:

```typescript
export function showMessage(options: MessageOption): MessageHandle {
  const id = `message_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const mergedOptions = { ...globalConfig, ...options, id }
  
  // Add to message list
  messageList.value.push(mergedOptions)
  
  return {
    id,
    close: () => {
      const idx = messageList.value.findIndex(x => x.id === id)
      if (idx >= 0) messageList.value.splice(idx, 1)
      options.onClose?.()
    }
  }
}
```

### Global Configuration
The Message component supports global configuration to simplify repetitive settings:

```typescript
export function configureGlobal(config: MessageGlobalConfig) {
  Object.assign(globalConfig, config)
}
```

---

## Extensibility Design
The Message component offers excellent extensibility:

1. **Message Type Extension:** Supports extension via the MessageType type definition.
2. **Position Configuration:** Supports extension via the Position type definition.
3. **Custom Content:** Supports VNode as message content.
4. **Custom Icon:** Supports custom icon via the icon property.
5. **Global Configuration:** Supports global configuration via configureGlobal.


---

## Style Details
The Message component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Accessibility Design:** Ensures message notifications are screen-reader friendly.
4. **Smooth Transitions:** Smooth transition effects for message show/hide.
5. **Security Considerations:** HTML strings are disabled by default to prevent XSS attacks.

---

## Performance Optimization
Performance is optimized through:

1. Precisely controlling message display duration using timers.
2. Pausing timers on mouse hover to improve user experience.
3. Moving complex logic into independent functions.
4. Avoiding unnecessary re-renders.
5. Leveraging Vue 3 Composition API for runtime efficiency.
6. Creating and destroying messages on demand to reduce DOM operations.

---

## Design Value
The Message component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Notification and Toast.