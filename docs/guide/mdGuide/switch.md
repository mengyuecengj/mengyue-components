# Switch
## 简易介绍
switch开关，用于用户在两种状态之间切换。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYSwitch></MYSwitch>`或者`<MYSwitch />`来实现一个开关

## 基础用法
使用v-model绑定开关的状态,例如这里已经有了value1`const value1 = ref(false)`
```vue
<MYSwitch v-model="value1" />
```
<MYSwitch v-model="value1" />

## 带文本的switch
使用`value`和`text`可以定义开关的状态和开关的状态下的文本。例如这里已经有value2、value3`const value2 = ref(false)`
```vue
<MYSwitch v-model="value2" text="T" />
```
<MYSwitch v-model="value2" text="T" />

## 关于尺寸
使用`size`定义尺寸，可以使用mengyue-components提供的尺寸例如: `medium`。
```vue
<MYSwitch v-model="value1" size="mini" text="S" />
<MYSwitch v-model="value2" size="supersmall" text="S" />
<MYSwitch v-model="value3" size="small" text="M" />
<MYSwitch v-model="value4" size="medium" text="L" />
<MYSwitch v-model="value5" size="large" text="XL" />
<MYSwitch v-model="value6" size="biglarge" text="XL" />
<MYSwitch v-model="value7" size="superlarge" text="XL" />
```
运行后的效果，从上往下依次为:<br />
`mini`/`supersmall`/`small`/`medium`/`large`/`biglarge`/`superlarge`
<MYSwitch v-model="value1" size="mini" text="S" />
<MYSwitch v-model="value2" size="supersmall" text="S" />
<MYSwitch v-model="value3" size="small" text="M" />
<MYSwitch v-model="value4" size="medium" text="L" />
<MYSwitch v-model="value5" size="large" text="XL" />
<MYSwitch v-model="value6" size="biglarge" text="XL" />
<MYSwitch v-model="value7" size="superlarge" text="XL" />

## 关于禁用状态
### disabled
使用`disabled`可以禁用开关。
```vue
<MYSwitch disabled />
```
<MYSwitch disabled />

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| value     | 开关状态值       | string | —                               |     |
| size    | 尺寸   | string  | `mini`/`supersmall`/`small`/`medium`/`large`/`biglarge`/`superlarge` |  —      |
| text      | 文本   | string | —                                 | `false` |
| disabled| 禁用      | boolean | —                                 | `false` |

### 类型定义

```vue
interface SwitchProps {
  value?: string;
  size?: string;
  text?: string;
  disabled?: boolean;
}
```

<script>
import { ref } from 'vue'
// 基础用法
const value1 = ref(true)
const value2 = ref(true)

// 不同尺寸
const value3 = ref(false)
const value4 = ref(true)
const value5 = ref(false)
const value6 = ref(true)

// 禁用状态
const value7 = ref(false)
</script>