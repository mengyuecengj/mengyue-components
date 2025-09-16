<template>
  <div
    class="my-dropdown"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <div class="my-dropdown__trigger" @click="toggleDropdown">
      <slot />
      <span class="my-dropdown__arrow" :class="{ open }">
        <!-- 使用字符箭头 -->
        ▼
      </span>
    </div>
    <MYDropdownMenu v-if="open">
      <slot name="menu" />
    </MYDropdownMenu>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, reactive, toRefs } from 'vue'
import MYDropdownMenu from '../../dropdown/src/dropdownMenu.vue'
import '../style/menu.scss'

defineOptions({
  name: 'MYMenu'
})

const open = ref(false)
const toggleDropdown = () => {
  open.value = !open.value
}

// 构建菜单上下文
const props = defineProps({
  defaultActive: String,
  mode: {
    type: String,
    default: 'vertical',
  },
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
})
const emit = defineEmits(['select'])

const state = reactive({
  activeIndex: props.defaultActive || '',
})

// 👇独立函数，别放 reactive 里
function handleSelect(index: string, path: string[]) {
  state.activeIndex = index
  emit('select', index, path)
}


provide('menuContext', {
  ...toRefs(state),
  handleSelect,
  props,
})
</script>

