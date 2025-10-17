export interface Props {
  size?: string | number
  color?: string
  offsetX?: string | number
  offsetY?: string | number
}

withDefaults(defineProps<Props>(), {
  size: '1em',
  color: 'currentColor',
  offsetX: 0,
  offsetY: 0
})