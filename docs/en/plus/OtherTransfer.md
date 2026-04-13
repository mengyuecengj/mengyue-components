# Transfer

## Brief Introduction
The Transfer shuttle box component is used to move data options between two columns. `mengyue-components` has encapsulated it and performed `vitest` testing.
You can use `<MYTransfer></MYTransfer>` to implement data shuttle functionality.

## Basic Usage

### Basic Transfer
Basic transfer box component, supports moving data between left and right columns.

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
  { key: 1, label: 'Option One', disabled: false },
  { key: 2, label: 'Option Two', disabled: false },
  { key: 3, label: 'Option Three', disabled: false },
  { key: 4, label: 'Option Four', disabled: false },
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
Use the `titles` property to customize the titles of the left and right columns.

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
Use the `backgroundColor`, `colorText`, and `hoverBackground` properties to customize the colors of the transfer box.

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
  { key: 1, label: 'Option One', disabled: false },
  { key: 2, label: 'Option Two', disabled: false },
  { key: 3, label: 'Option Three', disabled: false },
  { key: 4, label: 'Option Four', disabled: false }
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
Create a dark-themed transfer box using dark backgrounds.

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
  { key: 1, label: 'Project One', disabled: false },
  { key: 2, label: 'Project Two', disabled: false },
  { key: 3, label: 'Project Three', disabled: false },
  { key: 4, label: 'Project Four', disabled: false },
  { key: 5, label: 'Project Five', disabled: false }
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
Data containing disabled options; users cannot select or move these options.

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
  { key: 1, label: 'Selectable One', disabled: false },
  { key: 2, label: 'Selectable Two', disabled: false },
  { key: 3, label: 'Disabled One', disabled: true },
  { key: 4, label: 'Selectable Three', disabled: false },
  { key: 5, label: 'Disabled Two', disabled: true },
  { key: 6, label: 'Selectable Four', disabled: false }
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
Create a transfer box with a dynamic data source.

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
      <p>Selected Users: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: 'John Doe', disabled: false },
  { key: 102, label: 'Jane Smith', disabled: false },
  { key: 103, label: 'Bob Johnson', disabled: false },
  { key: 104, label: 'Alice Brown', disabled: false },
  { key: 105, label: 'Charlie Wilson', disabled: false }
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
        <p>Selected Users: {{ selectedUsersLabels }}</p>
      </div>
    </div>
  </template>
</ShowCode>

## API Reference

### Transfer Props
| Parameter        | Description                      | Type      | Options   | Default |
|------------------|----------------------------------|-----------|-----------|---------|
| modelValue       | Array of keys for selected items | number[]  | —         | `[]`    |
| data             | Data source                      | Option[]  | —         | `[]`    |
| titles           | Custom titles for left/right lists | string[]  | —         | `[]`    |
| backgroundColor  | Background color                 | string    | —         | `''`    |
| colorText        | Text color                       | string    | —         | `''`    |
| hoverBackground  | Hover background color           | string    | —         | `''`    |

### Data Type
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
  { key: 1, label: 'Option One', disabled: false },
  { key: 2, label: 'Option Two', disabled: false },
  { key: 3, label: 'Option Three', disabled: false },
  { key: 4, label: 'Option Four', disabled: false },
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
  { key: 1, label: 'Option One', disabled: false },
  { key: 2, label: 'Option Two', disabled: false },
  { key: 3, label: 'Option Three', disabled: false },
  { key: 4, label: 'Option Four', disabled: false }
])

// Dark theme example data
const transferValue4 = ref([2, 5])
const transferData4 = ref([
  { key: 1, label: 'Project One', disabled: false },
  { key: 2, label: 'Project Two', disabled: false },
  { key: 3, label: 'Project Three', disabled: false },
  { key: 4, label: 'Project Four', disabled: false },
  { key: 5, label: 'Project Five', disabled: false }
])

// Disabled options example data
const transferValue5 = ref([2])
const transferData5 = ref([
  { key: 1, label: 'Selectable One', disabled: false },
  { key: 2, label: 'Selectable Two', disabled: false },
  { key: 3, label: 'Disabled One', disabled: true },
  { key: 4, label: 'Selectable Three', disabled: false },
  { key: 5, label: 'Disabled Two', disabled: true },
  { key: 6, label: 'Selectable Four', disabled: false }
])

// Dynamic data example
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: 'John Doe', disabled: false },
  { key: 102, label: 'Jane Smith', disabled: false },
  { key: 103, label: 'Bob Johnson', disabled: false },
  { key: 104, label: 'Alice Brown', disabled: false },
  { key: 105, label: 'Charlie Wilson', disabled: false }
])

const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
</script>
