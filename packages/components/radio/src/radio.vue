<template>
    <label :class="radioClass">
        <span class="my-radio__input">
            <!-- 只把原生属性 v-bind 到 input 上 -->
            <input v-bind="attrs" type="radio" class="my-radio__original" :value="props.value" :checked="ischecked"
                :disabled="isDisabled" @change="handleChange" aria-hidden="true" />
            <span class="my-radio__inner" :style="radioStyle"></span>
        </span>
        <span class="my-radio__label" :style="radioStyle">
            <slot />
        </span>
    </label>
</template>

<script setup lang="ts">
import { useRadio } from './radioComputed'
import { radioProps } from './radio'
import '../style/radio.scss'

defineOptions({
    name: 'MYRadio',
})

const props = defineProps(radioProps)
const emit = defineEmits(['update:modelValue', 'change'])

const { attrs, isDisabled, ischecked, handleChange, radioClass, radioStyle } = useRadio(props, emit)
</script>