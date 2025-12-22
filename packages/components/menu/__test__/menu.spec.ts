// __tests__/Menu.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import MYMenu from '../src/menu.vue'
import MYMenuItem from '../src/menuItem.vue'
import MYSubMenu from '../src/menusubMenu.vue'

// Global register components, use kebab-case keys to match tag names in templates
const globalComponents = {
  'my-menu': MYMenu,
  'my-menu-item': MYMenuItem,
  'my-sub-menu': MYSubMenu,
}

describe('MYMenu Component Suite', () => {
  // MYMenu basic tests
  describe('MYMenu Root Component', () => {
    it('Correctly applies mode, collapse classes and custom CSS variables', () => {
      const wrapper = mount(MYMenu, {
        props: {
          mode: 'horizontal',
          collapse: true,
          backgroundColor: '#111111',
          textColor: '#eeeeee',
          activeTextColor: '#ff5500',
        },
        slots: { default: '<my-menu-item index="1">Home</my-menu-item>' },
        global: { components: globalComponents },
      })

      const ul = wrapper.find('ul.my-menu')
      expect(ul.classes()).toContain('my-menu--horizontal')
      expect(ul.classes()).toContain('is-collapse')

      const style = ul.attributes('style') || ''
      expect(style).toContain('--menu-bg: #111111')
      expect(style).toContain('--menu-text: #eeeeee')
      expect(style).toContain('--menu-active: #ff5500')
    })

    it('defaultActive correctly activates menu item', async () => {
      const wrapper = mount({
        template: `
          <my-menu default-active="2">
            <my-menu-item index="1">Menu1</my-menu-item>
            <my-menu-item index="2">Menu2</my-menu-item>
            <my-menu-item index="3">Menu3</my-menu-item>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      const items = wrapper.findAll('.my-menu-item')
      expect(items[0].classes('is-active')).toBe(false)
      expect(items[1].classes('is-active')).toBe(true)
      expect(items[2].classes('is-active')).toBe(false)
    })

    it('Clicking menu-item triggers select event and updates active state', async () => {
      const onSelect = vi.fn()

      const wrapper = mount({
        template: `
          <my-menu @select="onSelect">
            <my-menu-item index="1">Item1</my-menu-item>
            <my-menu-item index="2">Item2</my-menu-item>
          </my-menu>
        `,
        setup() {
          return { onSelect }
        },
      }, { global: { components: globalComponents } })

      await flushPromises()
      const items = wrapper.findAll('.my-menu-item')
      await items[1].trigger('click')

      expect(onSelect).toHaveBeenCalledTimes(1)
      expect(onSelect).toHaveBeenCalledWith('2', ['2'])
      expect(items[1].classes('is-active')).toBe(true)
      expect(items[0].classes('is-active')).toBe(false)
    })

    it('In collapse mode, clicking item closes all opened submenus', async () => {
      const wrapper = mount({
        template: `
          <my-menu :collapse="true" :default-openeds="['sub1']">
            <my-sub-menu index="sub1">
              <template #title>Submenu</template>
              <my-menu-item index="sub1-1">Subitem</my-menu-item>
            </my-sub-menu>
            <my-menu-item index="1">Normal Item</my-menu-item>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      // First confirm submenu is open
      expect(wrapper.find('.my-submenu').classes('is-open')).toBe(true)

      // Click normal item (second .my-menu-item is normal item, first is subitem)
      const items = wrapper.findAll('.my-menu-item')
      await items[1].trigger('click')

      // Submenu should be closed
      expect(wrapper.find('.my-submenu').classes('is-open')).toBe(false)
    })
  })

  // MYMenuItem tests
  describe('MYMenuItem Menu Item', () => {
    it('Correctly renders default slot and icon slot', async () => {
      const wrapper = mount({
        template: `
          <my-menu>
            <my-menu-item index="1">
              <template #icon><span class="test-icon">★</span></template>
              Menu Text
            </my-menu-item>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      const item = wrapper.find('.my-menu-item')
      expect(item.text()).toContain('Menu Text')
      expect(item.find('.test-icon').exists()).toBe(true)
    })

    it('Does not trigger click when disabled and shows disabled style', async () => {
      const onSelect = vi.fn()

      const wrapper = mount({
        template: `
          <my-menu @select="onSelect">
            <my-menu-item index="1" :disabled="true">Disabled Item</my-menu-item>
          </my-menu>
        `,
        setup() { return { onSelect } },
      }, { global: { components: globalComponents } })

      await flushPromises()
      await wrapper.find('.my-menu-item').trigger('click')
      expect(onSelect).not.toHaveBeenCalled()
      expect(wrapper.find('.my-menu-item').classes('is-disabled')).toBe(true)
    })
  })

  // MYSubMenu tests
  describe('MYSubMenu Submenu', () => {
    it('defaultOpeneds controls default expanded state', async () => {
      const wrapper = mount({
        template: `
          <my-menu :default-openeds="['sub1', 'sub3']">
            <my-sub-menu index="sub1"><template #title>A</template><my-menu-item index="1">1</my-menu-item></my-sub-menu>
            <my-sub-menu index="sub2"><template #title>B</template><my-menu-item index="2">2</my-menu-item></my-sub-menu>
            <my-sub-menu index="sub3"><template #title>C</template><my-menu-item index="3">3</my-menu-item></my-sub-menu>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      const subs = wrapper.findAll('.my-submenu')
      expect(subs[0].classes('is-open')).toBe(true)
      expect(subs[1].classes('is-open')).toBe(false)
      expect(subs[2].classes('is-open')).toBe(true)
    })

    it('When trigger="click", clicking title toggles expand/collapse', async () => {
      const wrapper = mount({
        template: `
          <my-menu trigger="click">
            <my-sub-menu index="sub">
              <template #title>Click to Expand</template>
              <my-menu-item index="sub-1">Subitem</my-menu-item>
            </my-sub-menu>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      const title = wrapper.find('.submenu-title')
      await title.trigger('click')
      expect(wrapper.find('.my-submenu').classes('is-open')).toBe(true)

      await title.trigger('click')
      expect(wrapper.find('.my-submenu').classes('is-open')).toBe(false)
    })

    it('When trigger="hover", mouseenter/mouseleave controls expansion', async () => {
      const wrapper = mount({
        template: `
          <my-menu trigger="hover">
            <my-sub-menu index="sub">
              <template #title>Hover to Expand</template>
              <my-menu-item index="sub-1">Subitem</my-menu-item>
            </my-sub-menu>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      const title = wrapper.find('.submenu-title')

      await title.trigger('mouseenter')
      await flushPromises()
      expect(wrapper.find('.my-submenu').classes('is-open')).toBe(true)

      await title.trigger('mouseleave')
      // Delay 150ms to close
      await new Promise(r => setTimeout(r, 200))
      await flushPromises()
      expect(wrapper.find('.my-submenu').classes('is-open')).toBe(false)
    })

    it('When uniqueOpened=true, only one submenu is expanded at same level', async () => {
      const wrapper = mount({
        template: `
          <my-menu :unique-opened="true">
            <my-sub-menu index="sub1"><template #title>Menu1</template><my-menu-item index="1">1</my-menu-item></my-sub-menu>
            <my-sub-menu index="sub2"><template #title>Menu2</template><my-menu-item index="2">2</my-menu-item></my-sub-menu>
          </my-menu>
        `,
      }, { global: { components: globalComponents } })

      await flushPromises()
      const titles = wrapper.findAll('.submenu-title')

      // Expand first
      await titles[0].trigger('click')
      await flushPromises()
      expect(wrapper.findAll('.my-submenu.is-open').length).toBe(1)

      // Expand second, should close first
      await titles[1].trigger('click')
      await flushPromises()
      const opened = wrapper.findAll('.my-submenu.is-open')
      expect(opened.length).toBe(1)
      expect(opened[0].find('.submenu-title').text()).toContain('Menu2')
    })

    it('Triggers open and close events', async () => {
      const onOpen = vi.fn()
      const onClose = vi.fn()

      const wrapper = mount({
        template: `
          <my-menu @open="onOpen" @close="onClose">
            <my-sub-menu index="sub">
              <template #title>Test Events</template>
              <my-menu-item index="1">Item</my-menu-item>
            </my-sub-menu>
          </my-menu>
        `,
        setup() {
          return { onOpen, onClose }
        },
      }, { global: { components: globalComponents } })

      await flushPromises()
      const title = wrapper.find('.submenu-title')
      await title.trigger('click')
      expect(onOpen).toHaveBeenCalledWith('sub', ['sub'])

      await title.trigger('click')
      expect(onClose).toHaveBeenCalledWith('sub', ['sub'])
    })
  })
})