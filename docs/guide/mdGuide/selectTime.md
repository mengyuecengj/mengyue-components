# SelectTime
## 简易介绍
selectTime时间选择器组件，用于用户选择时间或时间范围。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYSelect-time></MYSelect-time>`或者`<MYSelect-time />`来实现一个时间选择器

## 基础用法
使用`v-model`绑定时间值。
例如`timePoint`已经定义过了`const timePoint = ref('00:00')`
```vue
<MYSelect-time v-model="timePoint" />
```
<MYSelect-time v-model="timePoint" />

## 选择时间范围
使用`range`属性可以启用时间范围选择模式。
```vue
<MYSelect-time v-model="timeRange" range />
```
<MYSelect-time v-model="timeRange" range />


## API 参考

### Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| range        | 是否选择范围 | boolean | —                               | `false` |
| hourOptions  | 小时选项     | number[] | —                               | `[0-23]` |
| minuteOptions| 分钟选项     | number[] | —                               | `[0-59]` |

### 类型定义
```vue
interface SelectTimeProps {
  range?: boolean;
  hourOptions?: number[];
  minuteOptions?: number[];
}
```