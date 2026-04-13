# Rate

## Brief Introduction
The Rate component is used for users to rate content.<br />
You can use `<MYRate></MYRate>` or `<MYRate />` to implement a rating component.

## Basic Usage
Use `v-model` to bind the rating value. The default rating range is 0-5.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYRate v-model='rateValue' />
</template>
  `.trim()"
>
  <template #demo>
    <MYRate v-model="rateValue" />
  </template>
</ShowCode>

## Disabled State
Use the `disabled` prop to disable the rating component.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYRate v-model='rateValue' disabled />
</template>
  `.trim()"
>
  <template #demo>
    <MYRate v-model="rateValue" disabled />
  </template>
</ShowCode>

## API Reference

### Props

| Prop       | Description                | Type     | Options | Default |
|------------|----------------------------|----------|---------|---------|
| disabled   | Whether to disable         | boolean  | —       | `false` |

### Type Definitions

```typescript
interface RateProps {
  disabled?: boolean;
}
```

<script setup>
import MYRate from '../../../packages/components/rate/src/rate.vue'
</script>
