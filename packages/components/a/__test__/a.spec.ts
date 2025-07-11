import { mount } from '@vue/test-utils'
import MYa from '../src/a.vue'
import { describe, expect, it, vi } from 'vitest'

vi.mock('virtual:svg-icons-register', () => ({}))
describe('MYa Component', () => {
    it('should render default slot content', () => {
        const wrapper = mount(MYa, {
            slots: {
                default: 'Test Link'
            }
        })
        expect(wrapper.text()).toContain('Test Link')
    })

    it('should apply primary type class', () => {
        const wrapper = mount(MYa, {
            props: {
                type: 'primary'
            }
        })
        expect(wrapper.classes()).toContain('my-a--primary')
    })

    it('should apply success type class', () => {
        const wrapper = mount(MYa, {
            props: {
                type: 'success'
            }
        })
        expect(wrapper.classes()).toContain('my-a--success')
    })

    it('should apply warning type class', () => {
        const wrapper = mount(MYa, {
            props: {
                type: 'warning'
            }
        })
        expect(wrapper.classes()).toContain('my-a--warning')
    })

    it('should apply danger type class', () => {
        const wrapper = mount(MYa, {
            props: {
                type: 'danger'
            }
        })
        expect(wrapper.classes()).toContain('my-a--danger')
    })

    it('should apply info type class', () => {
        const wrapper = mount(MYa, {
            props: {
                type: 'info'
            }
        })
        expect(wrapper.classes()).toContain('my-a--info')
    })

    it('should apply large size class', () => {
        const wrapper = mount(MYa, {
            props: {
                size: 'large'
            }
        })
        expect(wrapper.classes()).toContain('my-a--large')
    })

    it('should apply custom size style', () => {
        const wrapper = mount(MYa, {
            props: {
                size: '20px'
            }
        })
        expect(wrapper.attributes('style')).toContain('font-size: 20px')
    })

    it('should apply custom color style', () => {
        const wrapper = mount(MYa, {
            props: {
                color: '#ff0000'
            }
        })
        expect(wrapper.attributes('style')).toContain('color: #ff0000')
    })

    it('should apply disabled class', () => {
        const wrapper = mount(MYa, {
            props: {
                disabled: true
            }
        })
        expect(wrapper.classes()).toContain('my-a--disabled')
    })

    it('should apply underline class', () => {
        const wrapper = mount(MYa, {
            props: {
                underline: true
            }
        })
        expect(wrapper.classes()).toContain('my-a--underline')
    })

    it('should render as custom tag', () => {
        const wrapper = mount(MYa, {
            props: {
                tag: 'span'
            }
        })
        expect(wrapper.element.tagName.toLowerCase()).toBe('span')
    })

    it('should emit click event', async () => {
        const wrapper = mount(MYa)
        await wrapper.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('click')
    })
})