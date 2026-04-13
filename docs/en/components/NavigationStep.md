# Steps

## Introduction

The Steps component is used to guide users through completing tasks in a sequential process. mengyue-components has encapsulated this component and conducted vitest testing.
You can use `<MYSteps></MYSteps>` and `<MYStep></MYStep>` together to implement the steps functionality.

## Basic Usage

### Basic Steps

Default horizontal steps bar showing current progress status.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYSteps :active='1'>
    <MYStep title='Step 1' description='Description for step 1' />
    <MYStep title='Step 2' description='Description for step 2' />
    <MYStep title='Step 3' description='Description for step 3' />
    <MYStep title='Step 4' description='Description for step 4' />
  </MYSteps>
</template>
  `.trim()"
>
  <template #demo>
    <MYSteps :active="1">
      <MYStep title="Step 1" description="Description for step 1" />
      <MYStep title="Step 2" description="Description for step 2" />
      <MYStep title="Step 3" description="Description for step 3" />
      <MYStep title="Step 4" description="Description for step 4" />
    </MYSteps>
  </template>
</ShowCode>

### Custom Status

Customize the status of each step by setting the Step's `status` prop.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYSteps :active='2'>
    <MYStep title='Completed' status='finish' />
    <MYStep title='In Progress' status='process' />
    <MYStep title='Error' status='error' />
    <MYStep title='Pending' status='wait' />
  </MYSteps>
</template>
  `.trim()"
>
  <template #demo>
    <MYSteps :active="2">
      <MYStep title="Completed" status="finish" />
      <MYStep title="In Progress" status="process" />
      <MYStep title="Error" status="error" />
      <MYStep title="Pending" status="wait" />
    </MYSteps>
  </template>
</ShowCode>

### Custom Icons

Customize the icon for each step using slots.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYSteps :active='2'>
    <MYStep title='Step 1'>
      <template #icon>📝</template>
      Fill in information
    </MYStep>
    <MYStep title='Step 2'>
      <template #icon>✅</template>
      Confirm submission
    </MYStep>
    <MYStep title='Step 3'>
      <template #icon>⏳</template>
      Awaiting review
    </MYStep>
    <MYStep title='Step 4'>
      <template #icon>🎉</template>
      Complete
    </MYStep>
  </MYSteps>
</template>
  `.trim()"
>
  <template #demo>
    <MYSteps :active="2">
      <MYStep title="Step 1">
        <template #icon>📝</template>
        Fill in information
      </MYStep>
      <MYStep title="Step 2">
        <template #icon>✅</template>
        Confirm submission
      </MYStep>
      <MYStep title="Step 3">
        <template #icon>⏳</template>
        Awaiting review
      </MYStep>
      <MYStep title="Step 4">
        <template #icon>🎉</template>
        Complete
      </MYStep>
    </MYSteps>
  </template>
</ShowCode>

### Dynamic Steps

Dynamically render steps with data and support interaction.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div>
    <MYSteps :active='currentStep'>
      <MYStep 
        v-for='step in steps' 
        :key='step.index'
        :title='step.title' 
        :description='step.description'
      />
    </MYSteps>
    <div style='margin-top: 20px; display: flex; gap: 10px;'>
      <button @click='prevStep' :disabled='currentStep <= 0'>Previous</button>
      <button @click='nextStep' :disabled='currentStep >= steps.length - 1'>Next</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const currentStep = ref(0)
const steps = ref([
  { index: 0, title: 'Step 1', description: 'Fill in basic information' },
  { index: 1, title: 'Step 2', description: 'Upload relevant files' },
  { index: 2, title: 'Step 3', description: 'Confirm submission' },
  { index: 3, title: 'Step 4', description: 'Complete' }
])
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}
const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) currentStep.value++
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSteps :active="currentStep">
        <MYStep 
          v-for="step in steps" 
          :key="step.index"
          :title="step.title" 
          :description="step.description"
        />
      </MYSteps>
      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <button @click="prevStep" :disabled="currentStep <= 0" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">Previous</button>
        <button @click="nextStep" :disabled="currentStep >= steps.length - 1" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">Next</button>
      </div>
    </div>
  </template>
</ShowCode>

## API Reference

### Steps Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| active | Set the current active step | number | — | `0` |
| direction | Steps bar direction | string | `horizontal`/`vertical` | `horizontal` |
| align | Steps bar alignment | string | `left`/`center`/`right` | `left` |
| finish-status | Step completion status | string | — | `finish` |

### Step Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| title | Step title | string | — | Required |
| description | Step description | string | — | `''` |
| status | Step status | string | `wait`/`process`/`finish`/`error` | Auto-calculated |
| index | Step index | number | — | Required |

### Slots

| Slot Name | Description |
|-----------|-------------|
| icon | Custom step icon |
| default | Step content |

### Type Definitions

```typescript
interface StepsProps {
  active?: number;
  direction?: 'horizontal' | 'vertical';
  align?: 'left' | 'center' | 'right';
  finishStatus?: string;
}

interface StepProps {
  title: string;
  description?: string;
  status?: 'wait' | 'process' | 'finish' | 'error';
  index: number;
}
```

<script setup> 
import { ref } from 'vue' 
import MYSteps from '../../../packages/components/step/src/steps.vue' 
import MYStep from '../../../packages/components/step/src/step.vue' 
const currentStep = ref(0) 
const steps = ref([ 
    { index: 0, title: 'Step 1', description: 'Fill in basic information' }, 
    { index: 1, title: 'Step 2', description: 'Upload relevant files' }, 
    { index: 2, title: 'Step 3', description: 'Confirm submission' }, 
    { index: 3, title: 'Step 4', description: 'Complete' }
]) 
const prevStep = () => { 
    if (currentStep.value > 0) currentStep.value-- 
} 
const nextStep = () => { 
    if (currentStep.value < steps.value.length - 1) currentStep.value++ 
} 
</script>
