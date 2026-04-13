# Drawer

## Introduction

The Drawer component is a panel that slides out from the edge of the page, commonly used to display more content or operations. mengyue-components has encapsulated this component and conducted vitest testing.
You can use `<MYDrawer></MYDrawer>` or `<MYDrawer />` to implement drawer functionality.

## Basic Usage

### Basic Drawer

A basic drawer component that slides out from the right by default.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div>
    <button @click='showDrawer = true'>Open Drawer</button>
    <MYDrawer v-model='showDrawer' title='Basic Drawer'>
      <p>This is the content of the drawer</p>
      <p>Any content can be placed here</p>
    </MYDrawer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <button @click="showDrawer1 = true" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open Drawer
      </button>
      <MYDrawer v-model="showDrawer1" title="Basic Drawer">
        <p>This is the content of the drawer</p>
        <p>Any content can be placed here</p>
      </MYDrawer>
    </div>
  </template>
</ShowCode>

### Different Directions

Use the `direction` prop to set the drawer's slide-out direction.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
    <button @click='openDrawer('rtl')'>Open from Right</button>
    <button @click='openDrawer('ltr')'>Open from Left</button>
    <button @click='openDrawer('ttb')'>Open from Top</button>
    <button @click='openDrawer('btt')'>Open from Bottom</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :direction='currentDirection'
  >
    <p>Current direction: {{ currentDirection }}</p>
    <p>Drawer content...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentDirection = ref('rtl')
