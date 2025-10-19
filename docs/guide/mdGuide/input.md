 # Input
## 简易介绍
input输入框组件，用于用户输入文本内容。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYInput></MYInput>`来实现一个输入框。

## 基础用法
使用`modelValue`绑定输入框的值。
```vue
<MYInput v-model="inputValue" placeholder="请输入内容" />
```
<MYInput v-model="inputValue" placeholder="请输入内容" />

## 输入类型
通过`type`属性可以设置输入框的类型，如`text`、`password`等。
```vue
<MYInput type="password" placeholder="请输入密码" />
```
<MYInput type="password" placeholder="请输入密码" />

## 尺寸控制
使用`width`和`height`属性可以自定义输入框的尺寸。
```vue
<MYInput width="200px" height="40px" />
```
<MYInput width="200px" height="40px" />

## 状态控制
- `disabled`：禁用输入框
- `clearable`：显示清除按钮
- `showPassword`：切换密码可见性
```vue
<MYInput clearable showPassword />
```
<MYInput v-model="passwordValue" clearable />

## 输入限制
- `minlength`：最小输入长度
- `maxlength`：最大输入长度
- `wordLimit`：显示字数统计
```vue
<MYInput maxlength="10" word-limit />
```
<MYInput maxlength="10" word-limit />

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| type         | 输入框类型   | string  | `text`/`password`等               | `text` |
| tag          | 标签类型     | string  | `input`/`textarea`等              | `input` |
| width        | 宽度        | string \| number | —                               | `200px` |
| height       | 高度        | string \| number | —                               | `30px` |
| disabled     | 是否禁用     | boolean | —                               | `false` |
| clearable    | 是否可清除   | boolean | —                               | `false` |
| showPassword | 是否显示密码切换 | boolean | —                               | `false` |
| placeholder  | 占位文本     | string  | —                               | `''`   |
| modelValue   | 绑定值       | string  | —                               | `''`   |
| minlength    | 最小输入长度 | number  | —                               | `undefined` |
| maxlength    | 最大输入长度 | number \| string | —                               | `undefined` |
| wordLimit    | 是否显示字数统计 | boolean | —                               | `false` |

### 类型定义
```ts
// 输入框属性类型
type InputProps = {
  type: string;
  tag: string;
  width: string | number;
  height: string | number;
  disabled: boolean;
  clearable: boolean;
  showPassword: boolean;
  placeholder: string;
  modelValue: string;
  minlength?: number;
  maxlength?: number | string;
  wordLimit: boolean;
};
```

<script setup>
import { ref } from "vue";
const inputValue = ref("111");
</script>