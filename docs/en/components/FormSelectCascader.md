这是 `SelectCascader` 组件使用文档的英文翻译。

---

# SelectCascader

## 简要介绍
SelectCascader 组件用于用户从多级下拉列表中选择一个或多个选项。<br />
您可以使用 `<MYSelect-cascader></MYSelect-cascader>` 或 `<MYSelect-cascader />` 来实现级联选择器。

## 基础用法
使用 `v-model` 绑定选中值，并通过 `options` 属性传递级联数据。

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue1' :options='options1' placeholder='请选择' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue1" :options="options1" placeholder="请选择" />
    </div>
  </template>
</ShowCode>

## 禁用状态

### 禁用整个选择器
使用 `disabled` 属性禁用选择器。

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue2' :options='options2' placeholder='禁用状态' disabled />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="禁用状态" disabled />
    </div>
  </template>
</ShowCode>

### 禁用特定选项
使用 `disabled` 属性禁用单个选项。

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue3' :options='options3' placeholder='禁用特定选项' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="禁用特定选项" />
    </div>
  </template>
</ShowCode>

## 多级菜单
通过 `options` 属性传递多级数据实现多级菜单。

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue4' :options='options4' placeholder='多级菜单' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue4" :options="options4" placeholder="多级菜单" />
    </div>
  </template>
</ShowCode>

## 自定义尺寸
使用 `width` 和 `height` 属性自定义选择器的宽度和高度。

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue5' :options='options4' placeholder='自定义尺寸' height='50px' width='500px' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue5" :options="options4" placeholder="自定义尺寸" height="50px" width="500px" />
    </div>
  </template>
</ShowCode>

## 组合使用
最后，这是一个组合了多个 API 的级联选择器使用示例：

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-cascader 
        v-model='selectedValue6' 
        :options='options4' 
        placeholder='组合使用示例'
        height='45px'
        width='400px'
    />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader 
          v-model="selectedValue6" 
          :options="options4" 
          placeholder="组合使用示例"
          height="45px"
          width="400px"
      />
    </div>
  </template>
</ShowCode>

## API 参考

### Props

| 属性         | 描述                         | 类型             | 可选值   | 默认值         |
|--------------|------------------------------|------------------|----------|----------------|
| modelValue   | 绑定值                       | string \| array  | —        | —              |
| options      | 级联数据                     | Array            | —        | `[]`           |
| placeholder  | 占位文本                     | string           | —        | `'请选择'`     |
| disabled     | 是否禁用                     | boolean          | —        | `false`        |
| width        | 宽度                         | string \| number | —        | `'260px'`      |
| height       | 高度                         | string \| number | —        | `'40px'`       |

### 类型定义

```typescript
interface OptionCascaderProps {
  label: string;
  value: string;
  disabled?: boolean;
  children?: OptionCascaderProps[];
}

interface SelectCascaderProps {
  modelValue?: string | string[];
  options?: OptionCascaderProps[];
  placeholder?: string;
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
}
```

<script setup> 
import { ref } from 'vue' 
import MYSelectCascader from '../../../packages/components/selectCascader/src/selectCascader.vue' 
const selectedValue1 = ref(''); 
const selectedValue2 = ref(''); 
const selectedValue3 = ref(''); 
const selectedValue4 = ref(''); 
const selectedValue5 = ref(''); 
const selectedValue6 = ref(''); 
const options1 = [ 
    { value: 'option1', label: '选项 1' }, 
    { value: 'option2', label: '选项 2' }, 
    { value: 'option3', label: '选项 3' }, 
    { value: 'option4', label: '选项 4' }, 
]; 
const options2 = [ 
    { value: 'option1', label: '选项 1' }, 
    { value: 'option2', label: '选项 2' }, 
]; 
const options3 = [ 
    { value: 'option1', label: '选项 1' }, 
    { value: 'option2', label: '选项 2', disabled: true }, 
]; 
const options4 = [ 
    { value: 'group1', label: '组 1', children: [ 
        { value: 'option1-1', label: '选项 1-1' }, 
        { value: 'option1-2', label: '选项 1-2' }, 
    ]}, 
    { 
        value: 'group2', label: '组 2', children: [ 
            { value: 'option2-1', label: '选项 2-1' }, 
            { value: 'option2-2', label: '选项 2-2', children: [ 
                { value: 'option2-2-1', label: '选项 2-2-1' }, 
                { value: 'option2-2-2', label: '选项 2-2-2' }, 
            ] 
        }, 
    ] 
}, 
]; 
</script>