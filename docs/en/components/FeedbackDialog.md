# Dialog
## Brief Introduction
The `dialog` component is used to display modal dialogs on a page.<br />
You can use `<MYDialog></MYDialog>` or `<MYDialog />` to implement a dialog.

## Basic Usage
Use `v-model` to control the visibility of the dialog.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog1 = true'>Open Dialog</MYButton>
    <MYDialog v-model='showDialog1' title='Basic Dialog'>
        <p>This is a basic dialog example</p>
        <p>Click the overlay or press ESC to close</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog1 = true">Open Dialog</MYButton>
    <MYDialog v-model="showDialog1" title="Basic Dialog">
        <p style="color: black;">This is a basic dialog example</p>
        <p style="color: black;">Click the overlay or press ESC to close</p>
    </MYDialog>
  </template>
</ShowCode>

## Custom Size
Use the `width` and `height` properties to customize the dialog size.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog2 = true'>Custom Size</MYButton>
    <MYDialog 
        v-model='showDialog2' 
        title='Custom Size'
        width='600px'
        height='400px'
    >
        <p>This is a dialog with width 600px and height 400px</p>
        <p>Supports pixel values, percentages, and other CSS units</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog2 = true">Custom Size</MYButton>
    <MYDialog 
        v-model="showDialog2" 
        title="Custom Size"
        width="600px"
        height="400px"
    >
        <p style="color: black;">This is a dialog with width 600px and height 400px</p>
        <p style="color: black;">Supports pixel values, percentages, and other CSS units</p>
    </MYDialog>
  </template>
</ShowCode>

## Custom Colors
Use the `backgroundColor`, `borderColor`, and `textColor` properties to customize the dialog colors.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog3 = true'>Custom Colors</MYButton>
    <MYDialog 
        v-model='showDialog3' 
        title='Custom Colors'
        backgroundColor='#f0f8ff'
        borderColor='#409EFF'
        textColor='#333'
    >
        <p>This is a dialog with custom colors</p>
        <p>Background color, border color, and text color can all be customized</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog3 = true">Custom Colors</MYButton>
    <MYDialog 
        v-model="showDialog3" 
        title="Custom Colors"
        backgroundColor="#f0f8ff"
        borderColor="#409EFF"
        textColor="#333"
    >
        <p style="color: black;">This is a dialog with custom colors</p>
        <p style="color: black;">Background color, border color, and text color can all be customized</p>
    </MYDialog>
  </template>
</ShowCode>

## Disable Overlay Close
Use the `closeOnClickModal` property to disable closing the dialog by clicking the overlay.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog4 = true'>Disable Overlay Close</MYButton>
    <MYDialog 
        v-model='showDialog4' 
        title='Disable Overlay Close'
        :closeOnClickModal='false'
    >
        <p>This dialog cannot be closed by clicking the overlay</p>
        <p>It can only be closed via the close button or ESC key</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog4 = true">Disable Overlay Close</MYButton>
    <MYDialog 
        v-model="showDialog4" 
        title="Disable Overlay Close"
        :closeOnClickModal="false"
    >
        <p style="color: black;">This dialog cannot be closed by clicking the overlay</p>
        <p style="color: black;">It can only be closed via the close button or ESC key</p>
    </MYDialog>
  </template>
</ShowCode>

## Disable ESC Close
Use the `closeOnPressEscape` property to disable closing the dialog with the ESC key.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog5 = true'>Disable ESC Close</MYButton>
    <MYDialog 
        v-model='showDialog5' 
        title='Disable ESC Close'
        :closeOnPressEscape='false'
    >
        <p>This dialog cannot be closed with the ESC key</p>
        <p>It can only be closed via the close button or clicking the overlay</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog5 = true">Disable ESC Close</MYButton>
    <MYDialog 
        v-model="showDialog5" 
        title="Disable ESC Close"
        :closeOnPressEscape="false"
    >
        <p style="color: black;">This dialog cannot be closed with the ESC key</p>
        <p style="color: black;">It can only be closed via the close button or clicking the overlay</p>
    </MYDialog>
  </template>
</ShowCode>

## Overflow Control
Use the `overflow` property to control the overflow behavior of the dialog content.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog6 = true'>Overflow Control</MYButton>
    <MYDialog 
        v-model='showDialog6' 
        title='Overflow Control'
        :overflow='true'
        height='300px'
    >
        <div style='height: 600px;'>
            <p>This content exceeds the dialog height</p>
            <p>When overflow is true, content is hidden</p>
            <p>When overflow is false, a scrollbar appears</p>
            <div v-for='i in 20' :key='i' style='padding: 10px; border-bottom: 1px solid #eee;'>
                Content Item {{ i }}
            </div>
        </div>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog6 = true">Overflow Control</MYButton>
    <MYDialog 
        v-model="showDialog6" 
        title="Overflow Control"
        :overflow="true"
        height="300px"
    >
        <div style="height: 600px;">
            <p style="color: black;">This content exceeds the dialog height</p>
            <p style="color: black;">When overflow is true, content is hidden</p>
            <p style="color: black;">When overflow is false, a scrollbar appears</p>
            <div v-for="i in 20" :key="i" style="padding: 10px; border-bottom: 1px solid #eee;">
                Content Item {{ i }}
            </div>
        </div>
    </MYDialog>
  </template>
</ShowCode>

