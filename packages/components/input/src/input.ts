import { PropType, Component, ExtractPropTypes } from 'vue'

// 输入类型与标签
const typeAndTagProps = {
  type: {
    type: String as PropType<string | Component>,
    default: 'text'
  },
  tag: {
    type: [String, Object] as PropType<string | Component>,
    default: 'input'
  }
}

// 尺寸相关
const sizeProps = {
  width: {
    type: [String, Number] as PropType<string | Component>,
    default: '100%'
  },
  height: {
    type: [String, Number] as PropType<string | Component>,
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
    type: [Number, String],
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

type InputPropsWithDynamic = ExtractPropTypes<typeof inputProps> & {
    [key: string]: string | number | boolean | undefined
}
// export type BorderProps = ExtractPropTypes<typeof borderProps>;
export type InputProps = InputPropsWithDynamic