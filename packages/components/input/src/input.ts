import type { PropType, ExtractPropTypes } from 'vue'

const typeAndTagProps = {
  type: {
    type: String as PropType<string>,
    default: 'text'
  },
  tag: {
    type: String as PropType<string>,
    default: 'input'
  },
  textColor: {
    type: String as PropType<string>,
    default: ''
  }
}

const sizeProps = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '100%'
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: '30px'
  }
}

const stateProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
}

const valueProps = {
  // 在 typeAndTagProps 或 valueProps 中添加
  placeholderColor: {
    type: String as PropType<string>,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
}

const inputLimitProps = {
  minLength: {
    type: Number,
    default: undefined
  },
  maxLength: {
    type: [Number, String] as PropType<number | string>,
    default: undefined
  },
  wordLimit: {
    type: Boolean,
    default: false
  }
}

export const inputProps = {
  ...typeAndTagProps,
  ...sizeProps,
  ...stateProps,
  ...valueProps,
  ...inputLimitProps
}

export type InputProps = ExtractPropTypes<typeof inputProps>