# Slidebar
## 简易介绍
slidebar滑动条组件，用于用户通过拖动滑块来选择一个范围内的值。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYSlidebar></MYSlidebar>`或者`<MYSlidebar />`来实现一个滑动条

## 基础用法
使用`v-model`绑定滑块的值。例如`ref`(sliderValue已经定义)绑定滑块的值：
```vue
<MYSlidebar v-model="sliderValue" />
```
<MYSlidebar v-model="sliderValue" />


## 自定义滑块颜色
使用`thumbColor`属性可以自定义滑块的颜色。
```vue
<MYSlidebar v-model="sliderValue" thumbColor="#ff0000" />
```
<MYSlidebar v-model="sliderValue" thumbColor="#ff0000" />

## 自定义轨道颜色
使用`trackColor`属性可以自定义轨道的颜色。
```vue
<MYSlidebar v-model="sliderValue" trackColor="#00ff00" />
```
<MYSlidebar v-model="sliderValue" trackColor="#00ff00" />

## 禁用状态
使用`disabled`属性可以禁用滑动条。
```vue
<MYSlidebar v-model="sliderValue" disabled />
```
<MYSlidebar v-model="sliderValue" disabled />

## 隐藏数值
使用`noNum`属性可以隐藏滑动条的数值显示。
```vue
<MYSlidebar v-model="sliderValue" noNum />
```
<MYSlidebar v-model="sliderValue" noNum  />

## 尺寸
使用`size`属性可以自定义滑块的大小。
```vue
<MYSlidebar v-model="sliderValue" size="500px" />
```
<MYSlidebar v-model="sliderValue" size="500px"  />

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| size         | 滑块大小     | string  | px/rem/em/%/动态绑定                         | —      | —      |
| thumbColor   | 滑块颜色     | string  | 支持16进制颜色或单词颜色                 | —      |       | —      |
| trackColor   | 轨道颜色     | string  | 支持16进制颜色或单词颜色                 | —      |        | —      |
| disabled     | 是否禁用     | boolean | —                               | `false` |
| noNum        | 是否隐藏数值 | boolean | —                               | `false` |

### 类型定义
```ts
type SlidebarProps = {
  size?: string;
  thumbColor?: string;
  trackColor?: string;
  disabled?: boolean;
  noNum?: boolean;
};
```
