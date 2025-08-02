import { mount } from '@vue/test-utils';
import MYMenuSubmenu from '../src/menusubMenu.vue';
import { describe, expect, it } from 'vitest';

describe('MYMenuSubmenu', () => {
  it('should be closed by default', () => {
    const wrapper = mount(MYMenuSubmenu);
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(false);
  });

  it('should open on mouse enter', async () => {
    const wrapper = mount(MYMenuSubmenu);
    await wrapper.trigger('mouseenter');
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(true);
  });

  it('should close on mouse leave', async () => {
    const wrapper = mount(MYMenuSubmenu, { data: () => ({ open: true }) });
    await wrapper.trigger('mouseleave');
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(false);
  });

  it('should toggle open state on title click', async () => {
    const wrapper = mount(MYMenuSubmenu);
    await wrapper.find('.submenu-title').trigger('click');
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(true);
    await wrapper.find('.submenu-title').trigger('click');
    expect((wrapper.vm as unknown as { open: boolean }).open).toBe(false);
  });

  it('should render title slot content', () => {
    const wrapper = mount(MYMenuSubmenu, {
      slots: { title: 'Custom Title' }
    });
    expect(wrapper.find('.submenu-title').text()).toContain('Custom Title');
  });
});
