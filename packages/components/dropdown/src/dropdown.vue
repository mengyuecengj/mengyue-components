<template>
  <div class="m-dropdown" :class="{ 'is-disabled': disabled }">
    <!-- 触发区域 -->
    <div class="m-dropdown__trigger" ref="triggerRef" @click="onTriggerClick" @mouseenter="onTriggerMouseEnter"
      @mouseleave="onTriggerMouseLeave">
      <!-- 支持分割按钮 -->
      <template v-if="splitButton">
        <div class="m-split">
          <button class="m-btn" :class="['m-btn--' + (type || 'default'), sizeClass]" :disabled="disabled"
            :style="{ backgroundColor: props.backGroundColor, color: props.textColor }" @click.stop="onPrimaryClick"
            @keydown.prevent>
            <slot name="default">操作</slot>
          </button>
          <button class="m-split__caret" :disabled="disabled"
            :style="{ backgroundColor: props.backGroundColor, color: props.textColor }" @click.stop="toggle()"
            aria-haspopup="menu" :aria-expanded="isVisible" @keydown.prevent>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 1l6 6 6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </template>

      <!-- 普通触发按钮（类似按钮） -->
      <template v-else>
        <button :class="['m-btn', 'm-btn--' + (type || 'default'), sizeClass]" :disabled="disabled" aria-haspopup="menu"
          :aria-expanded="isVisible" :style="{ backgroundColor: props.backGroundColor, color: props.textColor }"
          @keydown.prevent>
          <slot></slot>
          <span v-if="!props.noCaret" style="margin-left:8px;display:inline-flex" class="m-dropdown__caret"
            :class="carectClass">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </template>
    </div>

    <!-- 菜单: 通过 Teleport 或内联渲染 -->
    <Teleport v-if="teleported" to="body">
      <div v-show="isVisible" :class="['m-dropdown__menu', isVisible ? 'm-visible' : 'm-hidden', popperClass]"
        ref="menuRef" :style="{ ...menuStyle, backgroundColor: props.backGroundColor, color: props.textColor }"
        role="menu" @mouseenter="onMenuMouseEnter" @mouseleave="onMenuMouseLeave">
        <slot name="dropdown">
          <slot />
        </slot>
      </div>
    </Teleport>

    <div v-else v-show="isVisible" :class="['m-dropdown__menu', isVisible ? 'm-visible' : 'm-hidden', popperClass]"
      ref="menuRef" :style="{ ...menuStyle, backgroundColor: props.backGroundColor, color: props.textColor }"
      role="menu" @mouseenter="onMenuMouseEnter" @mouseleave="onMenuMouseLeave">
      <slot name="dropdown">
        <slot />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue';
import { useDropdown, type UseDropdownOptions } from './dropdownComputed';
import '../style/dropdown.scss';
import { dropdownProps } from './dropdown';

defineOptions({
  name: 'MYDropdown',
});
const props = defineProps(dropdownProps);
const emit = defineEmits(['command', 'visible-change', 'click']);

// 初始化钩子
const {
  visible,
  triggerEl,
  menuEl,
  carectClass,
  menuStyle,
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
  triggerKeys: [], // 禁用 triggerKeys 功能
  hideOnClick: props.hideOnClick,
  popperOptions: props.popperOptions,
}, dropdownProps);

// refs to bind DOM
const triggerRef = triggerEl;
const menuRef = menuEl;

// 计算属性
const isVisible = computed(() => visible.value);
const sizeClass = computed(() => {
  if (props.size === 'sm' || props.size === 'small') return 'm-btn--sm';
  if (props.size === 'lg' || props.size === 'large') return 'm-btn--lg';
  return 'm-btn--md';
});

// 提供选择功能给 DropdownItem
provide('m-dropdown-context', {
  select: (command: any) => {
    emit('command', command);
    if (props.hideOnClick) close();
  },
  close,
});

function onTriggerClick(e?: MouseEvent) {
  // 阻止键盘事件触发（Enter和Space键会触发click事件）
  if (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ' ')) {
    return;
  }
  
  e?.stopPropagation();
  if (props.disabled) return;
  if (props.trigger === 'click') toggle();
  emit('click', e);
}

function onPrimaryClick(e?: MouseEvent) {
  // 阻止键盘事件触发
  if (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ' ')) {
    return;
  }
  
  e?.stopPropagation();
  if (props.disabled) return;
  emit('click', e);
}

function onTriggerMouseEnter() { onTriggerEnter(); }
function onTriggerMouseLeave() {
  if (!menuRef.value || !menuRef.value.contains(document.activeElement)) {
    onTriggerLeave();
  }
}
function onMenuMouseEnter() { onMenuEnter(); }
function onMenuMouseLeave() {
  // 只有当鼠标不在触发区域和菜单区域时，才关闭菜单
  if (!triggerRef.value || !menuRef.value ||
    !triggerRef.value.contains(document.activeElement) &&
    !menuRef.value.contains(document.activeElement)) {
    onMenuLeave();
  }
}
</script>