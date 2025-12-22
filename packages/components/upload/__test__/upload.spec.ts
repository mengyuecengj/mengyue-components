import { describe, it, expect, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import MYUpload from '../src/upload.vue'; // 假设组件路径，根据实际情况调整

describe('MYUpload Component', () => {
  let mockXHR: any;
  const mockFile = new File(['content'], 'test.png', { type: 'image/png' });

  const mockXMLHttpRequest = () => {
    mockXHR = {
      open: vi.fn(),
      send: vi.fn(),
      setRequestHeader: vi.fn(),
      upload: {
        onprogress: null,
      },
      onload: null,
      onerror: null,
      status: 200,
      responseText: '{"success": true}',
      triggerProgress: (percent: number) => {
        if (mockXHR.upload.onprogress) {
          mockXHR.upload.onprogress({ loaded: percent, total: 100, lengthComputable: true });
        }
      },
      triggerLoad: () => {
        if (mockXHR.onload) mockXHR.onload();
      },
      triggerError: () => {
        if (mockXHR.onerror) mockXHR.onerror();
      },
    };
    vi.stubGlobal('XMLHttpRequest', vi.fn(() => mockXHR));
  };

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('renders upload button by default', () => {
    const wrapper = mount(MYUpload, { props: { action: '/upload' } });
    expect(wrapper.find('.upload-btn').exists()).toBe(true);
  });

  it('renders avatar placeholder when avatar is true and no src', () => {
    const wrapper = mount(MYUpload, { props: { action: '/upload', avatar: true } });
    expect(wrapper.find('.avatar-placeholder').exists()).toBe(true);
  });

  it('renders image when src is provided in avatar mode', () => {
    const wrapper = mount(MYUpload, { props: { action: '/upload', avatar: true, src: 'test.jpg' } });
    const img = wrapper.find('.avatar');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('test.jpg');
  });


  it('handles file change and initiates upload', async () => {
    mockXMLHttpRequest();
    const wrapper = mount(MYUpload, { props: { action: '/upload' } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    expect(mockXHR.open).toHaveBeenCalledWith('POST', '/upload', true);
    expect(mockXHR.send).toHaveBeenCalled();
  });

  it('updates progress during upload', async () => {
    mockXMLHttpRequest();
    const onProgress = vi.fn();
    const wrapper = mount(MYUpload, { props: { action: '/upload', onProgress } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    mockXHR.triggerProgress(50);
    expect(onProgress).toHaveBeenCalledWith(50, expect.any(File));
  });

  it('calls onSuccess and emits success on successful upload', async () => {
    mockXMLHttpRequest();
    const onSuccess = vi.fn();
    const wrapper = mount(MYUpload, { props: { action: '/upload', onSuccess } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    mockXHR.triggerLoad();
    await nextTick();
    expect(onSuccess).toHaveBeenCalledWith({ success: true }, expect.any(File));
    expect(wrapper.emitted('success')).toBeTruthy();
  });

  it('calls onError and emits error on failed upload', async () => {
    mockXMLHttpRequest();
    mockXHR.status = 400;
    mockXHR.responseText = 'error';
    const onError = vi.fn();
    const wrapper = mount(MYUpload, { props: { action: '/upload', onError } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    mockXHR.triggerLoad();
    await nextTick();
    expect(onError).toHaveBeenCalledWith('error', expect.any(File));
    expect(wrapper.emitted('error')).toBeTruthy();
  });

  it('calls onError and emits error on network error', async () => {
    mockXMLHttpRequest();
    const onError = vi.fn();
    const wrapper = mount(MYUpload, { props: { action: '/upload', onError } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    mockXHR.triggerError();
    await nextTick();
    expect(onError).toHaveBeenCalled();
    expect(wrapper.emitted('error')).toBeTruthy();
  });

  it('shows file list when showFileList is true and not avatar', async () => {
    mockXMLHttpRequest();
    const wrapper = mount(MYUpload, { props: { action: '/upload', showFileList: true } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    await nextTick();
    expect(wrapper.find('ul li').text()).toContain('test.png');
  });

  it('does not show file list in avatar mode', async () => {
    mockXMLHttpRequest();
    vi.stubGlobal('URL', { createObjectURL: vi.fn(() => 'blob:url') });
    const wrapper = mount(MYUpload, { props: { action: '/upload', avatar: true, showFileList: true } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    await nextTick();
    expect(wrapper.find('ul').exists()).toBe(false);
  });

  it('handles multiple files when multiple is true', async () => {
    mockXMLHttpRequest();
    const file2 = new File(['content2'], 'test2.png', { type: 'image/png' });
    const wrapper = mount(MYUpload, { props: { action: '/upload', multiple: true, showFileList: true } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile, file2] });
    await input.trigger('change');
    await nextTick();
    const items = wrapper.findAll('ul li');
    expect(items.length).toBe(2);
    expect(items[0].text()).toContain('test.png');
    expect(items[1].text()).toContain('test2.png');
  });

  it('updates previewUrl in avatar mode', async () => {
    mockXMLHttpRequest();
    vi.stubGlobal('URL', { createObjectURL: vi.fn(() => 'blob:url') });
    const wrapper = mount(MYUpload, { props: { action: '/upload', avatar: true } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    await nextTick();
    const img = wrapper.find('.avatar');
    expect(img.attributes('src')).toBe('blob:url');
  });

  it('sets headers if provided', async () => {
    mockXMLHttpRequest();
    const headers = { Authorization: 'token' };
    const wrapper = mount(MYUpload, { props: { action: '/upload', headers } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    expect(mockXHR.setRequestHeader).toHaveBeenCalledWith('Authorization', 'token');
  });

  it('emits progress event', async () => {
    mockXMLHttpRequest();
    const wrapper = mount(MYUpload, { props: { action: '/upload' } });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', { value: [mockFile] });
    await input.trigger('change');
    mockXHR.triggerProgress(50);
    expect(wrapper.emitted('progress')).toEqual([[50, expect.any(File)]]);
  });

  it('clears input value after change', async () => {
    mockXMLHttpRequest();
    const wrapper = mount(MYUpload, { props: { action: '/upload' } });
    const input = wrapper.find('input[type="file"]').element as HTMLInputElement;
    Object.defineProperty(input, 'files', { value: [mockFile] });
    await wrapper.find('input[type="file"]').trigger('change');
    expect(input.value).toBe('');
  });
});