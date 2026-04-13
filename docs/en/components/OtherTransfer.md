# Transfer

## Introduction

The Transfer component is used for moving data options between two columns. mengyue-components has encapsulated this component and conducted vitest testing.
You can use `<MYTransfer></MYTransfer>` to implement data transfer functionality.

## Basic Usage

### Basic Transfer

A basic transfer component that supports moving data between left and right columns.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['List One', 'List Two']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 2])
const data = ref([
  { key: 1, label: 'Option 1', disabled: false },
  { key: 2, label: 'Option 2', disabled: false },
  { key: 3, label: 'Option 3', disabled: false },
  { key: 4, label: 'Option 4', disabled: false },
  { key: 5, label: 'Disabled Option', disabled: true }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue"
      :data="transferData"
      :titles="['List One', 'List Two']"
    />
  </template>
</ShowCode>

### Custom Titles

Use the `titles` prop to customize the titles of the left and right columns.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['Source List', 'Target List']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 4])
const data = ref([
  { key: 1, label: 'Apple', disabled: false },
  { key: 2, label: 'Banana', disabled: false },
  { key: 3, label: 'Orange', disabled: false },
  { key: 4, label: 'Grape', disabled: false },
  { key: 5, label: 'Mango', disabled: false }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue2"
      :data="transferData2"
      :titles="['Source List', 'Target List']"
    />
  </template>
</ShowCode>

### Custom Colors

Use the `backgroundColor`, `colorText`, and `hoverBackground` props to customize the transfer component's colors.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#f0f9ff'
    color-text='#0369a1'
    hover-background='#e0f2fe'
    :titles='['Light Theme', 'Light Theme']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 3])
const data = ref([
  { key: 1, label: 'Option 1', disabled: false },
  { key: 2, label: 'Option 2', disabled: false },
  { key: 3, label: 'Option 3', disabled: false },
  { key: 4, label: 'Option 4', disabled: false }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue3"
      :data="transferData3"
      background-color="#f0f9ff"
      color-text="#0369a1"
      hover-background="#e0f2fe"
      :titles="['Light Theme', 'Light Theme']"
    />
  </template>
</ShowCode>

### Dark Theme

Create a dark-themed transfer component using dark backgrounds.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#1e293b'
    color-text='#f1f5f9'
    hover-background='#334155'
    :titles='['Dark Theme', 'Dark Theme']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 5])
const data = ref([
  { key: 1, label: 'Item 1', disabled: false },
  { key: 2, label: 'Item 2', disabled: false },
  { key: 3, label: 'Item 3', disabled: false },
  { key: 4, label: 'Item 4', disabled: false },
  { key: 5, label: 'Item 5', disabled: false }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue4"
      :data="transferData4"
      background-color="#1e293b"
      color-text="#f1f5f9"
      hover-background="#334155"
      :titles="['Dark Theme', 'Dark Theme']"
    />
  </template>
</ShowCode>

### Disabled Options

Data containing disabled options that users cannot select or move.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['Available List', 'Selected List']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2])
const data = ref([
  { key: 1, label: 'Available Item 1', disabled: false },
  { key: 2, label: 'Available Item 2', disabled: false },
  { key: 3, label: 'Disabled Item 1', disabled: true },
  { key: 4, label: 'Available Item 3', disabled: false },
  { key: 5, label: 'Disabled Item 2', disabled: true },
  { key: 6, label: 'Available Item 4', disabled: false }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue5"
      :data="transferData5"
      :titles="['Available List', 'Selected List']"
    />
  </template>
</ShowCode>

### Dynamic Data

Create a transfer component with dynamic data sources.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div>
    <MYTransfer 
      v-model='selectedUsers'
      :data='users'
      :titles='['All Users', 'Selected Users']'
    />
    <div style='margin-top: 16px;'>
      <p>Selected users: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: 'Zhang San', disabled: false },
  { key: 102, label: 'Li Si', disabled: false },
  { key: 103, label: 'Wang Wu', disabled: false },
  { key: 104, label: 'Zhao Liu', disabled: false },
  { key: 105, label: 'Qian Qi', disabled: false }
])
const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYTransfer 
        v-model="selectedUsers"
        :data="users"
        :titles="['All Users', 'Selected Users']"
      />
      <div style="margin-top: 16px;">
        <p>Selected users: {{ selectedUsersLabels }}</p>
      </div>
    </div>
  </template>
</ShowCode>

## API Reference

### Transfer Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Array of selected item keys | number[] | — | `[]` |
| data | Data source | Option[] | — | `[]` |
| titles | Custom titles for left and right lists | string[] | — | `[]` |
| backgroundColor | Background color | string | — | `''` |
| colorText | Text color | string | — | `''` |
| hoverBackground | Hover background color | string | — | `''` |

### Data Types

```typescript
interface Option {
  key: number;
  label: string;
  disabled: boolean;
}

interface TransferProps {
  modelValue: number[];
  data: Option[];
  titles?: string[];
  backgroundColor?: string;
  colorText?: string;
  hoverBackground?: string;
}
```

<script setup>
import { ref, computed } from 'vue'
import MYTransfer from '../../../packages/components/transfer/src/transfer.vue'

// Basic example data
const transferValue = ref([1, 2])
const transferData = ref([
  { key: 1, label: 'Option 1', disabled: false },
  { key: 2, label: 'Option 2', disabled: false },
  { key: 3, label: 'Option 3', disabled: false },
  { key: 4, label: 'Option 4', disabled: false },
  { key: 5, label: 'Disabled Option', disabled: true }
])

// Custom titles example data
const transferValue2 = ref([2, 4])
const transferData2 = ref([
  { key: 1, label: 'Apple', disabled: false },
  { key: 2, label: 'Banana', disabled: false },
  { key: 3, label: 'Orange', disabled: false },
  { key: 4, label: 'Grape', disabled: false },
  { key: 5, label: 'Mango', disabled: false }
])

// Light theme example data
const transferValue3 = ref([1, 3])
const transferData3 = ref([
  { key: 1, label: 'Option 1', disabled: false },
  { key: 2, label: 'Option 2', disabled: false },
  { key: 3, label: 'Option 3', disabled: false },
  { key: 4, label: 'Option 4', disabled: false }
])

// Dark theme example data
const transferValue4 = ref([2, 5])
const transferData4 = ref([
  { key: 1, label: 'Item 1', disabled: false },
  { key: 2, label: 'Item 2', disabled: false },
  { key: 3, label: 'Item 3', disabled: false },
  { key: 4, label: 'Item 4', disabled: false },
  { key: 5, label: 'Item 5', disabled: false }
])

// Disabled options example data
const transferValue5 = ref([2])
const transferData5 = ref([
  { key: 1, label: 'Available Item 1', disabled: false },
  { key: 2, label: 'Available Item 2', disabled: false },
  { key: 3, label: 'Disabled Item 1', disabled: true },
  { key: 4, label: 'Available Item 3', disabled: false },
  { key: 5, label: 'Disabled Item 2', disabled: true },
  { key: 6, label: 'Available Item 4', disabled: false }
])

// Dynamic data example
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: 'Zhang San', disabled: false },
  { key: 102, label: 'Li Si', disabled: false },
  { key: 103, label: 'Wang Wu', disabled: false },
  { key: 104, label: 'Zhao Liu', disabled: false },
  { key: 105, label: 'Qian Qi', disabled: false }
])

const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
</script>
