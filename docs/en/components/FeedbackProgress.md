# Progress

## Brief Introduction
The Progress component is used to display the progress status of a task or operation.<br />
You can use `<MYProgress></MYProgress>` to implement a progress bar.

## Basic Usage
Use the `percentage` prop to set the progress percentage.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYProgress :percentage='50' />
</template>
  `.trim()"
>
  <template #demo>
    <MYProgress :percentage="50" />
  </template>
</ShowCode>

## Different Statuses
Use the `status` prop to set the progress bar status.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYProgress :percentage='70' status='success' />
        <MYProgress :percentage='50' status='warning' />
        <MYProgress :percentage='30' status='exception' />
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <MYProgress :percentage="70" status="success" />
        <MYProgress :percentage="50" status="warning" />
        <MYProgress :percentage="30" status="exception" />
        <MYProgress :percentage="50" status="exception" />
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Prop         | Description                    | Type     | Options                          | Default |
|--------------|--------------------------------|----------|----------------------------------|---------|
| percentage   | Progress percentage            | number   | Value between 0-100              | `0`     |
| status       | Progress bar status            | string   | `success`/`warning`/`exception` | `''`    |
| format       | Formatting function            | function | —                                | —       |

### Type Definitions

```typescript
interface ProgressProps {
  percentage?: number;
  status?: 'success' | 'warning' | 'exception' | '';
  color?: string;
  format?: (percentage: number) => string;
  size?: 'small' | 'medium' | 'large';
}
```

<script setup>
import MYProgress from '../../../packages/components/progress/src/progress.vue' 
</script>
