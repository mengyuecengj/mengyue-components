<!-- <template>
    <div 
        class="my-input-wrapper" 
        @mouseenter="hovering = true" 
        @mouseleave="hovering = false"
    >
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
        <span 
            class="my-input__password" 
            v-if="props.clearable && props.showPassword && showClear"
            @click="togglePassword"
        >
            <viewsvgrepo v-if="showView" />
            <viewhide v-else />
        </span>
        <span 
            v-if="props.wordLimit && props.maxlength" 
            class="my-input__word-limit"
            :class="{ 'near-limit': isNearLimit}">
            {{ currentLength }}/{{ props.maxlength }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ComponentPublicInstance, computed, ref, onMounted } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import { inputProps } from './input'
import { useClassComputed } from '../../../hooks/useClassComputed'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import type { ExtractPropTypes } from 'vue'
import close from './close.vue'
import viewsvgrepo from './viewsvgrepo.vue'
import viewhide from './viewHide.vue'
import '../style/input.scss'

defineOptions({ name: 'MYInput' })

const showView = ref(false)
const emit = defineEmits(['update:showPassword', 'update:modelValue'])
const hovering = ref(false)
const inputRef = ref<ComponentPublicInstance | HTMLElement | null>(null)
const innerValue = ref("")
const currentLength = computed(() => props.modelValue.length);

const isNearLimit = computed(() => {
    if (!props.maxlength) return false;
    return currentLength.value >= 0.8 * Number(props.maxlength)
})

const showClear = computed(() => {
    return !props.disabled && hovering.value && props.modelValue.length > 0
})

// const handleInput = (e: Event) => {
//     innerValue.value = (e.target as HTMLInputElement).value
//     const value = (e.target as HTMLInputElement).value
//     if (props.maxlength && value.length > Number(props.maxlength)) {
//         return
//     }
// };
const handleInput = (e: Event) => {
    const inputEl = e.target as HTMLInputElement;
    const value = inputEl.value;
    emit('update:modelValue', (e.target as HTMLInputElement).value)
    
    if (props.maxlength && value.length > Number(props.maxlength)) {
        // 阻止输入行为
        e.preventDefault();
        // 恢复之前的值
        inputEl.value = innerValue.value;
        return;
    }
    innerValue.value = value;
};


const clearText = () => {
    innerValue.value = ""
    const el = getInputElement()
    el?.focus()
}

// 获取实际的 input 元素
const getInputElement = (): HTMLInputElement | HTMLTextAreaElement | null => {
    if (!inputRef.value) return null

    // 如果是组件实例，获取其根元素
    const el = '$el' in inputRef.value
        ? inputRef.value.$el
        : inputRef.value

    // 如果是 textarea 或 input 元素
    return el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement
        ? el
        : el?.querySelector('input, textarea') || null
}

const togglePassword = () => {
    showView.value = !showView.value
    emit('update:showPassword', showView.value)

    const el = getInputElement()
    if (el && (props.tag === 'input' || props.tag === 'textarea')) {
        (el as { type: string }).type = showView.value ? 'text' : 'password'
    }
}

// 初始化时设置正确的 input type
onMounted(() => {
    if (props.showPassword && (props.tag === 'input' || props.tag === 'textarea')) {
        const el = getInputElement()
        if (el) {
            (el as { type: string }).type = showView.value ? 'text' : 'password'
        }
    }
})

const props = defineProps(inputProps)
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

const componentArrts = computed(() => {
    const attrs: Record<string, any> = {
        placeholder: props.placeholder,
        ...(props.disabled ? {
            disabled: true,
            readonly: true,
            tabindex: -1
        } : {})
    }

    // 如果是密码输入框且不是显示状态，设置 type="password"
    if (props.showPassword && props.tag === 'input' && !showView.value) {
        attrs.type = 'password'
    }

    return attrs
})
</script> -->
