# Badge
## 简易介绍
badge徽章组件，用于在图标或文字旁显示未读消息数或状态标记。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYBadge></MYBadge>`或者`<MYBadge />`来实现一个徽章

## 基础用法
使用`content`属性设置徽章内容。
```vue
<MYBadge>
    <MYButton type="primary">按钮</MYButton>
</MYBadge>
```
<MYBadge>
    <MYButton type="primary">按钮</MYButton>
</MYBadge>

## 数字内容
使用`content`属性设置徽章内容。
```vue
<MYBadge :content="5">
    <MYButton type="primary">消息</MYButton>
</MYBadge>
```
<MYBadge :content="5">
    <MYButton type="primary">消息</MYButton>
</MYBadge>

## 自定义颜色
使用`color`属性可以自定义徽章颜色。
```vue
<MYBadge :content="8" color="#52c41a">
    <MYButton type="primary">绿色徽章</MYButton>
</MYBadge>
```
<MYBadge :content="8" color="#52c41a">
    <MYButton type="primary">绿色徽章</MYButton>
</MYBadge>

## 位置调整
使用`position`属性可以调整徽章的位置，可选值为`top-right`、`top-left`、`bottom-right`、`bottom-left`。
```vue
<div style="display: flex; gap: 20px;">
    <MYBadge :content="3" position="top-left">
        <MYButton type="primary">左上</MYButton>
    </MYBadge>
    <MYBadge :content="3" position="top-right">
        <MYButton type="primary">右上</MYButton>
    </MYBadge>
    <MYBadge :content="3" position="bottom-left">
        <MYButton type="primary">左下</MYButton>
    </MYBadge>
    <MYBadge :content="3" position="bottom-right">
        <MYButton type="primary">右下</MYButton>
    </MYBadge>
</div>
```
<div style="display: flex; gap: 20px;">
    <MYBadge :content="3" position="top-left">
        <MYButton type="primary">左上</MYButton>
    </MYBadge>
    <MYBadge :content="3" position="top-right">
        <MYButton type="primary">右上</MYButton>
    </MYBadge>
    <MYBadge :content="3" position="bottom-left">
        <MYButton type="primary">左下</MYButton>
    </MYBadge>
    <MYBadge :content="3" position="bottom-right">
        <MYButton type="primary">右下</MYButton>
    </MYBadge>
</div>

## 最大值限制
使用`max`属性可以限制徽章显示的最大数值。
```vue
<MYBadge :content="100" :max="99">
    <MYButton type="primary">消息</MYButton>
</MYBadge>
<MYBadge :content="100" :max="10" style="margin-left: 20px;">
    <MYButton type="primary">消息</MYButton>
</MYBadge>
```
<MYBadge :content="100" :max="99">
    <MYButton type="primary">消息</MYButton>
</MYBadge>
<MYBadge :content="100" :max="10" style="margin-left: 20px;">
    <MYButton type="primary">消息</MYButton>
</MYBadge>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| content      | 徽章内容     | string \| number | —                               | `''`   |
| dot          | 是否显示小红点 | boolean | —                               | `false` |
| color        | 徽章颜色     | string  | —                               | `'#ff4d4f'` |
| position     | 徽章位置     | string  | `top-right`/`top-left`/`bottom-right`/`bottom-left` | `'top-right'` |
| max          | 最大值限制   | number  | —                               | `99`   |

### 类型定义
```vue
type BadgeProps = {
  content?: string | number;
  dot?: boolean;
  color?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  max?: number;
};
```
