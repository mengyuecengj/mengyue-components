import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MYDialog from '../src/dialog.vue';
import { nextTick } from 'vue';

describe('MYDialog', () => {
  it('renders with default props', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await nextTick();
    expect(wrapper.find('.my-dialog').exists()).toBe(true);
    expect(wrapper.find('.my-dialog__title').text()).toBe('');
    expect(wrapper.find('.my-dialog').attributes('style')).toContain('width: 400px');
    expect(wrapper.find('.my-dialog').attributes('style')).toContain('height: 200px');
  });

  it('emits open event when opened', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: false,
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.emitted('open')).toBeTruthy();
  });

  it('emits close event when closed', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await wrapper.find('.my-dialog__close').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]]);
  });

  it('closes when clicking overlay if closeOnClickModal is true', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
        closeOnClickModal: true,
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await wrapper.find('.my-overlay').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('does not close when clicking overlay if closeOnClickModal is false', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
        closeOnClickModal: false,
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await wrapper.find('.my-overlay').trigger('click');
    expect(wrapper.emitted('close')).toBeFalsy();
  });



  it('does not close when pressing Escape if closeOnPressEscape is false', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
        closeOnPressEscape: false,
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await wrapper.trigger('keydown', { key: 'Escape' });
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('renders custom title', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
        title: 'Custom Title',
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await nextTick();
    expect(wrapper.find('.my-dialog__title').text()).toBe('Custom Title');
  });

  it('renders custom width and height', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
        width: '500px',
        height: '300px',
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await nextTick();
    expect(wrapper.find('.my-dialog').attributes('style')).toContain('width: 500px');
    expect(wrapper.find('.my-dialog').attributes('style')).toContain('height: 300px');
  });

  it('renders slots', async () => {
    const wrapper = mount(MYDialog, {
      props: {
        modelValue: true,
      },
      slots: {
        default: '<p>Custom Content</p>',
        header: '<span>Custom Header</span>',
        footer: '<button>Custom Footer</button>',
      },
      global: {
        stubs: {
          Teleport: true,
          Transition: true,
        },
      },
    });
    await nextTick();
    expect(wrapper.find('.my-dialog__body').text()).toContain('Custom Content');
    expect(wrapper.find('.my-dialog__header').text()).toContain('Custom Header');
    expect(wrapper.find('.my-dialog__footer').text()).toContain('Custom Footer');
  });
});