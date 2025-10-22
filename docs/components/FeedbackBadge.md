# Badge
## 简易介绍
badge徽章组件，用于在图标或文字旁显示未读消息数或状态标记。。<br />
可以使用`<MYBadge></MYBadge>`或者`<MYBadge />`来实现一个徽章

## 数字内容
使用`content`属性设置徽章内容。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>消息</MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge :content="5">
        <MYButton type="primary">消息</MYButton>
    </MYBadge>
  </template>
</ShowCode>

## 小红点模式
使用`dot`属性可以显示小红点而不显示具体数字。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYBadge dot>
        <MYButton type='primary'>通知</MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge dot>
        <MYButton type="primary">通知</MYButton>
    </MYBadge>
  </template>
</ShowCode>

## 自定义颜色
使用`color`属性可以自定义徽章颜色。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>绿色徽章</MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge :content="8" color="#52c41a">
        <MYButton type="primary">绿色徽章</MYButton>
    </MYBadge>
  </template>
</ShowCode>

## 位置调整
使用`position`属性可以调整徽章的位置。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='3' position='top-left'>
            <MYButton type='primary'>左上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='top-right'>
            <MYButton type='primary'>右上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-left'>
            <MYButton type='primary'>左下</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-right'>
            <MYButton type='primary'>右下</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()"
>
  <template #demo>
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
  </template>
</ShowCode>

## 最大值限制
使用`max`属性可以限制徽章显示的最大数值。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='100' :max='99'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='100' :max='10'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='8' :max='5'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
        <MYBadge :content="100" :max="99">
            <MYButton type="primary">消息</MYButton>
        </MYBadge>
        <MYBadge :content="100" :max="10">
            <MYButton type="primary">消息</MYButton>
        </MYBadge>
        <MYBadge :content="8" :max="5">
            <MYButton type="primary">消息</MYButton>
        </MYBadge>
    </div>
  </template>
</ShowCode>

## 独立使用
徽章也可以独立使用，不包裹任何内容。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge :content='新消息!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px; align-items: center;">
        <MYBadge :content="5" />
        <MYBadge content="新消息!" />
        <MYBadge dot />
    </div>
  </template>
</ShowCode>

## 组合使用
最后，实现个多种api组合使用实现个徽章：
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYBadge 
        :content='25' 
        color='#8d4dd1'
        position='bottom-right'
        :max='20'
        dot
    >
        <MYButton 
            type='primary'
            size='large'
        >
            组合徽章
        </MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge 
        :content="25" 
        color="#8d4dd1"
        position="bottom-right"
        :max="20"
        dot
    >
        <MYButton 
            type="primary"
            size="large"
        >
            组合徽章
        </MYButton>
    </MYBadge>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| content      | 徽章内容     | string \| number | —                               | `''`   |
| dot          | 是否显示小红点 | boolean | —                               | `false` |
| color        | 徽章颜色     | string  | 支持16进制颜色或单词颜色          | `'#ff4d4f'` |
| position     | 徽章位置     | string  | `top-right`/`top-left`/`bottom-right`/`bottom-left` | `'top-right'` |
| max          | 最大值限制   | number  | —                               | `99`   |

### 类型定义
```typescript
interface BadgeProps {
  content?: string | number;
  dot?: boolean;
  color?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  max?: number;
}
```
<script setup> 
import MYBadge from '../../packages/components/badge/src/badge.vue' 
import MYButton from '../../packages/components/button/src/button.vue' 
</script>