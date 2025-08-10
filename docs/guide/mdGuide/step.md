# Step
## 简易介绍
Step 步骤条，用于引导用户按照流程完成任务或展示当前进度。mengyue-components 进行了封装并进行了vitest测试。<br />

使用`<MYSteps></MYSteps>`和`<MYStep></MYStep>`可以来实现一个简单的步骤条。

## 自定义图标步骤条用法
<div style="max-width: 600px; margin: 20px auto;">
  <MYSteps
    :active="active"
    finish-status="success"
    direction="horizontal"
    align="center"
    :simple="false"
  >
    <MYStep
      v-for="(step, index) in steps"
      :key="index"
      :title="step.title"
      :description="step.description"
      :index="index"
      :status="step.status"
    >
      <!-- 自定义图标插槽 -->
      <template #icon>
        <span v-if="index === active" style="color: #409eff;">🔵</span>
        <span v-else-if="step.status === 'finish' || index < active" style="color: #67c23a;">✔️</span>
        <span v-else-if="step.status === 'error'" style="color: #f56c6c;">❌</span>
        <span v-else>⚪</span>
      </template>
    </MYStep>
  </MYSteps>
  <div style="margin-top: 20px; text-align: center;">
    <MYButton type="primary" style="margin-right: 12px;" @click="prev">Previous Step</MYButton>
    <MYButton type="danger" @click="next">Next Step</MYButton>
  </div>
</div>

## API 参考
### MYSteps Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| active       | 当前步骤索引 | number  | —                                 | 0      |
| direction    | 步骤条方向   | string  | `horizontal` / `vertical`        | `horizontal` |
| align        | 对齐方式     | string  | `left` / `center` / `right`      | `left` |
| finishStatus | 完成状态     | string  | `finish` / `error`                | `finish` |

### MYStep Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| title        | 步骤标题     | string  | —                                 | —      |
| description  | 步骤描述     | string  | —                                 | —      |
| status       | 步骤状态     | string  | `wait` / `process` / `finish` / `error` | — |
| index       | 步骤索引     | number  | —                                 | — |

### 类型定义
```vue
interface StepsProps {
  active?: number;
  direction?: 'horizontal' | 'vertical';
  align?: 'left' | 'center' | 'right';
  finishStatus?: 'finish' | 'error';
}

interface StepProps {
  title: string;
  description?: string;
  status?: 'wait' | 'process' | 'finish' | 'error';
  index: number;
}
```

<script setup lang="ts">
import { ref } from 'vue'

// 当前激活步骤
const active = ref(0)

// 预定义步骤列表
const steps = ref([
  { title: '步骤 1', description: '描述信息 1', status: '' },
  { title: '步骤 2', description: '描述信息 2', status: '' },
  { title: '步骤 3', description: '描述信息 3', status: 'error' }, // 你也可以显式指定状态
  { title: '步骤 4', description: '描述信息 4', status: '' },
])

// 下一步
const next = () => {
  active.value = active.value < steps.value.length - 1 ? active.value + 1 : 0
}

// 上一步
const prev = () => {
  active.value = active.value > 0 ? active.value - 1 : steps.value.length - 1
}
</script>