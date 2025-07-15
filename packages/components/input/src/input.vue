<template>
    <div class="my-input-wrapper" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <component
            ref="inputRef"
            :is="props.tag" 
            v-bind="componentArrts" 
            :class="inputClass" 
            :style="inputStyle" 
            :value="innerValue"
            @input="handleInput"
        >
            <template v-if="props.tag !== 'input' && props.tag !== 'textarea'">
                <slot />
            </template>
        </component>
        <span class="my-input__clear" v-if="props.clearable && showClear" @click="clearText">
            <close />
        </span>
    </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import { inputProps } from './input'
import { useClassComputed } from '../../../hooks/useClassComputed'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import type { ExtractPropTypes } from 'vue'
import close from './close.vue'
import '../style/input.scss'

defineOptions({ name: 'MYInput' })

// clearable about
// Mouse hover control
// control show clear svg
const hovering = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const innerValue = ref("")
const showClear = computed(() => {
    return !props.disabled && hovering.value && innerValue.value.length > 0
})
const handleInput = (e: Event) => innerValue.value = (e.target as HTMLInputElement).value;
const clearText = () => {
    innerValue.value = ""
    inputRef.value?.focus()
}

// Define using runtime props
const props = defineProps(inputProps)

// dervice props types
type InputProps = ExtractPropTypes<typeof inputProps>

const { inputClass, inputStyle } = useInputComputed(props)

function useInputComputed(props: InputProps): {
    inputClass: ComputedRef<string[]>
    inputStyle: ComputedRef<CSSProperties>
} {
    const inputClass = useClassComputed<InputProps>({
        baseClass: 'my-input',
        flagClasses: {
            disabled: props.disabled,
        }
    })

    const inputStyle = useStyleComputed<InputProps>(props, {
        propToStyleMap: {
            width: 'width',
            height: 'height',
        }
    })

    return { inputClass, inputStyle }
}

// disabled MYInput anything hover active foucs
const componentArrts = computed(() => {
    if (props.disabled) {
        return {
            placeholder: props.placeholder,
            disabled: props.disabled || undefined,
            readonly: true || undefined,
            tabindex: props.disabled ? -1 : undefined
        }
    }
    return {}
})

</script>
