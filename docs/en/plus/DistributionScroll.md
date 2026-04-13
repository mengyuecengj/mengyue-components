# Scroll

## Brief Introduction
The `Scroll` component is used to implement custom scrollbar styling and functionality.
You can use `<MYScroll></MYScroll>` or `<MYScroll />` to create a custom scrollbar.

Note: This styling affects the global scrollbar, so the code demo may not show the effect directly. You can observe the scrollbar effect on the right side.

## Using Colors

### thumbColor
Use `thumbColor` in `MYScroll` to define the color of the scrollbar thumb.

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
      <div style="height: 500px">Scroll content</div>
    </MYScroll>
  </ClientOnly>
  </template>
</ShowCode>

### thumbHoverColor
Use `thumbHoverColor` to define the color of the thumb when hovered.

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
        <div style="height: 500px">Scroll content</div>
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
        <div style="height: 500px">Scroll content</div>
      </MYScroll>
    </ClientOnly>
  </template>
</ShowCode>

## API Reference

### Props

| Prop             | Description                      | Type     | Options                          | Default |
|------------------|----------------------------------|----------|----------------------------------|---------|
| thumbColor       | Thumb color                      | string   | Hex or named color               | —       |
| thumbHoverColor  | Thumb hover color                | string   | Hex or named color               | —       |
| trackColor       | Track color                      | string   | Hex or named color               | —       |
| width            | Scrollbar width                  | string   | CSS width units (e.g., px, em)   | —       |
| tag              | Container tag                    | string   | Any HTML tag                     | `div`   |

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
