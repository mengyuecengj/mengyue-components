# Layout
## Brief Introduction
The Layout component is used to quickly build page layout structures. `mengyue-components` provides flexible layout solutions, supporting grid systems and multiple alignment methods.
You can use `<MYRow></MYRow>` and `<MYCol></MYCol>` to implement layouts.

## Basic Usage
### Basic Grid Layout
Use the `<MYRow></MYRow>` and `<MYCol></MYCol>` tags to build a basic grid layout system.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRow>
    <MYCol :span='6'>
      <div style='background: red'>span=6</div>
    </MYCol>
    <MYCol :span='12'>
      <div style='background: #2c2'>span=12</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2828'>span=6</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow>
      <MYCol :span="6">
        <div style="background: red">span=6</div>
      </MYCol>
      <MYCol :span="12">
        <div style="background: #2c2">span=12</div>
      </MYCol>
      <MYCol :span="6">
        <div style="background: #2828">span=6</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### Spacing Control
Use the `gutter` property to set the spacing between grids.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRow :gutter='16'>
    <MYCol :span='8'>
      <div class='demo-box'>Left</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>Center</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>Right</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow :gutter="16">
      <MYCol :span="8">
        <div style="background: red;">Left</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2c2">Center</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2828">Right</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### Horizontal Alignment
Use the `justify` property to set the horizontal alignment.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRow justify='space-between'>
    <MYCol :span='6'>
      <div style='background: red'>Left</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2c2'>Right</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow justify="space-between">
      <MYCol :span="6">
        <div style="background: red">Left</div>
      </MYCol>
      <MYCol :span="6">
        <div style="background: #2c2">Right</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### Vertical Centering
Use the `align` property to set vertical centering, and `alignCenter` to set both horizontal and vertical centering.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRow align>
    <MYCol :span='24'>
      <div class='demo-box'>Top</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>Middle</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>Bottom</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow align>
      <MYCol :span="24">
        <div style="background: red">Top</div>
      </MYCol>
      <MYCol :span="24">
        <div style="background: #2c2">Middle</div>
      </MYCol>
      <MYCol :span="24">
        <div style="background: #2828">Bottom</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### Direction Reversal
Use the `direction` property to set the layout direction.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRow direction='row-reverse'>
    <MYCol :span='8'>
      <div class='demo-box'>1 (Visually on the right)</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>2</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>3 (Visually on the left)</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow direction="row-reverse">
      <MYCol :span="8">
        <div style="background: red">1 (Visually on the right)</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2c2">2</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2828">3 (Visually on the left)</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

## API Reference

### MYRow Props

| Parameter   | Description               | Type           | Options                                                      | Default |
|-------------|---------------------------|----------------|--------------------------------------------------------------|---------|
| gutter      | Grid spacing              | number/string  | 0-24                                                         | `0`     |
| justify     | Horizontal alignment      | string         | `start` / `end` / `center` / `space-around` / `space-between`| —       |
| align       | Vertical alignment        | boolean        | —                                                            | `false` |
| alignCenter | Vertical & horizontal center | boolean     | —                                                            | `false` |
| direction   | Layout direction          | string         | `row` / `column` / `row-reverse` / `column-reverse`          | `row`   |
| tag         | Render tag                | string         | Supports all HTML tags                                       | `div`   |

### MYCol Props

| Parameter   | Description           | Type           | Options                | Default |
|-------------|-----------------------|----------------|------------------------|---------|
| span        | Grid width            | number         | 1-24                   | `24`    |
| offsetLeft  | Left offset           | number/string  | 0-24                   | `0`     |
| offsetRight | Right offset          | number/string  | 0-24                   | `0`     |
| pull        | Move left             | number/string  | 0-24                   | `0`     |
| push        | Move right            | number/string  | 0-24                   | `0`     |
| tag         | Render tag            | string         | Supports all HTML tags | `div`   |

### Type Definitions

```typescript
interface RowProps {
  gutter?: number | string;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: boolean;
  alignCenter?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  tag?: string;
}

interface ColProps {
  span?: number;
  offsetLeft?: number | string;
  offsetRight?: number | string;
  pull?: number | string;
  push?: number | string;
  tag?: string;
}
```

<script setup>
import MYRow from '../../../packages/components/layout/src/row.vue'
import MYCol from '../../../packages/components/layout/src/col.vue'
</script>
