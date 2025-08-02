import { mount } from '@vue/test-utils';
import MYBreadcrumb from '../src/breadcrumb.vue';
import MYBreadcrumbItem from '../src/breadcrumbItem.vue';
import { describe, expect, it } from 'vitest';
import { h } from 'vue';

describe('MYBreadcrumb', () => {
  it('renders default separator', () => {
    const wrapper = mount(MYBreadcrumb, {
      slots: {
        default: () => [h(MYBreadcrumbItem, {}, 'Home')],
      },
    });
    expect(wrapper.find('.my-breadcrumb-separator').text()).toBe('/');
  });

  it('renders custom separator', () => {
    const wrapper = mount(MYBreadcrumb, {
      props: {
        separator: '>',
      },
      slots: {
        default: () => [h(MYBreadcrumbItem, {}, 'Home')],
      },
    });
    expect(wrapper.find('.my-breadcrumb-separator').text()).toBe('>');
  });
});

describe('MYBreadcrumbItem', () => {
  it('renders plain text', () => {
    const wrapper = mount(MYBreadcrumbItem, {
      slots: {
        default: 'Home',
      },
    });
    expect(wrapper.find('.my-breadcrumb-link').text()).toBe('Home');
  });

  it('renders as a link', () => {
    const wrapper = mount(MYBreadcrumbItem, {
      props: {
        to: '/home',
      },
      slots: {
        default: 'Home',
      },
    });
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('a').text()).toBe('Home');
  });

  it('renders separator', () => {
    const wrapper = mount(MYBreadcrumbItem, {
      props: {
        isLast: false,
      },
      slots: {
        default: 'Home',
      },
    });
    expect(wrapper.find('.my-breadcrumb-separator').exists()).toBe(true);
  });
});