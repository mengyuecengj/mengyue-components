# BackTop

## Brief Introduction
The BackTop component is used to quickly return to the top of the page. mengyue-components has encapsulated it and performed vitest testing.
You can use `<MYBackTop></MYBackTop>` or `<MYBackTop />` to implement a back-to-top component.

## Basic Usage

### visibilityHeight
Use the `visibilityHeight` prop to set the scroll height threshold. The back-to-top button will appear when the page scroll exceeds this value. The default value is `200`.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBacktop :right='50' :bottom='80' />
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
    <MYBacktop :right="50" :bottom="80" />
    </ClientOnly>
  </template>
</ShowCode>

### Custom Position
Use the `right` and `bottom` props to customize the component's position on the page.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBacktop :right='100' :bottom='100' />
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
    <MYBacktop :right="100" :bottom="100" />
     </ClientOnly> 
  </template>
</ShowCode>

### Custom Slot Usage
Use slots to fully customize the content and style of the back-to-top button.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBacktop :bottom='140' :right='110'>
    <div
      style='
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        font-weight: bold;
      '
    >
      UP
    </div>
  </MYBacktop>
</template>
  `.trim()"
>
  <template #demo>
    <ClientOnly>
    <MYBacktop :bottom="140" :right="110">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
          font-weight: bold;
        "
      >
        UP
      </div>
    </MYBacktop>
      </ClientOnly>
  </template>
</ShowCode>

## API Reference

### Props

| Prop              | Description                                          | Type            | Options | Default |
|-------------------|------------------------------------------------------|-----------------|---------|---------|
| visibilityHeight  | Scroll height threshold, show button when exceeded | number          | —       | `200`   |
| right             | Distance from the right side                        | number \| string| —       | `40`    |
| bottom            | Distance from the bottom                            | number \| string| —       | `40`    |
| target            | Target element for scroll listening                 | string          | —       | `''`    |

### Type Definitions

```typescript
interface BackTopProps {
  visibilityHeight?: number;
  right?: string | number;
  bottom?: string | number;
  target?: string;
}
```

<script setup>
import MYBacktop from '../../../packages/components/backtop/src/backtop.vue'
</script>
