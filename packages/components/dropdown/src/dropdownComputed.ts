// src/components/dropdown/useDropdown.ts
import { reactive, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';

export type Placement = 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end' | 'left' | 'right';

export interface UseDropdownOptions {
  trigger?: 'hover' | 'click' | 'contextmenu';
  showTimeout?: number;
  hideTimeout?: number;
  placement?: Placement;
  maxHeight?: string | number | null;
  disabled?: boolean;
  teleported?: boolean;
  persistent?: boolean;
  triggerKeys?: string[]; // keyboard keys to open
  hideOnClick?: boolean;
  popperOptions?: Record<string, any>;
}

export function useDropdown(options: UseDropdownOptions = {}) {
  const visible = ref(false);
  const triggerEl = ref<HTMLElement | null>(null);
  const menuEl = ref<HTMLElement | null>(null);

  // use reactive plain object for style so template binding doesn't complain
  const menuStyle = reactive<Record<string, string | number>>({
    position: 'absolute',
    top: '0px',
    left: '0px',
    minWidth: '120px',
    zIndex: 1000,
  });

  const showTimer = ref<number | null>(null);
  const hideTimer = ref<number | null>(null);

const open = async (reason: 'mouse' | 'click' | 'key' = 'mouse') => {
    if (options.disabled) return;
    clearTimers();
    visible.value = true;
    await nextTick();
    updatePosition();
    if (reason === 'key') {
      focusFirstItem();  // 只键盘打开时聚焦
    }
  };
  
  const close = () => {
    clearTimers();
    visible.value = false;
  };
  const toggle = () => {
    if (visible.value) close();
    else open();
  };

  function clearTimers() {
    if (showTimer.value) { window.clearTimeout(showTimer.value); showTimer.value = null; }
    if (hideTimer.value) { window.clearTimeout(hideTimer.value); hideTimer.value = null; }
  }

function onTriggerEnter() {
    if (options.trigger !== 'hover') return;
    clearTimers();
    const ms = options.showTimeout ?? 150;
    showTimer.value = window.setTimeout(() => open('mouse'), ms);
  }
  function onTriggerLeave() {
    if (options.trigger !== 'hover') return;
    clearTimers();
    const ms = options.hideTimeout ?? 150;
    hideTimer.value = window.setTimeout(() => close(), ms);
  }
function onMenuEnter() { 
  if (options.trigger === 'hover') clearTimers(); 
}
  function onMenuLeave() { 
  if (options.trigger === 'hover') { 
    clearTimers(); 
    hideTimer.value = window.setTimeout(() => close(), options.hideTimeout ?? 150); 
  } 
}

  // basic positioning (no Popper). Compute relative to viewport and trigger
  function updatePosition(mouseX?: number, mouseY?: number) {
    const trg = triggerEl.value;
    const menu = menuEl.value;
    if (!menu) return;
    const placement = options.placement ?? 'bottom';
    let top = 0;
    let left = 0;

    if (mouseX != null && mouseY != null) {
      // contextmenu open at mouse
      left = mouseX + window.scrollX;
      top = mouseY + window.scrollY;
    } else if (trg) {
      const t = trg.getBoundingClientRect();
      const m = menu.getBoundingClientRect();
      if (placement.startsWith('bottom')) {
        top = t.bottom + 6 + window.scrollY;
        left = placement === 'bottom-end' ? t.right - m.width + window.scrollX : t.left + window.scrollX;
      } else if (placement.startsWith('top')) {
        top = t.top - m.height - 6 + window.scrollY;
        left = placement === 'top-end' ? t.right - m.width + window.scrollX : t.left + window.scrollX;
      } else if (placement === 'right') {
        left = t.right + 6 + window.scrollX;
        top = t.top + window.scrollY;
      } else {
        left = t.left - m.width - 6 + window.scrollX;
        top = t.top + window.scrollY;
      }
    }

    // clamp to viewport
    const vw = document.documentElement.clientWidth + window.scrollX;
    const vh = document.documentElement.clientHeight + window.scrollY;
    const mrect = menu.getBoundingClientRect();
    if (left + mrect.width > vw) left = Math.max(window.scrollX + 8, vw - mrect.width - 8);
    if (left < window.scrollX) left = window.scrollX + 8;
    if (top + mrect.height > vh) top = Math.max(window.scrollY + 8, vh - mrect.height - 8);
    if (top < window.scrollY) top = window.scrollY + 8;

    // apply
    menuStyle.top = `${Math.round(top)}px`;
    menuStyle.left = `${Math.round(left)}px`;
    menuStyle.position = 'absolute';
    if (options.maxHeight) {
      menuStyle.maxHeight = typeof options.maxHeight === 'number' ? `${options.maxHeight}px` : `${options.maxHeight}`;
      menuStyle.overflowY = 'auto';
    } else {
      menuStyle.maxHeight = '';
      menuStyle.overflowY = '';
    }
  }

  // click outside to close
  function onDocPointerDown(e: PointerEvent) {
    const trg = triggerEl.value;
    const menu = menuEl.value;
    const t = e.target as Node | null;
    if (!menu || !trg) return;
    if (menu.contains(t) || trg.contains(t)) return;
    close();
  }

  // keyboard navigation
  function focusFirstItem() {
    const menu = menuEl.value;
    if (!menu) return;
    const first = menu.querySelector<HTMLElement>('[data-dropdown-item]:not([data-disabled])');
    first?.focus();
  }
  function onKeydown(e: KeyboardEvent) {
if (options.disabled) return;
    const key = e.key;
    const triggerKeys = options.triggerKeys ?? ['Enter', ' ', 'ArrowDown', 'NumpadEnter'];
    if (!visible.value && triggerKeys.includes(key)) {
      e.preventDefault();
      open('key');  // 指定 'key'
      return;
    }
    if (visible.value) {
      if (key === 'Escape') {
        e.preventDefault();
        close();
        triggerEl.value?.focus();
        return;
      }
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        e.preventDefault();
        const items = Array.from(menuEl.value?.querySelectorAll<HTMLElement>('[data-dropdown-item]:not([data-disabled])') ?? []);
        if (!items.length) return;
        const idx = items.findIndex(i => i === document.activeElement);
        if (key === 'ArrowDown') {
          items[(idx + 1) % items.length].focus();
        } else {
          items[(idx - 1 + items.length) % items.length].focus();
        }
        return;
      }
      if (key === 'Enter' || key === ' ') {
        // enter/space on focused item triggers click naturally (no-op here)
      }
    }
  }

  onMounted(() => {
    document.addEventListener('pointerdown', onDocPointerDown);
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', () => updatePosition());
    window.addEventListener('scroll', () => updatePosition(), true);
  });
  onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', onDocPointerDown);
    window.removeEventListener('keydown', onKeydown);
    window.removeEventListener('resize', () => updatePosition());
    window.removeEventListener('scroll', () => updatePosition(), true);
    clearTimers();
  });

  watch(visible, (v) => {
    if (v) nextTick(() => updatePosition());
  });

  return {
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
    updatePosition,
  };
}
