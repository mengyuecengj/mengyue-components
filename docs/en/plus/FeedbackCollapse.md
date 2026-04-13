# Collapse

## Brief Introduction
The Collapse component is used to display collapsible content panels.<br />
You can use `<MYCollapse></MYCollapse>` or `<MYCollapse />` together with `<MYCollapse-item></MYCollapse-item>` or `<MYCollapse-item />` to implement a collapsible panel.

## Basic Usage
Use `v-model` to bind the currently active panel(s).

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYCollapse v-model='activeNames'>
        <MYCollapse-item title='Features' name='1'>
            <div>Support multiple panels expanded simultaneously</div>
            <div>Bind expanded panels via v-model</div>
        </MYCollapse-item>
        <MYCollapse-item title='User Experience' name='2'>
            <div>Smooth expand/collapse animations</div>
            <div>Support custom content</div>
        </MYCollapse-item>
        <MYCollapse-item title='Configurability' name='3'>
            <div>Adjust behavior via props</div>
            <div>Support accordion mode and multi-panel mode</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()"
>
  <template #demo>
    <MYCollapse v-model="activeNames1">
        <MYCollapse-item title="Features" name="1">
            <div>Support multiple panels expanded simultaneously</div>
            <div>Bind expanded panels via v-model</div>
        </MYCollapse-item>
        <MYCollapse-item title="User Experience" name="2">
            <div>Smooth expand/collapse animations</div>
            <div>Support custom content</div>
        </MYCollapse-item>
        <MYCollapse-item title="Configurability" name="3">
            <div>Adjust behavior via props</div>
            <div>Support accordion mode and multi-panel mode</div>
        </MYCollapse-item>
    </MYCollapse>
  </template>
</ShowCode>

## Accordion Mode
Use the `accordion` prop to enable accordion mode, where only one panel can be expanded at a time.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYCollapse v-model='activeAccordionName' accordion>
        <MYCollapse-item title='Introduction' name='a'>
            <div>Accordion mode allows only one panel expanded at a time</div>
        </MYCollapse-item>
        <MYCollapse-item title='Details' name='b'>
            <div>Clicking a panel will collapse others</div>
        </MYCollapse-item>
        <MYCollapse-item title='Notes' name='c'>
            <div>Ideal for scenarios requiring focus on a single piece of content</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()"
>
  <template #demo>
    <MYCollapse v-model="activeAccordionName1" accordion>
        <MYCollapse-item title="Introduction" name="a">
            <div>Accordion mode allows only one panel expanded at a time</div>
        </MYCollapse-item>
        <MYCollapse-item title="Details" name="b">
            <div>Clicking a panel will collapse others</div>
        </MYCollapse-item>
        <MYCollapse-item title="Notes" name="c">
            <div>Ideal for scenarios requiring focus on a single piece of content</div>
        </MYCollapse-item>
    </MYCollapse>
  </template>
</ShowCode>

## API Reference

### Collapse Props

| Prop         | Description                          | Type              | Options | Default |
|--------------|--------------------------------------|-------------------|---------|---------|
| modelValue   | Active panel(s)                      | string \| array   | —       | —       |
| accordion    | Whether to use accordion mode        | boolean           | —       | `false` |

### CollapseItem Props

| Prop         | Description                          | Type     | Options | Default |
|--------------|--------------------------------------|----------|---------|---------|
| name         | Unique identifier                    | string   | —       | —       |
| title        | Panel title                          | string   | —       | —       |

### CollapseItem Slots

| Name          | Description          |
|---------------|----------------------|
| default       | Panel content        |

### Type Definitions

```typescript
interface CollapseProps {
  modelValue?: string | string[];
  accordion?: boolean;
}

interface CollapseItemProps {
  name: string;
  disabled?: boolean;
}
```

<script setup> 
import { ref } from 'vue' 
import MYCollapse from '../../../packages/components/collapse/src/collapse.vue' 
import MYCollapseItem from '../../../packages/components/collapse/src/collapseItem.vue' 
const activeNames1 = ref(['1']) 
const activeAccordionName1 = ref('a') 
const activeNames2 = ref(['1']) 
const activeNames3 = ref(['1']) 
const activeNames4 = ref(['1']) 
</script>
