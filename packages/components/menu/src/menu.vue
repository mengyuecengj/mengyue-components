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

<style scoped lang="scss">
.my-dropdown {
  position: relative;
  display: inline-block;
  color: #fff;
    list-style: none; /* 去掉子菜单的ul默认原点 */
  margin: 0;
  padding: 4px 0;

  &__trigger {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 12px;
    background-color: #2c2c2c;
    border-radius: 6px;
    transition: background-color 0.2s;
    user-select: none;

    &:hover {
      background-color: #3c3c3c;
    }
  }

  &__arrow {
    margin-left: 6px;
    transition: transform 0.2s ease;

    &.open {
      transform: rotate(180deg); // 向上
    }
  }
}
</style>
