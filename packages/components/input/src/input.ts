import { PropType, ExtractPropTypes } from 'vue'

// 输入类型与标签
const typeAndTagProps = {
  type: {
    type: String as PropType<string>,
    default: 'text'
  },
  tag: {
    type: String as PropType<string>,
    default: 'input'
  }
}

// 尺寸相关
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

// 状态控制
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

// 占位与绑定值
const valueProps = {
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
}

// 输入限制相关
const inputLimitProps = {
  minlength: {
    type: Number,
    default: undefined
  },
  maxlength: {
    type: [Number, String] as PropType<number | string>,
    default: undefined
  },
  wordLimit: {
    type: Boolean,
    default: false
  }
}

// 合并所有属性
export const inputProps = {
  ...typeAndTagProps,
  ...sizeProps,
  ...stateProps,
  ...valueProps,
  ...inputLimitProps
}

export type InputProps = ExtractPropTypes<typeof inputProps>