# Border
## Brief Introduction
The Border component is used to add border styles to elements, supporting multiple border styles, colors, and directions.
You can use `<MYBorder></MYBorder>` or `<MYBorder />` to configure the border.

## About Basic Borders
### borderStyle
Use `borderStyle` to define the basic style of the border.<br />
The default color is black; here we use `borderColor` to set a clear color.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>Border is solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>Border is dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>Border is dotted</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYBorder borderStyle="solid" borderColor="#2c2">Border is solid</MYBorder>
      <MYBorder borderStyle="dashed" borderColor="#2c2">Border is dashed</MYBorder>
      <MYBorder borderStyle="dotted" borderColor="#2c2">Border is dotted</MYBorder>
    </div>
  </template>
</ShowCode>

### borderWidth
Use `borderWidth` to define the thickness of the border. Default is `1px`. Here we use `borderColor` to set a clear color.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>Thickness is 2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>Thickness is 4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>Thickness is 6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>Thickness is 8vw</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYBorder borderWidth="2px" borderColor="#2c2">Thickness is 2px</MYBorder>
      <MYBorder borderWidth="4vh" borderColor="#2c2">Thickness is 4vh</MYBorder>
      <MYBorder borderWidth="6rem" borderColor="#2c2">Thickness is 6rem</MYBorder>
      <MYBorder borderWidth="8vw" borderColor="#2c2">Thickness is 8vw</MYBorder>
    </div>
  </template>
</ShowCode>

### borderColor
Use `borderColor` to define the color of the border. Default is black; here we use `borderStyle="dashed"` together.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>Red border</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>Blue border</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>Red border</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>Blue border</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
      <MYBorder borderColor="#ff0000" borderStyle="dashed">Red border</MYBorder>
      <MYBorder borderColor="#409EFF" borderStyle="dashed">Blue border</MYBorder>
      <MYBorder borderColor="red" borderStyle="dashed">Red border</MYBorder>
      <MYBorder borderColor="blue" borderStyle="dashed">Blue border</MYBorder>
    </div>
  </template>
</ShowCode>

## Border Directions
You can set a separate color for each direction of the border. If you set a color for a single direction, the default border color becomes white.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder 
    topColor='red' 
    bottomColor='blue' 
    leftColor='green' 
    rightColor='yellow'
  >
    A border with different colors per direction
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder topColor="red" bottomColor="blue" leftColor="green" rightColor="yellow">
      Top, bottom, left, right: red, blue, green, yellow respectively
    </MYBorder>
  </template>
</ShowCode>

## Center Content
Use `center` to center the content inside the border. Here we use `borderColor` to set a clear color.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder center borderColor='#2c2'>Centered text</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder center borderColor="#2c2">Centered text</MYBorder>
  </template>
</ShowCode>

## Rounded Corners
Use the `rounded` prop to add rounded corners to the border. Here we use `borderColor` to set a clear color. For better visualization, we also use `paddingText` to move the text.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder rounded borderColor='#2c2' paddingText='10px'>This is a rounded border</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder rounded borderColor="#2c2" paddingText="10px">This is a rounded border</MYBorder>
  </template>
</ShowCode>

## Circle Shape
Use the `circular` prop to turn the border into a circle. Here we use `borderColor` to set a clear color. For better visualization, we also use `paddingText` to move the text.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder circular borderColor='#2c2' paddingText='10px'>This is a circular border</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder circular borderColor="#2c2" paddingText="10px">This is a circular border</MYBorder>
  </template>
</ShowCode>

## Background Color Inside Border
Use `colorBackground` to set the background color inside the border.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder colorBackground='#2c2'>This is a border with background color</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder colorBackground="#2c2">This is a border with background color</MYBorder>
  </template>
</ShowCode>

## Text Color Inside Border
Use `textColor` to set the color of the text inside the border.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder textColor='red'>This is a border with red text</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder textColor="red">This is a border with red text</MYBorder>
  </template>
</ShowCode>

## Shadow
Use `boxShadow` to add a shadow effect to the border. Its usage is the same as the native CSS `box-shadow` property.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>This is a border with shadow</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder boxShadow="10px 2px 8px red">This is a border with shadow</MYBorder>
  </template>
