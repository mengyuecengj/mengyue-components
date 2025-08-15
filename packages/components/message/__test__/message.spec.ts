import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Message from '../src/message.vue';
import { showMessage, configureGlobal, closeAll } from '../../../utils/messageManager';
vi.mock('../../button/src/button.vue', () => ({
  default: {
    name: 'MYButton',
    template: '<button><slot /></button>'
  }
}));
describe('Message Component', () => {
  it('renders with default type and content', () => {
    const wrapper = mount(Message, {
      props: {
        id: 'test-message',
        content: 'Test message content',
        type: 'info',
      },
    });
    expect(wrapper.find('.my-message').exists()).toBe(true);
    expect(wrapper.find('.my-message--content').text()).toBe('Test message content');
  });

  it('renders with danger type', () => {
    const wrapper = mount(Message, {
      props: {
        id: 'test-message',
        content: 'Danger message',
        type: 'error',
      },
    });
    expect(wrapper.find('.my-message').classes()).toContain('my-message--error');
  });

  it('closes when close button is clicked', async () => {
    const wrapper = mount(Message, {
      props: {
        id: 'test-message',
        content: 'Test message',
        showClose: true,
      },
    });
    await wrapper.find('.my-message--close').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('pauses timer on mouse enter and resumes on mouse leave', async () => {
    vi.useFakeTimers();
    const wrapper = mount(Message, {
      props: {
        id: 'test-message',
        content: 'Test message',
        duration: 3000,
      },
    });
    await wrapper.trigger('mouseenter');
    vi.advanceTimersByTime(1000);
    await wrapper.trigger('mouseleave');
    vi.advanceTimersByTime(3000);
    expect(wrapper.emitted('close')).toBeTruthy();
    vi.useRealTimers();
  });
});

describe('Message Manager', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    closeAll();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    closeAll();
  });

  it('adds a message to the list', async () => {
    const message = showMessage({
      content: 'Test message',
      type: 'info',
    });
    await nextTick();
    expect(message.id).toBeDefined();
  });

  it('removes a message when closed', async () => {
    const message = showMessage({
      content: 'Test message',
      type: 'info',
    });
    await nextTick();
    message.close();
    await nextTick();
    expect(document.querySelector('.my-message')).toBeNull();
  });

  it('applies global configuration', () => {
    configureGlobal({ duration: 5000, position: 'top-right' });
    const message = showMessage({
      content: 'Test message',
    });
    expect(message).toBeDefined();
  });
});