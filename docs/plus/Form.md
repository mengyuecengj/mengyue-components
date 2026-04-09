# Form
## 简易介绍
form表单组件，用于收集用户输入的数据并进行校验。<br />
form表单的实现标签有两种`<MYForm></MYForm>`或者`<MYForm />`和`<MYForm-item></MYForm-item>`或者`<MYForm-item />`。来实现表单

## 基础用法
使用`v-model`绑定表单数据，通过`rules`属性设置校验规则。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>重置</MYButton>
            <MYButton type='primary' @click='handleSubmit'>提交</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef1" :modelValue="formData1" :rules="rules1" @update:modelValue="handleFormUpdate1">
        <MYForm-item label="用户名" prop="username">
            <MYInput :modelValue="formData1.username" @update:modelValue="val => formData1.username = val" placeholder="请输入用户名" />
        </MYForm-item>
        <MYForm-item>
            <MYButton type="info" @click="handleReset1">重置</MYButton>
            <MYButton type="primary" @click="handleSubmit1">提交</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 多种表单控件
表单支持多种控件类型，包括输入框、开关、单选框、复选框等。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item label='是否启用' prop='enabled'>
            <MYSwitch v-model='formData.enabled' />
        </MYForm-item>
        <MYForm-item label='性别' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>男</MYRadio>
                <MYRadio value='2'>女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item label='兴趣爱好' prop='hobbies'>
            <MYCheckbox-group v-model='formData.hobbies'>
                <MYCheckbox value='reading'>阅读</MYCheckbox>
                <MYCheckbox value='gaming'>游戏</MYCheckbox>
                <MYCheckbox value='coding'>编程</MYCheckbox>
            </MYCheckbox-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>重置</MYButton>
            <MYButton type='primary' @click='handleSubmit'>提交</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef2" :modelValue="formData2" :rules="rules2" @update:modelValue="handleFormUpdate2">
        <MYForm-item label="用户名" prop="username">
            <MYInput :modelValue="formData2.username" @update:modelValue="val => formData2.username = val" placeholder="请输入用户名" />
        </MYForm-item>
        <MYForm-item label="是否启用" prop="enabled">
            <MYSwitch :modelValue="formData2.enabled" @update:modelValue="val => formData2.enabled = val" />
        </MYForm-item>
        <MYForm-item label="性别" prop="gender">
            <MYRadio-group :modelValue="formData2.gender" @update:modelValue="val => formData2.gender = val">
                <MYRadio value="1">男</MYRadio>
                <MYRadio value="2">女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item label="兴趣爱好" prop="hobbies">
            <MYCheckbox-group :modelValue="formData2.hobbies" @update:modelValue="val => formData2.hobbies = val">
                <MYCheckbox value="reading">阅读</MYCheckbox>
                <MYCheckbox value="gaming">游戏</MYCheckbox>
                <MYCheckbox value="coding">编程</MYCheckbox>
            </MYCheckbox-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type="info" @click="handleReset2">重置</MYButton>
            <MYButton type="primary" @click="handleSubmit2">提交</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 行内布局
使用`inline`属性可以设置表单为行内布局。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' inline>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='用户名' />
        </MYForm-item>
        <MYForm-item label='邮箱' prop='email'>
            <MYInput v-model='formData.email' placeholder='邮箱' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='primary' @click='handleSubmit'>查询</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef3" :modelValue="formData3" :rules="rules3" inline @update:modelValue="handleFormUpdate3">
        <MYForm-item label="用户名" prop="username">
            <MYInput :modelValue="formData3.username" @update:modelValue="val => formData3.username = val" placeholder="用户名" />
        </MYForm-item>
        <MYForm-item label="邮箱" prop="email">
            <MYInput :modelValue="formData3.email" @update:modelValue="val => formData3.email = val" placeholder="邮箱" />
        </MYForm-item>
        <MYForm-item>
            <MYButton type="primary" @click="handleSubmit3">查询</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 自定义标签宽度
