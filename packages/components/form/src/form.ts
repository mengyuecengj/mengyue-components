import type { PropType } from 'vue'
import type { FormRule } from './type'

type FormModelValue = Record<string, unknown>
type FormRules = Record<string, FormRule[]>
type LabelWidth = string | number
type FormSize = 'large' | 'medium' | 'small' | 'mini'

export const formProps = {
  modelValue: {
    type: Object as PropType<FormModelValue>,
    required: true,
    default: () => ({})
  },
  rules: {
    type: Object as PropType<FormRules>,
    default: () => ({})
  },
  labelWidth: {
    type: [String, Number] as PropType<LabelWidth>,
    default: 'auto'
  },
  inline: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<FormSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const