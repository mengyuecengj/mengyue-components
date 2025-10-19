// tests/table.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Table from '../src/table.vue'

describe('Table.vue', () => {
  const columns = [
    { prop: 'id', label: 'ID', width: '50px', className: '' },
    { prop: 'name', label: 'Name', width: '150px', className: '' }
  ]
  const data = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' }
  ]

  it('renders table header and rows correctly', () => {
    const wrapper = mount(Table, {
      props: { columns, data }
    })

    const ths = wrapper.findAll('thead th')
    expect(ths.length).toBe(columns.length)
    expect(ths[0].text()).toBe('ID')
    expect(ths[1].text()).toBe('Name')
    expect(ths[0].attributes('style')).toContain('width: 50px;')
    expect(ths[1].attributes('style')).toContain('width: 150px;')

    const trs = wrapper.findAll('tbody tr')
    expect(trs.length).toBe(data.length)
    expect(trs[0].find('[data-column="id"]').text()).toBe('1')
    expect(trs[0].find('[data-column="name"]').text()).toBe('张三')
  })

  it('applies stripe background color on odd rows', () => {
    const stripeColor = '#f0f0f0'
    const wrapper = mount(Table, {
      attachTo: document.body,  // 让 getComputedStyle 有元素挂载点
      props: { columns, data, stripe: stripeColor }
    })

    const trs = wrapper.findAll('tbody tr')
    const el0 = trs[0].element as HTMLElement
    const el1 = trs[1].element as HTMLElement

    const bg0 = getComputedStyle(el0).backgroundColor
    const bg1 = getComputedStyle(el1).backgroundColor

    // #f0f0f0 的 rgb 是 rgb(240, 240, 240)
    expect(bg0).not.toBe('rgb(240, 240, 240)')
    expect(bg1).toBe('rgb(240, 240, 240)')

    wrapper.unmount()
  })

  it('renders custom slot content for a column', () => {
    const wrapper = mount(Table, {
      props: { columns, data },
      slots: {
        name: ({ row }: { row: Record<string, unknown> }) => `姓名: ${row.name}`
      }
    })

    const firstRowNameCell = wrapper.find('tbody tr:first-child td[data-column="name"]')
    expect(firstRowNameCell.text()).toBe('姓名: 张三')
  })

  it('sets CSS variable --table-border-color from borderColor prop', () => {
    const borderColor = 'red'
    const wrapper = mount(Table, {
      props: { columns, data, borderColor }
    })

    expect(wrapper.attributes('style')).toContain(`--table-border-color: ${borderColor}`)
  })
})
