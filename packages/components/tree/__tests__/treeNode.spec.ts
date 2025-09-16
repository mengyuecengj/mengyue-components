import { mount } from '@vue/test-utils'
import TreeNode from '../src/treeNode.vue'
import { describe, expect, it } from 'vitest'

describe('TreeNode', () => {
  const treeProps = {
    label: 'name',
    children: 'children'
  }

  it('renders node label and arrow icon', () => {
    const node = { name: 'Node 1', children: [{ name: 'Child 1', children: [] }] }
    const wrapper = mount(TreeNode, {
      props: { node, treeProps }
    })

    expect(wrapper.find('.label').text()).toBe('Node 1')
    expect(wrapper.find('.arrow').exists()).toBe(true)
  })

  it('toggles expansion on click', async () => {
    const node = { name: 'Node 1', children: [{ name: 'Child 1', children: [] }] }
    const wrapper = mount(TreeNode, {
      props: { node, treeProps }
    })

    await wrapper.find('.my-tree-node__content').trigger('click')
    expect(wrapper.find('.my-tree-node__children').exists()).toBe(true)

    await wrapper.find('.my-tree-node__content').trigger('click')
    expect(wrapper.find('.my-tree-node__children').exists()).toBe(false)
  })

  it('does not show arrow for leaf nodes', () => {
    const node = { name: 'Leaf Node', children: [] }
    const wrapper = mount(TreeNode, {
      props: { node, treeProps }
    })

    expect(wrapper.find('.arrow').exists()).toBe(false)
  })

  it('renders child nodes when expanded', async () => {
    const node = { name: 'Parent', children: [{ name: 'Child', children: [] }] }
    const wrapper = mount(TreeNode, {
      props: { node, treeProps }
    })

    await wrapper.find('.my-tree-node__content').trigger('click')
    expect(wrapper.findAll('.my-tree-node__children .my-tree-node').length).toBe(1)
  })
})