import { describe, it, expect } from 'vitest';
import { radioProps } from '../src/radio';
import { mount } from '@vue/test-utils';
import MYRadio from '../src/radio.vue';
import MYRadioGroup from '../src/radio-group.vue';

describe('radioProps', () => {
    it('should have correct default values', () => {
        expect(radioProps.modelValue.default).toBe('');
        expect(radioProps.value.default).toBe('');
        expect(radioProps.name.default).toBe('');
        expect(radioProps.size.default).toBe('');
        expect(radioProps.disabled.default).toBe(false);
    });

    it('should have correct types', () => {
        expect(radioProps.modelValue.type).toBeDefined();
        expect(radioProps.value.type).toBeDefined();
        expect(radioProps.name.type).toBeDefined();
        expect(radioProps.size.type).toBeDefined();
        expect(radioProps.disabled.type).toBeDefined();
    });
});

describe('MYRadio', () => {
    it('should update v-model when clicked', async () => {
        const wrapper = mount({
            components: { MYRadio },
            template: '<MYRadio v-model="selected" value="1">Option 1</MYRadio>',
            data() {
                return { selected: '' };
            }
        });
        await wrapper.find('input').trigger('click');
        expect(wrapper.vm.selected).toBe('1');
    });

    it('should not update when disabled', async () => {
        const wrapper = mount({
            components: { MYRadio },
            template: '<MYRadio v-model="selected" value="1" disabled>Option 1</MYRadio>',
            data() {
                return { selected: '' };
            }
        });
        await wrapper.find('input').trigger('click');
        expect(wrapper.vm.selected).toBe('');
    });
});

describe('MYRadioGroup', () => {
    it('should update v-model when a radio is clicked', async () => {
        const wrapper = mount({
            components: { MYRadioGroup, MYRadio },
            template: `
                <MYRadioGroup v-model="selected">
                    <MYRadio value="1">Option 1</MYRadio>
                    <MYRadio value="2">Option 2</MYRadio>
                </MYRadioGroup>
            `,
            data() {
                return { selected: '' };
            }
        });
        await wrapper.findAll('input')[1].trigger('click');
        expect(wrapper.vm.selected).toBe('2');
    });

    it('should not update when group is disabled', async () => {
        const wrapper = mount({
            components: { MYRadioGroup, MYRadio },
            template: `
                <MYRadioGroup v-model="selected" disabled>
                    <MYRadio value="1">Option 1</MYRadio>
                    <MYRadio value="2">Option 2</MYRadio>
                </MYRadioGroup>
            `,
            data() {
                return { selected: '' };
            }
        });
        await wrapper.findAll('input')[0].trigger('click');
        expect(wrapper.vm.selected).toBe('');
    });

    it('should render vertically when direction is vertical', () => {
        const wrapper = mount({
            components: { MYRadioGroup, MYRadio },
            template: `
                <MYRadioGroup v-model="selected" direction="vertical">
                    <MYRadio value="1">Option 1</MYRadio>
                    <MYRadio value="2">Option 2</MYRadio>
                </MYRadioGroup>
            `,
            data() {
                return { selected: '' };
            }
        });
        expect(wrapper.find('.my-radio-group').classes()).toContain('is-vertical');
    });
});
