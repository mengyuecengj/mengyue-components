<template>
  <Teleport to="body">
    <div v-if="visible" class="my-drawer__wrapper">
      <!-- 遮罩层（已添加 v-show 触发动画） -->
      <Transition name="my-drawer-fade">
        <div v-show="visible" class="my-drawer__mask" @click="handleMaskClick" />
      </Transition>

      <!-- 抽屉主体 -->
      <Transition name="my-drawer-slide" :style="dialogStyle">
        <div v-if="visible" class="my-drawer" :class="`my-drawer--${props.direction}`" :style="drawerStyle">
          <!-- Header -->
          <header class="my-drawer__header" v-if="props.withHeader">
            <slot name="title">{{ props.title }}</slot>
            <button class="my-drawer__close" @click="handleClose" v-if="props.showClose">
              ×
            </button>
          </header>

          <!-- Body -->
          <section class="my-drawer__body">
            <slot></slot>
          </section>

          <!-- Footer -->
          <footer class="my-drawer__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { drawerProps } from './drawer'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import '../style/drawer.scss'

defineOptions({
  name: 'MYDrawer'
})

const props = defineProps(drawerProps)
const emit = defineEmits(['update:modelValue', 'open', 'close'])

const visible = ref(props.modelValue)

const dialogStyle = useStyleComputed(props, {
  propToStyleMap: {
    backgroundColor: 'backgroundColor',
  }
})

// 监听外部 v-model
watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }
)

// 根据方向计算宽高
const drawerStyle = computed(() => {
  if (['rtl', 'ltr'].includes(props.direction)) {
    return {
      width:
        typeof props.size === 'number'
          ? `${props.size}px`
          : props.size
    }
  } else {
    return {
      height:
        typeof props.size === 'number'
          ? `${props.size}px`
          : props.size
    }
  }
})

const openDrawer = () => {
  emit('open')
  if (props.lockScroll) {
    document.body.style.overflow = 'hidden'
  }
}

const closeDrawer = () => {
  emit('close')
  if (props.lockScroll) {
    document.body.style.overflow = ''
  }
  emit('update:modelValue', false)
}

const handleClose = () => {
  if (props.beforeClose) {
    props.beforeClose(closeDrawer)
  } else {
    closeDrawer()
  }
}

const handleMaskClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}

onMounted(() => {
  if (props.closeOnPressEscape) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && visible.value) {
        handleClose()
      }
    })
  }
})
</script>
