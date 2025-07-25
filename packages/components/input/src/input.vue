<template>
    <div class="my-input-wrapper" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <component ref="inputRef" :is="props.tag" v-bind="componentArrts" :class="inputClass" :style="inputStyle"
            :value="props.modelValue" @input="handleInput" @blur="handleBlur">
            <template v-if="props.tag !== 'input' && props.tag !== 'textarea'">
                <slot />
            </template>
        </component>
        <span class="my-input__clear" v-if="props.clearable && showClear" @click="clearText">
            <close />
        </span>
        <span class="my-input__password"
            v-if="props.showPassword && (props.tag === 'input' || props.tag === 'textarea')" @click="togglePassword">
            <viewsvgrepo v-if="showView" />
            <viewhide v-else />
        </span>
        <span v-if="props.wordLimit && props.maxlength" class="my-input__word-limit"
            :class="{ 'near-limit': isNearLimit }">
            {{ currentLength }}/{{ props.maxlength }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ComponentPublicInstance, computed, ref } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import { inputProps } from './input'
import { useClassComputed } from '../../../hooks/useClassComputed'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import type { ExtractPropTypes } from 'vue'
import close from './close.vue'
import viewsvgrepo from './viewsvgrepo.vue'
import viewhide from './viewHide.vue'
import '../style/input.scss'
import { inject, watch } from 'vue'

const formItemContext = inject<any>('myFormItemContext', null)

defineOptions({ name: 'MYInput' })

const showView = ref(false)
const hovering = ref(false)
const inputRef = ref<ComponentPublicInstance | HTMLInputElement | HTMLTextAreaElement | null>(null)

const props = defineProps(inputProps)
const emit = defineEmits(['update:showPassword', 'update:modelValue'])

const currentLength = computed(() => props.modelValue.length)
const isNearLimit = computed(() => {
    if (!props.maxlength) return false
    return currentLength.value >= 0.8 * Number(props.maxlength)
})
const showClear = computed(() => {
    return !props.disabled && hovering.value && props.modelValue.length > 0
})

const handleInput = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    emit('update:modelValue', value)

    // 在输入时触发 FormItem 的校验（如果存在）
    formItemContext?.validate?.('change')
}

const handleBlur = () => {
  formItemContext?.validate?.('blur')
}


const clearText = () => {
    emit('update:modelValue', '')
    const el = getInputElement()
    el?.focus()
}

const getInputElement = (): HTMLInputElement | HTMLTextAreaElement | null => {
    if (!inputRef.value) return null
    const el = '$el' in inputRef.value ? inputRef.value.$el : inputRef.value
    return el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement
        ? el
        : el?.querySelector('input, textarea') || null
}

const togglePassword = () => {
    showView.value = !showView.value
    emit('update:showPassword', showView.value)
}

const componentArrts = computed(() => {
    // 添加tag类型校验
    if (typeof props.tag !== 'string' && typeof props.tag !== 'object') {
        console.error('Invalid tag type:', props.tag)
        return {}
    }
    const attrs: Record<string, any> = {
        placeholder: props.placeholder,
        ...(props.maxlength ? { maxlength: props.maxlength } : {}),
        ...(props.minlength ? { minlength: props.minlength } : {}),
        ...(props.disabled ? { disabled: true } : {})
    }

    if (props.tag === 'input') {
        attrs.type = props.showPassword
            ? (showView.value ? 'text' : 'password')
            : props.type
    }

    return attrs
})

const { inputClass, inputStyle } = useInputComputed(props)

function useInputComputed(props: ExtractPropTypes<typeof inputProps>): {
    inputClass: ComputedRef<string[]>
    inputStyle: ComputedRef<CSSProperties>
} {
    const inputClass = useClassComputed({
        baseClass: 'my-input',
        flagClasses: { disabled: props.disabled }
    })
    const inputStyle = useStyleComputed(props, {
        propToStyleMap: { width: 'width', height: 'height' }
    })
    return { inputClass, inputStyle }
}

watch(() => props.modelValue, () => {
  if (formItemContext?.clearValidate) {
    formItemContext.clearValidate()
  }
})
</script>
