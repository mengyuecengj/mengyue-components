# Select
## 简易介绍
select选择器组件，用于用户从下拉列表中选择一个或多个选项。mengyue-components进行了封装并进行了vitest测试。<br />
实现选择器有两种标签
`<MYSelect />`或者`<MYSelect></MYSelect>`
`<MYOption />`或者`<MYOption></MYOption>`

## 基础用法
使用`v-model`绑定选中的值。例如`selectedValue1`已经定义过了`const selectedValue1 = ref('')`
```vue
<MYSelect v-model="selectedValue1" placeholder="请选择水果">
    <MYOption value="apple" label="苹果" />
    <MYOption value="banana" label="香蕉" />
    <MYOption value="orange" label="橙子" />
</MYSelect>
```
<MYSelect v-model="selectedValue1" placeholder="请选择水果">
    <MYOption value="apple" label="苹果" />
    <MYOption value="banana" label="香蕉" />
    <MYOption value="orange" label="橙子" />
</MYSelect>

## 禁用状态
使用`disabled`属性可以禁用选择器。例如`selectedValue2`已经定义过了`const selectedValue2 = ref('')`
```vue
<MYSelect v-model="selectedValue2" disabled placeholder="禁用状态">
    <MYOption value="1" label="选项1" />
    <MYOption value="2" label="选项2" />
    <MYOption value="3" label="选项3" />
</MYSelect>
```
<MYSelect v-model="selectedValue2" disabled placeholder="禁用状态">
    <MYOption value="1" label="选项1" />
    <MYOption value="2" label="选项2" />
    <MYOption value="3" label="选项3" />
</MYSelect>

### 禁用某个选项
```vue
<MYSelect v-model="selectedValue2"  placeholder="禁用状态">
    <MYOption value="1" label="选项1" />
    <MYOption value="2" label="选项2" disabled />
    <MYOption value="3" label="选项3" />
</MYSelect>
```
<MYSelect v-model="selectedValue2" placeholder="禁用状态">
    <MYOption value="1" label="选项1" />
    <MYOption value="2" label="选项2" disabled />
    <MYOption value="3" label="选项3" />
</MYSelect>

## 自定义尺寸
使用`width`和`height`属性可以自定义选择器的宽度和高度。例如`selectedValue3`已经定义过了`const selectedValue3 = ref('')`
```vue
<MYSelect v-model="selectedValue3" placeholder="宽300px高50px" width="300px" height="50px">
    <MYOption value="4" label="选项4" />
    <MYOption value="5" label="选项5" />
    <MYOption value="6" label="选项6" />
</MYSelect>
```
<MYSelect v-model="selectedValue3" placeholder="宽300px高50px" width="300px" height="50px">
    <MYOption value="4" label="选项4" />
    <MYOption value="5" label="选项5" />
    <MYOption value="6" label="选项6" />
</MYSelect>


## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| disabled     | 是否禁用     | boolean | —                               | `false` |
| width        | 宽度        | string \| number | —                          | `'260px'` |
| height       | 高度        | string \| number | —                          | `'40px'` |

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| disabled     | 是否禁用     | boolean | —                               | `false` |

### 类型定义
```ts
interface SelectProps {
  disabled?: boolean;
  width?: SelectSize;
  height?: SelectSize;
}

interface OptionProps {
  disabled?: boolean;
}
```

<script>
import { ref } from 'vue'
const selectedValue1 = ref('')
const selectedValue2 = ref('')
const selectedValue3 = ref('')
const selectedValue4 = ref('')
const selectedValue5 = ref('B') // 设置默认值
</script>