## Custom Header and Footer
Use the `header` and `footer` slots to customize the dialog's header and footer.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog7 = true'>Custom Header & Footer</MYButton>
    <MYDialog v-model='showDialog7'>
        <template #header>
            <div style='display: flex; align-items: center; gap: 10px;'>
                <span style='color: #409EFF;'>🔔</span>
                <span>Custom Header</span>
            </div>
        </template>
        <p>This dialog uses custom header and footer</p>
        <p>The content area can hold any content</p>
        <template #footer>
            <div style='display: flex; justify-content: space-between;'>
                <MYButton type='info' @click='showDialog7 = false'>Cancel</MYButton>
                <MYButton type='primary' @click='showDialog7 = false'>Confirm</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog7 = true">Custom Header & Footer</MYButton>
    <MYDialog v-model="showDialog7">
        <template #header>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #409EFF;">🔔</span>
                <span>Custom Header</span>
            </div>
        </template>
        <p style="color: black;">This dialog uses custom header and footer</p>
        <p style="color: black;">The content area can hold any content</p>
        <template #footer>
            <div style="display: flex; justify-content: space-between;">
                <MYButton type="info" @click="showDialog7 = false">Cancel</MYButton>
                <MYButton type="primary" @click="showDialog7 = false">Confirm</MYButton>
            </div>
        </template>
    </MYDialog>
  </template>
</ShowCode>

## Event Listening
The dialog provides `open` and `close` events to listen for open and close states.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog8 = true'>Event Listening</MYButton>
    <MYDialog 
        v-model='showDialog8' 
        title='Event Listening'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>Corresponding events are triggered when the dialog opens or closes</p>
        <p>Check the console to see event triggers</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog8 = true">Event Listening</MYButton>
    <MYDialog 
        v-model="showDialog8" 
        title="Event Listening"
        @open="handleOpen"
        @close="handleClose"
    >
        <p style="color: black;">Corresponding events are triggered when the dialog opens or closes</p>
        <p style="color: black;">Check the console to see event triggers</p>
    </MYDialog>
  </template>
</ShowCode>

## Combined Usage
Finally, combine multiple APIs to create a complete dialog:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog9 = true'>Combined Usage</MYButton>
    <MYDialog 
        v-model='showDialog9' 
        title='Combined Usage Example'
        width='500px'
        height='350px'
        backgroundColor='#fff'
        borderColor='#8d4dd1'
        textColor='#333'
        :closeOnClickModal='false'
        :closeOnPressEscape='true'
        :overflow='false'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>This is a complete example of combined usage</p>
        <p>It includes all available properties and features</p>
        <template #footer>
            <div style='display: flex; gap: 10px; justify-content: flex-end;'>
                <MYButton type='info' @click='showDialog9 = false'>Cancel</MYButton>
                <MYButton type='primary' @click='showDialog9 = false'>Confirm</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog9 = true">Combined Usage</MYButton>
    <MYDialog 
        v-model="showDialog9" 
        title="Combined Usage Example"
        width="500px"
        height="350px"
        backgroundColor="#fff"
        borderColor="#8d4dd1"
        textColor="#333"
        :closeOnClickModal="false"
        :closeOnPressEscape="true"
        :overflow="false"
        @open="handleOpen"
        @close="handleClose"
    >
        <p style="color: black;">This is a complete example of combined usage</p>
        <p style="color: black;">It includes all available properties and features</p>
        <template #footer>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <MYButton type="info" @click="showDialog9 = false">Cancel</MYButton>
                <MYButton type="primary" @click="showDialog9 = false">Confirm</MYButton>
            </div>
        </template>
    </MYDialog>
  </template>
</ShowCode>

## API Reference

### Props
| Parameter           | Description                    | Type               | Options     | Default   |
|---------------------|--------------------------------|--------------------|-------------|-----------|
| modelValue          | Whether to show the dialog     | boolean            | —           | `false`   |
| title               | Dialog title                   | string             | —           | `''`      |
| width               | Dialog width                   | string \| number   | —           | `400`     |
| height              | Dialog height                  | string \| number   | —           | `200`     |
| closeOnClickModal   | Close on overlay click         | boolean            | —           | `true`    |
| closeOnPressEscape  | Close on ESC key press         | boolean            | —           | `true`    |
| backgroundColor     | Background color               | string             | —           | `''`      |
| borderColor         | Border color                   | string             | —           | `''`      |
| textColor           | Text color                     | string             | —           | `''`      |
| overflow            | Overflow control               | boolean            | —           | `false`   |

### Events
| Event Name         | Description                   | Parameters        |
|--------------------|-------------------------------|-------------------|
| update:modelValue  | Dialog visibility state update | `value: boolean`  |
| open               | Triggered when dialog opens    | —                 |
| close              | Triggered when dialog closes   | —                 |

### Slots
| Name          | Description            |
|---------------|------------------------|
| default       | Dialog body content    |
| header        | Custom header          |
| footer        | Custom footer          |

### Type Definitions
```typescript
interface DialogProps {
  modelValue?: boolean;
  title?: string;
  width?: string | number;
  height?: string | number;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  overflow?: boolean;
}

interface DialogEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
}
```
<script setup> 
import { ref } from 'vue' 
import MYDialog from '../../../packages/components/dialog/src/dialog.vue' 
import MYButton from '../../../packages/components/button/src/button.vue' 
const showDialog1 = ref(false) 
const showDialog2 = ref(false) 
const showDialog3 = ref(false) 
const showDialog4 = ref(false) 
const showDialog5 = ref(false) 
const showDialog6 = ref(false) 
const showDialog7 = ref(false) 
const showDialog8 = ref(false) 
const showDialog9 = ref(false) 
const handleOpen = () => { 
    console.log('Dialog opened') 
} 
const handleClose = () => { 
    console.log('Dialog closed') 
    } 
</script>
