import { mount } from '@vue/test-utils';
import MYContainer from '../src/container.vue';
import { describe, it, expect } from 'vitest';

describe('MYContainer', () => {
  it('renders with default tag (div)', () => {
    const wrapper = mount(MYContainer);
    expect(wrapper.element.tagName.toLowerCase()).toBe('div');
  });

  it('renders with custom tag', () => {
    const wrapper = mount(MYContainer, {
      props: { tag: 'section' },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('section');
  });

  it('correctly classifies and orders children', () => {
    const Header = { name: 'Header', template: '<div>Header</div>' };
    const Footer = { name: 'Footer', template: '<div>Footer</div>' };
    const Aside = { name: 'Aside', template: '<div>Aside</div>', props: { position: 'left' } };
    const Main = { name: 'Main', template: '<div>Main</div>' };

    const wrapper = mount(MYContainer, {
      slots: {
        default: [Header, Aside, Main, Footer],
      },
    });

    const children = wrapper.findAll('div > *');
    expect(children[0].text()).toBe('HeaderAsideMainFooter');
    expect(children[1].text()).toBe('Header');
    expect(children[2].text()).toBe('AsideMain');
    expect(children[3].text()).toBe('Aside');
  });
});
