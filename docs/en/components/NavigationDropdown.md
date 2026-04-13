# Dropdown

## Brief Introduction
The Dropdown component is used to display a set of actions or menu items. mengyue-components has encapsulated it and performed vitest testing.
You can use `<MYDropdown></MYDropdown>` or `<MYDropdown />` to implement a dropdown menu component.

## Basic Usage

### Basic Dropdown Menu
Default dropdown menu with hover trigger.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYDropdown>
    <template #default>
      Dropdown Menu
    </template>
    <template #dropdown>
      <MYDropdownItem command='a'>Action A</MYDropdownItem>
      <MYDropdownItem command='b'>Action B</MYDropdownItem>
      <MYDropdownItem command='c' disabled>Disabled Action</MYDropdownItem>
      <MYDropdownItem divided command='d'>Divided Action</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown>
      <template #default>
        Dropdown Menu
      </template>
      <template #dropdown>
        <MYDropdownItem command="a">Action A</MYDropdownItem>
        <MYDropdownItem command="b">Action B</MYDropdownItem>
        <MYDropdownItem command="c" disabled>Disabled Action</MYDropdownItem>
        <MYDropdownItem divided command="d">Divided Action</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### Click Trigger
Use the `trigger` prop set to `click` to trigger the dropdown menu on click.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYDropdown trigger='click'>
    <template #default>
      Click to Trigger
    </template>
    <template #dropdown>
      <MYDropdownItem command='1'>Menu Item 1</MYDropdownItem>
      <MYDropdownItem command='2'>Menu Item 2</MYDropdownItem>
      <MYDropdownItem command='3'>Menu Item 3</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown trigger="click">
      <template #default>
        Click to Trigger
      </template>
      <template #dropdown>
        <MYDropdownItem command="1">Menu Item 1</MYDropdownItem>
        <MYDropdownItem command="2">Menu Item 2</MYDropdownItem>
        <MYDropdownItem command="3">Menu Item 3</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### Split Button
Use the `split-button` prop to create a split button dropdown menu.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYDropdown split-button>
    <template #default>
      Split Button
    </template>
    <template #dropdown>
      <MYDropdownItem command='new'>New</MYDropdownItem>
      <MYDropdownItem command='save'>Save</MYDropdownItem>
      <MYDropdownItem command='delete'>Delete</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown split-button>
      <template #default>
        Split Button
      </template>
      <template #dropdown>
        <MYDropdownItem command="new">New</MYDropdownItem>
        <MYDropdownItem command="save">Save</MYDropdownItem>
        <MYDropdownItem command="delete">Delete</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### Different Sizes
Use the `size` prop to set the dropdown menu size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 10px; align-items: center;'>
    <MYDropdown size='sm'>
      <template #default>
        Small
      </template>
      <template #dropdown>
        <MYDropdownItem command='sm1'>Small Item 1</MYDropdownItem>
        <MYDropdownItem command='sm2'>Small Item 2</MYDropdownItem>
      </template>
    </MYDropdown>
    <MYDropdown size='md'>
      <template #default>
        Medium
      </template>
      <template #dropdown>
        <MYDropdownItem command='md1'>Medium Item 1</MYDropdownItem>
        <MYDropdownItem command='md2'>Medium Item 2</MYDropdownItem>
      </template>
    </MYDropdown>
    <MYDropdown size='lg'>
      <template #default>
        Large
      </template>
      <template #dropdown>
        <MYDropdownItem command='lg1'>Large Item 1</MYDropdownItem>
        <MYDropdownItem command='lg2'>Large Item 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; align-items: center;">
      <MYDropdown size="sm">
        <template #default>
          Small
        </template>
        <template #dropdown>
          <MYDropdownItem command="sm1">Small Item 1</MYDropdownItem>
          <MYDropdownItem command="sm2">Small Item 2</MYDropdownItem>
        </template>
      </MYDropdown>
      <MYDropdown size="md">
        <template #default>
          Medium
        </template>
        <template #dropdown>
          <MYDropdownItem command="md1">Medium Item 1</MYDropdownItem>
          <MYDropdownItem command="md2">Medium Item 2</MYDropdownItem>
        </template>
      </MYDropdown>
      <MYDropdown size="lg">
        <template #default>
          Large
        </template>
        <template #dropdown>
          <MYDropdownItem command="lg1">Large Item 1</MYDropdownItem>
          <MYDropdownItem command="lg2">Large Item 2</MYDropdownItem>
        </template>
      </MYDropdown>
    </div>
  </template>
</ShowCode>

### Custom Colors
Use the `backGroundColor` and `textColor` props to customize the dropdown menu colors.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYDropdown backGroundColor='#409eff' textColor='#fff'>
    <template #default>
      Custom Colors
    </template>
    <template #dropdown>
      <MYDropdownItem command='color1'>Blue Menu Item 1</MYDropdownItem>
      <MYDropdownItem command='color2'>Blue Menu Item 2</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown backGroundColor="#409eff" textColor="#fff">
      <template #default>
        Custom Colors
      </template>
      <template #dropdown>
        <MYDropdownItem command="color1">Blue Menu Item 1</MYDropdownItem>
        <MYDropdownItem command="color2">Blue Menu Item 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### Hide Dropdown Arrow
