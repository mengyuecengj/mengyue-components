import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MYSkeleton from '../src/skeleton.vue'
import MYSkeletonItem from '../src/skeletonItem.vue'

describe('Skeleton Components', () => {
  // 测试 MYSkeleton 组件
  describe('MYSkeleton.vue', () => {
    it('renders loading state with default props', () => {
      const wrapper = mount(MYSkeleton, {
        props: { loading: true }
      })

      expect(wrapper.classes()).toContain('my-skeleton')
      expect(wrapper.find('.my-skeleton--animated').exists()).toBe(true) // 默认 animated = true
      expect(wrapper.findAllComponents(MYSkeletonItem).length).toBe(3) // 默认 count=3
    })

    it('renders content slot when loading is false', () => {
      const wrapper = mount(MYSkeleton, {
        props: { loading: false },
        slots: {
          default: '<div class="actual-content">Loaded Content</div>'
        }
      })

      expect(wrapper.find('.my-skeleton__content').exists()).toBe(true)
      expect(wrapper.find('.actual-content').exists()).toBe(true)
    })

    it('respects count and randomWidth props', () => {
      const wrapper = mount(MYSkeleton, {
        props: {
          loading: true,
          count: 5,
          randomWidth: true
        }
      })

      expect(wrapper.findAllComponents(MYSkeletonItem).length).toBe(5)
    })

    it('applies theme styles', () => {
      const wrapper = mount(MYSkeleton, {
        props: {
          theme: 'dark'
        }
      })
      const style = wrapper.attributes('style') || ''
      expect(style).toContain('--skeleton-bg: #333')
    })
  })

  // 测试 MYSkeletonItem 组件
  describe('MYSkeletonItem.vue', () => {
    it('renders with default props', () => {
      const wrapper = mount(MYSkeletonItem)
      expect(wrapper.classes()).toContain('my-skeleton-item')
      expect(wrapper.classes()).toContain('my-skeleton-item--text')
      expect(wrapper.element.style.width).toBe('100%')
      expect(wrapper.element.style.height).toBe('16px')
    })

    it('applies variant class and styles correctly', () => {
      const wrapper = mount(MYSkeletonItem, {
        props: {
          variant: 'circle',
          width: 50,
          height: 50,
        }
      })
      expect(wrapper.classes()).toContain('my-skeleton-item--circle')
      expect(wrapper.element.style.borderRadius).toBe('50%')
      expect(wrapper.element.style.width).toBe('50px')
      expect(wrapper.element.style.height).toBe('50px')
    })

    it('adjusts height for text variant', () => {
      const wrapper = mount(MYSkeletonItem, {
        props: {
          variant: 'text',
          height: 'auto',
        }
      })
      expect(wrapper.element.style.height).toBe('1.2em')
    })

    it('applies rect variant styles', () => {
      const wrapper = mount(MYSkeletonItem, {
        props: {
          variant: 'rect'
        }
      })
      expect(wrapper.classes()).toContain('my-skeleton-item--rect')
      expect(wrapper.element.style.borderRadius).toBe('4px')
    })
  })
})
