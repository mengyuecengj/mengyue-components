# Form

## Brief Introduction
The Form component is used to collect user input data and perform validation.<br />
The form can be implemented using two tags: `<MYForm></MYForm>` or `<MYForm />` together with `<MYForm-item></MYForm-item>` or `<MYForm-item />`.

## Basic Usage
Use `v-model` to bind form data and the `rules` prop to set validation rules.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>Reset</MYButton>
            <MYButton type='primary' @click='handleSubmit'>Submit</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef1" :modelValue="formData1" :rules="rules1" @update:modelValue="handleFormUpdate1">
        <MYForm-item label="Username" prop="username">
            <MYInput :modelValue="formData1.username" @update:modelValue="val => formData1.username = val" placeholder="Please enter username" />
        </MYForm-item>
        <MYForm-item>
            <MYButton type="info" @click="handleReset1">Reset</MYButton>
            <MYButton type="primary" @click="handleSubmit1">Submit</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Multiple Form Controls
The form supports various control types including input, switch, radio, checkbox, etc.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item label='Enabled' prop='enabled'>
            <MYSwitch v-model='formData.enabled' />
        </MYForm-item>
        <MYForm-item label='Gender' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>Male</MYRadio>
                <MYRadio value='2'>Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item label='Hobbies' prop='hobbies'>
            <MYCheckbox-group v-model='formData.hobbies'>
                <MYCheckbox value='reading'>Reading</MYCheckbox>
                <MYCheckbox value='gaming'>Gaming</MYCheckbox>
                <MYCheckbox value='coding'>Coding</MYCheckbox>
            </MYCheckbox-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>Reset</MYButton>
            <MYButton type='primary' @click='handleSubmit'>Submit</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef2" :modelValue="formData2" :rules="rules2" @update:modelValue="handleFormUpdate2">
        <MYForm-item label="Username" prop="username">
            <MYInput :modelValue="formData2.username" @update:modelValue="val => formData2.username = val" placeholder="Please enter username" />
        </MYForm-item>
        <MYForm-item label="Enabled" prop="enabled">
            <MYSwitch :modelValue="formData2.enabled" @update:modelValue="val => formData2.enabled = val" />
        </MYForm-item>
        <MYForm-item label="Gender" prop="gender">
            <MYRadio-group :modelValue="formData2.gender" @update:modelValue="val => formData2.gender = val">
                <MYRadio value="1">Male</MYRadio>
                <MYRadio value="2">Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item label="Hobbies" prop="hobbies">
            <MYCheckbox-group :modelValue="formData2.hobbies" @update:modelValue="val => formData2.hobbies = val">
                <MYCheckbox value="reading">Reading</MYCheckbox>
                <MYCheckbox value="gaming">Gaming</MYCheckbox>
                <MYCheckbox value="coding">Coding</MYCheckbox>
            </MYCheckbox-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type="info" @click="handleReset2">Reset</MYButton>
            <MYButton type="primary" @click="handleSubmit2">Submit</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Inline Layout
Use the `inline` prop to set the form to an inline layout.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' inline>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Username' />
        </MYForm-item>
        <MYForm-item label='Email' prop='email'>
            <MYInput v-model='formData.email' placeholder='Email' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='primary' @click='handleSubmit'>Search</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef3" :modelValue="formData3" :rules="rules3" inline @update:modelValue="handleFormUpdate3">
        <MYForm-item label="Username" prop="username">
            <MYInput :modelValue="formData3.username" @update:modelValue="val => formData3.username = val" placeholder="Username" />
        </MYForm-item>
        <MYForm-item label="Email" prop="email">
            <MYInput :modelValue="formData3.email" @update:modelValue="val => formData3.email = val" placeholder="Email" />
        </MYForm-item>
        <MYForm-item>
            <MYButton type="primary" @click="handleSubmit3">Search</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Custom Label Width
