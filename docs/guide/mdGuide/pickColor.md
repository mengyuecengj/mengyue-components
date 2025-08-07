# PickColor
## 简易介绍
pickColor颜色选择器组件，用于用户选择颜色。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYSelect-color></MYSelect-color>`或者`<MYSelect-color />`来实现一个颜色选择器

## 基础用法
使用`v-model`绑定颜色值，默认颜色为黑色（`#000000`）。
```vue
<MYSelect-color v-model="color1" />
```
<MYSelect-color v-model="color1" />

## 自定义尺寸
使用`size`属性可以自定义颜色选择器的尺寸。
```vue
<MYSelect-color v-model="colorValue" size="200px" />
```
<MYSelect-color v-model="color1" size="200px" />

## 透明度控制
使用`rgba`属性可以控制颜色的透明度（0-1之间的值）。
```vue
<MYSelect-color v-model="colorValue" :rgba="0.5" />
```
<MYSelect-color v-model="colorValue" :rgba="0.5" />

## 无边框模式
使用`noBorder`属性可以隐藏边框。
```vue
<MYSelect-color v-model="colorValue" no-border />
```
<MYSelect-color v-model="colorValue" no-border />

## 圆形模式
使用`circle`属性可以将颜色选择器显示为圆形。
```vue
<MYSelect-color v-model="colorValue" circle />
```
<MYSelect-color v-model="colorValue" circle />

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| size       | 尺寸         | string  | —                               | `50px` |
| rgba       | 透明度       | string \| number | 0-1之间的值 | `1`    |
| noBorder   | 是否隐藏边框 | boolean | —                               | `false` |
| circle     | 是否显示为圆形 | boolean | —                               | `false` |

### 类型定义
```vue
interface PickColorProps {
  size?: string;
  rgba?: string | number;
  noBorder?: boolean;
  circle?: boolean;
}
```