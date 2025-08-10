// import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
// import type { CSSProperties, Ref } from 'vue'

// export type DropdownTrigger = 'click' | 'hover'
// export type DropdownPlacement = 'bottom-end' | 'bottom-start' | 'bottom'

// export interface DropdownProps {
//   trigger: DropdownTrigger
//   placement?: DropdownPlacement
// }

// export const useDropdown = (props: DropdownProps): {
//   visible: Ref<boolean>
//   triggerRef: Ref<HTMLElement | null>
//   menuRef: Ref<HTMLElement | null>
//   menuStyles: CSSProperties
//   handleTriggerClick: () => void
//   handleMouseEnter: () => void
//   handleMouseLeave: () => void
//   handleMenuMouseEnter: () => void
//   handleMenuMouseLeave: () => void
// } => {
//   const visible = ref(false)
//   const triggerRef = ref<HTMLElement | null>(null)
//   const menuRef = ref<HTMLElement | null>(null)

//   const menuStyles = reactive<CSSProperties>({
//     position: 'absolute',
//     top: '0px',
//     left: '0px',
//     minWidth: '0px',
//     zIndex: 999,
//   })

//   let hoverTimeout: number | null = null

//   function updatePosition() {
//     if (!triggerRef.value || !menuRef.value) return

//     const triggerRect = triggerRef.value.getBoundingClientRect()
//     const menu = menuRef.value

//     menuStyles.minWidth = `100px`
//     menuStyles.maxWidth = `300px`
//     menuStyles.width = '200px'

//     if (props.placement === 'bottom-end') {
//       menuStyles.top = `${triggerRect.bottom + window.scrollY}px`
//       menuStyles.left = `${triggerRect.right - menu.offsetWidth + window.scrollX}px`
//     } else {
//       menuStyles.top = `${triggerRect.bottom + window.scrollY}px`
//       menuStyles.left = `${triggerRect.left + window.scrollX}px`
//     }
//   }

//   function showMenu() {
//     visible.value = true
//     nextTick(() => updatePosition())
//   }

//   function hideMenu() {
//     visible.value = false
//   }

//   function toggleMenu() {
//     visible.value = !visible.value
//     if (visible.value) nextTick(() => updatePosition())
//   }

//   function handleTriggerClick() {
//     if (props.trigger === 'click') toggleMenu()
//   }

//   function handleMouseEnter() {
//     if (props.trigger === 'hover') {
//       if (hoverTimeout) clearTimeout(hoverTimeout)
//       showMenu()
//     }
//   }

//   function handleMouseLeave() {
//     if (props.trigger === 'hover') {
//       hoverTimeout = window.setTimeout(() => hideMenu(), 200)
//     }
//   }

//   function handleMenuMouseEnter() {
//     if (hoverTimeout) clearTimeout(hoverTimeout)
//   }

//   function handleMenuMouseLeave() {
//     if (props.trigger === 'hover') {
//       hoverTimeout = window.setTimeout(() => hideMenu(), 200)
//     }
//   }

//   function onClickOutside(event: MouseEvent) {
//     if (!triggerRef.value || !menuRef.value) return
//     const target = event.target as Node
//     if (!triggerRef.value.contains(target) && !menuRef.value.contains(target)) {
//       hideMenu()
//     }
//   }

//   onMounted(() => {
//     document.addEventListener('click', onClickOutside)
//   })

//   onBeforeUnmount(() => {
//     document.removeEventListener('click', onClickOutside)
//   })

//   return {
//     visible,
//     triggerRef,
//     menuRef,
//     menuStyles,
//     handleTriggerClick,
//     handleMouseEnter,
//     handleMouseLeave,
//     handleMenuMouseEnter,
//     handleMenuMouseLeave,
//   }
// }

