# Rate
## 简易介绍
rate评分组件，用于用户对内容进行评分。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYRate></MYRate>`或者`<MYRate />`来实现一个评分组件

## 基础用法
使用`v-model`绑定评分值，默认评分范围为0-5分。
```vue
<MYRate v-model="rateVavalue1lue" />
```
<MYRate v-model="rateValue" />

## 禁用状态
使用`disabled`属性可以禁用评分组件。
```vue
<MYRate v-model="rateValue" disabled />
```
<MYRate v-model="rateValue" disabled />

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| disabled   | 是否禁用     | boolean | —                               | `false` |

### 类型定义
```vue
interface RateProps {
  disabled?: boolean;
}
```
