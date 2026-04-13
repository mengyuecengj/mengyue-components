# Text

## Introduction

The text component is used to display text content, supporting multiple styles and sizes. You can use `<MYText></MYText>` or `<MYText />` to implement a text component.

## Color Usage

### type

Using `type` in `MYText` allows you to define text colors. These are the basic color definitions provided by mengyue-components.
For example, use `type` to define the following colors. If `type` is not specified, the default text color is black:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText>Default Text</MYText>
  <MYText type='primary'>primary Text</MYText>
  <MYText type='success'>Success Text</MYText>
  <MYText type='warning'>Warning Text</MYText>
  <MYText type='danger'>Danger Text</MYText>
  <MYText type='info'>Info Text</MYText>
</template>
  `.trim()"
>
  <template #demo>
      <MYRow :gutter="16">
        <MYCol :span="8">
          <MYText plain>Default Text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="primary" plain>primary Text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="success" plain>Success Text</MYText>
        </MYCol>
        <MYBorder borderColor="transparent" paddingText="10px" />
        <MYCol :span="8">
          <MYText type="warning" plain>Warning Text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="danger" plain>Danger Text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="info" plain>Info Text</MYText>
        </MYCol>
      </MYRow>
  </template>
</ShowCode>

## Custom Color

If the default colors don't meet your needs, you can also customize the color using the `textColor` property.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText textColor='#ff0000'>Custom Red Text</MYText>
  <MYText textColor='pink'>Custom Pink Text</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYText textColor="#ff0000">Custom Red Text</MYText>
      <MYText textColor="pink">Custom Pink Text</MYText>
    </div>
  </template>
</ShowCode>

## Sizing

### size

Use the `size` property to adjust the text size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText size='small'>small Text</MYText>
  <MYText size='medium'>medium Text</MYText>
  <MYText size='large'>large Text</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYText size="small">small Text</MYText>
      <MYText size="medium">medium Text</MYText>
      <MYText size="large">large Text</MYText>
    </div>
  </template>
</ShowCode>

### Custom Size

Custom text sizes are also supported:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText size='20px'>Custom Text 20px</MYText>
  <MYText :size='20'>Custom Text: 20</MYText>
  <MYText size='5rem'>Custom Text 5rem</MYText>
  <MYText size='5em'>Custom Text 5em</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYText size="20px">Custom Text 20px</MYText>
      <MYText :size="20">Custom Text: 20</MYText>
      <MYText size="5rem">Custom Text 5rem</MYText>
      <MYText size="5em">Custom Text 5em</MYText>
    </div>
  </template>
</ShowCode>

### Combined Usage

Finally, combine multiple APIs:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText size='5em' textColor='blue'>Combined usage with medium and blue</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <MYText size="5em" textColor="blue">Combined usage with medium and blue</MYText>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| type | Text type | string | `primary`/`success`/`warning`/`danger`/`info` | — |
| size | Text size | string | `small`/`medium`/`large`/number/custom | `medium` |
| textColor | Text color | string | Supports hex colors or color names | — |
| tag | Render tag | string | All HTML tags | `span` |

### Type Definitions

```typescript
interface TextProps {
  type?: string;
  size?: string | number;
  textColor?: string;
  tag?: string;
}
```

<script setup>
import MYText from '../../../packages/components/text/src/text.vue'
import MYRow from '../../../packages/components/layout/src/row.vue'
import MYCol from '../../../packages/components/layout/src/col.vue'
</script>
