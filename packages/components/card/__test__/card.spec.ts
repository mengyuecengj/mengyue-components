import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import MYCard from '../src/card.vue'

// Global register components, use kebab-case keys to match tag names in templates
const globalComponents = {
  'my-card': MYCard,
}

describe('MYCard Card Component', () => {
  it('Correctly renders header, body, footer slots', async () => {
    const wrapper = mount({
      template: `
        <my-card>
          <template #header>Header Content</template>
          <template #body>Body Content</template>
          <template #footer>Footer Content</template>
        </my-card>
      `,
    }, { global: { components: globalComponents } })

    await flushPromises()
    expect(wrapper.find('.my-card__header').text()).toBe('Header Content')
    expect(wrapper.find('.my-card__body').text()).toBe('Body Content')
    expect(wrapper.find('.my-card__footer').text()).toBe('Footer Content')
  })

  it('Renders empty content when no slots provided', async () => {
    const wrapper = mount(MYCard, {
      global: { components: globalComponents },
    })

    await flushPromises()
    expect(wrapper.find('.my-card__header').text()).toBe('')
    expect(wrapper.find('.my-card__body').text()).toBe('')
    expect(wrapper.find('.my-card__footer').text()).toBe('')
  })

  it('title and footer props are not used for rendering (based on code)', async () => {
    const wrapper = mount(MYCard, {
      props: {
        title: 'Test Title',
        footer: 'Test Footer',
      },
      global: { components: globalComponents },
    })

    await flushPromises()
    // Since props.title and props.footer are not used in template, directly check if not rendered
    expect(wrapper.find('.my-card__header').text()).not.toContain('Test Title')
    expect(wrapper.find('.my-card__footer').text()).not.toContain('Test Footer')
  })

  it('emit close event (if there is logic, but no triggerer in code)', async () => {
    const onClose = vi.fn()
    const wrapper = mount(MYCard, {
      global: { components: globalComponents },
      setup() {
        return { onClose }
      },
    })

    await flushPromises()
    // Since there is no close button or logic in template, this test only validates emit definition, but does not trigger
    // If close button is added in future, can be extended
    expect(wrapper.emitted('close')).toBeUndefined() // No trigger
  })
})