# Message

## Introduction

The message component is used to display operation feedback information to users.<br />
You can display message prompts through functional calls like `MYMessage()`.

## Basic Usage

Use function calls to display different types of message prompts.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showInfo'>Info</MYButton>
        <MYButton @click='showSuccess'>Success</MYButton>
        <MYButton @click='showWarning'>Warning</MYButton>
        <MYButton @click='showError'>Error</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showInfo">Info</MYButton>
        <MYButton @click="showSuccess">Success</MYButton>
        <MYButton @click="showWarning">Warning</MYButton>
        <MYButton @click="showError">Error</MYButton>
    </div>
  </template>
</ShowCode>

## Show Close Button

Use the `showClose` prop to display a close button.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton @click='showClosableMessage'>Show Close Button</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showClosableMessage">Show Close Button</MYButton>
  </template>
</ShowCode>

## Custom Duration

Use the `duration` prop to customize how long the message is displayed.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showShortMessage'>Short (1s)</MYButton>
        <MYButton @click='showLongMessage'>Long (10s)</MYButton>
        <MYButton @click='showPermanentMessage'>Permanent</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showShortMessage">Short (1s)</MYButton>
        <MYButton @click="showLongMessage">Long (10s)</MYButton>
        <MYButton @click="showPermanentMessage">Permanent</MYButton>
    </div>
  </template>
</ShowCode>

## Custom Position

Use the `position` prop to set the display position of the message.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showTopLeft'>Top Left</MYButton>
        <MYButton @click='showTopRight'>Top Right</MYButton>
        <MYButton @click='showTopCenter'>Top Center</MYButton>
        <MYButton @click='showBottomLeft'>Bottom Left</MYButton>
        <MYButton @click='showBottomRight'>Bottom Right</MYButton>
        <MYButton @click='showBottomCenter'>Bottom Center</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showTopLeft">Top Left</MYButton>
        <MYButton @click="showTopRight">Top Right</MYButton>
        <MYButton @click="showTopCenter">Top Center</MYButton>
        <MYButton @click="showBottomLeft">Bottom Left</MYButton>
        <MYButton @click="showBottomRight">Bottom Right</MYButton>
        <MYButton @click="showBottomCenter">Bottom Center</MYButton>
    </div>
  </template>
</ShowCode>

## HTML Content Support

Use the `dangerouslyUseHTMLString` prop to support HTML content (be aware of XSS risks).

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton @click='showHTMLMessage'>Show HTML Content</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showHTMLMessage">Show HTML Content</MYButton>
  </template>
</ShowCode>

## Manual Close Control

You can manually control the closing of a message via the return value.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showManualMessage'>Show Manually Closable Message</MYButton>
        <MYButton @click='closeManualMessage' :disabled='!manualMessageHandle'>
            Manual Close
        </MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showManualMessage">Show Manually Closable Message</MYButton>
        <MYButton @click="closeManualMessage" :disabled="!manualMessageHandle">
            Manual Close
        </MYButton>
    </div>
  </template>
</ShowCode>

## Close Callback

Use the `onClose` prop to execute a callback function when the message is closed.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton @click='showMessageWithCallback'>Show Message with Callback</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showMessageWithCallback">Show Message with Callback</MYButton>
  </template>
</ShowCode>

## Offset Setting

Use the `offset` prop to set the offset of the message container.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showMessageWithOffset'>Message with Offset</MYButton>
        <MYButton @click='showMultipleOffsetMessages'>Multiple Offset Messages</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showMessageWithOffset">Message with Offset</MYButton>
        <MYButton @click="showMultipleOffsetMessages">Multiple Offset Messages</MYButton>
    </div>
  </template>
</ShowCode>

## Combined Usage

Finally, here's an example combining multiple APIs for a complete message prompt:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton @click='showComplexMessage'>Combined Usage Example</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showComplexMessage">Combined Usage Example</MYButton>
  </template>
</ShowCode>

## API Reference

### Function Calls

```typescript
// Basic usage
MYMessage(options: MessageOption): MessageHandle
MYMessage(content: string): MessageHandle

// Shortcut methods
MYMessage.success(content: string, options?: MessageOption): MessageHandle
MYMessage.info(content: string, options?: MessageOption): MessageHandle
MYMessage.warning(content: string, options?: MessageOption): MessageHandle
MYMessage.error(content: string, options?: MessageOption): MessageHandle
MYMessage.default(content: string, options?: MessageOption): MessageHandle
```

### MessageOption Parameters

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| content | Message content | string \| VNode | — | — |
| type | Message type | string | info/success/warning/error/default | `'info'` |
| duration | Display duration (ms) | number | — | `3000` |
| showClose | Show close button | boolean | — | `false` |
| dangerouslyUseHTMLString | Use HTML content | boolean | — | `false` |
| position | Message position | string | top-right/top-left/bottom-right/bottom-left/top-center/bottom-center | `'top-right'` |
| offset | Offset value | number | — | `20` |
| zIndex | z-index value | number | — | `9999` |
| onClose | Close callback | function | — | — |

### MessageHandle Return Value

