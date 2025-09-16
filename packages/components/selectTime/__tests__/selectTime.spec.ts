import { mount } from '@vue/test-utils';
import MYSelectTime from '../src/selectTime.vue';
import { describe, expect, it } from 'vitest';

const TEST_HOURS = [11, 12];
const TEST_MINUTES = [0, 30];

describe('MYSelectTime', () => {
  it('renders single time picker by default', () => {
    const wrapper = mount(MYSelectTime, {
      props: {
        hourOptions: TEST_HOURS,
        minuteOptions: TEST_MINUTES
      }
    });
    expect(wrapper.find('.single-picker').exists()).toBe(true);
    expect(wrapper.find('.time-range-picker').exists()).toBe(false);
  });

  it('emits update:modelValue when selecting time in single mode', async () => {
    const wrapper = mount(MYSelectTime, {
      props: {
        hourOptions: TEST_HOURS,
        minuteOptions: TEST_MINUTES
      }
    });
    const selects = wrapper.findAll('select.time-select');
    await selects[0].setValue('11');
    await selects[1].setValue('0');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['11:00']);
  });

  it('renders time range picker when range is true', () => {
    const wrapper = mount(MYSelectTime, {
      props: {
        range: true,
        hourOptions: TEST_HOURS,
        minuteOptions: TEST_MINUTES
      }
    });
    expect(wrapper.find('.time-range-picker').exists()).toBe(true);
    expect(wrapper.find('.single-picker').exists()).toBe(false);
  });

  it('emits update:modelValue when selecting time range', async () => {
    const wrapper = mount(MYSelectTime, {
      props: {
        range: true,
        hourOptions: TEST_HOURS,
        minuteOptions: TEST_MINUTES
      }
    });
    const selects = wrapper.findAll('select.time-select');
    await selects[0].setValue('11');
    await selects[1].setValue('30');
    await selects[2].setValue('12');
    await selects[3].setValue('0');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([['11:30', '12:00']]);
  });

  it('resets when switching from single to range', async () => {
    const wrapper = mount(MYSelectTime, {
      props: {
        hourOptions: TEST_HOURS,
        minuteOptions: TEST_MINUTES
      }
    });
    const selects = wrapper.findAll('select.time-select');
    await selects[0].setValue('11');
    await selects[1].setValue('0');
    await wrapper.setProps({ range: true });
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([['', '']]);
  });
});
