# Tree

## Brief Introduction

The Tree component is used to display hierarchical data structures, supporting expand/collapse, selection, checkbox, and other features. It can be used for organizational charts, file directories, categories, and similar scenarios.

## Basic Usage

Basic tree structure display with node click event support.

<ShowCode
  title="Basic Usage"
  :code="`
<template>
  <MYTree
    :data='treeData'
    :props='{ label: 'name', children: 'children' }'
    @node-click='handleNodeClick' />
</template>
<script setup>
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Root Node 2',
    children: [
      { id: 7, name: 'Child Node 2-1' }
    ]
  }
]
const handleNodeClick = (node) => {
  console.log('Node clicked:', node)
}
</script>
`"
>
  <template #demo>
    <div style="max-width: 600px">
      <MYTree 
        :data="[
          {
            id: 1,
            name: 'Root Node 1',
            children: [
              { id: 2, name: 'Child Node 1-1' },
              {
                id: 3,
                name: 'Child Node 1-2',
                children: [
                  { id: 4, name: 'Grandchild Node 1' },
                  { id: 5, name: 'Grandchild Node 2' }
                ]
              }
            ]
          },
          {
            id: 6,
            name: 'Root Node 2',
            children: [
              { id: 7, name: 'Child Node 2-1' }
            ]
          }
        ]" 
        :props="{ label: 'name', children: 'children' }" 
        @node-click="(node) => console.log('Node clicked:', node)" />
    </div>
  </template>
</ShowCode>

## Tree Selector

Tree selector supports single selection, multiple selection, filtering, and other features.

### Single Selection Mode

<ShowCode
  title="Single Selection Mode"
  :code="`
<template>
  <MYTreeSelect 
    v-model='selectedValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    placeholder='Please select'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValue = ref(null)
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Root Node 2',
    children: [
      { id: 7, name: 'Child Node 2-1' }
    ]
  }
]
</script>
`"
>
  <template #demo>
    <MYTreeSelect 
      v-model="selectedValue"
      :data="[
        {
          id: 1,
          name: 'Root Node 1',
          children: [
            { id: 2, name: 'Child Node 1-1' },
            {
              id: 3,
              name: 'Child Node 1-2',
              children: [
                { id: 4, name: 'Grandchild Node 1' },
                { id: 5, name: 'Grandchild Node 2' }
              ]
            }
          ]
        },
        {
          id: 6,
          name: 'Root Node 2',
          children: [
            { id: 7, name: 'Child Node 2-1' }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      placeholder="Please select"
      clearable
      style="width: 240px" />
  </template>
</ShowCode>

### Multiple Selection Mode

<ShowCode
  title="Multiple Selection Mode"
  :code="`
<template>
  <MYTreeSelect
    v-model='selectedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    placeholder='Please select'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValues = ref([])
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
</script>
`"
>
  <template #demo>
    <MYTreeSelect 
      v-model="selectedValues"
      :data="[
        {
          id: 1,
          name: 'Root Node 1',
          children: [
            { id: 2, name: 'Child Node 1-1' },
            {
              id: 3,
              name: 'Child Node 1-2',
              children: [
                { id: 4, name: 'Grandchild Node 1' },
                { id: 5, name: 'Grandchild Node 2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      multiple
      placeholder="Please select"
      clearable
      style="width: 240px" />
  </template>
</ShowCode>

### Checkbox Mode

Supports checkbox selection with parent-child linkage options.

<ShowCode
  title="Checkbox Mode"
  :code="`
<template>
  <MYTreeSelect 
    v-model='checkedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    show-checkbox
    :check-strictly='false'
    placeholder='Please select' />
</template>
<script setup>
import { ref } from 'vue'
const checkedValues = ref([2, 4])
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
</script>
`"
>
  <template #demo>
    <MYTreeSelect 
      v-model="checkedValues"
      :data="[
        {
          id: 1,
          name: 'Root Node 1',
          children: [
            { id: 2, name: 'Child Node 1-1' },
            {
              id: 3,
              name: 'Child Node 1-2',
              children: [
                { id: 4, name: 'Grandchild Node 1' },
                { id: 5, name: 'Grandchild Node 2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      multiple
      show-checkbox
      :check-strictly="false"
      placeholder="Please select"
      style="width: 240px" />
  </template>
</ShowCode>

### Filtering

Supports input filtering for quick node lookup.

<ShowCode
  title="Filtering"
  :code="`
<template>
  <MYTreeSelect 
    v-model='filteredValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    filterable
    placeholder='Enter keyword' />
