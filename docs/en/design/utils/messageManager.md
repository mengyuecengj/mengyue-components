# messageManager Utility Class

## messageManager: Global Message Manager

### Pain Points

In real-world projects, global message notifications (Message, Notification) are high-frequency feedback mechanisms, but traditional implementations often suffer from the following issues:

- Stacked messages obscure critical content or overflow the page on small screens
- Message containers for different positions (top-right, bottom-left, etc.) require repeated creation and management
- Global configuration (default duration, zIndex, position) is difficult to modify uniformly
- Dynamically created Vue instances not properly unmounted lead to memory leaks
- Logic for closing messages and batch closing is scattered and inelegant
- Direct DOM manipulation in SSR environments causes crashes

Manually creating message components everywhere results in redundant code and makes it difficult to maintain a consistent interaction and visual experience.

### Design Goals

`messageManager.ts` provides a **lightweight, powerful, and configurable global Message service**. Through singleton container management and dynamic Vue instance mounting, it achieves:

- Independent message stacks for multiple positions
- Automatic limiting of message count within the viewport to prevent overflow
- Global unified configuration and a chainable API (e.g., `message.success()`)
- Perfect SSR compatibility and automatic resource cleanup
- Elegant open, close, and batch close interfaces

### Core Features

| Feature                               | Description                                                                                                  |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Multi-Position Independent Containers** | Supports independent management for `top-left`, `top-right`, `bottom-left`, `bottom-right` positions         |
| **Viewport Height Adaptive Limiting** | Automatically calculates total message height (~48px avg). Removes oldest messages when exceeding viewport height (bottom messages removed first for top positions; top messages removed first for bottom positions). |
| **Dynamic Vue Instance Management**   | Lazily creates `MessageContainer` instances per position, mounts to body, avoiding redundant rendering        |
| **Global Configuration Support**      | Unified setting of `duration`, `position`, `zIndex`, etc., via `configureGlobal`                              |
| **Chainable Typed API**               | `message.success/info/warning/error` for quick, semantically clear invocation                                 |
| **SSR Safe**                          | Returns empty no-op functions on the server side, preventing DOM operation crashes                            |
| **Automatic Cleanup Mechanism**       | Automatically checks height when messages are removed. Containers can be manually cleaned up if long-empty (instances are not destroyed for performance). |
| **Unique ID and Manual Close**        | Each message returns an `id` and `close()` method, supporting precise closing and `closeAll()`                |

### Typical Usage

```typescript
import message from '@/utils/messageManager';

// Basic call
message('Operation successful');

// Typed calls
message.success('Saved successfully');
message.warning({ content: 'Network unstable', duration: 5000 });
message.error('Request failed, please retry');

// Custom options
message({
  content: 'Message with icon',
  type: 'info',
  position: 'bottom-left',
  duration: 0, // Does not auto-close
});

// Manual close
const handle = message.info('Long-running task');
setTimeout(() => handle.close(), 10000);

// Global close all
message.closeAll();

// Global configuration (recommended in main.ts)
message.configureGlobal({
  duration: 4500,
  position: 'top-right',
  zIndex: 5000
});
```

## Design Value
messageManager is the cornerstone of the global feedback system in the component library. It centralizes previously scattered and error-prone message creation logic, achieving:

Highly consistent visual experience: Unified message styles, animations, positions, and stacking rules

Improved user experience: Automatically prevents excessive message stacking, avoiding obstruction of critical areas

Elegant and intuitive API: Chainable calls and typed methods significantly reduce mental overhead

Safe resource management: SSR compatible, dynamic mounting, no memory leak risks

High extensibility: Easy to add features like notification sounds, max message count configuration, offsets, etc.
