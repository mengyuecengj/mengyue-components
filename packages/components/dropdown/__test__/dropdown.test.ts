import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Dropdown from '../src/dropdown.vue';

describe('Dropdown Component', () => {
    it('renders correctly', () => {
        const wrapper = mount(Dropdown);
        expect(wrapper.exists()).toBe(true);
    });

    it('toggles dropdown menu when trigger is clicked', async () => {
        const wrapper = mount(Dropdown, {
            props: { trigger: 'click', teleported: false },
        });
        await wrapper.find('.m-dropdown__trigger').trigger('click');
        expect(wrapper.find('.m-dropdown__menu').isVisible()).toBe(true);
    });

    it('disables dropdown when disabled prop is true', () => {
        const wrapper = mount(Dropdown, {
            props: { disabled: true },
        });
        expect(wrapper.find('.is-disabled').exists()).toBe(true);
    });
});