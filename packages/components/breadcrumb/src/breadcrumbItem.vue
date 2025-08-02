<template>
  <span class="my-breadcrumb-item">
    <!-- 渲染内容 -->
    <component
      :is="hasRouter ? 'router-link' : 'a'"
      v-if="to"
      :to="hasRouter ? to : undefined"
      :href="!hasRouter ? (typeof to === 'string' ? to : to.path) : undefined"
      :replace="replace"
      class="my-breadcrumb-link"
    >
      <slot v-if="$slots.default" />
    </component>
    <span v-else class="my-breadcrumb-link">
      <slot v-if="$slots.default" />
    </span>

    <!-- 分隔符 -->
    <span v-if="!isLast" class="my-breadcrumb-separator">
      <component :is="separatorIcon" v-if="separatorIcon" />
      <template v-else>{{ separator }}</template>
    </span>
  </span>
</template>

<script setup lang="ts">
import { inject, computed, getCurrentInstance } from 'vue'

defineOptions({
    name: 'MYBreadcrumb-item'
})

const props = defineProps({
  to: {
    type: [String, Object],
    default: '',
  },
  replace: {
    type: Boolean,
    default: false,
  },
})

const separator = inject('breadcrumbSeparator', '/')
const separatorIcon = inject('breadcrumbSeparatorIcon', null)

// 是否使用 router
const instance = getCurrentInstance()
const hasRouter = !!instance?.appContext.config.globalProperties.$router

// 获取是否为最后一项（基于 DOM 子节点）
const isLast = computed(() => {
  const parent = instance?.parent?.subTree
  if (!parent) return false
  const children = Array.isArray(parent.children) ? parent.children.filter((v: import('vue').VNodeChild) => typeof v === 'object' && v !== null && 'type' in v && (v.type as { name?: string })?.name === 'MYBreadcrumbItem') : []
  const lastChild = children?.[children.length - 1]
  return lastChild && typeof lastChild === 'object' && 'props' in lastChild ? lastChild.props?.to === props.to &&
    instance?.vnode === lastChild : false
})
</script>
