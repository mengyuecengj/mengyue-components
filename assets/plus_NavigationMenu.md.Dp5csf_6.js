import{_ as p,a as n,b as d}from"./chunks/menusubMenu.vue_vue_type_script_setup_true_lang.CN53R8Fy.js";import{I as h,o as k,c as o,a8 as r,J as e,w as i,j as a,a as s}from"./chunks/framework.DvHWw5tv.js";const u={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},m={style:{background:"#2f3b46","border-radius":"6px"}},M={style:{width:"240px","border-radius":"6px",overflow:"hidden"}},g={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},b={style:{background:"#2f3b46","border-radius":"6px"}},A=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"plus/NavigationMenu.md","filePath":"plus/NavigationMenu.md"}'),y={name:"plus/NavigationMenu.md"},D=Object.assign(y,{setup(x){return(f,t)=>{const l=h("ShowCode");return k(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[t[42]||(t[42]=r('<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-label="Permalink to “Menu”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Menu 导航菜单组件，提供侧边栏和顶部导航功能。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYMenu&gt;&lt;/MYMenu&gt;</code> 或者 <code>&lt;MYMenu /&gt;</code> 来实现一个导航菜单组件。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="垂直菜单" tabindex="-1">垂直菜单 <a class="header-anchor" href="#垂直菜单" aria-label="Permalink to “垂直菜单”">​</a></h3><p>默认的垂直菜单，支持多级嵌套。</p>',6)),e(l,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[a("div",b,[e(p,{trigger:"hover","default-active":"1"},{default:i(()=>[e(n,{index:"1"},{default:i(()=>[...t[37]||(t[37]=[s("首页",-1)])]),_:1}),e(d,{index:"2"},{title:i(()=>[...t[38]||(t[38]=[s("悬停菜单",-1)])]),default:i(()=>[e(n,{index:"2-1"},{default:i(()=>[...t[39]||(t[39]=[s("选项一",-1)])]),_:1}),e(n,{index:"2-2"},{default:i(()=>[...t[40]||(t[40]=[s("选项二",-1)])]),_:1})]),_:1}),e(n,{index:"3"},{default:i(()=>[...t[41]||(t[41]=[s("联系我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[51]||(t[51]=r(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="menu-props" tabindex="-1">Menu Props <a class="header-anchor" href="#menu-props" aria-label="Permalink to “Menu Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>default-active</td><td>默认激活菜单的 index</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>mode</td><td>菜单模式</td><td>string</td><td><code>vertical</code>/<code>horizontal</code></td><td><code>vertical</code></td></tr><tr><td>collapse</td><td>是否水平折叠收起菜单</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>background-color</td><td>菜单背景色</td><td>string</td><td>—</td><td><code>#2f3b46</code></td></tr><tr><td>text-color</td><td>菜单文字颜色</td><td>string</td><td>—</td><td><code>#bfcbd9</code></td></tr><tr><td>active-text-color</td><td>激活菜单的文字颜色</td><td>string</td><td>—</td><td><code>#409EFF</code></td></tr><tr><td>trigger</td><td>子菜单打开的触发方式</td><td>string</td><td><code>click</code>/<code>hover</code></td><td><code>click</code></td></tr><tr><td>unique-opened</td><td>是否只保持一个子菜单展开</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>default-openeds</td><td>默认打开的 sub-menu 的 index 数组</td><td>array</td><td>—</td><td><code>[]</code></td></tr><tr><td>collapse-transition</td><td>是否开启折叠动画</td><td>boolean</td><td>—</td><td><code>true</code></td></tr></tbody></table><h3 id="menuitem-props" tabindex="-1">MenuItem Props <a class="header-anchor" href="#menuitem-props" aria-label="Permalink to “MenuItem Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标识</td><td>string</td><td>—</td><td><code>必需</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="submenu-props" tabindex="-1">SubMenu Props <a class="header-anchor" href="#submenu-props" aria-label="Permalink to “SubMenu Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标识</td><td>string</td><td>—</td><td><code>必需</code></td></tr><tr><td>trigger</td><td>子菜单打开的触发方式</td><td>string</td><td><code>click</code>/<code>hover</code></td><td><code>继承 Menu</code></td></tr><tr><td>teleported</td><td>是否使用 teleport</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select</td><td>菜单激活回调</td><td>index: string, indexPath: string[]</td></tr><tr><td>open</td><td>sub-menu 展开的回调</td><td>index: string, indexPath: string[]</td></tr><tr><td>close</td><td>sub-menu 收起的回调</td><td>index: string, indexPath: string[]</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MenuProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,11))])}}});export{A as __pageData,D as default};
