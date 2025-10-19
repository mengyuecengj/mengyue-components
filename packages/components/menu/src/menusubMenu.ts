import type { PropType } from "vue";

export const subMenuProps = {
  index: {
    type: String,
    required: true
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: undefined
  },
  teleported: {
    type: Boolean,
    default: false
  }
}