使用`labelWidth`属性可以自定义标签的宽度。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' labelWidth='120px'>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item label='邮箱地址' prop='email'>
            <MYInput v-model='formData.email' placeholder='请输入邮箱' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef4" :modelValue="formData4" :rules="rules4" labelWidth="120px" @update:modelValue="handleFormUpdate4">
        <MYForm-item label="用户名" prop="username">
            <MYInput :modelValue="formData4.username" @update:modelValue="val => formData4.username = val" placeholder="请输入用户名" />
        </MYForm-item>
        <MYForm-item label="邮箱地址" prop="email">
            <MYInput :modelValue="formData4.email" @update:modelValue="val => formData4.email = val" placeholder="请输入邮箱" />
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 不同尺寸
使用`size`属性可以设置表单的尺寸。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='small'>
        <MYForm-item label='小尺寸表单' prop='username'>
            <MYInput v-model='formData.username' placeholder='小尺寸' />
        </MYForm-item>
    </MYForm>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='large' style='margin-top: 20px'>
        <MYForm-item label='大尺寸表单' prop='username'>
            <MYInput v-model='formData.username' placeholder='大尺寸' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef5" :modelValue="formData5" :rules="rules5" size="small" @update:modelValue="handleFormUpdate5">
        <MYForm-item label="小尺寸表单" prop="username">
            <MYInput :modelValue="formData5.username" @update:modelValue="val => formData5.username = val" placeholder="小尺寸" />
        </MYForm-item>
    </MYForm>
    <MYForm ref="formRef6" :modelValue="formData6" :rules="rules5" size="large" style="margin-top: 20px" @update:modelValue="handleFormUpdate6">
        <MYForm-item label="大尺寸表单" prop="username">
            <MYInput :modelValue="formData6.username" @update:modelValue="val => formData6.username = val" placeholder="大尺寸" />
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 验证触发器
使用`validateTrigger`属性可以设置验证触发的时机。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='实时验证' prop='username' validateTrigger='change'>
            <MYInput v-model='formData.username' placeholder='输入时实时验证' />
        </MYForm-item>
        <MYForm-item label='失焦验证' prop='email' validateTrigger='blur'>
            <MYInput v-model='formData.email' placeholder='失焦时验证' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef7" :modelValue="formData7" :rules="rules7" @update:modelValue="handleFormUpdate7">
        <MYForm-item label="实时验证" prop="username" validateTrigger="change">
            <MYInput :modelValue="formData7.username" @update:modelValue="val => formData7.username = val" placeholder="输入时实时验证" />
        </MYForm-item>
        <MYForm-item label="失焦验证" prop="email" validateTrigger="blur">
            <MYInput :modelValue="formData7.email" @update:modelValue="val => formData7.email = val" placeholder="失焦时验证" />
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 禁用状态
使用`disabled`属性可以禁用整个表单。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' disabled>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='禁用状态' />
        </MYForm-item>
        <MYForm-item label='性别' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>男</MYRadio>
                <MYRadio value='2'>女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef8" :modelValue="formData8" :rules="rules8" disabled @update:modelValue="handleFormUpdate8">
        <MYForm-item label="用户名" prop="username">
            <MYInput :modelValue="formData8.username" @update:modelValue="val => formData8.username = val" placeholder="禁用状态" />
        </MYForm-item>
        <MYForm-item label="性别" prop="gender">
            <MYRadio-group :modelValue="formData8.gender" @update:modelValue="val => formData8.gender = val">
                <MYRadio value="1">男</MYRadio>
                <MYRadio value="2">女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## 组合使用
最后，实现个多种api组合使用实现个完整表单：
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYForm 
        ref='formRef' 
        v-model='formData' 
        :rules='rules'
        labelWidth='100px'
        size='medium'
        inline
    >
        <MYForm-item label='用户名' prop='username' validateTrigger='blur'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item label='邮箱' prop='email' validateTrigger='change'>
            <MYInput v-model='formData.email' placeholder='请输入邮箱' />
        </MYForm-item>
        <MYForm-item label='性别' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>男</MYRadio>
                <MYRadio value='2'>女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>重置</MYButton>
            <MYButton type='primary' @click='handleSubmit'>提交</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm 
        ref="formRef9" 
        :modelValue="formData9" 
        :rules="rules9"
        labelWidth="100px"
        size="medium"
        inline
        @update:modelValue="handleFormUpdate9"
    >
        <MYForm-item label="用户名" prop="username" validateTrigger="blur">
            <MYInput :modelValue="formData9.username" @update:modelValue="val => formData9.username = val" placeholder="请输入用户名" />
        </MYForm-item>
        <MYForm-item label="邮箱" prop="email" validateTrigger="change">
            <MYInput :modelValue="formData9.email" @update:modelValue="val => formData9.email = val" placeholder="请输入邮箱" />
        </MYForm-item>
        <MYForm-item label="性别" prop="gender">
            <MYRadio-group :modelValue="formData9.gender" @update:modelValue="val => formData9.gender = val">
                <MYRadio value="1">男</MYRadio>
                <MYRadio value="2">女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type="info" @click="handleReset9">重置</MYButton>
            <MYButton type="primary" @click="handleSubmit9">提交</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## API 参考

### Form Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 表单数据     | object  | —                               | `{}`   |
| rules        | 校验规则     | object  | —                               | `{}`   |
| labelWidth   | 标签宽度     | string \| number | 支持像素值和`auto` | `'auto'` |
| inline       | 是否行内布局 | boolean | —                               | `false` |
| size         | 表单大小     | string  | `large`/`medium`/`small`/`mini` | `'medium'` |
| disabled     | 是否禁用     | boolean | —                               | `false` |

