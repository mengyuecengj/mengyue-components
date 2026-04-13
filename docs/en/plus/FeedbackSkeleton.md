# Skeleton

## Introduction

Skeleton screens are used to display placeholder content while data is loading, improving user experience. mengyue-components has encapsulated this component and conducted vitest testing.<br />
You can use `<MYSkeleton></MYSkeleton>` or `<MYSkeleton />` and `<MYSkeleton-item></MYSkeleton-item>` or `<MYSkeleton-item />` to implement a skeleton screen.

## Basic Usage

### Default Multi-line Text Skeleton

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSkeleton />
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton />
  </template>
</ShowCode>

## Custom Row Count

Use the `count` prop to set the number of skeleton rows.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSkeleton :count='5' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton :count="5" />
  </template>
</ShowCode>

## Circular Skeleton

Use the `variant` prop to set different skeleton styles.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='circle' style='width: 100px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant="circle" style="width: 100px; height: 100px" />
        </template>
    </MYSkeleton>
  </template>
</ShowCode>

## Rectangular Skeleton

Use `variant="rect"` to create a rectangular skeleton.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='rect' style='width: 200px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant="rect" style="width: 200px; height: 100px" />
        </template>
    </MYSkeleton>
  </template>
</ShowCode>

## Random Width

Use the `randomWidth` prop to make skeleton widths vary randomly.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSkeleton :randomWidth='true' :count='5' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton :randomWidth="true" :count="5" />
  </template>
</ShowCode>

## Dynamic Loading

Use the `loading` prop to control the display state of the skeleton screen.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div>
        <MYButton @click='toggleLoading'>Toggle Loading State</MYButton>
        <MYSkeleton :loading='isLoading' style='margin-top: 20px'>
            <template #default>
                <div style='padding: 20px; background: #f5f5f5; border-radius: 4px;'>
                    <h3>Actual Content Title</h3>
                    <p>This is the actual content after loading...</p>
                </div>
            </template>
        </MYSkeleton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div>
        <MYButton @click="toggleLoading">Toggle Loading State</MYButton>
        <MYSkeleton :loading="isLoading" style="margin-top: 20px">
            <template #default>
                <div style="padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>Actual Content Title</h3>
                    <p>This is the actual content after loading...</p>
                </div>
            </template>
        </MYSkeleton>
    </div>
  </template>
</ShowCode>

## Delayed Display

Use the `throttle` prop to set a delay time for displaying the skeleton screen.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSkeleton :throttle='1000' :loading='throttleLoading' />
</template>
  `.trim()"
>
  <template #demo>
    <div>
        <MYButton @click="toggleThrottleLoading">Trigger Delayed Loading (1s)</MYButton>
        <MYSkeleton :throttle="1000" :loading="throttleLoading" style="margin-top: 20px" />
    </div>
  </template>
</ShowCode>

## Theme Styles

Use the `theme` prop to set the skeleton screen theme.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYSkeleton theme='light' />
        <div style='background: #333; padding: 20px; border-radius: 4px;'>
            <MYSkeleton theme='dark' />
        </div>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <MYSkeleton theme="light" />
        <div style="background: #333; padding: 20px; border-radius: 4px;">
            <MYSkeleton theme="dark" />
        </div>
    </div>
  </template>
</ShowCode>

## API Reference

### Skeleton Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| loading | Whether to show skeleton screen | boolean | — | `true` |
| count | Number of placeholder rows | number | — | `3` |
| randomWidth | Whether placeholder width is random | boolean \| string | — | `false` |
| throttle | Display delay time (ms) | number | — | `0` |
| theme | Theme style | string | `'light'` \| `'dark'` | `'light'` |

### SkeletonItem Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| variant | Display style | string | `text` \| `circle` \| `rect` | `'text'` |
| width | Specify width | number \| string | — | `'100%'` |
| height | Specify height | number \| string | — | `16` |

### Skeleton Slots

| Name | Description |
|------|-------------|
| default | Actual content |
| template | Custom skeleton template |

### Type Definitions

```typescript
interface SkeletonProps {
  loading?: boolean;
  animated?: boolean;
  count?: number;
  randomWidth?: boolean | string;
  throttle?: number;
  theme?: 'light' | 'dark';
}

interface SkeletonItemProps {
  variant?: 'text' | 'circle' | 'rect';
  width?: number | string;
  height?: number | string;
}
```

<script setup> 
import { ref } from 'vue' 
import MYSkeleton from '../../../packages/components/skeleton/src/skeleton.vue' 
import MYSkeletonItem from '../../../packages/components/skeleton/src/skeletonItem.vue' 
import MYButton from '../../../packages/components/button/src/button.vue' 
const isLoading = ref(true) 
const throttleLoading = ref(false) 
const toggleLoading = () => { 
    isLoading.value = !isLoading.value 
} 
const toggleThrottleLoading = () => { 
    throttleLoading.value = true 
    setTimeout(() => { 
        throttleLoading.value = false 
    }, 3000) 
}
</script>