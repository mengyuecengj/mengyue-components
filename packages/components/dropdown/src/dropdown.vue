<!-- <template>
  <div ref="triggerRef" class="my-dropdown" @click="handleTriggerClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <slot />
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="visible"
          ref="menuRef"
          class="my-dropdown-menu-wrapper"
          :style="menuStyles"
          @mouseenter="handleMenuMouseEnter"
          @mouseleave="handleMenuMouseLeave"
        >
          <slot name="dropdown" />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useDropdown } from './dropdown'
import '../style/dropdown.scss'
import { DropdownProps } from './dropdown';

defineOptions({
    name: 'MYDropdown'
})
// const props = defineProps({
//   trigger: {
//     type: String,
//     default: 'click', // 'click' | 'hover'
//   },
//   placement: {
//     type: String,
//     default: 'bottom-start', // 目前支持 'bottom-start' | 'bottom-end'
//   }
// })
const props = defineProps<DropdownProps>()
const {
  visible,
  triggerRef,
  menuRef,
  menuStyles,
  handleTriggerClick,
  handleMouseEnter,
  handleMouseLeave,
  handleMenuMouseEnter,
  handleMenuMouseLeave,
} = useDropdown(props)
</script> -->

<!-- src/components/dropdown/Dropdown.vue -->
<template>
  <div
    class="m-dropdown"
    :class="{ 'is-disabled': disabled }"
    ref="rootRef"
    @keydown.prevent.stop="onRootKeydown"
  >
    <!-- trigger area -->
    <div
      class="m-dropdown__trigger"
      ref="triggerRef"
      @click="onTriggerClick"
      @mouseenter="onTriggerMouseEnter"
      @mouseleave="onTriggerMouseLeave"
    >
      <!-- split button support -->
      <template v-if="splitButton">
        <div class="m-split">
          <button
            class="m-btn"
            :class="['m-btn--' + (type || 'default'), sizeClass]"
            :disabled="disabled"
            @click.stop="onPrimaryClick"
          >
            <slot name="default">操作</slot>
          </button>
          <button
            class="m-split__caret"
            :disabled="disabled"
            @click.stop="toggle()"
            aria-haspopup="menu"
            :aria-expanded="isVisible"
          >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1l6 6 6-6" stroke="#374151" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </template>

      <!-- normal trigger slot (button-like) -->
      <template v-else>
        <button
          :class="['m-btn', 'm-btn--' + (type || 'default'), sizeClass]"
          :disabled="disabled"
          aria-haspopup="menu"
          :aria-expanded="isVisible"
        >
          <slot>下拉</slot>
          <span style="margin-left:8px;display:inline-flex"><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </button>
      </template>
    </div>

    <!-- menu: teleported or inline -->
    <Teleport v-if="teleported" to="body">
      <div
        v-show="isVisible"
        :class="['m-dropdown__menu', isVisible ? 'm-visible' : 'm-hidden', popperClass]"
        ref="menuRef"
        :style="menuStyle"
        role="menu"
        @mouseenter="onMenuMouseEnter"
        @mouseleave="onMenuMouseLeave"
      >
        <slot name="dropdown">
          <slot />
        </slot>
      </div>
    </Teleport>

    <div
      v-else
      v-show="isVisible"
      :class="['m-dropdown__menu', isVisible ? 'm-visible' : 'm-hidden', popperClass]"
      ref="menuRef"
      :style="menuStyle"
      role="menu"
      @mouseenter="onMenuMouseEnter"
      @mouseleave="onMenuMouseLeave"
    >
      <slot name="dropdown">
        <slot />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, provide } from 'vue';
import { useDropdown, type UseDropdownOptions } from './dropdownComputed';
import '../style/dropdown.scss';

defineOptions({
  name: 'MYDropdown',
});

const props = defineProps({
  // 基本 props（覆盖你需要的大部分）
  type: { type: String, default: 'default' }, // default, primary
  size: { type: String, default: 'md' }, // sm, md, lg
  buttonProps: { type: Object, default: () => ({}) },
  maxHeight: { type: [String, Number], default: null },
  splitButton: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  placement: { type: String, default: 'bottom' },
  trigger: { type: String as () => UseDropdownOptions['trigger'], default: 'hover' },
  triggerKeys: { type: Array as any, default: () => ['Enter', ' ', 'ArrowDown', 'NumpadEnter'] },
  hideOnClick: { type: Boolean, default: true },
  showTimeout: { type: Number, default: 150 },
  hideTimeout: { type: Number, default: 150 },
  role: { type: String, default: 'menu' },
  tabindex: { type: [String, Number], default: 0 },
  popperClass: { type: String, default: '' },
  popperOptions: { type: Object as any, default: () => ({}) }, // reserved
  teleported: { type: Boolean, default: true },
  persistent: { type: Boolean, default: true },
});

const emit = defineEmits(['command', 'visible-change', 'click']);

// init hook with options
const {
  visible,
  triggerEl,
  menuEl,
  menuStyle,
  open,
  close,
  toggle,
  onTriggerEnter,
  onTriggerLeave,
  onMenuEnter,
  onMenuLeave,
} = useDropdown({
  trigger: props.trigger as UseDropdownOptions['trigger'],
  showTimeout: props.showTimeout,
  hideTimeout: props.hideTimeout,
  placement: props.placement as any,
  maxHeight: props.maxHeight as any,
  disabled: props.disabled,
  teleported: props.teleported,
  persistent: props.persistent,
  triggerKeys: props.triggerKeys,
  hideOnClick: props.hideOnClick,
  popperOptions: props.popperOptions,
});

// refs to bind DOM
const triggerRef = triggerEl;
const menuRef = menuEl;
const rootRef = ref<HTMLElement | null>(null);

// computed
const isVisible = computed(() => visible.value);
const sizeClass = computed(() => {
  if (props.size === 'sm' || props.size === 'small') return 'm-btn--sm';
  if (props.size === 'lg' || props.size === 'large') return 'm-btn--lg';
  return 'm-btn--md';
});

// provide selection for DropdownItem
provide('m-dropdown-context', {
  select: (command: any) => {
    emit('command', command);
    if (props.hideOnClick) close();
  },
  close,
});

function onTriggerClick(e?: MouseEvent) {
  e?.stopPropagation();
  if (props.disabled) return;
  if (props.trigger === 'click') toggle();
  emit('click', e);
}
function onPrimaryClick(e?: MouseEvent) {
  e?.stopPropagation();
  if (props.disabled) return;
  // by default primary action emits click event
  emit('click', e);
}

function onTriggerMouseEnter() { onTriggerEnter(); }
function onTriggerMouseLeave() { onTriggerLeave(); }
function onMenuMouseEnter() { onMenuEnter(); }
function onMenuMouseLeave() { onMenuLeave(); }
function onRootKeydown(e: KeyboardEvent) {
  // let hook handle global keydowns via window listener; but also allow Enter on trigger
  if (props.disabled) return;
  if (props.triggerKeys?.includes(e.key)) {
    e.preventDefault();
    open();
  }
}
</script>
