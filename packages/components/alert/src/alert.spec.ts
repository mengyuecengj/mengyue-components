import { mount } from '@vue/test-utils';
import MYAlert from './alert.vue';
import { describe, expect, it } from 'vitest';

describe('MYAlert', () => {
  it('renders with default slot', () => {
    const wrapper = mount(MYAlert, {
      slots: {
        default: 'Default alert message'
      }
    });
    expect(wrapper.text()).toContain('Default alert message');
  });

  it('renders with title prop', () => {
    const wrapper = mount(MYAlert, {
      props: {
        title: 'Alert Title'
      }
    });
    expect(wrapper.text()).toContain('Alert Title');
  });

  it('applies success type styles', () => {
    const wrapper = mount(MYAlert, {
      props: {
        type: 'success'
      }
    });
    expect(wrapper.classes()).toContain('my-alert--success');
  });

  it('applies info type styles', () => {
    const wrapper = mount(MYAlert, {
      props: {
        type: 'info'
      }
    });
    expect(wrapper.classes()).toContain('my-alert--info');
  });

  it('applies warning type styles', () => {
    const wrapper = mount(MYAlert, {
      props: {
        type: 'warning'
      }
    });
    expect(wrapper.classes()).toContain('my-alert--warning');
  });

  it('applies error type styles', () => {
    const wrapper = mount(MYAlert, {
      props: {
        type: 'error'
      }
    });
    expect(wrapper.classes()).toContain('my-alert--error');
  });
});