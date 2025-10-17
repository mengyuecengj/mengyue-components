import type { PropType } from 'vue'
import type { TreeProps, TreeNodesArray, Size, ExpandedKeys } from './type'

export const treeSelectProps = {
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | (string | number)[] | null>,
    default: null
  },
  data: {
    type: Array as PropType<TreeNodesArray>,
    default: () => []
  },
  props: {
    type: Object as PropType<TreeProps>,
    default: () => ({})
  },
  multiple: {
    type: Boolean,
    default: false
  },
  filterable: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  defaultExpanded: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<Size>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: String,
    default: ''
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  class: {
    type: String,
    default: ''
  },
  style: {
    type: [String, Object] as PropType<string | Record<string, string | number>>,
    default: ''
  },
  defaultExpandedKeys: {
    type: Array as PropType<ExpandedKeys>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => []
  },
  textColor: {
    type: String,
    default: '#606266'
  },
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  activeColor: {
    type: String,
    default: '#409eff'
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '100%'
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: 'auto'
  },
  inputHeight: {
    type: [String, Number] as PropType<string | number>,
    default: '32px'
  }
}