| Property | Description | Type |
|----------|-------------|------|
| id | Message ID | string |
| close | Close message method | function |

### Global Configuration

```typescript
MYMessage.config({
  duration: 5000,
  position: 'top-center',
  max: 5,
  offset: 30,
  zIndex: 10000
})
```

### Type Definitions

```typescript
type MessageType = 'info' | 'success' | 'warning' | 'error' | 'default'

type Position = 
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

interface MessageOption {
  id?: string
  content?: string | VNode
  type?: MessageType
  duration?: number
  showClose?: boolean
  dangerouslyUseHTMLString?: boolean
  position?: Position
  offset?: number
  zIndex?: number
  onClose?: () => void
}

interface MessageHandle {
  id: string
  close: () => void
}

interface MessageGlobalConfig {
  duration?: number
  position?: Position
  max?: number
  offset?: number
  zIndex?: number
}
```

<script setup>
import { ref } from 'vue'
import MYButton from '../../../packages/components/button/src/button.vue'
import MYMessage from '../../../packages/components/message/src/message.vue'
import message from '../../../packages/utils/messageManager'
const manualMessageHandle = ref(null)

// Basic usage
const showInfo = () => {
    message.info('This is an info message')
    console.log('Showing info message')
}

const showSuccess = () => {
    message.success('Operation successful!')
    console.log('Showing success message')
}

const showWarning = () => {
    message.warning('Please be aware of operational risks')
    console.log('Showing warning message')
}

const showError = () => {
    message.error('Operation failed, please try again')
    console.log('Showing error message')
}

// Show close button
const showClosableMessage = () => {
    message({
        content: 'This message can be manually closed',
        type: 'info',
        showClose: true
    })
    console.log('Showing closable message')
}

// Custom duration
const showShortMessage = () => {
    message({
       content: 'This message will display for 1 second',
       type: 'success',
       duration: 1000
    })
    console.log('Showing short duration message')
}

const showLongMessage = () => {
    message({
       content: 'This message will display for 10 seconds',
       type: 'warning',
       duration: 10000
    })
    console.log('Showing long duration message')
}

const showPermanentMessage = () => {
    message({
        content: 'This message will not auto-close',
        type: 'info', 
        duration: 0,
        showClose: true
    })
    console.log('Showing permanent message')
}

// Custom position
const showTopLeft = () => {
    message({
       content: 'Top left message',
       position: 'top-left'
    })
    console.log('Showing top left message')
}

const showTopRight = () => {
    message({
        content: 'Top right message',
        position: 'top-right'
     })
    console.log('Showing top right message')
}

const showTopCenter = () => {
    message({
        content: 'Top center message',
        position: 'top-center'
    })
    console.log('Showing top center message')
}

const showBottomLeft = () => {
    message({
        content: 'Bottom left message',
        position: 'bottom-left'
    })
    console.log('Showing bottom left message')
}

const showBottomRight = () => {
    message({
        content: 'Bottom right message',
        position: 'bottom-right'
    })
    console.log('Showing bottom right message')
}

const showBottomCenter = () => {
    message({
        content: 'Bottom center message',
        position: 'bottom-center'
    })
    console.log('Showing bottom center message')
}

// HTML content
const showHTMLMessage = () => {
    message({
        content: '<strong>Bold text</strong> and <span style="color: red;">red text</span>',
        dangerouslyUseHTMLString: true
    })
    console.log('Showing HTML content message')
}

// Manual close
const showManualMessage = () => {
    manualMessageHandle.value = message({
        content: 'This message needs to be closed via button',
        type: 'info',
        duration: 0
    })
    console.log('Showing manually closable message')
}

const closeManualMessage = () => {
    if (manualMessageHandle.value) {
        manualMessageHandle.value.close()
        manualMessageHandle.value = null
    }
    console.log('Manually closing message')
}

// Close callback
const showMessageWithCallback = () => {
    message({
        content: 'Callback will be triggered when closed',
        type: 'success',
        onClose: () => {
            console.log('Message closed')
        }
    })
    console.log('Showing message with callback')
}

// Offset
const showMessageWithOffset = () => {
    message({
        content: 'This message has a custom offset',
        type: 'info',
        offset: 100
    })
    console.log('Showing message with offset')
}

const showMultipleOffsetMessages = () => {
    message({ content: 'Message 1', offset: 20 })
    message({ content: 'Message 2', offset: 80 })
    message({ content: 'Message 3', offset: 140 })
    console.log('Showing multiple offset messages')
}

// Combined usage
const showComplexMessage = () => {
    message({
        content: 'Combined usage example message',
        type: 'success',
        duration: 5000,
        showClose: true,
        position: 'top-center',
        offset: 50,
        zIndex: 10000,
        onClose: () => {
            console.log('Combined message closed')
        }
    })
    console.log('Showing combined usage message')
}

// Global configuration
const showGloballyConfiguredMessage = () => {
    message.config({
        duration: 5000,
        position: 'top-center',
        offset: 30
    })
    message.success('Message using global configuration')
    console.log('Showing globally configured message')
}
</script>