Use the `labelWidth` prop to customize the width of labels.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' labelWidth='120px'>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item label='Email Address' prop='email'>
            <MYInput v-model='formData.email' placeholder='Please enter email' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef4" :modelValue="formData4" :rules="rules4" labelWidth="120px" @update:modelValue="handleFormUpdate4">
        <MYForm-item label="Username" prop="username">
            <MYInput :modelValue="formData4.username" @update:modelValue="val => formData4.username = val" placeholder="Please enter username" />
        </MYForm-item>
        <MYForm-item label="Email Address" prop="email">
            <MYInput :modelValue="formData4.email" @update:modelValue="val => formData4.email = val" placeholder="Please enter email" />
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Different Sizes
Use the `size` prop to set the form size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='small'>
        <MYForm-item label='Small Form' prop='username'>
            <MYInput v-model='formData.username' placeholder='Small size' />
        </MYForm-item>
    </MYForm>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='large' style='margin-top: 20px'>
        <MYForm-item label='Large Form' prop='username'>
            <MYInput v-model='formData.username' placeholder='Large size' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef5" :modelValue="formData5" :rules="rules5" size="small" @update:modelValue="handleFormUpdate5">
        <MYForm-item label="Small Form" prop="username">
            <MYInput :modelValue="formData5.username" @update:modelValue="val => formData5.username = val" placeholder="Small size" />
        </MYForm-item>
    </MYForm>
    <MYForm ref="formRef6" :modelValue="formData6" :rules="rules5" size="large" style="margin-top: 20px" @update:modelValue="handleFormUpdate6">
        <MYForm-item label="Large Form" prop="username">
            <MYInput :modelValue="formData6.username" @update:modelValue="val => formData6.username = val" placeholder="Large size" />
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Validation Trigger
Use the `validateTrigger` prop to set when validation should be triggered.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='Real-time Validation' prop='username' validateTrigger='change'>
            <MYInput v-model='formData.username' placeholder='Validates on input' />
        </MYForm-item>
        <MYForm-item label='On-blur Validation' prop='email' validateTrigger='blur'>
            <MYInput v-model='formData.email' placeholder='Validates on blur' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef7" :modelValue="formData7" :rules="rules7" @update:modelValue="handleFormUpdate7">
        <MYForm-item label="Real-time Validation" prop="username" validateTrigger="change">
            <MYInput :modelValue="formData7.username" @update:modelValue="val => formData7.username = val" placeholder="Validates on input" />
        </MYForm-item>
        <MYForm-item label="On-blur Validation" prop="email" validateTrigger="blur">
            <MYInput :modelValue="formData7.email" @update:modelValue="val => formData7.email = val" placeholder="Validates on blur" />
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Disabled State
Use the `disabled` prop to disable the entire form.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' disabled>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Disabled state' />
        </MYForm-item>
        <MYForm-item label='Gender' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>Male</MYRadio>
                <MYRadio value='2'>Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()"
>
  <template #demo>
    <MYForm ref="formRef8" :modelValue="formData8" :rules="rules8" disabled @update:modelValue="handleFormUpdate8">
        <MYForm-item label="Username" prop="username">
            <MYInput :modelValue="formData8.username" @update:modelValue="val => formData8.username = val" placeholder="Disabled state" />
        </MYForm-item>
        <MYForm-item label="Gender" prop="gender">
            <MYRadio-group :modelValue="formData8.gender" @update:modelValue="val => formData8.gender = val">
                <MYRadio value="1">Male</MYRadio>
                <MYRadio value="2">Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## Combined Usage
Finally, here is a combination of multiple APIs to create a complete form:

<ShowCode
  title="Code Demo"
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
        <MYForm-item label='Username' prop='username' validateTrigger='blur'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item label='Email' prop='email' validateTrigger='change'>
            <MYInput v-model='formData.email' placeholder='Please enter email' />
        </MYForm-item>
        <MYForm-item label='Gender' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>Male</MYRadio>
                <MYRadio value='2'>Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>Reset</MYButton>
            <MYButton type='primary' @click='handleSubmit'>Submit</MYButton>
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
        <MYForm-item label="Username" prop="username" validateTrigger="blur">
            <MYInput :modelValue="formData9.username" @update:modelValue="val => formData9.username = val" placeholder="Please enter username" />
        </MYForm-item>
        <MYForm-item label="Email" prop="email" validateTrigger="change">
            <MYInput :modelValue="formData9.email" @update:modelValue="val => formData9.email = val" placeholder="Please enter email" />
        </MYForm-item>
        <MYForm-item label="Gender" prop="gender">
            <MYRadio-group :modelValue="formData9.gender" @update:modelValue="val => formData9.gender = val">
                <MYRadio value="1">Male</MYRadio>
                <MYRadio value="2">Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type="info" @click="handleReset9">Reset</MYButton>
            <MYButton type="primary" @click="handleSubmit9">Submit</MYButton>
        </MYForm-item>
    </MYForm>
  </template>
</ShowCode>

## API Reference

### Form Props

