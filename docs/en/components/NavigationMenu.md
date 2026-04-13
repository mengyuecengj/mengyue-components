# Menu

## Brief Introduction
The Menu navigation component provides sidebar and top navigation functionality. `mengyue-components` has encapsulated it and performed `vitest` testing.
You can use `<MYMenu></MYMenu>` or `<MYMenu />` to implement a navigation menu component.

## Basic Usage

### Vertical Menu
Default vertical menu, supports multi-level nesting.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYMenu default-active='1'>
    <MYMenuItem index='1'>
      <template #icon>🏠</template>
      Home
    </MYMenuItem>
    <MYMenuItem index='2'>
      <template #icon>📊</template>
      Statistics
    </MYMenuItem>
    <MYSubMenu index='3'>
      <template #icon>⚙️</template>
      <template #title>System Management</template>
      <MYMenuItem index='3-1'>User Management</MYMenuItem>
      <MYMenuItem index='3-2'>Role Management</MYMenuItem>
      <MYSubMenu index='3-3'>
        <template #title>Permission Management</template>
        <MYMenuItem index='3-3-1'>Menu Permissions</MYMenuItem>
        <MYMenuItem index='3-3-2'>Operation Permissions</MYMenuItem>
      </MYSubMenu>
    </MYSubMenu>
    <MYMenuItem index='4' disabled>
      <template #icon>🔒</template>
      Disabled Menu
    </MYMenuItem>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="width: 240px; background: #2f3b46; border-radius: 6px; padding: 8px 0;">
      <MYMenu default-active="1">
        <MYMenuItem index="1">
          <template #icon>🏠</template>
          Home
        </MYMenuItem>
        <MYMenuItem index="2">
          <template #icon>📊</template>
          Statistics
        </MYMenuItem>
        <MYSubMenu index="3">
          <template #icon>⚙️</template>
          <template #title>System Management</template>
          <MYMenuItem index="3-1">User Management</MYMenuItem>
          <MYMenuItem index="3-2">Role Management</MYMenuItem>
          <MYSubMenu index="3-3">
            <template #title>Permission Management</template>
            <MYMenuItem index="3-3-1">Menu Permissions</MYMenuItem>
            <MYMenuItem index="3-3-2">Operation Permissions</MYMenuItem>
          </MYSubMenu>
        </MYSubMenu>
        <MYMenuItem index="4" disabled>
          <template #icon>🔒</template>
          Disabled Menu
        </MYMenuItem>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### Horizontal Menu
Use the `mode` property set to `horizontal` to create a horizontal menu.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYMenu mode='horizontal' default-active='1'>
    <MYMenuItem index='1'>Home</MYMenuItem>
    <MYMenuItem index='2'>Products</MYMenuItem>
    <MYSubMenu index='3'>
      <template #title>Services</template>
      <MYMenuItem index='3-1'>Cloud Services</MYMenuItem>
      <MYMenuItem index='3-2'>Technical Support</MYMenuItem>
    </MYSubMenu>
    <MYMenuItem index='4'>About Us</MYMenuItem>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="background: #2f3b46; border-radius: 6px;">
      <MYMenu mode="horizontal" default-active="1">
        <MYMenuItem index="1">Home</MYMenuItem>
        <MYMenuItem index="2">Products</MYMenuItem>
        <MYSubMenu index="3">
          <template #title>Services</template>
          <MYMenuItem index="3-1">Cloud Services</MYMenuItem>
          <MYMenuItem index="3-2">Technical Support</MYMenuItem>
        </MYSubMenu>
        <MYMenuItem index="4">About Us</MYMenuItem>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### Custom Colors
Use the `backgroundColor`, `textColor`, and `activeTextColor` properties to customize menu colors.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYMenu 
    default-active='1'
    background-color='#545c64'
    text-color='#fff'
    active-text-color='#ffd04b'
  >
    <MYMenuItem index='1'>
      <template #icon>🌟</template>
      Golden Theme
    </MYMenuItem>
    <MYMenuItem index='2'>
      <template #icon>🎨</template>
      Color Customization
    </MYMenuItem>
    <MYSubMenu index='3'>
      <template #icon>🔧</template>
      <template #title>Settings</template>
      <MYMenuItem index='3-1'>Theme Settings</MYMenuItem>
      <MYMenuItem index='3-2'>Color Settings</MYMenuItem>
    </MYSubMenu>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="width: 240px; border-radius: 6px; overflow: hidden;">
      <MYMenu 
        default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <MYMenuItem index="1">
          <template #icon>🌟</template>
          Golden Theme
        </MYMenuItem>
        <MYMenuItem index="2">
          <template #icon>🎨</template>
          Color Customization
        </MYMenuItem>
        <MYSubMenu index="3">
          <template #icon>🔧</template>
          <template #title>Settings</template>
          <MYMenuItem index="3-1">Theme Settings</MYMenuItem>
          <MYMenuItem index="3-2">Color Settings</MYMenuItem>
        </MYSubMenu>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### Unique Opened Menu
