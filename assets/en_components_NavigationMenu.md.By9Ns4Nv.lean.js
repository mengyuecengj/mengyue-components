import{_ as r,a as n,b as d}from"./chunks/menusubMenu.vue_vue_type_script_setup_true_lang.CN53R8Fy.js";import{I as o,o as h,c as k,a8 as p,J as s,w as t,j as a,a as i}from"./chunks/framework.DvHWw5tv.js";const u={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},m={style:{background:"#2f3b46","border-radius":"6px"}},g={style:{width:"240px","border-radius":"6px",overflow:"hidden"}},M={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},b={style:{background:"#2f3b46","border-radius":"6px"}},D=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/NavigationMenu.md","filePath":"en/components/NavigationMenu.md"}'),y={name:"en/components/NavigationMenu.md"},Y=Object.assign(y,{setup(f){return(c,e)=>{const l=o("ShowCode");return h(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[42]||(e[42]=p("",6)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[a("div",b,[s(r,{trigger:"hover","default-active":"1"},{default:t(()=>[s(n,{index:"1"},{default:t(()=>[...e[37]||(e[37]=[i("Home",-1)])]),_:1}),s(d,{index:"2"},{title:t(()=>[...e[38]||(e[38]=[i("Hover Menu",-1)])]),default:t(()=>[s(n,{index:"2-1"},{default:t(()=>[...e[39]||(e[39]=[i("Option One",-1)])]),_:1}),s(n,{index:"2-2"},{default:t(()=>[...e[40]||(e[40]=[i("Option Two",-1)])]),_:1})]),_:1}),s(n,{index:"3"},{default:t(()=>[...e[41]||(e[41]=[i("Contact Us",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),e[51]||(e[51]=p("",11))])}}});export{D as __pageData,Y as default};