Use the `no-caret` prop to hide the dropdown arrow.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYDropdown no-caret>
    <template #default>
      No Arrow
    </template>
    <template #dropdown>
      <MYDropdownItem command='no1'>Menu Item 1</MYDropdownItem>
      <MYDropdownItem command='no2'>Menu Item 2</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown no-caret>
      <template #default>
        No Arrow
      </template>
      <template #dropdown>
        <MYDropdownItem command="no1">Menu Item 1</MYDropdownItem>
        <MYDropdownItem command="no2">Menu Item 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### Menu Items with Icons
Use icons in DropdownItem.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYDropdown>
    <template #default>
      Menu with Icons
    </template>
    <template #dropdown>
      <MYDropdownItem command='edit' :icon='EditIcon'>
        Edit
      </MYDropdownItem>
      <MYDropdownItem command='copy' :icon='CopyIcon'>
        Copy
      </MYDropdownItem>
      <MYDropdownItem command='delete' :icon='DeleteIcon' divided>
        Delete
      </MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown>
      <template #default>
        Menu with Icons
      </template>
      <template #dropdown>
        <MYDropdownItem command="edit">
          <template #icon>
            <span style="margin-right: 8px;">📝</span>
          </template>
          Edit
        </MYDropdownItem>
        <MYDropdownItem command="copy">
          <template #icon>
            <span style="margin-right: 8px;">📋</span>
          </template>
          Copy
        </MYDropdownItem>
        <MYDropdownItem command="delete" divided>
          <template #icon>
            <span style="margin-right: 8px;">🗑️</span>
          </template>
          Delete
        </MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

## API Reference

### Dropdown Props

| Prop              | Description                              | Type                | Options                                      | Default   |
|-------------------|------------------------------------------|---------------------|----------------------------------------------|-----------|
| type              | Button type                              | string              | `default`/`primary`                          | `default` |
| size              | Size                                     | string              | `sm`/`md`/`lg`                               | `md`      |
| split-button      | Whether it's a split button              | boolean             | —                                            | `false`   |
| disabled          | Whether to disable                       | boolean             | —                                            | `false`   |
| placement         | Menu popup position                      | string              | `bottom`/`top`/`left`/`right`, etc.          | `bottom`  |
| trigger           | Trigger method                           | string              | `hover`/`click`                              | `hover`   |
| hide-on-click     | Whether to hide menu after clicking item | boolean             | —                                            | `true`    |
| show-timeout      | Show delay (for hover trigger)           | number              | —                                            | `150`     |
| hide-timeout      | Hide delay (for hover trigger)           | number              | —                                            | `150`     |
| max-height        | Maximum height of menu                   | string \| number    | —                                            | `null`    |
| back-ground-color | Background color                         | string              | —                                            | `''`      |
| text-color        | Text color                               | string              | —                                            | `''`      |
| no-caret          | Whether to hide dropdown arrow           | boolean             | —                                            | `false`   |
| teleported        | Whether to use teleport                  | boolean             | —                                            | `true`    |

### DropdownItem Props

| Prop              | Description                              | Type                     | Options | Default |
|-------------------|------------------------------------------|--------------------------|---------|---------|
| command           | Command                                  | string \| number \| object | —       | `null`  |
| disabled          | Whether to disable                       | boolean                  | —       | `false` |
| divided           | Whether to show divider                  | boolean                  | —       | `false` |
| icon              | Icon component                           | string \| object         | —       | `null`  |

### Events

| Event Name     | Description                              | Parameters                           |
|----------------|------------------------------------------|--------------------------------------|
| command        | Triggered when a menu item is clicked    | command: string \| number \| object  |
| click          | Triggered when the button is clicked     | event: MouseEvent                    |
| visible-change | Triggered when menu visibility changes   | visible: boolean                     |

### Type Definitions

```typescript
interface DropdownProps {
  type?: string;
  size?: string;
  splitButton?: boolean;
  disabled?: boolean;
  placement?: string;
  trigger?: string;
  hideOnClick?: boolean;
  showTimeout?: number;
  hideTimeout?: number;
  maxHeight?: string | number;
  backGroundColor?: string;
  textColor?: string;
  noCaret?: boolean;
  teleported?: boolean;
}

interface DropdownItemProps {
  command?: string | number | object;
  disabled?: boolean;
  divided?: boolean;
  icon?: string | object;
}
```

<script setup> 
import MYDropdown from '../../../packages/components/dropdown/src/dropdown.vue' 
import MYDropdownItem from '../../../packages/components/dropdown/src/dropdownItem.vue' 
</script>
