# Tree 树形控件

## 简介

树形控件用于展示层级结构数据，支持展开/收起、选中、复选等功能。可以用于组织架构、文件目录、分类等场景。

## 基础用法

基础的树形结构展示，支持节点点击事件。

<ShowCode
  title="基础用法"
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
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      { id: 7, name: '二级节点2-1' }
    ]
  }
]
const handleNodeClick = (node) => {
  console.log('点击节点:', node)
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
            name: '一级节点1',
            children: [
              { id: 2, name: '二级节点1-1' },
              {
                id: 3,
                name: '二级节点1-2',
                children: [
                  { id: 4, name: '三级节点1' },
                  { id: 5, name: '三级节点2' }
                ]
              }
            ]
          },
          {
            id: 6,
            name: '一级节点2',
            children: [
              { id: 7, name: '二级节点2-1' }
            ]
          }
        ]" 
        :props="{ label: 'name', children: 'children' }" 
        @node-click="(node) => console.log('点击节点:', node)" />
    </div>
  </template>
</ShowCode>

## 树选择器

树形选择器，支持单选、多选、过滤等功能。

### 单选模式

<ShowCode
  title="单选模式"
  :code="`
<template>
  <MYTreeSelect 
    v-model='selectedValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    placeholder='请选择'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValue = ref(null)
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      { id: 7, name: '二级节点2-1' }
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
          name: '一级节点1',
          children: [
            { id: 2, name: '二级节点1-1' },
            {
              id: 3,
              name: '二级节点1-2',
              children: [
                { id: 4, name: '三级节点1' },
                { id: 5, name: '三级节点2' }
              ]
            }
          ]
        },
        {
          id: 6,
          name: '一级节点2',
          children: [
            { id: 7, name: '二级节点2-1' }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      placeholder="请选择"
      clearable
      style="width: 240px" />
  </template>
</ShowCode>

### 多选模式

<ShowCode
  title="多选模式"
  :code="`
<template>
  <MYTreeSelect
    v-model='selectedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    placeholder='请选择'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValues = ref([])
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
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
          name: '一级节点1',
          children: [
            { id: 2, name: '二级节点1-1' },
            {
              id: 3,
              name: '二级节点1-2',
              children: [
                { id: 4, name: '三级节点1' },
                { id: 5, name: '三级节点2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      multiple
      placeholder="请选择"
      clearable
      style="width: 240px" />
  </template>
</ShowCode>

### 复选框模式

支持复选框选择，可设置父子节点联动关系。

<ShowCode
  title="复选框模式"
  :code="`
<template>
  <MYTreeSelect 
    v-model='checkedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    show-checkbox
    :check-strictly='false'
    placeholder='请选择' />
</template>
<script setup>
import { ref } from 'vue'
const checkedValues = ref([2, 4])
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
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
          name: '一级节点1',
          children: [
            { id: 2, name: '二级节点1-1' },
            {
              id: 3,
              name: '二级节点1-2',
              children: [
                { id: 4, name: '三级节点1' },
                { id: 5, name: '三级节点2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      multiple
      show-checkbox
      :check-strictly="false"
      placeholder="请选择"
      style="width: 240px" />
  </template>
</ShowCode>

### 过滤功能

支持输入过滤，快速查找节点。

<ShowCode
  title="过滤功能"
  :code="`
<template>
  <MYTreeSelect 
    v-model='filteredValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    filterable
    placeholder='请输入关键词' />
</template>
<script setup>
import { ref } from 'vue'
const filteredValue = ref(null)
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
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
          name: '一级节点1',
          children: [
            { id: 2, name: '二级节点1-1' },
            {
              id: 3,
              name: '二级节点1-2',
              children: [
                { id: 4, name: '三级节点1' },
                { id: 5, name: '三级节点2' }
              ]
            }
          ]
        }
      ]"
      :props="{ label: 'name', value: 'id', children: 'children' }"
      filterable
      placeholder="请输入关键词"
      style="width: 240px" />
  </template>
</ShowCode>

## 自定义样式

支持自定义文本颜色、背景色和激活颜色。

<ShowCode
  title="自定义样式"
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
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
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
          name: '一级节点1',
          children: [
            { id: 2, name: '二级节点1-1' },
            {
              id: 3,
              name: '二级节点1-2',
              children: [
                { id: 4, name: '三级节点1' },
                { id: 5, name: '三级节点2' }
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

## API 参考

### Tree Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| data | 树数据 | array | — | [] |
| props | 配置选项 | object | — | {} |
| default-expanded | 是否默认展开所有节点 | boolean | — | false |
| default-expanded-keys | 默认展开节点的 key 数组 | array | — | [] |

### Tree Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| node-click | 节点被点击时触发 | 点击的节点数据 |

### TreeSelect Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| modelValue / v-model | 绑定值 | string / number / array | — | null |
| data | 树数据 | array | — | [] |
| props | 配置选项 | object | — | {} |
| multiple | 是否多选 | boolean | — | false |
| filterable | 是否可过滤 | boolean | — | false |
| placeholder | 占位符 | string | — | 请选择 |
| defaultExpanded | 是否默认展开所有节点 | boolean | — | false |
| size | 尺寸 | string | default / small / large | default |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否可清空 | boolean | — | false |
| loading | 是否显示加载状态 | boolean | — | false |
| popperClass | 下拉框自定义类名 | string | — | '' |
| class | 自定义类名 | string | — | '' |
| style | 自定义样式 | string / object | — | '' |
| defaultExpandedKeys | 默认展开节点的 key 数组 | array | — | [] |
| showCheckbox | 节点是否可被复选 | boolean | — | false |
| checkStrictly | 复选框是否严格模式（父子不互相关联） | boolean | — | false |
| defaultCheckedKeys | 默认选中的节点 key 数组 | array | — | [] |
| textColor | 文本颜色 | string | — | #606266 |
| backgroundColor | 背景颜色 | string | — | #fff |
| activeColor | 激活颜色 | string | — | #409eff |
| width | 宽度 | string / number | — | 100% |
| height | 高度 | string / number | — | auto |
| inputHeight | 输入框高度 | string / number | — | 32px |

### TreeSelect Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| update:modelValue | 值改变时触发 | 新的值 |
| change | 值改变时触发 | 新的值 |
| clear | 清空时触发 | — |
| check-change | 节点复选状态改变时触发 | { checkedKeys checkedNodes } |

### Tree Props 配置项

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | 指定节点标签为节点对象的某个属性值 | string | 'label' |
| children | 指定子树为节点对象的某个属性值 | string | 'children' |
| value | 指定节点选择框为节点对象的某个属性值 | string | 'id' |

<script setup>
import { ref } from 'vue'
import MYTree from '../../packages/components/tree/src/tree.vue'
import MYTreeSelect from '../../packages/components/tree/src/treeSelect.vue'

// 基础树形组件数据
const treeData = ref([
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      { id: 7, name: '二级节点2-1' }
    ]
  }
])

const handleNodeClick = (node) => {
  console.log('点击节点:', node)
}

// 树选择器数据
const selectedValue = ref(null)
const selectedValues = ref([])
const checkedValues = ref([2, 4])
const filteredValue = ref(null)
const styledValue = ref(null)

// 树选择器数据源
const treeSelectData = ref([
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      { id: 7, name: '二级节点2-1' }
    ]
  }
])

const treeProps = ref({
  label: 'name',
  value: 'id',
  children: 'children'
})
</script>