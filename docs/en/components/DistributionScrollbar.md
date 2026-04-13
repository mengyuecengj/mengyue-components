# Scrollbar
## Brief Introduction
The `scrollbar` is a scrollbar component that provides scrolling functionality when content exceeds the container bounds.
You can use `<MYScrollbar></MYScrollbar>` or `<MYScrollbar />` to implement a scrollbar.

## About Using Local Scrollbar
### Both Horizontal and Vertical Scrollbars
Enable both horizontal and vertical scrollbars with corner connection:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScrollbar widthX ScrollWidth='20px' corner>
    <MYText size='30rem'>11111111111111111111111111111</MYText>
  </MYScrollbar>
</template>
  `.trim()"
>
  <template #demo>
    <MYScrollbar widthX ScrollWidth="20px" corner>
      <MYText size="30rem">11111111111111111111111111111</MYText>
    </MYScrollbar>
  </template>
</ShowCode>

### Scrollbar Colors
Change the colors of the scrollbar thumb, track, and hover state:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScrollbar 
    height='500px' 
    thumbColor='#ff0000' 
    thumbHoverColor='#2c2' 
    trackColor='#797'
  >
    <MYText size='30rem'>111</MYText>
    <MYText size='30rem'>111</MYText>
  </MYScrollbar>
</template>
  `.trim()"
>
  <template #demo>
    <MYScrollbar height="500px" thumbColor="#ff0000" thumbHoverColor="#2c2" trackColor="#797">
      <MYText size="30rem">111</MYText>
      <MYText size="30rem">111</MYText>
    </MYScrollbar>
  </template>
</ShowCode>

### Disable Scrolling
Disable the scrolling functionality:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScrollbar height='500px' Maxheight='800px' disabledScroll>
    <MYText size='30rem'>222</MYText>
    <MYText size='30rem'>222</MYText>
  </MYScrollbar>
</template>
  `.trim()"
>
  <template #demo>
    <MYScrollbar height="500px" Maxheight="800px" disabledScroll>
      <MYText size="30rem">222</MYText>
      <MYText size="30rem">222</MYText>
    </MYScrollbar>
  </template>
</ShowCode>

### Set Maximum Height
Set the maximum height to 800px:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScrollbar height='500px' Maxheight='800px'>
    <MYText size='30rem'>333</MYText>
    <MYText size='30rem'>333</MYText>
  </MYScrollbar>
</template>
  `.trim()"
>
  <template #demo>
    <MYScrollbar height="500px" Maxheight="800px">
      <MYText size="30rem">333</MYText>
      <MYText size="30rem">333</MYText>
    </MYScrollbar>
  </template>
</ShowCode>

### Combined Usage
Combine multiple props:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScrollbar 
    height='600px' 
    Maxheight='1000px' 
    thumbColor='#fff' 
    thumbHoverColor='#191919' 
    trackColor='#2c2'
  >
    <MYText size='30rem'>444</MYText>
    <MYText size='30rem'>444</MYText>
  </MYScrollbar>
</template>
  `.trim()"
>
  <template #demo>
    <MYScrollbar height="600px" Maxheight="1000px" thumbColor="#fff" thumbHoverColor="#191919" trackColor="#2c2">
      <MYText size="30rem">444</MYText>
      <MYText size="30rem">444</MYText>
    </MYScrollbar>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter        | Description                                      | Type      | Options                            | Default |
|------------------|--------------------------------------------------|-----------|------------------------------------|---------|
| height           | Scrollbar height                                 | string    | `px`/`em`/`rem`/dynamic            | —       |
| maxHeight        | Maximum scrollbar height                         | string    | `px`/`em`/`rem`/dynamic            | —       |
| ScrollWidth      | Scrollbar width                                  | string    | `px`/`em`/`rem`/dynamic            | —       |
| widthX           | Enable horizontal scrollbar                      | boolean   | —                                  | `false` |
| thumbColor       | Thumb color                                      | string    | Hex or named color                 | —       |
| thumbHoverColor  | Thumb hover color                                | string    | Hex or named color                 | —       |
| trackColor       | Track color                                      | string    | Hex or named color                 | —       |
| disabledHeight   | Disable vertical scrollbar                       | boolean   | —                                  | `false` |
| disabledWidth    | Disable horizontal scrollbar                     | boolean   | —                                  | `false` |
| disabledScroll   | Disable scrolling functionality                  | boolean   | —                                  | `false` |
| corner           | Connect corner when both scrollbars are enabled  | boolean   | —                                  | `false` |
| tag              | Container tag                                    | string    | Supports all HTML tags             | `div`   |

### Type Definitions

```typescript
interface ScrollbarProps {
  height?: string;
  maxHeight?: string;
  ScrollWidth?: string;
  widthX?: boolean;
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  disabledHeight?: boolean;
  disabledWidth?: boolean;
  disabledScroll?: boolean;
  corner?: boolean;
  tag?: string;
}
```

<script setup>
import MYScrollbar from '../../../packages/components/scrollbar/src/scrollbar.vue'
import MYText from '../../../packages/components/text/src/text.vue'
</script>
