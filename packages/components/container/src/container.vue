<template>
  <component :is="props.tag" :class="classContainer">
    <template v-for="(vnode) in processedChildren" :key="index">
      <component :is="vnode" />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed, h, useSlots, VNode, VNodeTypes } from 'vue'
import { containerProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'

defineOptions({ name: 'MYContainer' })

interface ProcessedVNode extends VNode {
  type: VNodeTypes;  // 使用 VNodeTypes 而不是 Component | string
}

const props = defineProps(containerProps)
const { container: classContainer } = useContainerComputed(props)
const slots = useSlots()

// 将 MYAside 和 MYMain 包裹进 my-body，其他元素原样输出
const processedChildren = computed(() => {
  const children = slots.default?.() || [] as ProcessedVNode[];
  const header: ProcessedVNode[] = [];
  const footer: ProcessedVNode[] = [];
  const aside: ProcessedVNode[] = [];
  const main: ProcessedVNode[] = [];
  const others: ProcessedVNode[] = [];

  children.forEach((vnode) => {
    const name = (vnode.type as any)?.name || '';
    if (name.includes('Header')) header.push(vnode);
    else if (name.includes('Footer')) footer.push(vnode);
    else if (name.includes('Aside')) aside.push(vnode);
    else if (name.includes('Main')) main.push(vnode);
    else others.push(vnode);
  });

  const body = (aside.length || main.length)
    ? h('div', { class: 'my-body' }, [ ...aside, ...main ])
    : null;

  return [...header, body, ...footer, ...others].filter(Boolean);
});
</script>