| Prop         | Description                    | Type                | Options                              | Default    |
|--------------|--------------------------------|---------------------|--------------------------------------|------------|
| modelValue   | Form data                      | object              | —                                    | `{}`       |
| rules        | Validation rules               | object              | —                                    | `{}`       |
| labelWidth   | Label width                    | string \| number    | Supports pixel values and `auto`     | `'auto'`   |
| inline       | Whether to use inline layout   | boolean             | —                                    | `false`    |
| size         | Form size                      | string              | `large`/`medium`/`small`/`mini`      | `'medium'` |
| disabled     | Whether to disable the form    | boolean             | —                                    | `false`    |

### FormItem Props

| Prop              | Description                    | Type                | Options                              | Default    |
|-------------------|--------------------------------|---------------------|--------------------------------------|------------|
| label             | Label text                     | string              | —                                    | `''`       |
| prop              | Field name                     | string              | —                                    | `''`       |
| validateTrigger   | Validation trigger             | string              | `blur`/`change`                      | `'blur'`   |
| rules             | Validation rules               | object              | —                                    | `{}`       |
| labelWidth        | Label width                    | string \| number    | —                                    | —          |
| size              | Form item size                 | string              | `large`/`medium`/`small`/`mini`      | `'medium'` |
| inline            | Whether to use inline layout   | boolean             | —                                    | `false`    |
| disabled          | Whether to disable             | boolean             | —                                    | `false`    |

### Form Methods

| Method Name      | Description                    | Parameters                       |
|------------------|--------------------------------|----------------------------------|
| validate         | Validate the entire form       | —                                |
| validateField    | Validate a specific field      | `prop: string`                   |
| resetFields      | Reset the form                 | —                                |
| clearValidate    | Clear validation state         | `field?: string`                 |

### Type Definitions

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
import MYForm from '../../../packages/components/form/src/form.vue' 
import MYFormItem from '../../../packages/components/form/src/formItem.vue' 
import MYInput from '../../../packages/components/input/src/input.vue' 
import MYButton from '../../../packages/components/button/src/button.vue' 
import MYSwitch from '../../../packages/components/switch/src/switch.vue' 
import MYRadio from '../../../packages/components/radio/src/radio.vue' 
import MYRadioGroup from '../../../packages/components/radio/src/radio-group.vue' 
import MYCheckbox from '../../../packages/components/checkbox/src/checkbox.vue' 
import MYCheckboxGroup from '../../../packages/components/checkbox/src/checkbox-group.vue' 
// Form 1 
const formRef1 = ref() 
const formData1 = reactive({ username: '' }) 
const rules1 = { username: [ { required: true, message: 'Username is required' } ] } 
// Form 2 
const formRef2 = ref() 
const formData2 = reactive({ username: '', enabled: false, gender: '1', hobbies: [] }) 
const rules2 = { 
    username: [{ required: true, message: 'Username is required' }], 
    gender: [{ required: true, message: 'Please select gender' }],
    hobbies: [{ required: true, message: 'Please select at least one hobby' }]
} 
// Form 3 
const formRef3 = ref() 
const formData3 = reactive({ username: '', email: '' }) 
const rules3 = { 
    username: [{ required: true, message: 'Username is required' }], 
    email: [{ required: true, message: 'Email is required' }]
} 
// Form 4
const formRef4 = ref() 
const formData4 = reactive({ username: '', email: '' }) 
const rules4 = { 
    username: [{ required: true, message: 'Username is required' }], 
    email: [{ required: true, message: 'Email is required' }] 
} 
// Form 5 & 6 
const formRef5 = ref() 
const formRef6 = ref() 
const formData5 = reactive({ username: '' }) 
const formData6 = reactive({ username: '' })
const rules5 = { username: [{ required: true, message: 'Username is required' }] } 
// Form 7 
const formRef7 = ref() 
const formData7 = reactive({ username: '', email: '' }) 
const rules7 = { 
    username: [{ required: true, message: 'Username is required' }], 
    email: [ { required: true, message: 'Email is required' }] 
} 
// Form 8 
const formRef8 = ref() 
const formData8 = reactive({ username: '', gender: '' }) 
const rules8 = { 
    username: [{ required: true, message: 'Username is required' }], 
    gender: [{ required: true, message: 'Please select gender' }] 
}
// Form 9 
const formRef9 = ref() 
const formData9 = reactive({ username: '', email: '', gender: '' })
const rules9 = { username: [{ 
    required: true, message: 'Username is required' }], 
    email: [{ required: true, message: 'Email is required' }], 
    gender: [{ required: true, message: 'Please select gender' }]
} 
// Common methods 
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
        alert('Submit successful!') 
    }) .catch(() => {
         alert('Submit failed! Please check your input.')
    }) 
}
</script>
