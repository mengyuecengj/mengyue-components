import { mount } from '@vue/test-utils';
import MYSelectTime from '../src/selectTime.vue';
import { describe, expect, it } from 'vitest';

describe('MYSelectTime', () => {
  it('renders single time picker by default', () => {
    const wrapper = mount(MYSelectTime);
    expect(wrapper.find('.single-picker').exists()).toBe(true);
    expect(wrapper.find('.time-range-picker').exists()).toBe(false);
  });

  it('emits update:modelValue when selecting time in single mode', async () => {
    const wrapper = mount(MYSelectTime);
    await wrapper.findAll('select.time-select')[0].setValue('11'); // 小时
    await wrapper.findAll('select.time-select')[1].setValue('0');  // 分钟
    await wrapper.findAll('select.time-select')[1].trigger('change');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['11:00']);

  });

  it('renders time range picker when range prop is true', () => {
    const wrapper = mount(MYSelectTime, {
      props: { range: true },
    });
    expect(wrapper.find('.time-range-picker').exists()).toBe(true);
    expect(wrapper.find('.single-picker').exists()).toBe(false);
  });

  it('emits update:modelValue when selecting time range', async () => {
    const wrapper = mount(MYSelectTime, {
      props: { range: true },
    });
    await wrapper.findAll('.time-select')[0].setValue('12');
    await wrapper.findAll('.time-select')[1].setValue('30');
    await wrapper.findAll('.time-select')[2].setValue('14');
    await wrapper.findAll('.time-select')[3].setValue('45');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['12:30', '14:45']]);
  });

  it('resets state when switching from single to range mode', async () => {
    const wrapper = mount(MYSelectTime);
    await wrapper.findAll('select.time-select')[0].setValue('12');
    await wrapper.setProps({ range: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['', '']]);
  });
});