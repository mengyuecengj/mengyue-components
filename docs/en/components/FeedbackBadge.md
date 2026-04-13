# Badge

## Introduction

The badge component is used to display unread message counts or status indicators next to icons or text.<br />
You can use `<MYBadge></MYBadge>` or `<MYBadge />` to create a badge.

## Numeric Content

Use the `content` prop to set the badge content.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>Messages</MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge :content="5">
        <MYButton type="primary">Messages</MYButton>
    </MYBadge>
  </template>
</ShowCode>

## Dot Mode

Use the `dot` prop to display a small red dot instead of a specific number.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYBadge dot>
        <MYButton type='primary'>Notifications</MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge dot>
        <MYButton type="primary">Notifications</MYButton>
    </MYBadge>
  </template>
</ShowCode>

## Custom Color

Use the `color` prop to customize the badge color.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>Green Badge</MYButton>
    </MYBadge>
</template>
  `.trim()"
>
  <template #demo>
    <MYBadge :content="8" color="#52c41a">
        <MYButton type="primary">Green Badge</MYButton>
    </MYBadge>
  </template>
</ShowCode>

## Position Adjustment

Use the `position` prop to adjust the badge position.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='3' position='top-left'>
            <MYButton type='primary'>Top Left</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='top-right'>
            <MYButton type='primary'>Top Right</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-left'>
            <MYButton type='primary'>Bottom Left</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-right'>
            <MYButton type='primary'>Bottom Right</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
        <MYBadge :content="3" position="top-left">
            <MYButton type="primary">Top Left</MYButton>
        </MYBadge>
        <MYBadge :content="3" position="top-right">
            <MYButton type="primary">Top Right</MYButton>
        </MYBadge>
        <MYBadge :content="3" position="bottom-left">
            <MYButton type="primary">Bottom Left</MYButton>
        </MYBadge>
        <MYBadge :content="3" position="bottom-right">
            <MYButton type="primary">Bottom Right</MYButton>
        </MYBadge>
    </div>
  </template>
</ShowCode>

## Max Value Limit

Use the `max` prop to limit the maximum numeric value displayed on the badge.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='100' :max='99'>
            <MYButton type='primary'>Messages</MYButton>
        </MYBadge>
        <MYBadge :content='100' :max='10'>
            <MYButton type='primary'>Messages</MYButton>
        </MYBadge>
        <MYBadge :content='8' :max='5'>
            <MYButton type='primary'>Messages</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
        <MYBadge :content="100" :max="99">
            <MYButton type="primary">Messages</MYButton>
        </MYBadge>
        <MYBadge :content="100" :max="10">
            <MYButton type="primary">Messages</MYButton>
        </MYBadge>
        <MYBadge :content="8" :max="5">
            <MYButton type="primary">Messages</MYButton>
        </MYBadge>
    </div>
  </template>
</ShowCode>

## Standalone Usage

The badge can also be used independently without wrapping any content.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge content='New Message!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px; align-items: center;">
        <MYBadge :content="5" />
        <MYBadge content="New Message!" />
        <MYBadge dot />
    </div>
  </template>
</ShowCode>

## Combined Usage

Finally, here's an example combining multiple APIs to create a badge:

<ShowCode
  title="Code Demo"
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
            Combined Badge
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
            Combined Badge
        </MYButton>
    </MYBadge>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| content | Badge content | string \| number | — | `''` |
| dot | Whether to show a small red dot | boolean | — | `false` |
| color | Badge color | string | Supports hex colors or color names | `'#ff4d4f'` |
| position | Badge position | string | `top-right`/`top-left`/`bottom-right`/`bottom-left` | `'top-right'` |
| max | Maximum value limit | number | — | `99` |

### Type Definitions

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
import MYBadge from '../../../packages/components/badge/src/badge.vue' 
import MYButton from '../../../packages/components/button/src/button.vue' 
</script>