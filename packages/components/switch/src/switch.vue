<template>
    <label class="my-switch" :class="classSwitch" :style="styleSwitch">
        <input type="checkbox" hidden :checked="ischecked" @input="handleChange" :disabled="isDisabled">
        <span class="slider">
            <span v-if="props.text" class="slider-text">{{ props.text }}</span>
        </span>
        <span class="text">
            <slot />
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { switchProps } from './switch';
import '../style/switch.scss'

defineOptions({
    name: 'MYSwitch'
})

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue'])

const ischecked = computed(() => Boolean(props.modelValue))
const isDisabled = computed(() => Boolean(props.disabled))
const handleChange = () => {
    if (isDisabled.value) return
    const newValue = !ischecked.value
    emit('update:modelValue', newValue)
}
const classSwitch = computed(() => {
    const cls = ['my-switch']
    if (props.size) {
        cls.push(`my-switch--${props.size}`)
    }
    if (props.disabled) {
        cls.push(`my-switch--disabled`)
    }
    return cls
})

const styleSwitch = computed(() => {
    if (props.text) {
        return {
            '--my-switch-text': props.text
        }
    }
})
</script>
