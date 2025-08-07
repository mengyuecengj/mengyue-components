# SelectCascader
## 简易介绍
selectCascader级联选择器组件，用于用户从多级下拉列表中选择一个或多个选项。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYSelect-cascader></MYSelect-cascader>`或者`<MYSelect-cascader />`来实现一个级联选择器

## 基础用法
使用`v-model`绑定选中的值，并通过`options`属性传递级联数据。
例如`selectedValue1`已经定义了`const selectedValue1 = ref('')`
```vue
<MYSelect-cascader v-model="selectedValue1" :options="options1" placeholder="请选择" @change="handleChange" />
<!-- selectValue1和options1需要定义个变量: 例如 -->
const options1: Option[] = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
];
```
<MYSelect-cascader v-model="selectedValue1" :options="options1" placeholder="请选择" @change="handleChange" />

## 禁用状态
使用`disabled`属性可以禁用选择器。 例如`selectedValue2`已经定义了`const selectedValue2 = ref('')`
```vue
<MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="禁用状态" disabled />
<!-- options2需要定义个变量: 例如-->
const options2 = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
];
```
<MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="禁用状态" disabled />

### 禁用某一个选项
例如`selectedValue2`已经定义了`const selectedValue2 = ref('')`
```vue
<MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="禁用状态" />
<!-- options2需要定义个变量: 例如-->
const options2 = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' disabled: "true" },
];
```
<MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="禁用状态" />

## 多级菜单
多级菜单，使用`options`属性传递多级数据。 例如`selectedValue3`已经定义了`const selectedValue3 = ref('')`
```vue
<MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="多级菜单" />
<!-- 这里需要定义个多级菜单的变量 -->
const options3 = [
  {
    value: 'group1',
    label: '分组1',
    children: [
      { value: 'option1-1', label: '选项1-1' },
      { value: 'option1-2', label: '选项1-2' },
    ]
  },
  {
    value: 'group2',
    label: '分组2',
    children: [
      { value: 'option2-1', label: '选项2-1' },
      {
        value: 'option2-2',
        label: '选项2-2',
        children: [
          { value: 'option2-2-1', label: '选项2-2-1' },
          { value: 'option2-2-2', label: '选项2-2-2' },
        ]
      },
    ]
  },
];
```
<MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="多级菜单" />

## 自定义尺寸
使用`width`和`height`属性可以自定义选择器的宽度和高度。
定义了这个尺寸后，如果使用了多级菜单也会跟着变化。例如`selectedValue3`已经定义了`const selectedValue3 = ref('')`<br />
这里定义了50px的高度和300px的宽度
```vue
<MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="多级菜单" height="50px" width="500px" />
```
<MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="多级菜单" height="50px" width="500px" />


## API 参考

### Select Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| disabled     | 是否禁用     | boolean | —                               | `false` |
| width        | 宽度        | string \| number | —                          | `'260px'` |
| height       | 高度        | string \| number | —                          | `'40px'` |
| options      | 级联数据     | Array   | —                               | `[]`    |

### Option Props
| 参数   | 说明     | 类型    | 可选值 | 默认值 |
|--------|--------|---------|--------|--------|
| label  | 按钮内容 | string | —     | —      |
| value  | 初始值    | string | —     | —      |
| disabled| 是否禁用    | boolean | —     | false |
| children| 子选项    | Array   | —     | —      |

### 类型定义
```vue
interface SelectCascaderProps = {
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
};

interface OptionCascaderProps = {
    label: string;
    value: string;
    disabled?: boolean;
    children?: Array;
}
```

<script setup>
import { ref } from 'vue'
const selectedValue1 = ref('');
const selectedValue2 = ref('');
const selectedValue3 = ref('');
const options1 = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
];

const options2 = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2', disabled: true },
];

const options3 = [
  {
    value: 'group1',
    label: '分组1',
    children: [
      { value: 'option1-1', label: '选项1-1' },
      { value: 'option1-2', label: '选项1-2' },
    ]
  },
  {
    value: 'group2',
    label: '分组2',
    children: [
      { value: 'option2-1', label: '选项2-1' },
      {
        value: 'option2-2',
        label: '选项2-2',
        children: [
          { value: 'option2-2-1', label: '选项2-2-1' },
          { value: 'option2-2-2', label: '选项2-2-2' },
        ]
      },
    ]
  },
];
</script>