Use the `unique-opened` property to ensure only one submenu can be expanded at a time.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYMenu unique-opened default-active='1'>
    <MYMenuItem index='1'>
      <template #icon>📁</template>
      Document Management
    </MYMenuItem>
    <MYSubMenu index='2'>
      <template #icon>👥</template>
      <template #title>User Management</template>
      <MYMenuItem index='2-1'>User List</MYMenuItem>
      <MYMenuItem index='2-2'>User Groups</MYMenuItem>
    </MYSubMenu>
    <MYSubMenu index='3'>
      <template #icon>🔐</template>
      <template #title>Permission Management</template>
      <MYMenuItem index='3-1'>Role Management</MYMenuItem>
      <MYMenuItem index='3-2'>Permission Settings</MYMenuItem>
    </MYSubMenu>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="width: 240px; background: #2f3b46; border-radius: 6px; padding: 8px 0;">
      <MYMenu unique-opened default-active="1">
        <MYMenuItem index="1">
          <template #icon>📁</template>
          Document Management
        </MYMenuItem>
        <MYSubMenu index="2">
          <template #icon>👥</template>
          <template #title>User Management</template>
          <MYMenuItem index="2-1">User List</MYMenuItem>
          <MYMenuItem index="2-2">User Groups</MYMenuItem>
        </MYSubMenu>
        <MYSubMenu index="3">
          <template #icon>🔐</template>
          <template #title>Permission Management</template>
          <MYMenuItem index="3-1">Role Management</MYMenuItem>
          <MYMenuItem index="3-2">Permission Settings</MYMenuItem>
        </MYSubMenu>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### Hover Trigger
Use the `trigger` property set to `hover` to trigger submenu expansion on hover.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYMenu trigger='hover' default-active='1'>
    <MYMenuItem index='1'>Home</MYMenuItem>
    <MYSubMenu index='2'>
      <template #title>Hover Menu</template>
      <MYMenuItem index='2-1'>Option One</MYMenuItem>
      <MYMenuItem index='2-2'>Option Two</MYMenuItem>
    </MYSubMenu>
    <MYMenuItem index='3'>Contact Us</MYMenuItem>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="background: #2f3b46; border-radius: 6px;">
      <MYMenu trigger="hover" default-active="1">
        <MYMenuItem index="1">Home</MYMenuItem>
        <MYSubMenu index="2">
          <template #title>Hover Menu</template>
          <MYMenuItem index="2-1">Option One</MYMenuItem>
          <MYMenuItem index="2-2">Option Two</MYMenuItem>
        </MYSubMenu>
        <MYMenuItem index="3">Contact Us</MYMenuItem>
      </MYMenu>
    </div>
  </template>
</ShowCode>

## API Reference

### Menu Props
| Parameter          | Description                              | Type     | Options                   | Default     |
|--------------------|------------------------------------------|----------|---------------------------|-------------|
| default-active     | Index of the default active menu         | string   | —                         | `''`        |
| mode               | Menu mode                                | string   | `vertical` / `horizontal` | `vertical`  |
| collapse           | Whether to collapse the menu horizontally | boolean  | —                         | `false`     |
| background-color   | Menu background color                    | string   | —                         | `#2f3b46`   |
| text-color         | Menu text color                          | string   | —                         | `#bfcbd9`   |
| active-text-color  | Text color of the active menu            | string   | —                         | `#409EFF`   |
| trigger            | Trigger method for opening submenu       | string   | `click` / `hover`         | `click`     |
| unique-opened      | Whether to keep only one submenu expanded | boolean  | —                         | `false`     |
| default-openeds    | Array of default opened sub-menu indices | array    | —                         | `[]`        |
| collapse-transition| Whether to enable collapse animation     | boolean  | —                         | `true`      |

### MenuItem Props
| Parameter | Description      | Type     | Options | Default    |
|-----------|------------------|----------|---------|------------|
| index     | Unique identifier| string   | —       | `Required` |
| disabled  | Whether disabled | boolean  | —       | `false`    |

### SubMenu Props
| Parameter | Description                       | Type     | Options            | Default            |
|-----------|-----------------------------------|----------|--------------------|--------------------|
| index     | Unique identifier                 | string   | —                  | `Required`         |
| trigger   | Trigger method for opening submenu| string   | `click` / `hover`  | `Inherits from Menu` |
| teleported| Whether to use teleport           | boolean  | —                  | `false`            |

### Events
| Event Name | Description                | Parameters                         |
|------------|----------------------------|------------------------------------|
| select     | Menu activation callback   | index: string, indexPath: string[] |
| open       | Sub-menu expand callback   | index: string, indexPath: string[] |
| close      | Sub-menu collapse callback | index: string, indexPath: string[] |

### Type Definitions
```typescript
interface MenuProps {
  defaultActive?: string;
  mode?: 'vertical' | 'horizontal';
  collapse?: boolean;
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  trigger?: 'click' | 'hover';
  uniqueOpened?: boolean;
  defaultOpeneds?: string[];
  collapseTransition?: boolean;
}

interface MenuItemProps {
  index: string;
  disabled?: boolean;
}

interface SubMenuProps {
  index: string;
  trigger?: 'click' | 'hover';
  teleported?: boolean;
}
```
<script setup> 
import { ref } from 'vue' 
import MYMenu from '../../../packages/components/menu/src/menu.vue' 
import MYMenuItem from '../../../packages/components/menu/src/menuItem.vue' 
import MYSubMenu from '../../../packages/components/menu/src/menusubMenu.vue' 
const isCollapsed = ref(false) 
const toggleCollapse = () => { 
    isCollapsed.value = !isCollapsed.value 
} 
</script>