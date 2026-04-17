import{_ as r,a as n,b as d}from"./chunks/menusubMenu.vue_vue_type_script_setup_true_lang.CN53R8Fy.js";import{I as o,o as h,c as k,a8 as p,J as s,w as t,j as a,a as i}from"./chunks/framework.DvHWw5tv.js";const u={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},m={style:{background:"#2f3b46","border-radius":"6px"}},g={style:{width:"240px","border-radius":"6px",overflow:"hidden"}},M={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},b={style:{background:"#2f3b46","border-radius":"6px"}},D=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/NavigationMenu.md","filePath":"en/components/NavigationMenu.md"}'),y={name:"en/components/NavigationMenu.md"},Y=Object.assign(y,{setup(f){return(c,e)=>{const l=o("ShowCode");return h(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[42]||(e[42]=p('<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-label="Permalink to “Menu”">​</a></h1><h2 id="brief-introduction" tabindex="-1">Brief Introduction <a class="header-anchor" href="#brief-introduction" aria-label="Permalink to “Brief Introduction”">​</a></h2><p>The Menu navigation component provides sidebar and top navigation functionality. <code>mengyue-components</code> has encapsulated it and performed <code>vitest</code> testing. You can use <code>&lt;MYMenu&gt;&lt;/MYMenu&gt;</code> or <code>&lt;MYMenu /&gt;</code> to implement a navigation menu component.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><h3 id="vertical-menu" tabindex="-1">Vertical Menu <a class="header-anchor" href="#vertical-menu" aria-label="Permalink to “Vertical Menu”">​</a></h3><p>Default vertical menu, supports multi-level nesting.</p>',6)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[a("div",u,[s(r,{"default-active":"1"},{default:t(()=>[s(n,{index:"1"},{icon:t(()=>[...e[0]||(e[0]=[i("🏠",-1)])]),default:t(()=>[e[1]||(e[1]=i(" Home ",-1))]),_:1}),s(n,{index:"2"},{icon:t(()=>[...e[2]||(e[2]=[i("📊",-1)])]),default:t(()=>[e[3]||(e[3]=i(" Statistics ",-1))]),_:1}),s(d,{index:"3"},{icon:t(()=>[...e[4]||(e[4]=[i("⚙️",-1)])]),title:t(()=>[...e[5]||(e[5]=[i("System Management",-1)])]),default:t(()=>[s(n,{index:"3-1"},{default:t(()=>[...e[6]||(e[6]=[i("User Management",-1)])]),_:1}),s(n,{index:"3-2"},{default:t(()=>[...e[7]||(e[7]=[i("Role Management",-1)])]),_:1}),s(d,{index:"3-3"},{title:t(()=>[...e[8]||(e[8]=[i("Permission Management",-1)])]),default:t(()=>[s(n,{index:"3-3-1"},{default:t(()=>[...e[9]||(e[9]=[i("Menu Permissions",-1)])]),_:1}),s(n,{index:"3-3-2"},{default:t(()=>[...e[10]||(e[10]=[i("Operation Permissions",-1)])]),_:1})]),_:1})]),_:1}),s(n,{index:"4",disabled:""},{icon:t(()=>[...e[11]||(e[11]=[i("🔒",-1)])]),default:t(()=>[e[12]||(e[12]=i(" Disabled Menu ",-1))]),_:1})]),_:1})])]),_:1},8,["code"]),e[43]||(e[43]=a("h3",{id:"horizontal-menu",tabindex:"-1"},[i("Horizontal Menu "),a("a",{class:"header-anchor",href:"#horizontal-menu","aria-label":"Permalink to “Horizontal Menu”"},"​")],-1)),e[44]||(e[44]=a("p",null,[i("Use the "),a("code",null,"mode"),i(" property set to "),a("code",null,"horizontal"),i(" to create a horizontal menu.")],-1)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[a("div",m,[s(r,{mode:"horizontal","default-active":"1"},{default:t(()=>[s(n,{index:"1"},{default:t(()=>[...e[13]||(e[13]=[i("Home",-1)])]),_:1}),s(n,{index:"2"},{default:t(()=>[...e[14]||(e[14]=[i("Products",-1)])]),_:1}),s(d,{index:"3"},{title:t(()=>[...e[15]||(e[15]=[i("Services",-1)])]),default:t(()=>[s(n,{index:"3-1"},{default:t(()=>[...e[16]||(e[16]=[i("Cloud Services",-1)])]),_:1}),s(n,{index:"3-2"},{default:t(()=>[...e[17]||(e[17]=[i("Technical Support",-1)])]),_:1})]),_:1}),s(n,{index:"4"},{default:t(()=>[...e[18]||(e[18]=[i("About Us",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),e[45]||(e[45]=a("h3",{id:"custom-colors",tabindex:"-1"},[i("Custom Colors "),a("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),e[46]||(e[46]=a("p",null,[i("Use the "),a("code",null,"backgroundColor"),i(", "),a("code",null,"textColor"),i(", and "),a("code",null,"activeTextColor"),i(" properties to customize menu colors.")],-1)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[a("div",g,[s(r,{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:t(()=>[s(n,{index:"1"},{icon:t(()=>[...e[19]||(e[19]=[i("🌟",-1)])]),default:t(()=>[e[20]||(e[20]=i(" Golden Theme ",-1))]),_:1}),s(n,{index:"2"},{icon:t(()=>[...e[21]||(e[21]=[i("🎨",-1)])]),default:t(()=>[e[22]||(e[22]=i(" Color Customization ",-1))]),_:1}),s(d,{index:"3"},{icon:t(()=>[...e[23]||(e[23]=[i("🔧",-1)])]),title:t(()=>[...e[24]||(e[24]=[i("Settings",-1)])]),default:t(()=>[s(n,{index:"3-1"},{default:t(()=>[...e[25]||(e[25]=[i("Theme Settings",-1)])]),_:1}),s(n,{index:"3-2"},{default:t(()=>[...e[26]||(e[26]=[i("Color Settings",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e[47]||(e[47]=a("h3",{id:"unique-opened-menu",tabindex:"-1"},[i("Unique Opened Menu "),a("a",{class:"header-anchor",href:"#unique-opened-menu","aria-label":"Permalink to “Unique Opened Menu”"},"​")],-1)),e[48]||(e[48]=a("p",null,[i("Use the "),a("code",null,"unique-opened"),i(" property to ensure only one submenu can be expanded at a time.")],-1)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[a("div",M,[s(r,{"unique-opened":"","default-active":"1"},{default:t(()=>[s(n,{index:"1"},{icon:t(()=>[...e[27]||(e[27]=[i("📁",-1)])]),default:t(()=>[e[28]||(e[28]=i(" Document Management ",-1))]),_:1}),s(d,{index:"2"},{icon:t(()=>[...e[29]||(e[29]=[i("👥",-1)])]),title:t(()=>[...e[30]||(e[30]=[i("User Management",-1)])]),default:t(()=>[s(n,{index:"2-1"},{default:t(()=>[...e[31]||(e[31]=[i("User List",-1)])]),_:1}),s(n,{index:"2-2"},{default:t(()=>[...e[32]||(e[32]=[i("User Groups",-1)])]),_:1})]),_:1}),s(d,{index:"3"},{icon:t(()=>[...e[33]||(e[33]=[i("🔐",-1)])]),title:t(()=>[...e[34]||(e[34]=[i("Permission Management",-1)])]),default:t(()=>[s(n,{index:"3-1"},{default:t(()=>[...e[35]||(e[35]=[i("Role Management",-1)])]),_:1}),s(n,{index:"3-2"},{default:t(()=>[...e[36]||(e[36]=[i("Permission Settings",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e[49]||(e[49]=a("h3",{id:"hover-trigger",tabindex:"-1"},[i("Hover Trigger "),a("a",{class:"header-anchor",href:"#hover-trigger","aria-label":"Permalink to “Hover Trigger”"},"​")],-1)),e[50]||(e[50]=a("p",null,[i("Use the "),a("code",null,"trigger"),i(" property set to "),a("code",null,"hover"),i(" to trigger submenu expansion on hover.")],-1)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[a("div",b,[s(r,{trigger:"hover","default-active":"1"},{default:t(()=>[s(n,{index:"1"},{default:t(()=>[...e[37]||(e[37]=[i("Home",-1)])]),_:1}),s(d,{index:"2"},{title:t(()=>[...e[38]||(e[38]=[i("Hover Menu",-1)])]),default:t(()=>[s(n,{index:"2-1"},{default:t(()=>[...e[39]||(e[39]=[i("Option One",-1)])]),_:1}),s(n,{index:"2-2"},{default:t(()=>[...e[40]||(e[40]=[i("Option Two",-1)])]),_:1})]),_:1}),s(n,{index:"3"},{default:t(()=>[...e[41]||(e[41]=[i("Contact Us",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),e[51]||(e[51]=p(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="menu-props" tabindex="-1">Menu Props <a class="header-anchor" href="#menu-props" aria-label="Permalink to “Menu Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>default-active</td><td>Index of the default active menu</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>mode</td><td>Menu mode</td><td>string</td><td><code>vertical</code> / <code>horizontal</code></td><td><code>vertical</code></td></tr><tr><td>collapse</td><td>Whether to collapse the menu horizontally</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>background-color</td><td>Menu background color</td><td>string</td><td>—</td><td><code>#2f3b46</code></td></tr><tr><td>text-color</td><td>Menu text color</td><td>string</td><td>—</td><td><code>#bfcbd9</code></td></tr><tr><td>active-text-color</td><td>Text color of the active menu</td><td>string</td><td>—</td><td><code>#409EFF</code></td></tr><tr><td>trigger</td><td>Trigger method for opening submenu</td><td>string</td><td><code>click</code> / <code>hover</code></td><td><code>click</code></td></tr><tr><td>unique-opened</td><td>Whether to keep only one submenu expanded</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>default-openeds</td><td>Array of default opened sub-menu indices</td><td>array</td><td>—</td><td><code>[]</code></td></tr><tr><td>collapse-transition</td><td>Whether to enable collapse animation</td><td>boolean</td><td>—</td><td><code>true</code></td></tr></tbody></table><h3 id="menuitem-props" tabindex="-1">MenuItem Props <a class="header-anchor" href="#menuitem-props" aria-label="Permalink to “MenuItem Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>Unique identifier</td><td>string</td><td>—</td><td><code>Required</code></td></tr><tr><td>disabled</td><td>Whether disabled</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="submenu-props" tabindex="-1">SubMenu Props <a class="header-anchor" href="#submenu-props" aria-label="Permalink to “SubMenu Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>Unique identifier</td><td>string</td><td>—</td><td><code>Required</code></td></tr><tr><td>trigger</td><td>Trigger method for opening submenu</td><td>string</td><td><code>click</code> / <code>hover</code></td><td><code>Inherits from Menu</code></td></tr><tr><td>teleported</td><td>Whether to use teleport</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to “Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>Menu activation callback</td><td>index: string, indexPath: string[]</td></tr><tr><td>open</td><td>Sub-menu expand callback</td><td>index: string, indexPath: string[]</td></tr><tr><td>close</td><td>Sub-menu collapse callback</td><td>index: string, indexPath: string[]</td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MenuProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  defaultActive</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  mode</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vertical</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">horizontal</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  collapse</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  activeTextColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  trigger</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">click</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hover</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  uniqueOpened</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  defaultOpeneds</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  collapseTransition</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MenuItemProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> SubMenuProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  trigger</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">click</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hover</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  teleported</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,11))])}}});export{D as __pageData,Y as default};
