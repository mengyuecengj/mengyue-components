# InputNumber

## 简易介绍
InputNumber 数字输入框组件，用于输入数字或进行数字的增减操作。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYInputNumber></MYInputNumber>` 或者 `<MYInputNumber />` 来实现一个数字输入框。

## 基本用法

### 基础数字输入框
基础的数字输入框，支持通过按钮增减数值。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInputNumber v-model='value' />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInputNumber v-model="inputNumberValue1" />
      <div style="margin-top: 10px; color: #666;">当前值: {{ inputNumberValue1 }}</div>
    </div>
  </template>
</ShowCode>

### 设置初始值
设置数字输入框的初始值。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInputNumber v-model='value' />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(10)
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInputNumber v-model="inputNumberValue2" />
      <div style="margin-top: 10px; color: #666;">当前值: {{ inputNumberValue2 }}</div>
    </div>
  </template>
</ShowCode>

### 范围限制
通过计算属性或监听器实现数值范围限制。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <MYInputNumber v-model='value' />
    <div style='margin-top: 10px; font-size: 12px; color: #666;'>
      数值范围: 0 - 100
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const value = ref(50)
watch(value, (newVal) => {
  if (newVal < 0) value.value = 0
  if (newVal > 100) value.value = 100
})
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInputNumber v-model="inputNumberValue3" />
      <div style="margin-top: 10px; font-size: 12px; color: #666;">
        数值范围: 0 - 100
      </div>
      <div style="margin-top: 5px; color: #666;">当前值: {{ inputNumberValue3 }}</div>
    </div>
  </template>
</ShowCode>

### 步进控制
通过自定义逻辑控制每次增减的步长。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <MYInputNumber v-model='value' />
    <div style='margin-top: 10px; font-size: 12px; color: #666;'>
      每次增减 5
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const value = ref(0)
// 通过外部逻辑控制步进
const handleIncrement = () => {
  value.value += 5
}
const handleDecrement = () => {
  value.value -= 5
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <div style="margin-bottom: 10px;">
        <MYInputNumber v-model="inputNumberValue4" />
      </div>
      <div style="display: flex; gap: 10px; margin-bottom: 10px;">
        <button @click="stepDecrement" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">-5</button>
        <button @click="stepIncrement" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">+5</button>
      </div>
      <div style="color: #666;">当前值: {{ inputNumberValue4 }}</div>
    </div>
  </template>
</ShowCode>

### 禁用状态
通过外部逻辑控制数字输入框的禁用状态。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <div style='margin-bottom: 10px;'>
      <button @click='toggleDisabled'>
        {{ disabled ? '启用' : '禁用' }}数字输入框
      </button>
    </div>
    <MYInputNumber v-model='value' :disabled='disabled' />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(5)
const disabled = ref(false)
const toggleDisabled = () => {
  disabled.value = !disabled.value
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <div style="margin-bottom: 10px;">
        <button @click="toggleDisabled" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
          {{ inputNumberDisabled ? '启用' : '禁用' }}数字输入框
        </button>
      </div>
      <MYInputNumber v-model="inputNumberValue5" :disabled="inputNumberDisabled" />
      <div style="margin-top: 10px; color: #666;">当前值: {{ inputNumberValue5 }}</div>
    </div>
  </template>
</ShowCode>

### 表单集成
在表单中使用数字输入框。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px; max-width: 300px;'>
    <div>
      <label style='display: block; margin-bottom: 5px; font-weight: bold;'>数量:</label>
      <MYInputNumber v-model='form.quantity' />
    </div>
    <div>
      <label style='display: block; margin-bottom: 5px; font-weight: bold;'>价格:</label>
      <MYInputNumber v-model='form.price' />
    </div>
    <div style='padding: 10px; background: #f5f5f5; border-radius: 4px;'>
      <div>数量: {{ form.quantity }}</div>
      <div>价格: {{ form.price }}</div>
      <div style='margin-top: 5px; font-weight: bold;'>
        总价: {{ form.quantity * form.price }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const form = reactive({
  quantity: 1,
  price: 100
})
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px; max-width: 300px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">数量:</label>
        <MYInputNumber v-model="formData.quantity" />
      </div>
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">价格:</label>
        <MYInputNumber v-model="formData.price" />
      </div>
      <div style="padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>数量: {{ formData.quantity }}</div>
        <div>价格: {{ formData.price }}</div>
        <div style="margin-top: 5px; font-weight: bold;">
          总价: {{ formData.quantity * formData.price }}
        </div>
      </div>
    </div>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue  | 绑定值      | number  | — | `0`  |
| disabled  | 是否禁用      | boolean  | — | `false`  |

### 事件
| 事件名          | 说明         | 参数     |
|--------------|-------------|---------|
| update:modelValue  | 值变化时触发      | value: number  |

### 类型定义
```typescript
interface InputNumberProps {
  modelValue?: number;
  disabled?: boolean;
}
```

<script setup>
import { ref, reactive, watch } from 'vue'
import MYInputNumber from '../../packages/components/inputNumber/src/inputNumber.vue'
import '../../packages/components/inputNumber/style/inputNumber.scss'


// 基础示例
const inputNumberValue1 = ref(0)

// 初始值示例
const inputNumberValue2 = ref(10)

// 范围限制示例
const inputNumberValue3 = ref(50)
watch(inputNumberValue3, (newVal) => {
  if (newVal < 0) inputNumberValue3.value = 0
  if (newVal > 100) inputNumberValue3.value = 100
})

// 步进控制示例
const inputNumberValue4 = ref(0)
const stepIncrement = () => {
  inputNumberValue4.value += 5
}
const stepDecrement = () => {
  inputNumberValue4.value -= 5
}

// 禁用状态示例
const inputNumberValue5 = ref(5)
const inputNumberDisabled = ref(false)
const toggleDisabled = () => {
  inputNumberDisabled.value = !inputNumberDisabled.value
}

// 表单集成示例
const formData = reactive({
  quantity: 1,
  price: 100
})
</script>