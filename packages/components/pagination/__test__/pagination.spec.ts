import { mount } from '@vue/test-utils';
import MYPagination from '../src/pagination.vue';
import { describe, expect, it } from 'vitest';

describe('MYPagination', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(MYPagination, {
      props: {
        total: 100,
        pageSize: 10,
      },
    });

    expect(wrapper.find('.my-pagination').exists()).toBe(true);
  });

  it('emits change event when page is changed', async () => {
    const wrapper = mount(MYPagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
      },
    });

    const nextButton = wrapper.find('.btn-next');
    if (nextButton.exists()) {
      await nextButton.trigger('click');
      expect(wrapper.emitted('change')).toBeTruthy();
      expect(wrapper.emitted('change')?.[0]).toEqual([2, 10]);
    }
  });

  it('updates page size when size is changed', async () => {
    const wrapper = mount(MYPagination, {
      props: {
        total: 100,
        pageSizes: [10, 20, 30],
        pageSize: 10,
      },
    });

    const sizeSelect = wrapper.find('.page-sizes');
    if (sizeSelect.exists()) {
      await sizeSelect.setValue('20');
      expect(wrapper.emitted('update:page-size')).toBeTruthy();
      expect(wrapper.emitted('update:page-size')?.[0]).toEqual([20]);
    }
  });

  it('jumps to specified page', async () => {
    const wrapper = mount(MYPagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
      },
    });

    const jumperInput = wrapper.find('.jumper input');
    if (jumperInput.exists()) {
      await jumperInput.setValue('5');
      expect(wrapper.emitted('update:current-page')).toBeTruthy();
      expect(wrapper.emitted('update:current-page')?.[0]).toEqual([5]);
    }
  });

  it('hides when hideOnSinglePage is true and totalPages is 1', () => {
    const wrapper = mount(MYPagination, {
      props: {
        total: 10,
        pageSize: 10,
        hideOnSinglePage: true,
      },
    });

    expect(wrapper.find('.my-pagination').exists()).toBe(false);
  });

  it('disables buttons when disabled is true', () => {
    const wrapper = mount(MYPagination, {
      props: {
        total: 100,
        pageSize: 10,
        disabled: true,
      },
    });

    const buttons = wrapper.findAll('.btn-prev, .btn-next, .pager .pager-item');
    buttons.forEach(button => {
      expect(button.attributes('disabled')).toBe('');
    });
  });
});