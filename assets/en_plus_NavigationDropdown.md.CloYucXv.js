import{_ as a,M as d}from"./chunks/dropdownItem.BzRBRONv.js";import{I as r,o as p,c as h,a8 as l,J as i,w as e,a as s,j as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";const m={style:{display:"flex",gap:"10px","align-items":"center"}},w=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/NavigationDropdown.md","filePath":"en/plus/NavigationDropdown.md"}'),k={name:"en/plus/NavigationDropdown.md"},y=Object.assign(k,{setup(g){return(u,t)=>{const o=r("ShowCode");return p(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[t[35]||(t[35]=l('<h1 id="dropdown" tabindex="-1">Dropdown <a class="header-anchor" href="#dropdown" aria-label="Permalink to “Dropdown”">​</a></h1><h2 id="brief-introduction" tabindex="-1">Brief Introduction <a class="header-anchor" href="#brief-introduction" aria-label="Permalink to “Brief Introduction”">​</a></h2><p>The Dropdown component is used to display a set of actions or menu items. mengyue-components has encapsulated it and performed vitest testing. You can use <code>&lt;MYDropdown&gt;&lt;/MYDropdown&gt;</code> or <code>&lt;MYDropdown /&gt;</code> to implement a dropdown menu component.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><h3 id="basic-dropdown-menu" tabindex="-1">Basic Dropdown Menu <a class="header-anchor" href="#basic-dropdown-menu" aria-label="Permalink to “Basic Dropdown Menu”">​</a></h3><p>Default dropdown menu with hover trigger.</p>',6)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[i(a,null,{default:e(()=>[...t[0]||(t[0]=[s(" Dropdown Menu ",-1)])]),dropdown:e(()=>[i(d,{command:"a"},{default:e(()=>[...t[1]||(t[1]=[s("Action A",-1)])]),_:1}),i(d,{command:"b"},{default:e(()=>[...t[2]||(t[2]=[s("Action B",-1)])]),_:1}),i(d,{command:"c",disabled:""},{default:e(()=>[...t[3]||(t[3]=[s("Disabled Action",-1)])]),_:1}),i(d,{divided:"",command:"d"},{default:e(()=>[...t[4]||(t[4]=[s("Divided Action",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[36]||(t[36]=n("h3",{id:"click-trigger",tabindex:"-1"},[s("Click Trigger "),n("a",{class:"header-anchor",href:"#click-trigger","aria-label":"Permalink to “Click Trigger”"},"​")],-1)),t[37]||(t[37]=n("p",null,[s("Use the "),n("code",null,"trigger"),s(" prop set to "),n("code",null,"click"),s(" to trigger the dropdown menu on click.")],-1)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[i(a,{trigger:"click"},{default:e(()=>[...t[5]||(t[5]=[s(" Click to Trigger ",-1)])]),dropdown:e(()=>[i(d,{command:"1"},{default:e(()=>[...t[6]||(t[6]=[s("Menu Item 1",-1)])]),_:1}),i(d,{command:"2"},{default:e(()=>[...t[7]||(t[7]=[s("Menu Item 2",-1)])]),_:1}),i(d,{command:"3"},{default:e(()=>[...t[8]||(t[8]=[s("Menu Item 3",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[38]||(t[38]=n("h3",{id:"split-button",tabindex:"-1"},[s("Split Button "),n("a",{class:"header-anchor",href:"#split-button","aria-label":"Permalink to “Split Button”"},"​")],-1)),t[39]||(t[39]=n("p",null,[s("Use the "),n("code",null,"split-button"),s(" prop to create a split button dropdown menu.")],-1)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[i(a,{"split-button":""},{default:e(()=>[...t[9]||(t[9]=[s(" Split Button ",-1)])]),dropdown:e(()=>[i(d,{command:"new"},{default:e(()=>[...t[10]||(t[10]=[s("New",-1)])]),_:1}),i(d,{command:"save"},{default:e(()=>[...t[11]||(t[11]=[s("Save",-1)])]),_:1}),i(d,{command:"delete"},{default:e(()=>[...t[12]||(t[12]=[s("Delete",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[40]||(t[40]=n("h3",{id:"different-sizes",tabindex:"-1"},[s("Different Sizes "),n("a",{class:"header-anchor",href:"#different-sizes","aria-label":"Permalink to “Different Sizes”"},"​")],-1)),t[41]||(t[41]=n("p",null,[s("Use the "),n("code",null,"size"),s(" prop to set the dropdown menu size.")],-1)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[n("div",m,[i(a,{size:"sm"},{default:e(()=>[...t[13]||(t[13]=[s(" Small ",-1)])]),dropdown:e(()=>[i(d,{command:"sm1"},{default:e(()=>[...t[14]||(t[14]=[s("Small Item 1",-1)])]),_:1}),i(d,{command:"sm2"},{default:e(()=>[...t[15]||(t[15]=[s("Small Item 2",-1)])]),_:1})]),_:1}),i(a,{size:"md"},{default:e(()=>[...t[16]||(t[16]=[s(" Medium ",-1)])]),dropdown:e(()=>[i(d,{command:"md1"},{default:e(()=>[...t[17]||(t[17]=[s("Medium Item 1",-1)])]),_:1}),i(d,{command:"md2"},{default:e(()=>[...t[18]||(t[18]=[s("Medium Item 2",-1)])]),_:1})]),_:1}),i(a,{size:"lg"},{default:e(()=>[...t[19]||(t[19]=[s(" Large ",-1)])]),dropdown:e(()=>[i(d,{command:"lg1"},{default:e(()=>[...t[20]||(t[20]=[s("Large Item 1",-1)])]),_:1}),i(d,{command:"lg2"},{default:e(()=>[...t[21]||(t[21]=[s("Large Item 2",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[42]||(t[42]=n("h3",{id:"custom-colors",tabindex:"-1"},[s("Custom Colors "),n("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),t[43]||(t[43]=n("p",null,[s("Use the "),n("code",null,"backGroundColor"),s(" and "),n("code",null,"textColor"),s(" props to customize the dropdown menu colors.")],-1)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[i(a,{backGroundColor:"#409eff",textColor:"#fff"},{default:e(()=>[...t[22]||(t[22]=[s(" Custom Colors ",-1)])]),dropdown:e(()=>[i(d,{command:"color1"},{default:e(()=>[...t[23]||(t[23]=[s("Blue Menu Item 1",-1)])]),_:1}),i(d,{command:"color2"},{default:e(()=>[...t[24]||(t[24]=[s("Blue Menu Item 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[44]||(t[44]=n("h3",{id:"hide-dropdown-arrow",tabindex:"-1"},[s("Hide Dropdown Arrow "),n("a",{class:"header-anchor",href:"#hide-dropdown-arrow","aria-label":"Permalink to “Hide Dropdown Arrow”"},"​")],-1)),t[45]||(t[45]=n("p",null,[s("Use the "),n("code",null,"no-caret"),s(" prop to hide the dropdown arrow.")],-1)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[i(a,{"no-caret":""},{default:e(()=>[...t[25]||(t[25]=[s(" No Arrow ",-1)])]),dropdown:e(()=>[i(d,{command:"no1"},{default:e(()=>[...t[26]||(t[26]=[s("Menu Item 1",-1)])]),_:1}),i(d,{command:"no2"},{default:e(()=>[...t[27]||(t[27]=[s("Menu Item 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[46]||(t[46]=n("h3",{id:"menu-items-with-icons",tabindex:"-1"},[s("Menu Items with Icons "),n("a",{class:"header-anchor",href:"#menu-items-with-icons","aria-label":"Permalink to “Menu Items with Icons”"},"​")],-1)),t[47]||(t[47]=n("p",null,"Use icons in DropdownItem.",-1)),i(o,{title:"Code Demo",code:`
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
  `.trim()},{demo:e(()=>[i(a,null,{default:e(()=>[...t[28]||(t[28]=[s(" Menu with Icons ",-1)])]),dropdown:e(()=>[i(d,{command:"edit"},{icon:e(()=>[...t[29]||(t[29]=[n("span",{style:{"margin-right":"8px"}},"📝",-1)])]),default:e(()=>[t[30]||(t[30]=s(" Edit ",-1))]),_:1}),i(d,{command:"copy"},{icon:e(()=>[...t[31]||(t[31]=[n("span",{style:{"margin-right":"8px"}},"📋",-1)])]),default:e(()=>[t[32]||(t[32]=s(" Copy ",-1))]),_:1}),i(d,{command:"delete",divided:""},{icon:e(()=>[...t[33]||(t[33]=[n("span",{style:{"margin-right":"8px"}},"🗑️",-1)])]),default:e(()=>[t[34]||(t[34]=s(" Delete ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[48]||(t[48]=l(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props <a class="header-anchor" href="#dropdown-props" aria-label="Permalink to “Dropdown Props”">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Button type</td><td>string</td><td><code>default</code>/<code>primary</code></td><td><code>default</code></td></tr><tr><td>size</td><td>Size</td><td>string</td><td><code>sm</code>/<code>md</code>/<code>lg</code></td><td><code>md</code></td></tr><tr><td>split-button</td><td>Whether it&#39;s a split button</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>disabled</td><td>Whether to disable</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>placement</td><td>Menu popup position</td><td>string</td><td><code>bottom</code>/<code>top</code>/<code>left</code>/<code>right</code>, etc.</td><td><code>bottom</code></td></tr><tr><td>trigger</td><td>Trigger method</td><td>string</td><td><code>hover</code>/<code>click</code></td><td><code>hover</code></td></tr><tr><td>hide-on-click</td><td>Whether to hide menu after clicking item</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>show-timeout</td><td>Show delay (for hover trigger)</td><td>number</td><td>—</td><td><code>150</code></td></tr><tr><td>hide-timeout</td><td>Hide delay (for hover trigger)</td><td>number</td><td>—</td><td><code>150</code></td></tr><tr><td>max-height</td><td>Maximum height of menu</td><td>string | number</td><td>—</td><td><code>null</code></td></tr><tr><td>back-ground-color</td><td>Background color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>text-color</td><td>Text color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>no-caret</td><td>Whether to hide dropdown arrow</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>teleported</td><td>Whether to use teleport</td><td>boolean</td><td>—</td><td><code>true</code></td></tr></tbody></table><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props <a class="header-anchor" href="#dropdownitem-props" aria-label="Permalink to “DropdownItem Props”">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>command</td><td>Command</td><td>string | number | object</td><td>—</td><td><code>null</code></td></tr><tr><td>disabled</td><td>Whether to disable</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>divided</td><td>Whether to show divider</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>icon</td><td>Icon component</td><td>string | object</td><td>—</td><td><code>null</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to “Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>command</td><td>Triggered when a menu item is clicked</td><td>command: string | number | object</td></tr><tr><td>click</td><td>Triggered when the button is clicked</td><td>event: MouseEvent</td></tr><tr><td>visible-change</td><td>Triggered when menu visibility changes</td><td>visible: boolean</td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DropdownProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  type</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  size</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  splitButton</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  placement</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  trigger</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  hideOnClick</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  showTimeout</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  hideTimeout</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  maxHeight</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backGroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  noCaret</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  teleported</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DropdownItemProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  command</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  divided</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  icon</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,9))])}}});export{w as __pageData,y as default};
