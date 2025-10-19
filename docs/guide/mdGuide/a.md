# A
## 简易介绍
a 链接组件，用于显示超链接内容，支持多种样式和交互行为。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYa></MYa>` 或者 `<MYa />` 来实现一个链接组件。

## 关于颜色的使用
### type
在 `MYA` 中使用 `type` 可以实现链接的颜色定义，这些颜色是 mengyue-components 提供的基本颜色定义。
例如使用 type 完成下面的颜色定义，如果不写 type 默认是蓝色链接：
```vue
<MYa type="primary">primary 类型</MYa>
<MYa type="success">success 类型</MYa>
<MYa type="warning">warning 类型</MYa>
<MYa type="danger">danger 类型</MYa>
<MYa type="info">info 类型</MYa>
<MYa>默认类型</MYa>
```

### 自定义颜色
如果默认颜色不满足需求，还可以自定义颜色，使用 `color` 属性自定义链接颜色。
例如这里使用红色链接：
```vue
<MYa color="#ff0000">自定义红色链接</MYa>
```
<MYa color="#ff0000">自定义红色链接</MYa>
使用单词来自定义链接颜色
```vue
<MYa color="red">自定义红色链接</MYa>
```
<MYa color="red">自定义红色链接</MYa>


## 关于交互行为
### disabled
使用 `disabled` 属性可以禁用链接。
```vue
<MYa disabled>禁用链接</MYa>
```
<MYa disabled>禁用链接</MYa>

## 关于尺寸
### size
使用 `size` 属性可以调整链接大小。
```vue
<MYa size="large">large 尺寸</MYa>
<MYa size="medium">medium 尺寸</MYa>
<MYa size="small">small 尺寸</MYa>
<MYa size="mini">mini 尺寸</MYa>
```
<MYa size="large">large 尺寸</MYa>
<MYa size="medium">medium 尺寸</MYa>
<MYa size="small">small 尺寸</MYa>
<MYa size="mini">mini 尺寸</MYa>

组合使用
```vue
<MYa size="large" color="#ff0000" class="b">
                组合1: primary + large + 红色 + primary下划线
            </MYa>
```
<MYa size="large" color="#ff0000" class="b">
                组合1: primary + large + 红色 + primary下划线
            </MYa>

<strong>注意:</strong>
如果使用了`type`属性，请不要在组件上定义`color`属性，不然`color`会覆盖`type`，最终生效`color`的配置。

## API 参考

### Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| type  | 链接类型      | string  | `primary`/`success`/`warning`/`danger`/`info` | —      |
| color  | 颜色      | string  | 支持px/rem/vh/vw                  | —  |
| disabled  | 禁用      | boolean  |       —     | —      |
| underline     | 下划线    | boolean  | —             | —      |
| size  | 尺寸    | string  | `small`/`medium`/`large`/`mini`/自定义     | —      |     | —      |
| tag    | 渲染标签      | string  | 支持所有 HTML 标签                 | `a` |
### 类型定义

```vue
interface AProps {
  type?: string;
  color?: string;
  disabled?: boolean;
  underline?: boolean;
  size?: string | number;
  tag?: string;
}
```