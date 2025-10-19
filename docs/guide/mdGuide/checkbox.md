# Checkbox
## 简易介绍
checkbox复选框，用于用户从多个选项中选择一个或多个。mengyue-components进行了封装并进行了vitest测试。<br />
实现复选框的标签有两种:<br />
`<MYCheckbox />`或者`<MYCheckbox></MYCheckbox>`<br />
`<MYCheckbox-group />`或者`<MYCheckbox-group></MYCheckbox-group>`单选框组<br />

## 基础多选框组
使用`<MYCheckbox-group></MYCheckbox-group>`可以将复选框分组。<br />
例如`selectedValues1`已经定义过了`const selectedValues1 = ref(['option1'])`
```vue
<MYCheckbox-group v-model="selectedValues1">
    <MYCheckbox value="option1">选项1</MYCheckbox>
    <MYCheckbox value="option2">选项2</MYCheckbox>
    <MYCheckbox value="option3">选项3</MYCheckbox>
</MYCheckbox-group>
```
<MYCheckbox-group v-model="selectedValues1">
    <MYCheckbox value="option1">选项1</MYCheckbox>
    <MYCheckbox value="option2">选项2</MYCheckbox>
    <MYCheckbox value="option3">选项3</MYCheckbox>
</MYCheckbox-group>


## 垂直排列
使用`direction`将复选框垂直排列<br />
例如`selectedValues2`已经定义过了`const selectedValues2 = ref([])`
```vue
<MYCheckbox-group v-model="selectedValues2" direction="vertical">
    <MYCheckbox value="apple">苹果</MYCheckbox>
    <MYCheckbox value="banana">香蕉</MYCheckbox>
    <MYCheckbox value="orange">橙子</MYCheckbox>
</MYCheckbox-group>
```
<MYCheckbox-group v-model="selectedValues2" direction="vertical">
    <MYCheckbox value="apple">苹果</MYCheckbox>
    <MYCheckbox value="banana">香蕉</MYCheckbox>
    <MYCheckbox value="orange">橙子</MYCheckbox>
</MYCheckbox-group>

## 关于禁用状态
使用`disabled`可以禁用复选框。<br />
例如`selectedValues3`已经定义过了`const selectedValues3 = ref([])`
### 整个组禁用
```vue
<MYCheckbox-group v-model="selectedValues3" disabled>
    <MYCheckbox value="red">红色</MYCheckbox>
    <MYCheckbox value="green">绿色</MYCheckbox>
    <MYCheckbox value="blue">蓝色</MYCheckbox>
</MYCheckbox-group>
```
<MYCheckbox-group v-model="selectedValues3" disabled>
    <MYCheckbox value="red">红色</MYCheckbox>
    <MYCheckbox value="green">绿色</MYCheckbox>
    <MYCheckbox value="blue">蓝色</MYCheckbox>
</MYCheckbox-group>

### 单个选项禁用
例如`selectedValues4`已经定义过了`const selectedValues4 = ref([])`
```vue
<MYCheckbox-group v-model="selectedValues4">
    <MYCheckbox value="mon">星期一</MYCheckbox>
    <MYCheckbox value="tue" disabled>星期二</MYCheckbox>
    <MYCheckbox value="wed">星期三</MYCheckbox>
</MYCheckbox-group>
```
<MYCheckbox-group v-model="selectedValues4">
    <MYCheckbox value="mon">星期一</MYCheckbox>
    <MYCheckbox value="tue" disabled>星期二</MYCheckbox>
    <MYCheckbox value="wed">星期三</MYCheckbox>
</MYCheckbox-group>

## 自定义间隔
例如`selectedValues5`已经定义过了`const selectedValues5 = ref([])`
```vue
<MYCheckbox-group v-model="selectedValues5" gap="72px">
    <MYCheckbox value="cat">猫</MYCheckbox>
    <MYCheckbox value="dog">狗</MYCheckbox>
    <MYCheckbox value="bird">鸟</MYCheckbox>
</MYCheckbox-group>
```
<MYCheckbox-group v-model="selectedValues5" gap="72px">
    <MYCheckbox value="cat">猫</MYCheckbox>
    <MYCheckbox value="dog">狗</MYCheckbox>
    <MYCheckbox value="bird">鸟</MYCheckbox>
</MYCheckbox-group>

## API 参考
### CheckboxGroup Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| direction   | 布局方向        | string | `vertical`/`horizontal`    | `horizontal` |
| value        | 复选框的值     | string/number | —                               | `required` |
| disabled     | 是否禁用      | boolean | —                                 | `false` |

### Checkbox Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| value        | 复选框的值     | string/number | —                               | `required` |
| disabled     | 是否禁用      | boolean | —                                 | `false` |

### 类型定义

```vue
interface CheckboxGroupProps {
    direction?: 'vertical' | 'horizontal';
    value?: string | number;
    disabled?: boolean;
}

interface CheckboxProps {
    value?: string | number;
    disabled?: boolean;
}
```

<script setup>
import { ref } from 'vue'
// 基础用法
const selectedValues1 = ref(['option1'])

// 垂直排列
const selectedValues2 = ref([])

// 禁用状态
const selectedValues3 = ref(['red'])
const selectedValues4 = ref(['mon'])

// 自定义间距
const customGap = ref(false)
const selectedValues5 = ref([])

// 响应式测试
const selectedValues6 = ref(['vue'])
</script>