</template>
<script setup>
import { ref } from 'vue'
const filteredValue = ref(null)
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
</script>
`"
>
  <template #demo>
    <MYTreeSelect 
      v-model="filteredValue"
      :data="[
        {
          id: 1,
          name: 'Root Node 1',
          children: [
            { id: 2, name: 'Child Node 1-1' },
            {
              id: 3,
              name: 'Child Node 1-2',
              children: [
                { id: 4, name: 'Grandchild Node 1' },
                { id: 5, name: 'Grandchild Node 2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      filterable
      placeholder="Enter keyword"
      style="width: 240px" />
  </template>
</ShowCode>

## Custom Styling

Supports custom text color, background color, and active color.

<ShowCode
  title="Custom Styling"
  :code="`
<template>
  <MYTreeSelect 
    v-model='styledValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    background-color='#2d2d2d'
    text-color='#eaeaea'
    active-color='#409eff'
    style='width: 240px' />
</template>
<script setup>
import { ref } from 'vue'
const styledValue = ref(null)
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
</script>
`"
>
  <template #demo>
    <MYTreeSelect 
      v-model="styledValue"
      :data="[
        {
          id: 1,
          name: 'Root Node 1',
          children: [
            { id: 2, name: 'Child Node 1-1' },
            {
              id: 3,
              name: 'Child Node 1-2',
              children: [
                { id: 4, name: 'Grandchild Node 1' },
                { id: 5, name: 'Grandchild Node 2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      background-color="#2d2d2d"
      text-color="#eaeaea"
      active-color="#409eff"
      style="width: 240px" />
  </template>
</ShowCode>

## API Reference

### Tree Props

| Prop | Description | Type | Options | Default |
|------|-------------|------|---------|---------|
| data | Tree data | array | — | [] |
| props | Configuration options | object | — | {} |
| default-expanded | Whether to expand all nodes by default | boolean | — | false |
| default-expanded-keys | Array of keys for default expanded nodes | array | — | [] |

### Tree Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| node-click | Triggered when a node is clicked | Clicked node data |

### TreeSelect Props

| Prop | Description | Type | Options | Default |
|------|-------------|------|---------|---------|
| modelValue / v-model | Bound value | string / number / array | — | null |
| data | Tree data | array | — | [] |
| props | Configuration options | object | — | {} |
| multiple | Whether to support multiple selection | boolean | — | false |
| filterable | Whether to support filtering | boolean | — | false |
| placeholder | Placeholder text | string | — | Please select |
| defaultExpanded | Whether to expand all nodes by default | boolean | — | false |
| size | Size | string | default / small / large | default |
| disabled | Whether to disable | boolean | — | false |
| clearable | Whether to be clearable | boolean | — | false |
| loading | Whether to show loading state | boolean | — | false |
| popperClass | Custom class name for dropdown | string | — | '' |
| class | Custom class name | string | — | '' |
| style | Custom styles | string / object | — | '' |
| defaultExpandedKeys | Array of keys for default expanded nodes | array | — | [] |
| showCheckbox | Whether nodes can be checked | boolean | — | false |
| checkStrictly | Whether checkbox is strict mode (parent-child not linked) | boolean | — | false |
| defaultCheckedKeys | Array of keys for default checked nodes | array | — | [] |
| textColor | Text color | string | — | #606266 |
| backgroundColor | Background color | string | — | #fff |
| activeColor | Active color | string | — | #409eff |
| width | Width | string / number | — | 100% |
| height | Height | string / number | — | auto |
| inputHeight | Input box height | string / number | — | 32px |
| validateEvent | Whether to trigger form validation | boolean | — | true |
| showArrow | Whether to show arrow | boolean | — | true |
| arrowType | Arrow type | string | — | arrow |
| arrowColor | Arrow color | string | — | #909399 |

### TreeSelect Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| update:modelValue | Triggered when value changes | New value |
| change | Triggered when value changes | New value |
| clear | Triggered on clear | — |
| check-change | Triggered when node checkbox state changes | { checkedKeys checkedNodes } |

### Tree Props Configuration

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| label | Property name for node label | string | 'label' |
| children | Property name for node children | string | 'children' |
| value | Property name for node value | string | 'id' |

<script setup>
import { ref } from 'vue'
import MYTree from '../../../packages/components/tree/src/tree.vue'
import MYTreeSelect from '../../../packages/components/tree/src/treeSelect.vue'

// Basic tree component data
const treeData = ref([
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Root Node 2',
    children: [
      { id: 7, name: 'Child Node 2-1' }
    ]
  }
])

const handleNodeClick = (node) => {
  console.log('Node clicked:', node)
}

// Tree select data
const selectedValue = ref(null)
const selectedValues = ref([])
const checkedValues = ref([2, 4])
const filteredValue = ref(null)
const styledValue = ref(null)

// Tree select data source
const treeSelectData = ref([
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Root Node 2',
    children: [
      { id: 7, name: 'Child Node 2-1' }
    ]
  }
])

const treeProps = ref({
  label: 'name',
  value: 'id',
  children: 'children'
})
</script>
