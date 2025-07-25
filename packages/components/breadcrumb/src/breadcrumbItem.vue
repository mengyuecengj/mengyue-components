<template>
  <span class="my-breadcrumb-item">
    <!-- 渲染内容 -->
    <component
      v-if="to"
      :is="hasRouter ? 'router-link' : 'a'"
      :to="hasRouter ? to : undefined"
      :href="!hasRouter ? (typeof to === 'string' ? to : to.path) : undefined"
      :replace="replace"
      class="my-breadcrumb-link"
    >
      <slot />
    </component>
    <span v-else class="my-breadcrumb-link">
      <slot />
    </span>

    <!-- 分隔符 -->
    <span class="my-breadcrumb-separator" v-if="!isLast">
      <component v-if="separatorIcon" :is="separatorIcon" />
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
  const children = Array.isArray(parent.children) ? parent.children.filter((v: any) => v?.type?.name === 'MYBreadcrumbItem') : []
  const lastChild = children?.[children.length - 1]
  return lastChild && typeof lastChild === 'object' && 'props' in lastChild ? lastChild.props?.to === props.to &&
    instance?.vnode === lastChild : false
})
</script>

<style scoped>
.my-breadcrumb-item {
  display: inline-flex;
  align-items: center;
}

.my-breadcrumb-link {
  color: var(--el-color-primary, #409EFF);
  text-decoration: none;
}

.my-breadcrumb-separator {
  margin: 0 8px;
  color: var(--el-text-color-secondary, #c0c4cc);
  display: flex;
  align-items: center;
}
</style>
