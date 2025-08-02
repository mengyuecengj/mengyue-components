import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { nextTick, defineComponent } from 'vue'
import MYCarousel from '../src/carousel.vue'
import MYCarouselItem from '../src/carouselItem.vue'

vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] })

const mountCarousel = (props: Record<string, any> = {}) =>
  mount(defineComponent({
    components: { MYCarousel, MYCarouselItem },
    template: `
      <MYCarousel v-bind="props">
        <MYCarouselItem :index="0">Item 1</MYCarouselItem>
        <MYCarouselItem :index="1">Item 2</MYCarouselItem>
        <MYCarouselItem :index="2">Item 3</MYCarouselItem>
      </MYCarousel>
    `,
    setup() {
      return { props }
    }
  }))

describe('MYCarousel.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('should render carousel and items', async () => {
    const wrapper = mountCarousel()
    expect(wrapper.find('.my-carousel').exists()).toBe(true)
    expect(wrapper.findAllComponents(MYCarouselItem).length).toBe(3)
  })

  it('should autoplay with default interval', async () => {
    const wrapper = mountCarousel()
    await flushPromises()
    const dots = wrapper.findAll('.dot')
    expect(dots[0].classes()).toContain('active')

    vi.advanceTimersByTime(3000)
    await nextTick()
    expect(dots[1].classes()).toContain('active')

    vi.advanceTimersByTime(3000)
    await nextTick()
    expect(dots[2].classes()).toContain('active')
  })

  it('should trigger next/prev buttons', async () => {
    const wrapper = mountCarousel()
    await flushPromises()

    const nextBtn = wrapper.find('.nav.next')
    const prevBtn = wrapper.find('.nav.prev')
    const dots = wrapper.findAll('.dot')

    await nextBtn.trigger('click')
    await nextTick()
    expect(dots[1].classes()).toContain('active')

    await prevBtn.trigger('click')
    await nextTick()
    expect(dots[0].classes()).toContain('active')
  })

  it('should switch on dot click', async () => {
    const wrapper = mountCarousel({ trigger: 'click' })
    await flushPromises()
    const dots = wrapper.findAll('.dot')

    await dots[2].trigger('click')
    await nextTick()
    expect(dots[2].classes()).toContain('active')
  })

  it('should switch on dot hover if trigger is hover', async () => {
    const wrapper = mountCarousel({ trigger: 'hover' })
    await flushPromises()
    const dots = wrapper.findAll('.dot')

    await dots[1].trigger('mouseenter')
    await nextTick()
    expect(dots[1].classes()).toContain('active')
  })

  it('should pause on mouseenter and resume on mouseleave', async () => {
    const wrapper = mountCarousel()
    await flushPromises()
    const carousel = wrapper.find('.my-carousel')

    await carousel.trigger('mouseenter')
    vi.advanceTimersByTime(6000)
    await nextTick()
    const dots = wrapper.findAll('.dot')
    expect(dots[0].classes()).toContain('active') // 没变

    await carousel.trigger('mouseleave')
    vi.advanceTimersByTime(3000)
    await nextTick()
    expect(dots[1].classes()).toContain('active')
  })

  it('should show correct active dot after multiple next()', async () => {
    const wrapper = mountCarousel()
    await flushPromises()
    const nextBtn = wrapper.find('.nav.next')

    await nextBtn.trigger('click')
    await nextBtn.trigger('click')
    await nextTick()

    const dots = wrapper.findAll('.dot')
    expect(dots[2].classes()).toContain('active')
  })
})
