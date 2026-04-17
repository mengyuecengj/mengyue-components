import{_ as p,a as n,b as d}from"./chunks/menusubMenu.vue_vue_type_script_setup_true_lang.CN53R8Fy.js";import{I as h,o as k,c as o,a8 as r,J as e,w as i,j as a,a as s}from"./chunks/framework.DvHWw5tv.js";const u={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},m={style:{background:"#2f3b46","border-radius":"6px"}},M={style:{width:"240px","border-radius":"6px",overflow:"hidden"}},g={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},b={style:{background:"#2f3b46","border-radius":"6px"}},A=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationMenu.md","filePath":"components/NavigationMenu.md"}'),y={name:"components/NavigationMenu.md"},D=Object.assign(y,{setup(x){return(f,t)=>{const l=h("ShowCode");return k(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[42]||(t[42]=r("",6)),e(l,{title:"代码演示",code:`
<template>
  <MYMenu default-active='1'>
    <MYMenuItem index='1'>
      <template #icon>🏠</template>
      首页
    </MYMenuItem>
    <MYMenuItem index='2'>
      <template #icon>📊</template>
      数据统计
    </MYMenuItem>
    <MYSubMenu index='3'>
      <template #icon>⚙️</template>
      <template #title>系统管理</template>
      <MYMenuItem index='3-1'>用户管理</MYMenuItem>
      <MYMenuItem index='3-2'>角色管理</MYMenuItem>
      <MYSubMenu index='3-3'>
        <template #title>权限管理</template>
        <MYMenuItem index='3-3-1'>菜单权限</MYMenuItem>
        <MYMenuItem index='3-3-2'>操作权限</MYMenuItem>
      </MYSubMenu>
    </MYSubMenu>
    <MYMenuItem index='4' disabled>
      <template #icon>🔒</template>
      禁用菜单
    </MYMenuItem>
  </MYMenu>
</template>
  `.trim()},{demo:i(()=>[a("div",u,[e(p,{"default-active":"1"},{default:i(()=>[e(n,{index:"1"},{icon:i(()=>[...t[0]||(t[0]=[s("🏠",-1)])]),default:i(()=>[t[1]||(t[1]=s(" 首页 ",-1))]),_:1}),e(n,{index:"2"},{icon:i(()=>[...t[2]||(t[2]=[s("📊",-1)])]),default:i(()=>[t[3]||(t[3]=s(" 数据统计 ",-1))]),_:1}),e(d,{index:"3"},{icon:i(()=>[...t[4]||(t[4]=[s("⚙️",-1)])]),title:i(()=>[...t[5]||(t[5]=[s("系统管理",-1)])]),default:i(()=>[e(n,{index:"3-1"},{default:i(()=>[...t[6]||(t[6]=[s("用户管理",-1)])]),_:1}),e(n,{index:"3-2"},{default:i(()=>[...t[7]||(t[7]=[s("角色管理",-1)])]),_:1}),e(d,{index:"3-3"},{title:i(()=>[...t[8]||(t[8]=[s("权限管理",-1)])]),default:i(()=>[e(n,{index:"3-3-1"},{default:i(()=>[...t[9]||(t[9]=[s("菜单权限",-1)])]),_:1}),e(n,{index:"3-3-2"},{default:i(()=>[...t[10]||(t[10]=[s("操作权限",-1)])]),_:1})]),_:1})]),_:1}),e(n,{index:"4",disabled:""},{icon:i(()=>[...t[11]||(t[11]=[s("🔒",-1)])]),default:i(()=>[t[12]||(t[12]=s(" 禁用菜单 ",-1))]),_:1})]),_:1})])]),_:1},8,["code"]),t[43]||(t[43]=a("h3",{id:"水平菜单",tabindex:"-1"},[s("水平菜单 "),a("a",{class:"header-anchor",href:"#水平菜单","aria-label":"Permalink to “水平菜单”"},"​")],-1)),t[44]||(t[44]=a("p",null,[s("使用 "),a("code",null,"mode"),s(" 属性设置为 horizontal 创建水平菜单。")],-1)),e(l,{title:"代码演示",code:`
