# Scroll
## Brief Introduction
The `scroll` component is used to implement custom scrollbar styles and functionality.
You can use `<MYScroll></MYScroll>` or `<MYScroll />` to implement a custom scrollbar.

Note: This style will change the global scrollbar, so the code demo may not show the effect. You can directly observe the effect on the right scrollbar.

## About Color Usage
### thumbColor
Using `thumbColor` in `MYScroll` defines the color of the scrollbar thumb.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScroll thumbColor='#ff0000'>Custom red thumb scrollbar</MYScroll>
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
    <MYScroll thumbColor="#ff0000" style="height: 100px; overflow-y: auto;">
      <div style="height: 500px">Scroll Content</div>
    </MYScroll>
  </ClientOnly>
  </template>
</ShowCode>

### thumbHoverColor
Use `thumbHoverColor` to define the color of the thumb on hover.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScroll thumbHoverColor='#00ff00'>Green thumb on hover scrollbar</MYScroll>
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
      <MYScroll thumbHoverColor="#00ff00" style="height: 100px; overflow-y: auto;">
        <div style="height: 500px">Scroll Content</div>
      </MYScroll>
    </ClientOnly>
  </template>
</ShowCode>

### trackColor
Use `trackColor` to define the color of the scrollbar track.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYScroll trackColor='#0000ff'>Blue track scrollbar</MYScroll>
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
      <MYScroll trackColor="#0000ff" style="height: 100px; overflow-y: auto;">
        <div style="height: 500px">Scroll Content</div>
      </MYScroll>
    </ClientOnly>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter       | Description                 | Type     | Options                            | Default |
|-----------------|-----------------------------|----------|------------------------------------|---------|
| thumbColor      | Thumb color                 | string   | Hex or named color                 | —       |
| thumbHoverColor | Thumb hover color           | string   | Hex or named color                 | —       |
| trackColor      | Track color                 | string   | Hex or named color                 | —       |
| width           | Scrollbar width             | string   | Supports CSS width units (e.g., px, em) | —   |
| tag             | Container tag               | string   | Supports all HTML tags             | `div`   |

### Type Definitions

```typescript
interface ScrollProps {
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  width?: string;
  tag?: string;
}
```
<script setup>
import MYScroll from '../../../packages/components/scroll/src/scroll.vue'
</script>
