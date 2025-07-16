<template>
  <component :is="props.tag" :class="containerClass" :style="styleContainer">
    <template v-for="vnode in processedChildren" :key="vnode.id">
      <component :is="vnode" />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed, h, useSlots, VNode, VNodeTypes } from 'vue';
import { containerProps } from './container';
import { useContainerComputed } from './containerComputed';
import '../style/container.scss';

defineOptions({ name: 'MYContainer' });

interface ProcessedVNode extends VNode {
  type: VNodeTypes;
}

const props = defineProps(containerProps);
const { containerClass: containerClass, styleContainer } = useContainerComputed(props);
const slots = useSlots();

const processedChildren = computed(() => {
  // const children = slots.default?.() || [] as ProcessedVNode[];
  const children = (slots as { default?: () => VNode[] }).default?.() || [];
  const headers: ProcessedVNode[] = [];
  const footers: ProcessedVNode[] = [];
  const leftAsides: ProcessedVNode[] = [];
  const rightAsides: ProcessedVNode[] = [];
  const mains: ProcessedVNode[] = [];
  const others: ProcessedVNode[] = [];

  children.forEach((vnode: VNode) => {
    const name = (vnode.type as any)?.name || '';
    if (name.includes('Header')) headers.push(vnode);
    else if (name.includes('Footer')) footers.push(vnode);
    else if (name.includes('Aside')) {
      const position = vnode.props?.position || 'left';
      if (position === 'right') rightAsides.push(vnode);
      else leftAsides.push(vnode);
    }
    else if (name.includes('Main')) mains.push(vnode);
    else others.push(vnode);
  });

  const body = (leftAsides.length || mains.length || rightAsides.length)
    ? h('div', { class: 'my-body' }, [...leftAsides, ...mains, ...rightAsides])
    : null;

  return [...headers, body, ...footers, ...others].filter(Boolean);
});
</script>
