# A
## Brief Introduction
The `a` link component is used to display hyperlink content, supporting various styles and interactive behaviors. You can use `<MYa></MYa>` or `<MYa />` to implement a link component.

## About Color Usage
### type
Using `type` in `MYa` allows you to define the link's color. These colors are the basic color definitions provided by `mengyue-components`.
For example, use `type` to complete the following color definitions. If `type` is not specified, the default is a blue link:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYa type='primary'>primary type</MYa>
  <MYa type='success'>success type</MYa>
  <MYa type='warning'>warning type</MYa>
  <MYa type='danger'>danger type</MYa>
  <MYa type='info'>info type</MYa>
  <MYa>default type</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa type="primary">primary type</MYa>
      <MYa type="success">success type</MYa>
      <MYa type="warning">warning type</MYa>
      <MYa type="danger">danger type</MYa>
      <MYa type="info">info type</MYa>
      <MYa>default type</MYa>
    </div>
  </template>
</ShowCode>

### Custom Color
If the default colors do not meet your needs, you can customize the color using the `color` attribute.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYa color='#ff0000'>Custom Red Link</MYa>
  <MYa color='red'>Custom Red Link</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa color="#ff0000">Custom Red Link</MYa>
      <MYa color="red">Custom Red Link</MYa>
    </div>
  </template>
</ShowCode>

## About Interactive Behavior
### disabled
Use the `disabled` attribute to disable the link.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYa disabled>Disabled Link</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <MYa disabled>Disabled Link</MYa>
  </template>
</ShowCode>

### underline
Use the `underline` attribute to control the display of the link's underline.

<ShowCode
  title="Code Demo"
  :code="`
<template>
      <MYa underline>Link without underline</MYa>
      <MYa :underline='false'>Link with underline</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa underline>Link without underline</MYa>
      <MYa :underline="false">Link with underline</MYa>
    </div>
  </template>
</ShowCode>

## About Size
### size
Use the `size` attribute to adjust the link size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYa size='large'>large size</MYa>
  <MYa size='medium'>medium size</MYa>
  <MYa size='small'>small size</MYa>
  <MYa size='mini'>mini size</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa size="large">large size</MYa>
      <MYa size="medium">medium size</MYa>
      <MYa size="small">small size</MYa>
      <MYa size="mini">mini size</MYa>
    </div>
  </template>
</ShowCode>

### Combined Usage
Finally, achieve combined usage of multiple APIs:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYa 
    size='large' 
    color='#ff0000' 
    underline
  >
    Combined: large + red + underline
  </MYa>
</template>
  `.trim()"
>
  <template #demo>
    <MYa size="large" color="#ff0000" underline>
      Combined: large + red + underline
    </MYa>
  </template>
</ShowCode>

<strong>Note:</strong>
If the `type` attribute is used, please do not define the `color` attribute on the component, otherwise `color` will override `type`, and the `color` configuration will take effect.

## API Reference

### Props

| Parameter     | Description         | Type      | Optional Values                                    | Default   |
|---------------|---------------------|-----------|----------------------------------------------------|-----------|
| type          | Link type           | string    | `primary` / `success` / `warning` / `danger` / `info` | —         |
| color         | Color               | string    | Supports hex colors or named colors                | —         |
| disabled      | Disabled            | boolean   | —                                                  | `false`   |
| underline     | Underline           | boolean   | —                                                  | `true`    |
| size          | Size                | string    | `mini` / `small` / `medium` / `large` / custom     | `medium`  |
| tag           | Render tag          | string    | Supports all HTML tags                             | `a`       |

### Type Definition

```typescript
interface AProps {
  type?: string;
  color?: string;
  disabled?: boolean;
  underline?: boolean;
  size?: string;
  tag?: string;
}
```

<script setup>
import MYa from '../../../packages/components/a/src/a.vue'
</script>
