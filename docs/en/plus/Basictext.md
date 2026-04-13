# Text

## Brief Introduction
The `Text` component is used to display text content, supporting multiple styles and sizes. You can use `<MYText></MYText>` or `<MYText />` to implement a text component.

## Using Colors

### type
Use `type` in `MYText` to define text colors. These colors are basic color definitions provided by `mengyue-components`.
For example, use `type` to achieve the color definitions below. If `type` is not specified, the default text color is black:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText>Default text</MYText>
  <MYText type='primary'>Primary text</MYText>
  <MYText type='success'>Success text</MYText>
  <MYText type='warning'>Warning text</MYText>
  <MYText type='danger'>Danger text</MYText>
  <MYText type='info'>Info text</MYText>
</template>
  `.trim()"
>
  <template #demo>
      <MYRow :gutter="16">
        <MYCol :span="8">
          <MYText plain>Default text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="primary" plain>Primary text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="success" plain>Success text</MYText>
        </MYCol>
        <MYBorder borderColor="transparent" paddingText="10px" />
        <MYCol :span="8">
          <MYText type="warning" plain>Warning text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="danger" plain>Danger text</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="info" plain>Info text</MYText>
        </MYCol>
      </MYRow>
  </template>
</ShowCode>

## Custom Color
If the default colors do not meet your needs, you can customize the text color using the `color` prop.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText color='#ff0000'>Custom red text</MYText>
  <MYText color='pink'>Custom pink text</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYText Tecolor="#ff0000">Custom red text</MYText>
      <MYText Tecolor="pink">Custom pink text</MYText>
    </div>
  </template>
</ShowCode>

## Sizes

### size
Use the `size` prop to adjust the text size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText size='small'>Small text</MYText>
  <MYText size='medium'>Medium text</MYText>
  <MYText size='large'>Large text</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYText size="small">Small text</MYText>
      <MYText size="medium">Medium text</MYText>
      <MYText size="large">Large text</MYText>
    </div>
  </template>
</ShowCode>

### Custom Size
You can also customize the text size:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText size='20px'>Custom text 20px</MYText>
  <MYText :size='20'>Custom text: 20</MYText>
  <MYText size='5rem'>Custom text 5rem</MYText>
  <MYText size='5em'>Custom text 5em</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYText size="20px">Custom text 20px</MYText>
      <MYText :size="20">Custom text: 20</MYText>
      <MYText size="5rem">Custom text 5rem</MYText>
      <MYText size="5em">Custom text 5em</MYText>
    </div>
  </template>
</ShowCode>

### Combined Usage
Finally, here is a combination of multiple APIs:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYText size='5em' color='blue'>Combined usage: medium size and blue color</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <MYText size="5em" Tecolor="blue">Combined usage: medium size and blue color</MYText>
  </template>
</ShowCode>

## API Reference

### Props

| Prop     | Description                    | Type     | Options                                                        | Default  |
|----------|--------------------------------|----------|----------------------------------------------------------------|----------|
| type     | Text type                      | string   | `primary`/`success`/`warning`/`danger`/`info`                  | —        |
| size     | Text size                      | string   | `small`/`medium`/`large`/number/custom value                   | `medium` |
| Tecolor  | Text color                     | string   | Hex or named color                                             | —        |
| tag      | Rendered HTML tag              | string   | Any HTML tag                                                   | `span`   |

### Type Definitions

```typescript
interface TextProps {
  type?: string;
  size?: string | number;
  Tecolor?: string;
  tag?: string;
}
```

<script setup>
import MYText from '../../../packages/components/text/src/text.vue'
import MYRow from '../../../packages/components/layout/src/row.vue'
import MYCol from '../../../packages/components/layout/src/col.vue'
</script>
