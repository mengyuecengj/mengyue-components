# Radio
## 简易介绍
radio单选按钮，用于用户从多个选项中选择一个。mengyue-components进行了封装并进行了vitest测试。<br />
<!-- 可以使用`<MYRadio></MYRadio>`或者`<MYRadio />`来实现一个单选按钮 -->
实现单选框的标签有两种:<br />
`<MYRadio />`或者`<MYRadio></MYRadio>`<br />
`<MYRadio-group>`或者`<MYRadio-group></MYRadio-group>`单选框组<br />

## 关于绑定值
### modelValue
使用`modelValue`可以绑定单选按钮的值。
```vue
<MYRadio v-model="singleSelected" value="option1">选项1</MYRadio>
<MYRadio v-model="singleSelected" value="option2">选项2</MYRadio>
```

<demo>
  <template #source>
    <MYRadio v-model="singleSelected" value="option1">选项1</MYRadio>
    <MYRadio v-model="singleSelected" value="option2">选项2</MYRadio>
  </template>
</demo>

## radioGroup
可以使用radioGroup将单选按钮到一个组里面
```vue
<MYRadio-group v-model="groupSelected">
    <MYRadio value="1">选项1</MYRadio>
    <MYRadio value="2">选项2</MYRadio>
    <MYRadio value="3">选项3</MYRadio>
</MYRadio-group>
```

<demo>
  <template #source>
        <MYRadio-group v-model="groupSelected">
            <MYRadio value="1">选项1</MYRadio>
            <MYRadio value="2">选项2</MYRadio>
            <MYRadio value="3">选项3</MYRadio>
        </MYRadio-group>
  </template>
</demo>

## disabled
```vue
<MYRadio-group v-model="disabledSelected">
    <MYRadio value="1">禁用选项1</MYRadio>
    <MYRadio value="2" disabled>禁用选项2</MYRadio>
</MYRadio-group>
```
<MYRadio-group v-model="disabledSelected">
    <MYRadio value="1">禁用选项1</MYRadio>
    <MYRadio value="2" disabled>禁用选项2</MYRadio>
</MYRadio-group>

### 全部禁用
```vue
<MYRadio-group v-model="disabledSelected" disabled>
    <MYRadio value="1">禁用选项1</MYRadio>
    <MYRadio value="2">禁用选项2</MYRadio>
</MYRadio-group>
```
<MYRadio-group v-model="disabledSelected" disabled>
    <MYRadio value="1">禁用选项1</MYRadio>
    <MYRadio value="2">禁用选项2</MYRadio>
</MYRadio-group>

## 垂直排列
```vue
<MYRadio-group v-model="verticalSelected" direction="vertical">
    <MYRadio value="1">垂直选项1</MYRadio>
    <MYRadio value="2">垂直选项2</MYRadio>
</MYRadio-group>
```
<MYRadio-group v-model="verticalSelected" direction="vertical">
    <MYRadio value="1">垂直选项1</MYRadio>
    <MYRadio value="2">垂直选项2</MYRadio>
</MYRadio-group>

## API 参考

### radioGroup Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| direction        | 排列方向   |   string   | `horizontal`,`vertical`   | `horizontal`   |
| disabled     | 是否禁用      | boolean | —                                 | `false` |

### radio Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| disabled     | 是否禁用      | boolean | —                                 | `false` |

### 类型定义

```vue
interface RadioProps {
  modelValue?: string | number;
  value?: string | number;
  name?: string;
  size?: string;
  disabled?: boolean;
}
```

<script setup>
    import { ref } from 'vue'
    const singleSelected = ref('option1')
    const groupSelected = ref('2')
    const verticalSelected = ref('2')
</script>