### FormItem Props
| 参数            | 说明         | 类型     | 可选值                              | 默认值  |
|----------------|-------------|---------|-----------------------------------|--------|
| label          | 标签名       | string  | —                               | `''`   |
| prop           | 字段名       | string  | —                               | `''`   |
| validateTrigger| 验证触发器   | string  | `blur`/`change`                  | `'blur'` |
| rules          | 校验规则     | object  | —                               | `{}`   |
| labelWidth     | 标签宽度     | string \| number | —                     | —      |
| size           | 表单项大小   | string  | `large`/`medium`/`small`/`mini` | `'medium'` |
| inline         | 是否行内布局 | boolean | —                               | `false` |
| disabled       | 是否禁用     | boolean | —                               | `false` |

### Form Methods
| 方法名         | 说明         | 参数     |
|---------------|-------------|---------|
| validate      | 验证整个表单 | —       |
| validateField | 验证指定字段 | `prop: string` |
| resetFields   | 重置表单     | —       |
| clearValidate | 清除验证状态 | `field?: string` |

### 类型定义
```typescript
interface FormRule {
  required?: boolean;
  message?: string;
  validator?: (rule: FormRule, value: string) => boolean | Promise<boolean>;
  len?: number;
}

interface FormProps {
  modelValue?: Record<string, any>;
  rules?: Record<string, FormRule[]>;
  labelWidth?: string | number;
  inline?: boolean;
  size?: 'large' | 'medium' | 'small' | 'mini';
  disabled?: boolean;
}

interface FormItemProps {
  label?: string;
  prop?: string;
  validateTrigger?: 'blur' | 'change';
  rules?: Record<string, FormRule[]>;
  labelWidth?: string | number;
  size?: 'large' | 'medium' | 'small' | 'mini';
  inline?: boolean;
  disabled?: boolean;
}
```
<script setup> 
import { ref, reactive } from 'vue' 
import MYForm from '../../packages/components/form/src/form.vue' 
import MYFormItem from '../../packages/components/form/src/formItem.vue' 
import MYInput from '../../packages/components/input/src/input.vue' 
import MYButton from '../../packages/components/button/src/button.vue' 
import MYSwitch from '../../packages/components/switch/src/switch.vue' 
import MYRadio from '../../packages/components/radio/src/radio.vue' 
import MYRadioGroup from '../../packages/components/radio/src/radio-group.vue' 
import MYCheckbox from '../../packages/components/checkbox/src/checkbox.vue' 
import MYCheckboxGroup from '../../packages/components/checkbox/src/checkbox-group.vue' 
// 表单1 
const formRef1 = ref() 
const formData1 = reactive({ username: '' }) 
const rules1 = { username: [ { required: true, message: '用户名不能为空' } ] } 
// 表单2 
const formRef2 = ref() 
const formData2 = reactive({ username: '', enabled: false, gender: '1', hobbies: [] }) 
const rules2 = { 
    username: [{ required: true, message: '用户名不能为空' }], 
    gender: [{ required: true, message: '请选择性别' }],
    hobbies: [{ required: true, message: '请选择至少一个兴趣爱好' }]
} 
// 表单3 
const formRef3 = ref() 
const formData3 = reactive({ username: '', email: '' }) 
const rules3 = { 
    username: [{ required: true, message: '用户名不能为空' }], 
    email: [{ required: true, message: '邮箱不能为空' }]
} 
// 表单4
const formRef4 = ref() 
const formData4 = reactive({ username: '', email: '' }) 
const rules4 = { 
    username: [{ required: true, message: '用户名不能为空' }], 
    email: [{ required: true, message: '邮箱不能为空' }] 
} 
// 表单5 & 6 
const formRef5 = ref() 
const formRef6 = ref() 
const formData5 = reactive({ username: '' }) 
const formData6 = reactive({ username: '' })
const rules5 = { username: [{ required: true, message: '用户名不能为空' }] } 
// 表单7 
const formRef7 = ref() 
const formData7 = reactive({ username: '', email: '' }) 
const rules7 = { 
    username: [{ required: true, message: '用户名不能为空' }], 
    email: [ { required: true, message: '邮箱不能为空' }] 
} 
// 表单8 
const formRef8 = ref() 
const formData8 = reactive({ username: '', gender: '' }) 
const rules8 = { 
    username: [{ required: true, message: '用户名不能为空' }], 
    gender: [{ required: true, message: '请选择性别' }] 
}
// 表单9 
const formRef9 = ref() 
const formData9 = reactive({ username: '', email: '', gender: '' })
const rules9 = { username: [{ 
    required: true, message: '用户名不能为空' }], 
    email: [{ required: true, message: '邮箱不能为空' }], 
    gender: [{ required: true, message: '请选择性别' }]
} 
// 通用方法 
function handleReset(formData, formRef) { 
    Object.keys(formData).forEach(key => { 
        if (Array.isArray(formData[key])) { 
            formData[key] = [] 
        } else { 
            formData[key] = '' 
        } 
    }) 
    formRef?.value?.clearValidate?.() 
} 
function handleSubmit(formRef) { 
    formRef?.value?.validate?.() .then(() => { 
        alert('提交成功！') 
    }) .catch(() => {
         alert('提交失败，请检查输入项！') 
    }) 
}
</script>