</ShowCode>

## Custom Width and Height
Use the `width` and `height` props to set the dimensions. For better visualization, we also use `paddingText` to move the text and `borderColor` to set a color. Width and height can be used independently.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    borderColor='#2c2' 
    paddingText='20px'
  >
    100px high, 300px wide
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder width="300px" height="100px" borderColor="#2c2" paddingText="20px">
      100px high, 300px wide
    </MYBorder>
  </template>
</ShowCode>

## Spacing Between Content and Border
Use `paddingText` to set the distance between the content and the border. It works like the native CSS `padding` property, and its usage is the same as CSS padding.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    paddingText='100px' 
    borderColor='#2c2'
  >
    paddingText is 100px
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder width="300px" height="100px" paddingText="100px" borderColor="#2c2">
      paddingText is 100px
    </MYBorder>
  </template>
</ShowCode>

Finally, here is a combination of multiple props:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBorder 
    rounded
    topColor='red'
    bottomColor='blue'
    leftColor='green'
    rightColor='yellow'
    width='300px'
    height='100px'
    textColor='#ff00ff'
    paddingText='100px'
    colorBackground='#2c2'
    boxShadow='10px 2px 8px red'
  >
    Combined usage
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder 
      rounded
      topColor="red"
      bottomColor="blue"
      leftColor="green"
      rightColor="yellow"
      width="300px"
      height="100px"
      textColor="#ff00ff"
      paddingText="100px"
      colorBackground="#2c2"
      boxShadow="10px 2px 8px red"
    >
      Combined usage
    </MYBorder>
  </template>
</ShowCode>

<strong>Note:</strong>
<br />
> · If you set colors for border directions, `borderStyle` and `borderWidth` will be overridden, and `borderStyle` will no longer take effect.
<br />
· If both `borderColor` and directional color props are set, the directional colors will override `borderColor`. Therefore, use only one style at a time.
<br />
· If `circular` is set, `rounded` will not take effect. `circular` and `rounded` can only be used one at a time.
<br />

## API Reference

### Props

| Prop            | Description                          | Type     | Options                              | Default |
|-----------------|--------------------------------------|----------|--------------------------------------|---------|
| borderStyle     | Border style                         | string   | `solid`/`dashed`/`dotted`/`double`   | `solid` |
| borderWidth     | Border thickness                     | string   | `px`/`rem`/`vh`/`vw`                 | `1px`   |
| borderColor     | Border color                         | string   | Hex or named color                   | —       |
| topColor        | Top border color                     | string   | Hex or named color                   | —       |
| bottomColor     | Bottom border color                  | string   | Hex or named color                   | —       |
| leftColor       | Left border color                    | string   | Hex or named color                   | —       |
| rightColor      | Right border color                   | string   | Hex or named color                   | —       |
| rounded         | Rounded corners                      | boolean  | —                                    | `false` |
| circular        | Circle shape                         | boolean  | —                                    | `false` |
| colorBackground | Background color                     | string   | Hex or named color                   | —       |
| textColor       | Text color                           | string   | Hex or named color                   | —       |
| boxShadow       | Shadow effect                        | string   | Any CSS shadow format                | —       |
| width           | Border width                         | string   | `px`/`rem`/`vh`/`vw`                 | —       |
| height          | Border height                        | string   | `px`/`rem`/`vh`/`vw`                 | —       |
| paddingText     | Spacing between content and border   | string   | `px`/`rem`/`vh`/`vw`                 | —       |
| tag             | Rendered HTML tag                    | string   | Any HTML tag                         | `div`   |

### Type Definitions

```typescript
interface BorderProps {
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double';
  borderWidth?: string;
  borderColor?: string;
  topColor?: string;
  bottomColor?: string;
  leftColor?: string;
  rightColor?: string;
  rounded?: boolean;
  circular?: boolean;
  colorBackground?: string;
  textColor?: string;
  boxShadow?: string;
  width?: string;
  height?: string;
  paddingText?: string;
  tag?: string;
}
```

<script setup>
import MYBorder from '../../../packages/components/border/src/border.vue'
</script>
