# Form
## 简易介绍
form表单组件，用于收集用户输入的数据并进行校验。mengyue-components进行了封装并进行了vitest测试。<br />
form表单的实现标签有两种`<MYForm></MYForm>`或者`<MYForm />`和`<MYForm-item></MYForm-item>`或者`<MYForm-item />`。来实现表单

## 表单使用
例如在这里实现个带有常规表单组件的组合表单示例
```vue
<MYForm ref="formRef" v-model="formData" :rules="rules" @validate="onValidate" style="background-color: #4fad65ff; color: red">
    <MYForm-item label="用户名"prop="username" :validateTrigger="'blur'" style="color: red">
        <MYInput v-model="formData.username" placeholder="请输入用户名" />
    </MYForm-item>
        <MYButton type="info" @click="handleReset">重置</MYButton>
        <MYButton type="button" @click="handleSubmit">提交</MYButton>
    <MYForm-item label="是否启用" prop="enabled">
        <MYSwitch v-model="formData.enabled" />
    </MYForm-item>
    <!-- 单选框 -->
    <MYForm-item label="性别" prop="gender">
        <MYRadio-group v-model="formData.gender">
          <MYRadio value="1">男</MYRadio>
          <MYRadio value="2">女</MYRadio>
        </MYRadio-group>
    </MYForm-item>
    <MYForm-item label="兴趣爱好" prop="hobbies">
        <MYCheckbox-group v-model="formData.hobbies">
          <MYCheckbox value="reading">阅读</MYCheckbox>
          <MYCheckbox value="gaming">游戏</MYCheckbox>
          <MYCheckbox value="coding">编程</MYCheckbox>
        </MYCheckbox-group>
    </MYForm-item>
</MYForm>
<script setup>
<script setup>
import { ref, reactive } from 'vue'
const formRef = ref()

const formData = reactive({
  username: '',
  enabled: false,
  gender: '1',
  hobbies: []
})

const rules = {
  username: [
    { required: true, message: '用户名不能为空' },
  ],
  gender: [
    { required: true, message: '请选择性别' }
  ],
  hobbies: [
    { required: true, message: '请选择至少一个兴趣爱好' }
  ]
}

function handleReset() {
  formData.username = ''
  formData.enabled = false
  formData.gender = ''
  formData.hobbies = []
  formRef.value?.clearValidate()
}

function onValidate(valid) {
  if (valid) {
    alert('验证通过，可以提交！')
  } else {
    alert('验证失败，请检查表单！')
  }
}

function handleSubmit() {
  formRef.value.validate()
    .then(() => {
      alert('提交成功！\n' + JSON.stringify(formData, null, 2))
    })
    .catch(() => {
      alert('提交失败，请检查输入项！')
    })
}
</script>
```
<MYForm ref="formRef" v-model="formData" :rules="rules" @validate="onValidate" style="background-color: #4fad65ff; color: red">
    <MYForm-item label="用户名"prop="username" :validateTrigger="'blur'" style="color: red">
        <MYInput v-model="formData.username" placeholder="请输入用户名" />
    </MYForm-item>
        <MYButton type="info" @click="handleReset">重置</MYButton>
        <MYButton type="button" @click="handleSubmit">提交</MYButton>
    <MYForm-item label="是否启用" prop="enabled">
        <MYSwitch v-model="formData.enabled" />
    </MYForm-item>
    <!-- 单选框 -->
    <MYForm-item label="性别" prop="gender">
        <MYRadio-group v-model="formData.gender">
          <MYRadio value="1">男</MYRadio>
          <MYRadio value="2">女</MYRadio>
        </MYRadio-group>
    </MYForm-item>
    <MYForm-item label="兴趣爱好" prop="hobbies">
        <MYCheckbox-group v-model="formData.hobbies">
          <MYCheckbox value="reading">阅读</MYCheckbox>
          <MYCheckbox value="gaming">游戏</MYCheckbox>
          <MYCheckbox value="coding">编程</MYCheckbox>
        </MYCheckbox-group>
    </MYForm-item>
</MYForm>


## API 参考

### Form Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| rules        | 校验规则     | object  | —                               | `{}`   |
| labelWidth   | 标签宽度     | string \| number | 支持像素值和`auto` | `'auto'` |
| inline       | 是否行内布局 | boolean | —                               | `false` |
| size         | 表单大小     | string  | `large`/`medium`/`small`/`mini` | `'medium'` |
| disabled     | 是否禁用     | boolean | —                               | `false` |

### FormItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| label        | 标签名     | string  | —                               | `{}`   |
| prop   | 规则名称     | string \| number | 支持像素值和`auto` | `'auto'` |
| inline       | 是否行内布局 | boolean | —                               | `false` |
| size         | 表单大小     | string  | `large`/`medium`/`small`/`mini` | `'medium'` |
| disabled     | 是否禁用     | boolean | —                               | `false` |
| validateTrigger | 验证触发器 | string  | — | `blur` |
| rules        | 校验规则     | object  | —                               | `{}`   |
| labelWidth   | 标签宽度     | string \| number | 支持像素值和`auto` | `'auto'` |


### 类型定义
```vue
interface FormProps {
  rules: object;
  size: string;
  disabled: boolean;
  inline: boolean;
}

interface FormItemProps {
    label: string;
    prop: string;
    inline: boolean;
    size: string;
    disabled: boolean;
    rules: object;
    labelWidth: string | number;
}
```

<script setup>
import { ref, reactive } from 'vue'
const formRef = ref()

const formData = reactive({
  username: '',
  enabled: false,
  gender: '1',
  hobbies: []
})

const rules = {
  username: [
    { required: true, message: '用户名不能为空' },
  ],
  gender: [
    { required: true, message: '请选择性别' }
  ],
  hobbies: [
    { required: true, message: '请选择至少一个兴趣爱好' }
  ]
}

function handleReset() {
  formData.username = ''
  formData.enabled = false
  formData.gender = ''
  formData.hobbies = []
  formRef.value?.clearValidate()
}

function onValidate(valid) {
  if (valid) {
    alert('验证通过，可以提交！')
  } else {
    alert('验证失败，请检查表单！')
  }
}

function handleSubmit() {
  formRef.value.validate()
    .then(() => {
      alert('提交成功！\n' + JSON.stringify(formData, null, 2))
    })
    .catch(() => {
      alert('提交失败，请检查输入项！')
    })
}
</script>