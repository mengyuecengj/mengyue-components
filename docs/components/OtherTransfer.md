# Transfer

## 简易介绍
Transfer 穿梭框组件，用于在两栏中移动数据选项。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYTransfer></MYTransfer>` 来实现数据穿梭功能。

## 基本用法

### 基础穿梭框
基础的穿梭框组件，支持数据在左右两栏之间移动。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['列表一', '列表二']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 2])
const data = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false },
  { key: 5, label: '禁用选项', disabled: true }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue"
      :data="transferData"
      :titles="['列表一', '列表二']"
    />
  </template>
</ShowCode>

### 自定义标题
使用 `titles` 属性自定义左右两栏的标题。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['源列表', '目标列表']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 4])
const data = ref([
  { key: 1, label: '苹果', disabled: false },
  { key: 2, label: '香蕉', disabled: false },
  { key: 3, label: '橙子', disabled: false },
  { key: 4, label: '葡萄', disabled: false },
  { key: 5, label: '芒果', disabled: false }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue2"
      :data="transferData2"
      :titles="['源列表', '目标列表']"
    />
  </template>
</ShowCode>

### 自定义颜色
使用 `backgroundColor`、`colorText` 和 `hoverBackground` 属性自定义穿梭框的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#f0f9ff'
    color-text='#0369a1'
    hover-background='#e0f2fe'
    :titles='['浅色主题', '浅色主题']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 3])
const data = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false }
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
      :titles="['浅色主题', '浅色主题']"
    />
  </template>
</ShowCode>

### 深色主题
使用深色背景创建深色主题的穿梭框。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#1e293b'
    color-text='#f1f5f9'
    hover-background='#334155'
    :titles='['深色主题', '深色主题']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 5])
const data = ref([
  { key: 1, label: '项目一', disabled: false },
  { key: 2, label: '项目二', disabled: false },
  { key: 3, label: '项目三', disabled: false },
  { key: 4, label: '项目四', disabled: false },
  { key: 5, label: '项目五', disabled: false }
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
      :titles="['深色主题', '深色主题']"
    />
  </template>
</ShowCode>

### 禁用选项
数据中包含禁用选项，用户无法选择或移动这些选项。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['可选列表', '已选列表']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2])
const data = ref([
  { key: 1, label: '可选项一', disabled: false },
  { key: 2, label: '可选项二', disabled: false },
  { key: 3, label: '禁用选项一', disabled: true },
  { key: 4, label: '可选项三', disabled: false },
  { key: 5, label: '禁用选项二', disabled: true },
  { key: 6, label: '可选项四', disabled: false }
])
</script>
  `.trim()"
>
  <template #demo>
    <MYTransfer 
      v-model="transferValue5"
      :data="transferData5"
      :titles="['可选列表', '已选列表']"
    />
  </template>
</ShowCode>

### 动态数据
结合动态数据源创建穿梭框。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <MYTransfer 
      v-model='selectedUsers'
      :data='users'
      :titles='['所有用户', '已选用户']'
    />
    <div style='margin-top: 16px;'>
      <p>已选择用户: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: '张三', disabled: false },
  { key: 102, label: '李四', disabled: false },
  { key: 103, label: '王五', disabled: false },
  { key: 104, label: '赵六', disabled: false },
  { key: 105, label: '钱七', disabled: false }
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
        :titles="['所有用户', '已选用户']"
      />
      <div style="margin-top: 16px;">
        <p>已选择用户: {{ selectedUsersLabels }}</p>
      </div>
    </div>
  </template>
</ShowCode>

## API 参考

### Transfer Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue  | 选中项的 key 数组      | number[]  | — | `[]`  |
| data  | 数据源      | Option[]  | — | `[]`  |
| titles  | 自定义左右列表的标题      | string[]  | — | `[]`  |
| backgroundColor  | 背景颜色      | string  | — | `''`  |
| colorText  | 文字颜色      | string  | — | `''`  |
| hoverBackground  | 悬停背景色      | string  | — | `''`  |

### 数据类型
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
import MYTransfer from '../../packages/components/transfer/src/transfer.vue'

// 基础示例数据
const transferValue = ref([1, 2])
const transferData = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false },
  { key: 5, label: '禁用选项', disabled: true }
])

// 自定义标题示例数据
const transferValue2 = ref([2, 4])
const transferData2 = ref([
  { key: 1, label: '苹果', disabled: false },
  { key: 2, label: '香蕉', disabled: false },
  { key: 3, label: '橙子', disabled: false },
  { key: 4, label: '葡萄', disabled: false },
  { key: 5, label: '芒果', disabled: false }
])

// 浅色主题示例数据
const transferValue3 = ref([1, 3])
const transferData3 = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false }
])

// 深色主题示例数据
const transferValue4 = ref([2, 5])
const transferData4 = ref([
  { key: 1, label: '项目一', disabled: false },
  { key: 2, label: '项目二', disabled: false },
  { key: 3, label: '项目三', disabled: false },
  { key: 4, label: '项目四', disabled: false },
  { key: 5, label: '项目五', disabled: false }
])

// 禁用选项示例数据
const transferValue5 = ref([2])
const transferData5 = ref([
  { key: 1, label: '可选项一', disabled: false },
  { key: 2, label: '可选项二', disabled: false },
  { key: 3, label: '禁用选项一', disabled: true },
  { key: 4, label: '可选项三', disabled: false },
  { key: 5, label: '禁用选项二', disabled: true },
  { key: 6, label: '可选项四', disabled: false }
])

// 动态数据示例
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: '张三', disabled: false },
  { key: 102, label: '李四', disabled: false },
  { key: 103, label: '王五', disabled: false },
  { key: 104, label: '赵六', disabled: false },
  { key: 105, label: '钱七', disabled: false }
])

const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
</script>
