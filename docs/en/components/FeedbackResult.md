# Result

## Brief Introduction
The Result component is used to display the status of an operation result.<br />
You can use `<MYResult></MYResult>` to display a result.

## Basic Usage
Use the `title` prop to set the main title and the `subTitle` prop to set the subtitle.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYResult title='Operation Successful' subTitle='Your operation has been completed successfully' />
</template>
  `.trim()"
>
  <template #demo>
    <MYResult title="Operation Successful" subTitle="Your operation has been completed successfully" />
  </template>
</ShowCode>

## Icon Types
Use the `icon` prop to set the result icon.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYResult icon='primary' title='Primary Result' subTitle='This is a primary result' />
        <MYResult icon='success' title='Success Result' subTitle='Operation completed successfully' />
        <MYResult icon='warning' title='Warning Result' subTitle='Please pay attention to related matters' />
        <MYResult icon='error' title='Error Result' subTitle='Operation failed, please try again' />
        <MYResult icon='info' title='Info Result' subTitle='This is an information message' />
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <MYResult icon="primary" title="Primary Result" subTitle="This is a primary result" />
        <MYResult icon="success" title="Success Result" subTitle="Operation completed successfully" />
        <MYResult icon="warning" title="Warning Result" subTitle="Please pay attention to related matters" />
        <MYResult icon="error" title="Error Result" subTitle="Operation failed, please try again" />
        <MYResult icon="info" title="Info Result" subTitle="This is an information message" />
    </div>
  </template>
</ShowCode>

## Slot Usage
Use slots to customize the subtitle and extra content.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYResult title='Operation Successful' icon='success'>
        <template #sub-title>
            <div style='color: #52c41a; font-weight: bold;'>
                Custom subtitle content with HTML support
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary'>Back to Home</MYButton>
                <MYButton type='info'>View Details</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()"
>
  <template #demo>
    <MYResult title="Operation Successful" icon="success">
        <template #sub-title>
            <div style="color: #52c41a; font-weight: bold;">
                Custom subtitle content with HTML support
            </div>
        </template>
        <template #extra>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <MYButton type="primary">Back to Home</MYButton>
                <MYButton type="info">View Details</MYButton>
            </div>
        </template>
    </MYResult>
  </template>
</ShowCode>

## Combined Usage
Finally, here is a combination of multiple APIs to create a result page:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYResult 
        title='Combined Usage Example'
        icon='success'
    >
        <template #sub-title>
            <div style='color: #409EFF;'>
                This is a complete example of combined usage
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary' size='large'>Primary Action</MYButton>
                <MYButton type='info' size='large' plain>Secondary Action</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()"
>
  <template #demo>
    <MYResult 
        title="Combined Usage Example"
        icon="success"
    >
        <template #sub-title>
            <div style="color: #409EFF;">
                This is a complete example of combined usage
            </div>
        </template>
        <template #extra>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <MYButton type="primary" size="large">Primary Action</MYButton>
                <MYButton type="info" size="large" plain>Secondary Action</MYButton>
            </div>
        </template>
    </MYResult>
  </template>
</ShowCode>

## API Reference

### Props

| Prop      | Description          | Type     | Options                                                | Default   |
|-----------|----------------------|----------|--------------------------------------------------------|-----------|
| title     | Main title           | string   | —                                                      | `''`      |
| subTitle  | Subtitle             | string   | —                                                      | `''`      |
| icon      | Icon type            | string   | `primary`/`success`/`warning`/`error`/`info`           | `'info'`  |

### Slots

| Name        | Description              |
|-------------|--------------------------|
| sub-title   | Custom subtitle content  |
| extra       | Extra content area       |

### Type Definitions

```typescript
interface ResultProps {
  title?: string;
  subTitle?: string;
  icon?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}
```

<script setup> 
import MYResult from '../../../packages/components/result/src/result.vue' 
import MYButton from '../../../packages/components/button/src/button.vue' 
</script>
