// packages/icons/src/useIconSize.ts
import { computed, useAttrs } from 'vue'

type SizeInput = string | number | undefined

function normalizeSizeValue(v: unknown): string | undefined {
  if (v == null) return undefined
  if (typeof v === 'number') return `${v}px`
  if (typeof v === 'string') {
    const s = v.trim()
    if (/^\d+(\.\d+)?$/.test(s)) return `${s}px`
    return s
  }
  return String(v)
}

/**
 * props: should at least include { size?: string|number, ariaHidden?: boolean|string }
 * returns finalWidth, finalHeight (ComputedRef<string|undefined>) and restAttrs to v-bind
 */
export function useIconSize(props: { size?: SizeInput; ariaHidden?: unknown }) {
  const attrs = useAttrs() as Record<string, unknown>

  const attrWidth = computed(() => normalizeSizeValue(attrs.width))
  const attrHeight = computed(() => normalizeSizeValue(attrs.height))
  const computedSize = computed(() => normalizeSizeValue(props.size ?? '1em'))

  const finalWidth = computed(() => attrWidth.value ?? computedSize.value)
  const finalHeight = computed(() => attrHeight.value ?? computedSize.value)

  // ariaHidden 规范化为 'true' | 'false' | boolean
  const ariaHidden = computed(() => {
    const v = props.ariaHidden
    if (v === true || v === false) return v
    if (typeof v === 'string') {
      const s = v.toLowerCase().trim()
      return s === 'false' ? 'false' : 'true'
    }
    return 'true'
  })

  // 透传除 width/height 的其它 attrs
  const { width, height, ...rest } = attrs
  const restAttrs = rest

  return { finalWidth, finalHeight, ariaHidden, restAttrs }
}
