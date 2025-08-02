import { mount } from '@vue/test-utils';
import Table from '../src/table.vue';
import { describe, expect, it } from 'vitest';

describe('Table Component', () => {
  const testData = [
    { id: 1, name: '张三', age: 25, gender: '男' },
    { id: 2, name: '李四', age: 30, gender: '女' },
    { id: 3, name: '王五', age: 28, gender: '男' }
  ];

  const testColumns = [
    { prop: 'name', label: '姓名', sortable: true },
    { prop: 'age', label: '年龄', filterable: true },
    { prop: 'gender', label: '性别' }
  ];

  it('renders basic table with data', () => {
    const wrapper = mount(Table, {
      props: {
        data: testData,
        columns: testColumns
      }
    });

    expect(wrapper.find('table').exists()).toBe(true);
    expect(wrapper.findAll('tbody tr').length).toBe(testData.length);
  });

  it('selects rows when selection enabled', async () => {
    const wrapper = mount(Table, {
      props: {
        data: testData,
        columns: testColumns,
        selection: 'multiple'
      }
    });

    await wrapper.find('tbody input[type="checkbox"]').setValue(true);
    expect(wrapper.emitted('selection-change')).toBeTruthy();
  });

  it('applies bordered class when border prop is true', () => {
    const wrapper = mount(Table, {
      props: {
        data: testData,
        columns: testColumns,
        border: true
      }
    });

    expect(wrapper.find('.bordered').exists()).toBe(true);
  });

  it('applies stripe class when stripe prop is true', () => {
    const wrapper = mount(Table, {
      props: {
        data: testData,
        columns: testColumns,
        stripe: true
      }
    });

    expect(wrapper.find('.stripe').exists()).toBe(true);
  });
});