const currentTitle = ref('')
const openDrawer = (direction) => {
  currentDirection.value = direction
  currentTitle.value = \`\${getDirectionText(direction)} Drawer\`
  showDrawer.value = true
}
const getDirectionText = (dir) => {
  const map = { rtl: 'Right', ltr: 'Left', ttb: 'Top', btt: 'Bottom' }
  return map[dir] || dir
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <button @click="openDirectionDrawer('rtl')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open from Right
      </button>
      <button @click="openDirectionDrawer('ltr')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open from Left
      </button>
      <button @click="openDirectionDrawer('ttb')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open from Top
      </button>
      <button @click="openDirectionDrawer('btt')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open from Bottom
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer2" 
      :title="currentTitle"
      :direction="currentDirection"
    >
      <p>Current direction: {{ getDirectionText(currentDirection) }}</p>
      <p>Drawer content...</p>
    </MYDrawer>
  </template>
</ShowCode>

### Custom Size

Use the `size` prop to set the drawer's size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openSizeDrawer('30%'')'>30% Width</button>
    <button @click='openSizeDrawer('500px')'>500px Width</button>
    <button @click='openSizeDrawer('80%'')'>80% Width</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :size='currentSize'
  >
    <p>Current size: {{ currentSize }}</p>
    <p>Drawer content...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentSize = ref('30%')
const currentTitle = ref('')
const openSizeDrawer = (size) => {
  currentSize.value = size
  currentTitle.value = \`\${size} Size Drawer\`
  showDrawer.value = true
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px;">
      <button @click="openSizeDrawer('30%')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        30% Width
      </button>
      <button @click="openSizeDrawer('500px')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        500px Width
      </button>
      <button @click="openSizeDrawer('80%')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        80% Width
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer3" 
      :title="currentSizeTitle"
      :size="currentSize"
    >
      <p>Current size: {{ currentSize }}</p>
      <p>Drawer content...</p>
    </MYDrawer>
  </template>
</ShowCode>

### Custom Background Color

Use the `backgroundColor` prop to customize the drawer's background color.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openColorDrawer('#f0f9ff')'>Light Blue</button>
    <button @click='openColorDrawer('#fef2f2')'>Light Red</button>
    <button @click='openColorDrawer('#f0fdf4')'>Light Green</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='Custom Color'
    :background-color='currentColor'
  >
    <p>Drawer with custom background color</p>
    <p>Current color: {{ currentColor }}</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentColor = ref('#f0f9ff')
const openColorDrawer = (color) => {
  currentColor.value = color
  showDrawer.value = true
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px;">
      <button @click="openColorDrawer('#f0f9ff')" style="padding: 8px 16px; background: #f0f9ff; color: #0369a1; border: 1px solid #bae6fd; border-radius: 4px; cursor: pointer;">
        Light Blue
      </button>
      <button @click="openColorDrawer('#fef2f2')" style="padding: 8px 16px; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: 4px; cursor: pointer;">
        Light Red
      </button>
      <button @click="openColorDrawer('#f0fdf4')" style="padding: 8px 16px; background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; border-radius: 4px; cursor: pointer;">
        Light Green
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer4" 
      title="Custom Color"
      :background-color="currentColor"
    >
      <p>Drawer with custom background color</p>
      <p>Current color: {{ currentColor }}</p>
    </MYDrawer>
  </template>
</ShowCode>

### Hide Header and Close Button

Use the `with-header` and `show-close` props to control the display of the header and close button.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openCustomDrawer(true, true)'>Show Header and Close Button</button>
    <button @click='openCustomDrawer(false, false)'>Hide Header and Close Button</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='Custom Header'
    :with-header='withHeader'
    :show-close='showClose'
  >
    <p>Show Header: {{ withHeader ? 'Yes' : 'No' }}</p>
    <p>Show Close Button: {{ showClose ? 'Yes' : 'No' }}</p>
    <p>Click on the mask layer to close</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const withHeader = ref(true)
const showClose = ref(true)
const openCustomDrawer = (header, close) => {
  withHeader.value = header
  showClose.value = close
  showDrawer.value = true
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px;">
      <button @click="openCustomDrawer(true, true)" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Show Header and Close Button
      </button>
      <button @click="openCustomDrawer(false, false)" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Hide Header and Close Button
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer5" 
      title="Custom Header"
      :with-header="withHeader"
      :show-close="showClose"
    >
      <p>Show Header: {{ withHeader ? 'Yes' : 'No' }}</p>
      <p>Show Close Button: {{ showClose ? 'Yes' : 'No' }}</p>
      <p>Click on the mask layer to close</p>
    </MYDrawer>
  </template>
</ShowCode>

### With Footer Action Bar

Use the footer slot to add a footer action bar.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <button @click='showDrawer = true'>Open Drawer with Footer</button>
  <MYDrawer v-model='showDrawer' title='With Footer Action Bar'>
    <p>This is the main content of the drawer</p>
    <p>Forms, lists, etc. can be placed here</p>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button @click='showDrawer = false'>Cancel</button>
        <button @click='handleConfirm' style='background: #409EFF; color: white;'>Confirm</button>
      </div>
    </template>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const handleConfirm = () => {
  alert('Confirmation action')
  showDrawer.value = false
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <button @click="showDrawer6 = true" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Open Drawer with Footer
      </button>
      <MYDrawer v-model="showDrawer6" title="With Footer Action Bar">
        <p>This is the main content of the drawer</p>
        <p>Forms, lists, etc. can be placed here</p>
        <template #footer>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button @click="showDrawer6 = false" style="padding: 8px 16px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
            <button @click="handleFooterConfirm" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">Confirm</button>
          </div>
        </template>
      </MYDrawer>
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Whether to show the drawer | boolean | — | `false` |
| title | Drawer title | string | — | `''` |
| direction | Drawer opening direction | string | `ltr`/`rtl`/`ttb`/`btt` | `rtl` |
| size | Drawer size | string \| number | — | `30%` |
| with-header | Whether to show the header | boolean | — | `true` |
| show-close | Whether to show the close button | boolean | — | `true` |
| background-color | Drawer background color | string | — | `''` |
| close-on-click-modal | Whether to close the drawer by clicking on the mask layer | boolean | — | `true` |
| close-on-press-escape | Whether to close the drawer by pressing ESC | boolean | — | `true` |
| lock-scroll | Whether to lock body scroll when drawer is shown | boolean | — | `true` |
| before-close | Callback function before closing | function | — | `undefined` |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| update:modelValue | Triggered when drawer display state changes | value: boolean |
| open | Triggered when drawer opens | — |
| close | Triggered when drawer closes | — |

### Slots

| Slot Name | Description |
|-----------|-------------|
| default | Drawer main content |
| title | Drawer title content |
| footer | Drawer footer content |

### Type Definitions

```typescript
interface DrawerProps {
  modelValue?: boolean;
  title?: string;
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
  size?: string | number;
  withHeader?: boolean;
  showClose?: boolean;
  backgroundColor?: string;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  lockScroll?: boolean;
  beforeClose?: (done: () => void) => void;
}
```

<script setup>
import { ref } from 'vue'
import MYDrawer from '../../../packages/components/drawer/src/drawer.vue'

// Basic drawer example
const showDrawer1 = ref(false)

// Direction drawer example
const showDrawer2 = ref(false)
const currentDirection = ref('rtl')
const currentTitle = ref('')

const openDirectionDrawer = (direction) => {
  currentDirection.value = direction
  currentTitle.value = `${getDirectionText(direction)} Drawer`
  showDrawer2.value = true
}

const getDirectionText = (dir) => {
  const map = { 
    rtl: 'Right', 
    ltr: 'Left', 
    ttb: 'Top', 
    btt: 'Bottom' 
  }
  return map[dir] || dir
}

// Size drawer example
const showDrawer3 = ref(false)
const currentSize = ref('30%')
const currentSizeTitle = ref('')

const openSizeDrawer = (size) => {
  currentSize.value = size
  currentSizeTitle.value = `${size} Size Drawer`
  showDrawer3.value = true
}

// Color drawer example
const showDrawer4 = ref(false)
const currentColor = ref('#f0f9ff')

const openColorDrawer = (color) => {
  currentColor.value = color
  showDrawer4.value = true
}

// Custom header example
const showDrawer5 = ref(false)
const withHeader = ref(true)
const showClose = ref(true)

const openCustomDrawer = (header, close) => {
  withHeader.value = header
  showClose.value = close
  showDrawer5.value = true
}

// Footer action bar example
const showDrawer6 = ref(false)

const handleFooterConfirm = () => {
  alert('Confirmation action')
  showDrawer6.value = false
}
</script>
