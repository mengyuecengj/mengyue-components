# Steps

## 简易介绍
Steps 步骤条组件，用于引导用户按照流程完成任务。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYSteps></MYSteps>` 和 `<MYStep></MYStep>` 组合来实现步骤条功能。

## 基本用法

### 基础步骤条
默认的水平步骤条，显示当前进度状态。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYSteps :active='1'>
    <MYStep title='步骤一' description='这是第一步的描述' />
    <MYStep title='步骤二' description='这是第二步的描述' />
    <MYStep title='步骤三' description='这是第三步的描述' />
    <MYStep title='步骤四' description='这是第四步的描述' />
  </MYSteps>
</template>
  `.trim()"
>
  <template #demo>
    <MYSteps :active="1">
      <MYStep title="步骤一" description="这是第一步的描述" />
      <MYStep title="步骤二" description="这是第二步的描述" />
      <MYStep title="步骤三" description="这是第三步的描述" />
      <MYStep title="步骤四" description="这是第四步的描述" />
    </MYSteps>
  </template>
</ShowCode>

### 自定义状态
通过设置 Step 的 `status` 属性来自定义每个步骤的状态。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYSteps :active='2'>
    <MYStep title='已完成' status='finish' />
    <MYStep title='进行中' status='process' />
    <MYStep title='错误' status='error' />
    <MYStep title='等待' status='wait' />
  </MYSteps>
</template>
  `.trim()"
>
  <template #demo>
    <MYSteps :active="2">
      <MYStep title="已完成" status="finish" />
      <MYStep title="进行中" status="process" />
      <MYStep title="错误" status="error" />
      <MYStep title="等待" status="wait" />
    </MYSteps>
  </template>
</ShowCode>

### 自定义图标
通过插槽自定义每个步骤的图标。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYSteps :active='2'>
    <MYStep title='步骤一'>
      <template #icon>📝</template>
      填写信息
    </MYStep>
    <MYStep title='步骤二'>
      <template #icon>✅</template>
      确认提交
    </MYStep>
    <MYStep title='步骤三'>
      <template #icon>⏳</template>
      等待审核
    </MYStep>
    <MYStep title='步骤四'>
      <template #icon>🎉</template>
      完成
    </MYStep>
  </MYSteps>
</template>
  `.trim()"
>
  <template #demo>
    <MYSteps :active="2">
      <MYStep title="步骤一">
        <template #icon>📝</template>
        填写信息
      </MYStep>
      <MYStep title="步骤二">
        <template #icon>✅</template>
        确认提交
      </MYStep>
      <MYStep title="步骤三">
        <template #icon>⏳</template>
        等待审核
      </MYStep>
      <MYStep title="步骤四">
        <template #icon>🎉</template>
        完成
      </MYStep>
    </MYSteps>
  </template>
</ShowCode>

### 动态步骤
结合数据动态渲染步骤条，并支持交互。

<ShowCode
  title="代码演示"
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
      <button @click='prevStep' :disabled='currentStep <= 0'>上一步</button>
      <button @click='nextStep' :disabled='currentStep >= steps.length - 1'>下一步</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const currentStep = ref(0)
const steps = ref([
  { index: 0, title: '第一步', description: '填写基本信息' },
  { index: 1, title: '第二步', description: '上传相关文件' },
  { index: 2, title: '第三步', description: '确认提交' },
  { index: 3, title: '第四步', description: '完成' }
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
        <button @click="prevStep" :disabled="currentStep <= 0" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">上一步</button>
        <button @click="nextStep" :disabled="currentStep >= steps.length - 1" style="padding: 5px 10px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">下一步</button>
      </div>
    </div>
  </template>
</ShowCode>

## API 参考

### Steps Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| active  | 设置当前激活步骤      | number  | — | `0`  |
| direction  | 步骤条方向      | string  | `horizontal`/`vertical` | `horizontal`  |
| align  | 步骤条对齐方式      | string  | `left`/`center`/`right` | `left`  |
| finish-status  | 步骤完成状态      | string  | — | `finish`  |

### Step Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| title  | 步骤标题      | string  | — | `必需`  |
| description  | 步骤描述      | string  | — | `''`  |
| status  | 步骤状态      | string  | `wait`/`process`/`finish`/`error` | `自动计算`  |
| index  | 步骤索引      | number  | — | `必需`  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| icon  | 自定义步骤图标      |
| default  | 步骤内容      |

### 类型定义
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
import MYSteps from '../../packages/components/step/src/steps.vue' 
import MYStep from '../../packages/components/step/src/step.vue' 
const currentStep = ref(0) 
const steps = ref([ 
    { index: 0, title: '第一步', description: '填写基本信息' }, 
    { index: 1, title: '第二步', description: '上传相关文件' }, 
    { index: 2, title: '第三步', description: '确认提交' }, 
    { index: 3, title: '第四步', description: '完成' }
]) 
const prevStep = () => { 
    if (currentStep.value > 0) currentStep.value-- 
} 
const nextStep = () => { 
    if (currentStep.value < steps.value.length - 1) currentStep.value++ 
} 
</script>
