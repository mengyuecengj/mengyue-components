import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import MYDrawer from '../src/drawer.vue'; // 假设这是组件的路径，根据实际情况调整

describe('MYDrawer Component', () => {
  afterEach(() => {
    document.body.innerHTML = ''; // 清理body以避免Teleport残留
  });

  it('should not be visible by default', () => {
    mount(MYDrawer, { props: { modelValue: false } });
    expect(document.querySelector('.my-drawer__wrapper')).toBeNull();
  });

  it('should be visible when modelValue is true', async () => {
    mount(MYDrawer, { props: { modelValue: true } });
    await nextTick();
    expect(document.querySelector('.my-drawer__wrapper')).not.toBeNull();
    expect(document.querySelector('.my-drawer')).not.toBeNull();
  });

  it('should render title from prop', async () => {
    mount(MYDrawer, {
      props: {
        modelValue: true,
        title: 'Test Title',
        withHeader: true,
      },
    });
    await nextTick();
    const header = document.querySelector('.my-drawer__header');
    expect(header?.textContent).toContain('Test Title');
  });

  it('should render title from slot', async () => {
    const wrapper = mount(MYDrawer, {
      props: { modelValue: true, withHeader: true },
      slots: { title: 'Slotted Title' },
    });
    await nextTick();
    const header = document.querySelector('.my-drawer__header');
    expect(header?.textContent).toContain('Slotted Title');
  });

  it('should apply ltr direction class', async () => {
    mount(MYDrawer, { props: { modelValue: true, direction: 'ltr' } });
    await nextTick();
    expect(document.querySelector('.my-drawer--ltr')).not.toBeNull();
  });

  it('should apply rtl direction class', async () => {
    mount(MYDrawer, { props: { modelValue: true, direction: 'rtl' } });
    await nextTick();
    expect(document.querySelector('.my-drawer--rtl')).not.toBeNull();
  });

  it('should apply width for horizontal direction', async () => {
    mount(MYDrawer, { props: { modelValue: true, direction: 'rtl', size: '50%' } });
    await nextTick();
    const drawer = document.querySelector('.my-drawer') as HTMLElement;
    expect(drawer.style.width).toBe('50%');
  });

  it('should apply height for vertical direction', async () => {
    mount(MYDrawer, { props: { modelValue: true, direction: 'ttb', size: 300 } });
    await nextTick();
    const drawer = document.querySelector('.my-drawer') as HTMLElement;
    expect(drawer.style.height).toBe('300px');
  });

  it('should not render header if withHeader is false', async () => {
    mount(MYDrawer, { props: { modelValue: true, withHeader: false } });
    await nextTick();
    expect(document.querySelector('.my-drawer__header')).toBeNull();
  });

  it('should render close button if showClose is true', async () => {
    mount(MYDrawer, { props: { modelValue: true, showClose: true } });
    await nextTick();
    expect(document.querySelector('.my-drawer__close')).not.toBeNull();
  });

  it('should emit close and update modelValue on close button click', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: true } });
    await nextTick();
    const closeButton = document.querySelector('.my-drawer__close') as HTMLElement;
    closeButton.click();
    await nextTick();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]]);
  });

  it('should close on mask click if closeOnClickModal is true', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: true, closeOnClickModal: true } });
    await nextTick();
    const mask = document.querySelector('.my-drawer__mask') as HTMLElement;
    mask.click();
    await nextTick();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]]);
  });

  it('should not close on mask click if closeOnClickModal is false', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: true, closeOnClickModal: false } });
    await nextTick();
    const mask = document.querySelector('.my-drawer__mask') as HTMLElement;
    mask.click();
    await nextTick();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('should close on Escape key press if closeOnPressEscape is true', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: true, closeOnPressEscape: true } });
    await nextTick();
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    window.dispatchEvent(escapeEvent);
    await nextTick();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]]);
  });

  it('should not close on Escape key press if closeOnPressEscape is false', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: true, closeOnPressEscape: false } });
    await nextTick();
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    window.dispatchEvent(escapeEvent);
    await nextTick();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('should not lock scroll if lockScroll is false', async () => {
    mount(MYDrawer, { props: { modelValue: true, lockScroll: false } });
    await nextTick();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should call beforeClose if provided', async () => {
    const beforeClose = vi.fn((done) => done());
    const wrapper = mount(MYDrawer, { props: { modelValue: true, beforeClose } });
    await nextTick();
    const closeButton = document.querySelector('.my-drawer__close') as HTMLElement;
    closeButton.click();
    await nextTick();
    expect(beforeClose).toHaveBeenCalled();
  });

  it('should render body slot', async () => {
    mount(MYDrawer, {
      props: { modelValue: true },
      slots: { default: 'Body Content' },
    });
    await nextTick();
    const body = document.querySelector('.my-drawer__body');
    expect(body?.textContent).toContain('Body Content');
  });

  it('should render footer slot if provided', async () => {
    mount(MYDrawer, {
      props: { modelValue: true },
      slots: { footer: 'Footer Content' },
    });
    await nextTick();
    const footer = document.querySelector('.my-drawer__footer');
    expect(footer?.textContent).toContain('Footer Content');
  });

  it('should emit open when modelValue changes to true', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: false } });
    await nextTick();
    await wrapper.setProps({ modelValue: true });
    await nextTick();
    expect(wrapper.emitted('open')).toBeTruthy();
  });

  it('should emit close when modelValue changes to false', async () => {
    const wrapper = mount(MYDrawer, { props: { modelValue: true } });
    await nextTick();
    await wrapper.setProps({ modelValue: false });
    await nextTick();
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});