<template>
  <MYMenu mode='horizontal' default-active='1'>
    <MYMenuItem index='1'>首页</MYMenuItem>
    <MYMenuItem index='2'>产品</MYMenuItem>
    <MYSubMenu index='3'>
      <template #title>服务</template>
      <MYMenuItem index='3-1'>云服务</MYMenuItem>
      <MYMenuItem index='3-2'>技术支持</MYMenuItem>
    </MYSubMenu>
    <MYMenuItem index='4'>关于我们</MYMenuItem>
  </MYMenu>
</template>
  `.trim()},{demo:i(()=>[a("div",m,[e(p,{mode:"horizontal","default-active":"1"},{default:i(()=>[e(n,{index:"1"},{default:i(()=>[...t[13]||(t[13]=[s("首页",-1)])]),_:1}),e(n,{index:"2"},{default:i(()=>[...t[14]||(t[14]=[s("产品",-1)])]),_:1}),e(d,{index:"3"},{title:i(()=>[...t[15]||(t[15]=[s("服务",-1)])]),default:i(()=>[e(n,{index:"3-1"},{default:i(()=>[...t[16]||(t[16]=[s("云服务",-1)])]),_:1}),e(n,{index:"3-2"},{default:i(()=>[...t[17]||(t[17]=[s("技术支持",-1)])]),_:1})]),_:1}),e(n,{index:"4"},{default:i(()=>[...t[18]||(t[18]=[s("关于我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[45]||(t[45]=a("h3",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),t[46]||(t[46]=a("p",null,[s("使用 "),a("code",null,"backgroundColor"),s("、"),a("code",null,"textColor"),s(" 和 "),a("code",null,"activeTextColor"),s(" 属性自定义菜单颜色。")],-1)),e(l,{title:"代码演示",code:`
<template>
  <MYMenu 
    default-active='1'
    background-color='#545c64'
    text-color='#fff'
    active-text-color='#ffd04b'
  >
    <MYMenuItem index='1'>
      <template #icon>🌟</template>
      金色主题
    </MYMenuItem>
    <MYMenuItem index='2'>
      <template #icon>🎨</template>
      色彩定制
    </MYMenuItem>
    <MYSubMenu index='3'>
      <template #icon>🔧</template>
      <template #title>设置</template>
      <MYMenuItem index='3-1'>主题设置</MYMenuItem>
      <MYMenuItem index='3-2'>颜色设置</MYMenuItem>
    </MYSubMenu>
  </MYMenu>
</template>
  `.trim()},{demo:i(()=>[a("div",M,[e(p,{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:i(()=>[e(n,{index:"1"},{icon:i(()=>[...t[19]||(t[19]=[s("🌟",-1)])]),default:i(()=>[t[20]||(t[20]=s(" 金色主题 ",-1))]),_:1}),e(n,{index:"2"},{icon:i(()=>[...t[21]||(t[21]=[s("🎨",-1)])]),default:i(()=>[t[22]||(t[22]=s(" 色彩定制 ",-1))]),_:1}),e(d,{index:"3"},{icon:i(()=>[...t[23]||(t[23]=[s("🔧",-1)])]),title:i(()=>[...t[24]||(t[24]=[s("设置",-1)])]),default:i(()=>[e(n,{index:"3-1"},{default:i(()=>[...t[25]||(t[25]=[s("主题设置",-1)])]),_:1}),e(n,{index:"3-2"},{default:i(()=>[...t[26]||(t[26]=[s("颜色设置",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t[47]||(t[47]=a("h3",{id:"唯一展开菜单",tabindex:"-1"},[s("唯一展开菜单 "),a("a",{class:"header-anchor",href:"#唯一展开菜单","aria-label":"Permalink to “唯一展开菜单”"},"​")],-1)),t[48]||(t[48]=a("p",null,[s("使用 "),a("code",null,"unique-opened"),s(" 属性确保同时只能展开一个子菜单。")],-1)),e(l,{title:"代码演示",code:`
