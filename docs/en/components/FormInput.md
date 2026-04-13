# Input
## Brief Introduction
The `input` component is used for users to enter text content. `mengyue-components` has encapsulated it and performed `vitest` testing.
You can use `<MYInput></MYInput>` to implement an input box.

## Basic Usage
Use `modelValue` to bind the value of the input box.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput v-model='inputValue' placeholder='Please enter content' @update:modelValue='forceUpdate' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput v-model="inputValue" placeholder="Please enter content" @update:modelValue="forceUpdate" />
  </template>
</ShowCode>

## Input Type
Use the `type` property to set the type of the input box, such as `text`, `password`, etc.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput type='password' placeholder='Please enter password' @update:modelValue='forceUpdate' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput type="password" placeholder="Please enter password" @update:modelValue="forceUpdate" />
  </template>
</ShowCode>

## Size Control
Use the `width` and `height` properties to customize the dimensions of the input box.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput width='200px' height='40px' placeholder='Custom size' @update:modelValue='forceUpdate' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput width="200px" height="40px" placeholder="Custom size" @update:modelValue="forceUpdate" />
  </template>
</ShowCode>

## State Control
### disabled
Disable the input box:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput disabled placeholder='Disabled state' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput disabled placeholder="Disabled state" />
  </template>
</ShowCode>

### clearable
Show clear button:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div>
    <MYInput 
      v-model='clearableValue'
      clearable 
      placeholder='Clearable content' 
    />
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const clearableValue = ref('')
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInput 
        v-model="clearableValue"
        clearable 
        placeholder="Clearable content" 
        @update:modelValue="forceUpdate"
      />
    </div>
  </template>
</ShowCode>

### showPassword
Toggle password visibility:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput 
    v-model='passwordValue' 
    type='password' 
    showPassword 
    placeholder='Toggle password visibility' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="passwordValue" 
      type="password" 
      showPassword 
      placeholder="Toggle password visibility" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## Input Restrictions
### Length Limit
Use `minLength` and `maxLength` to limit input length:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput 
    v-model='limitValue' 
    maxLength='10' 
    placeholder='Maximum 10 characters' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="limitValue" 
      maxlength="10" 
      placeholder="Maximum 10 characters" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

### Word Count
Use `wordLimit` to display word count:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div>
    <MYInput 
      v-model='wordLimitValue' 
      maxLength='20' 
      wordLimit 
      placeholder='Show word count' 
    />
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInput 
        v-model="wordLimitValue" 
        maxLength="20" 
        wordLimit 
        placeholder="Show word count" 
        @update:modelValue="forceUpdate"
      />
    </div>
  </template>
</ShowCode>

## Custom Colors
### textColor
Custom text color:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput 
    v-model='textColorValue' 
    textColor='#ff0000' 
    placeholder='Red text' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="textColorValue" 
      textColor="#ff0000" 
      placeholder="Red text" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

### placeholderColor
Custom placeholder color:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput 
    v-model='placeholderColorValue' 
    placeholderColor='#409EFF' 
    placeholder='Blue placeholder' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="placeholderColorValue" 
      placeholderColor="#409EFF" 
      placeholder="Blue placeholder" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## Multiline Text
Use `tag="textarea"` for multiline text input:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput 
    v-model='textareaValue' 
    tag='textarea' 
    width='300px' 
    height='100px' 
    placeholder='Multiline text input' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="textareaValue" 
      tag="textarea" 
      width="300px" 
      height="100px" 
      placeholder="Multiline text input" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## Combined Usage
Combine multiple properties:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYInput 
    v-model='combinedValue'
    type='password'
    showPassword
    clearable
    maxLength='15'
    wordLimit
    width='250px'
    textColor='#2c2'
    placeholder='Combined usage example'
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="combinedValue"
      type="password"
      showPassword
      clearable
      maxLength="15"
      wordLimit
      width="250px"
      textColor="#2c2"
      placeholder="Combined usage example"
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## API Reference

### Props

| Parameter        | Description              | Type               | Options                          | Default   |
|------------------|--------------------------|--------------------|----------------------------------|-----------|
| type             | Input type               | string             | `text`/`password` etc.           | `text`    |
| tag              | Tag type                 | string             | `input`/`textarea` etc.          | `input`   |
| width            | Width                    | string \| number   | —                                | `100%`    |
| height           | Height                   | string \| number   | —                                | `30px`    |
| disabled         | Whether disabled         | boolean            | —                                | `false`   |
| clearable        | Whether clearable        | boolean            | —                                | `false`   |
| showPassword     | Whether to show password toggle | boolean      | —                                | `false`   |
| placeholder      | Placeholder text         | string             | —                                | `''`      |
| modelValue       | Bound value              | string             | —                                | `''`      |
| minLength        | Minimum input length     | number             | —                                | —         |
| maxLength        | Maximum input length     | number \| string   | —                                | —         |
| wordLimit        | Whether to show word count | boolean          | —                                | `false`   |
| textColor        | Text color               | string             | Hex or named color               | —         |
| placeholderColor | Placeholder color        | string             | Hex or named color               | —         |

### Type Definitions

```typescript
interface InputProps {
  type?: string;
  tag?: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  placeholder?: string;
  modelValue?: string;
  minLength?: number;
  maxLength?: number | string;
  wordLimit?: boolean;
  textColor?: string;
  placeholderColor?: string;
}
```
<script setup>
import MYInput from '../../../packages/components/input/src/input.vue'
import { ref, watch, nextTick } from "vue";
const inputValue = ref("");
const passwordValue = ref("");
const clearableValue = ref("");
const limitValue = ref("");
const wordLimitValue = ref("");
const textColorValue = ref("");
const placeholderColorValue = ref("");
const textareaValue = ref("");
const combinedValue = ref("");
// Fix reactivity issues in Vitepress
const forceUpdate = () => {
    nextTick(() => { 
        // Force re-render
    });
}; 
// Watch all input value changes to ensure reactive updates
watch([inputValue, passwordValue, clearableValue, limitValue, wordLimitValue, textColorValue, placeholderColorValue, textareaValue, combinedValue], () => { 
    forceUpdate(); 
}); 
</script>