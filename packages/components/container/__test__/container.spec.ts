import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MYContainer from '../src/container.vue'
import MYHeader from '../src/header.vue'
import MYAside from '../src/aside.vue'
import MYMain from '../src/main.vue'
import MYFooter from '../src/footer.vue'

describe('Container 组件测试', () => {
  // MYContainer 测试
  describe('MYContainer', () => {
    it('应该渲染默认的 div 标签', () => {
      const wrapper = mount(MYContainer)
      expect(wrapper.element.tagName.toLowerCase()).toBe('div')
    })

    it('应该接受并应用自定义标签', () => {
      const wrapper = mount(MYContainer, {
        props: { tag: 'section' }
      })
      expect(wrapper.element.tagName.toLowerCase()).toBe('section')
    })

    it('应该应用高度和宽度样式', () => {
      const wrapper = mount(MYContainer, {
        props: { height: '300px', width: '80%' }
      })
      const style = wrapper.attributes('style')
      expect(style).toContain('height: 300px')
      expect(style).toContain('width: 80%')
    })

    it('应该应用背景色', () => {
      const wrapper = mount(MYContainer, {
        props: { background: '#f0f0f0' }
      })
      expect(wrapper.attributes('style')).toContain('background-color: #f0f0f0')
    })
  })

  // MYHeader 测试
  describe('MYHeader', () => {
    it('应该渲染默认的 header 标签', () => {
      const wrapper = mount(MYHeader)
      expect(wrapper.element.tagName.toLowerCase()).toBe('header')
    })

    it('应该接受 fixed 属性', () => {
      const wrapper = mount(MYHeader, {
        props: { fixed: true }
      })
      expect(wrapper.classes()).toContain('is-fixed')
    })

    it('应该继承 containerProps', () => {
      const wrapper = mount(MYHeader, {
        props: { height: '60px', background: '#409eff' }
      })
      const style = wrapper.attributes('style')
      expect(style).toContain('height: 60px')
      expect(style).toContain('background-color: #409eff')
    })
  })

  // MYAside 测试
  describe('MYAside', () => {
    it('应该渲染默认的 aside 标签', () => {
      const wrapper = mount(MYAside)
      expect(wrapper.element.tagName.toLowerCase()).toBe('aside')
    })

    it('默认位置应该是 left', () => {
      const wrapper = mount(MYAside)
      expect(wrapper.classes()).toContain('is-left')
    })

    it('应该接受 right 位置', () => {
      const wrapper = mount(MYAside, {
        props: { position: 'right' }
      })
      expect(wrapper.classes()).toContain('is-right')
    })

    it('应该继承 containerProps', () => {
      const wrapper = mount(MYAside, {
        props: { width: '200px', background: '#545c64' }
      })
      const style = wrapper.attributes('style')
      expect(style).toContain('width: 200px')
      expect(style).toContain('background-color: #545c64')
    })
  })

  // MYMain 测试
  describe('MYMain', () => {
    it('应该渲染默认的 main 标签', () => {
      const wrapper = mount(MYMain)
      expect(wrapper.element.tagName.toLowerCase()).toBe('main')
    })

    it('应该继承 containerProps', () => {
      const wrapper = mount(MYMain, {
        props: { background: '#f5f7fa' }
      })
      expect(wrapper.attributes('style')).toContain('background-color: #f5f7fa')
    })
  })

  // MYFooter 测试
  describe('MYFooter', () => {
    it('应该渲染默认的 footer 标签', () => {
      const wrapper = mount(MYFooter)
      expect(wrapper.element.tagName.toLowerCase()).toBe('footer')
    })

    it('应该继承 containerProps', () => {
      const wrapper = mount(MYFooter, {
        props: { height: '60px', background: '#409eff' }
      })
      const style = wrapper.attributes('style')
      expect(style).toContain('height: 60px')
      expect(style).toContain('background-color: #409eff')
    })
  })

  // 组合测试
  describe('组合使用测试', () => {
    it('应该正确渲染完整布局', () => {
      const wrapper = mount({
        template: `
          <MYContainer height="400px">
            <MYHeader fixed>Header</MYHeader>
            <MYAside>Left Aside</MYAside>
            <MYMain>Main Content</MYMain>
            <MYAside position="right">Right Aside</MYAside>
            <MYFooter>Footer</MYFooter>
          </MYContainer>
        `,
        components: { MYContainer, MYHeader, MYAside, MYMain, MYFooter }
      })

      expect(wrapper.find('header').exists()).toBe(true)
      expect(wrapper.find('aside.is-left').exists()).toBe(true)
      expect(wrapper.find('main').exists()).toBe(true)
      expect(wrapper.find('aside.is-right').exists()).toBe(true)
      expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('固定头部应该添加相应样式', () => {
      const wrapper = mount({
        template: `
          <MYContainer>
            <MYHeader fixed>Header</MYHeader>
          </MYContainer>
        `,
        components: { MYContainer, MYHeader }
      })

      expect(wrapper.find('header').classes()).toContain('is-fixed')
    })
  })
})