<template>
  <MYMenu unique-opened default-active='1'>
    <MYMenuItem index='1'>
      <template #icon>📁</template>
      文档管理
    </MYMenuItem>
    <MYSubMenu index='2'>
      <template #icon>👥</template>
      <template #title>用户管理</template>
      <MYMenuItem index='2-1'>用户列表</MYMenuItem>
      <MYMenuItem index='2-2'>用户组</MYMenuItem>
    </MYSubMenu>
    <MYSubMenu index='3'>
      <template #icon>🔐</template>
      <template #title>权限管理</template>
      <MYMenuItem index='3-1'>角色管理</MYMenuItem>
      <MYMenuItem index='3-2'>权限设置</MYMenuItem>
    </MYSubMenu>
  </MYMenu>
</template>
  `.trim()},{demo:i(()=>[a("div",g,[e(p,{"unique-opened":"","default-active":"1"},{default:i(()=>[e(n,{index:"1"},{icon:i(()=>[...t[27]||(t[27]=[s("📁",-1)])]),default:i(()=>[t[28]||(t[28]=s(" 文档管理 ",-1))]),_:1}),e(d,{index:"2"},{icon:i(()=>[...t[29]||(t[29]=[s("👥",-1)])]),title:i(()=>[...t[30]||(t[30]=[s("用户管理",-1)])]),default:i(()=>[e(n,{index:"2-1"},{default:i(()=>[...t[31]||(t[31]=[s("用户列表",-1)])]),_:1}),e(n,{index:"2-2"},{default:i(()=>[...t[32]||(t[32]=[s("用户组",-1)])]),_:1})]),_:1}),e(d,{index:"3"},{icon:i(()=>[...t[33]||(t[33]=[s("🔐",-1)])]),title:i(()=>[...t[34]||(t[34]=[s("权限管理",-1)])]),default:i(()=>[e(n,{index:"3-1"},{default:i(()=>[...t[35]||(t[35]=[s("角色管理",-1)])]),_:1}),e(n,{index:"3-2"},{default:i(()=>[...t[36]||(t[36]=[s("权限设置",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t[49]||(t[49]=a("h3",{id:"悬停触发",tabindex:"-1"},[s("悬停触发 "),a("a",{class:"header-anchor",href:"#悬停触发","aria-label":"Permalink to “悬停触发”"},"​")],-1)),t[50]||(t[50]=a("p",null,[s("使用 "),a("code",null,"trigger"),s(" 属性设置为 hover，通过悬停触发子菜单展开。")],-1)),e(l,{title:"代码演示",code:`
<template>
  <MYMenu trigger='hover' default-active='1'>
    <MYMenuItem index='1'>首页</MYMenuItem>
    <MYSubMenu index='2'>
      <template #title>悬停菜单</template>
      <MYMenuItem index='2-1'>选项一</MYMenuItem>
      <MYMenuItem index='2-2'>选项二</MYMenuItem>
    </MYSubMenu>
    <MYMenuItem index='3'>联系我们</MYMenuItem>
  </MYMenu>
</template>
  `.trim()},{demo:i(()=>[a("div",b,[e(p,{trigger:"hover","default-active":"1"},{default:i(()=>[e(n,{index:"1"},{default:i(()=>[...t[37]||(t[37]=[s("首页",-1)])]),_:1}),e(d,{index:"2"},{title:i(()=>[...t[38]||(t[38]=[s("悬停菜单",-1)])]),default:i(()=>[e(n,{index:"2-1"},{default:i(()=>[...t[39]||(t[39]=[s("选项一",-1)])]),_:1}),e(n,{index:"2-2"},{default:i(()=>[...t[40]||(t[40]=[s("选项二",-1)])]),_:1})]),_:1}),e(n,{index:"3"},{default:i(()=>[...t[41]||(t[41]=[s("联系我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[51]||(t[51]=r("",11))])}}});export{A as __pageData,D as default};
