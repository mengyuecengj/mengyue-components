import{_ as e,M as n}from"./chunks/dropdownItem.DkGRRYEI.js";import{I as p,o as r,c as h,ah as o,J as a,w as s,a as i,j as d}from"./chunks/framework.DmoDkOge.js";import"./chunks/useClassComputed.Wc7vThmZ.js";const k={style:{display:"flex",gap:"10px","align-items":"center"}},w=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationDropdown.md","filePath":"components/NavigationDropdown.md"}'),m={name:"components/NavigationDropdown.md"},c=Object.assign(m,{setup(g){return(b,t)=>{const l=p("ShowCode");return r(),h("div",null,[t[35]||(t[35]=o('<h1 id="dropdown" tabindex="-1">Dropdown <a class="header-anchor" href="#dropdown" aria-label="Permalink to “Dropdown”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Dropdown 下拉菜单组件，用于展示一组操作或菜单项。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYDropdown&gt;&lt;/MYDropdown&gt;</code> 或者 <code>&lt;MYDropdown /&gt;</code> 来实现一个下拉菜单组件。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础下拉菜单" tabindex="-1">基础下拉菜单 <a class="header-anchor" href="#基础下拉菜单" aria-label="Permalink to “基础下拉菜单”">​</a></h3><p>默认的下拉菜单，支持 hover 触发。</p>',6)),a(l,{title:"代码演示",code:`
<template>
  <MYDropdown>
    <template #default>
      下拉菜单
    </template>
    <template #dropdown>
      <MYDropdownItem command='a'>操作 A</MYDropdownItem>
      <MYDropdownItem command='b'>操作 B</MYDropdownItem>
      <MYDropdownItem command='c' disabled>禁用操作</MYDropdownItem>
      <MYDropdownItem divided command='d'>分割操作</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()},{demo:s(()=>[a(e,null,{default:s(()=>[...t[0]||(t[0]=[i(" 下拉菜单 ",-1)])]),dropdown:s(()=>[a(n,{command:"a"},{default:s(()=>[...t[1]||(t[1]=[i("操作 A",-1)])]),_:1}),a(n,{command:"b"},{default:s(()=>[...t[2]||(t[2]=[i("操作 B",-1)])]),_:1}),a(n,{command:"c",disabled:""},{default:s(()=>[...t[3]||(t[3]=[i("禁用操作",-1)])]),_:1}),a(n,{divided:"",command:"d"},{default:s(()=>[...t[4]||(t[4]=[i("分割操作",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[36]||(t[36]=d("h3",{id:"点击触发",tabindex:"-1"},[i("点击触发 "),d("a",{class:"header-anchor",href:"#点击触发","aria-label":"Permalink to “点击触发”"},"​")],-1)),t[37]||(t[37]=d("p",null,[i("使用 "),d("code",null,"trigger"),i(" 属性设置为 click，通过点击触发下拉菜单。")],-1)),a(l,{title:"代码演示",code:`
<template>
  <MYDropdown trigger='click'>
    <template #default>
      点击触发
    </template>
    <template #dropdown>
      <MYDropdownItem command='1'>菜单项 1</MYDropdownItem>
      <MYDropdownItem command='2'>菜单项 2</MYDropdownItem>
      <MYDropdownItem command='3'>菜单项 3</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()},{demo:s(()=>[a(e,{trigger:"click"},{default:s(()=>[...t[5]||(t[5]=[i(" 点击触发 ",-1)])]),dropdown:s(()=>[a(n,{command:"1"},{default:s(()=>[...t[6]||(t[6]=[i("菜单项 1",-1)])]),_:1}),a(n,{command:"2"},{default:s(()=>[...t[7]||(t[7]=[i("菜单项 2",-1)])]),_:1}),a(n,{command:"3"},{default:s(()=>[...t[8]||(t[8]=[i("菜单项 3",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[38]||(t[38]=d("h3",{id:"分割按钮",tabindex:"-1"},[i("分割按钮 "),d("a",{class:"header-anchor",href:"#分割按钮","aria-label":"Permalink to “分割按钮”"},"​")],-1)),t[39]||(t[39]=d("p",null,[i("使用 "),d("code",null,"split-button"),i(" 属性创建分割按钮下拉菜单。")],-1)),a(l,{title:"代码演示",code:`
<template>
  <MYDropdown split-button>
    <template #default>
      分割按钮
    </template>
    <template #dropdown>
      <MYDropdownItem command='new'>新建</MYDropdownItem>
      <MYDropdownItem command='save'>保存</MYDropdownItem>
      <MYDropdownItem command='delete'>删除</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()},{demo:s(()=>[a(e,{"split-button":""},{default:s(()=>[...t[9]||(t[9]=[i(" 分割按钮 ",-1)])]),dropdown:s(()=>[a(n,{command:"new"},{default:s(()=>[...t[10]||(t[10]=[i("新建",-1)])]),_:1}),a(n,{command:"save"},{default:s(()=>[...t[11]||(t[11]=[i("保存",-1)])]),_:1}),a(n,{command:"delete"},{default:s(()=>[...t[12]||(t[12]=[i("删除",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[40]||(t[40]=d("h3",{id:"不同尺寸",tabindex:"-1"},[i("不同尺寸 "),d("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),t[41]||(t[41]=d("p",null,[i("使用 "),d("code",null,"size"),i(" 属性设置下拉菜单的尺寸。")],-1)),a(l,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 10px; align-items: center;'>
    <MYDropdown size='sm'>
      <template #default>
        小尺寸
      </template>
      <template #dropdown>
        <MYDropdownItem command='sm1'>小菜单 1</MYDropdownItem>
        <MYDropdownItem command='sm2'>小菜单 2</MYDropdownItem>
      </template>
    </MYDropdown>
    <MYDropdown size='md'>
      <template #default>
        中尺寸
      </template>
      <template #dropdown>
        <MYDropdownItem command='md1'>中菜单 1</MYDropdownItem>
        <MYDropdownItem command='md2'>中菜单 2</MYDropdownItem>
      </template>
    </MYDropdown>
    <MYDropdown size='lg'>
      <template #default>
        大尺寸
      </template>
      <template #dropdown>
        <MYDropdownItem command='lg1'>大菜单 1</MYDropdownItem>
        <MYDropdownItem command='lg2'>大菜单 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </div>
</template>
  `.trim()},{demo:s(()=>[d("div",k,[a(e,{size:"sm"},{default:s(()=>[...t[13]||(t[13]=[i(" 小尺寸 ",-1)])]),dropdown:s(()=>[a(n,{command:"sm1"},{default:s(()=>[...t[14]||(t[14]=[i("小菜单 1",-1)])]),_:1}),a(n,{command:"sm2"},{default:s(()=>[...t[15]||(t[15]=[i("小菜单 2",-1)])]),_:1})]),_:1}),a(e,{size:"md"},{default:s(()=>[...t[16]||(t[16]=[i(" 中尺寸 ",-1)])]),dropdown:s(()=>[a(n,{command:"md1"},{default:s(()=>[...t[17]||(t[17]=[i("中菜单 1",-1)])]),_:1}),a(n,{command:"md2"},{default:s(()=>[...t[18]||(t[18]=[i("中菜单 2",-1)])]),_:1})]),_:1}),a(e,{size:"lg"},{default:s(()=>[...t[19]||(t[19]=[i(" 大尺寸 ",-1)])]),dropdown:s(()=>[a(n,{command:"lg1"},{default:s(()=>[...t[20]||(t[20]=[i("大菜单 1",-1)])]),_:1}),a(n,{command:"lg2"},{default:s(()=>[...t[21]||(t[21]=[i("大菜单 2",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[42]||(t[42]=d("h3",{id:"自定义颜色",tabindex:"-1"},[i("自定义颜色 "),d("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),t[43]||(t[43]=d("p",null,[i("使用 "),d("code",null,"backGroundColor"),i(" 和 "),d("code",null,"textColor"),i(" 属性自定义下拉菜单的颜色。")],-1)),a(l,{title:"代码演示",code:`
<template>
  <MYDropdown backGroundColor='#409eff' textColor='#fff'>
    <template #default>
      自定义颜色
    </template>
    <template #dropdown>
      <MYDropdownItem command='color1'>蓝色菜单项 1</MYDropdownItem>
      <MYDropdownItem command='color2'>蓝色菜单项 2</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()},{demo:s(()=>[a(e,{backGroundColor:"#409eff",textColor:"#fff"},{default:s(()=>[...t[22]||(t[22]=[i(" 自定义颜色 ",-1)])]),dropdown:s(()=>[a(n,{command:"color1"},{default:s(()=>[...t[23]||(t[23]=[i("蓝色菜单项 1",-1)])]),_:1}),a(n,{command:"color2"},{default:s(()=>[...t[24]||(t[24]=[i("蓝色菜单项 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[44]||(t[44]=d("h3",{id:"隐藏下拉箭头",tabindex:"-1"},[i("隐藏下拉箭头 "),d("a",{class:"header-anchor",href:"#隐藏下拉箭头","aria-label":"Permalink to “隐藏下拉箭头”"},"​")],-1)),t[45]||(t[45]=d("p",null,[i("使用 "),d("code",null,"no-caret"),i(" 属性隐藏下拉箭头。")],-1)),a(l,{title:"代码演示",code:`
<template>
  <MYDropdown no-caret>
    <template #default>
      无箭头
    </template>
    <template #dropdown>
      <MYDropdownItem command='no1'>菜单项 1</MYDropdownItem>
      <MYDropdownItem command='no2'>菜单项 2</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()},{demo:s(()=>[a(e,{"no-caret":""},{default:s(()=>[...t[25]||(t[25]=[i(" 无箭头 ",-1)])]),dropdown:s(()=>[a(n,{command:"no1"},{default:s(()=>[...t[26]||(t[26]=[i("菜单项 1",-1)])]),_:1}),a(n,{command:"no2"},{default:s(()=>[...t[27]||(t[27]=[i("菜单项 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[46]||(t[46]=d("h3",{id:"带图标菜单项",tabindex:"-1"},[i("带图标菜单项 "),d("a",{class:"header-anchor",href:"#带图标菜单项","aria-label":"Permalink to “带图标菜单项”"},"​")],-1)),t[47]||(t[47]=d("p",null,"在 DropdownItem 中使用图标。",-1)),a(l,{title:"代码演示",code:`
<template>
  <MYDropdown>
    <template #default>
      带图标菜单
    </template>
    <template #dropdown>
      <MYDropdownItem command='edit' :icon='EditIcon'>
        编辑
      </MYDropdownItem>
      <MYDropdownItem command='copy' :icon='CopyIcon'>
        复制
      </MYDropdownItem>
      <MYDropdownItem command='delete' :icon='DeleteIcon' divided>
        删除
      </MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()},{demo:s(()=>[a(e,null,{default:s(()=>[...t[28]||(t[28]=[i(" 带图标菜单 ",-1)])]),dropdown:s(()=>[a(n,{command:"edit"},{icon:s(()=>[...t[29]||(t[29]=[d("span",{style:{"margin-right":"8px"}},"📝",-1)])]),default:s(()=>[t[30]||(t[30]=i(" 编辑 ",-1))]),_:1}),a(n,{command:"copy"},{icon:s(()=>[...t[31]||(t[31]=[d("span",{style:{"margin-right":"8px"}},"📋",-1)])]),default:s(()=>[t[32]||(t[32]=i(" 复制 ",-1))]),_:1}),a(n,{command:"delete",divided:""},{icon:s(()=>[...t[33]||(t[33]=[d("span",{style:{"margin-right":"8px"}},"🗑️",-1)])]),default:s(()=>[t[34]||(t[34]=i(" 删除 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[48]||(t[48]=o(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props <a class="header-anchor" href="#dropdown-props" aria-label="Permalink to “Dropdown Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td>string</td><td><code>default</code>/<code>primary</code></td><td><code>default</code></td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td><code>sm</code>/<code>md</code>/<code>lg</code></td><td><code>md</code></td></tr><tr><td>split-button</td><td>是否为分割按钮</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td><code>bottom</code>/<code>top</code>/<code>left</code>/<code>right</code> 等</td><td><code>bottom</code></td></tr><tr><td>trigger</td><td>触发方式</td><td>string</td><td><code>hover</code>/<code>click</code></td><td><code>hover</code></td></tr><tr><td>hide-on-click</td><td>点击菜单项后是否隐藏菜单</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>show-timeout</td><td>显示延时（hover 触发）</td><td>number</td><td>—</td><td><code>150</code></td></tr><tr><td>hide-timeout</td><td>隐藏延时（hover 触发）</td><td>number</td><td>—</td><td><code>150</code></td></tr><tr><td>max-height</td><td>菜单最大高度</td><td>string | number</td><td>—</td><td><code>null</code></td></tr><tr><td>back-ground-color</td><td>背景颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>text-color</td><td>文字颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>no-caret</td><td>是否隐藏下拉箭头</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>teleported</td><td>是否使用 teleport</td><td>boolean</td><td>—</td><td><code>true</code></td></tr></tbody></table><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props <a class="header-anchor" href="#dropdownitem-props" aria-label="Permalink to “DropdownItem Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>command</td><td>命令</td><td>string | number | object</td><td>—</td><td><code>null</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>divided</td><td>是否显示分割线</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>icon</td><td>图标组件</td><td>string | object</td><td>—</td><td><code>null</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>command</td><td>点击菜单项触发</td><td>command: string | number | object</td></tr><tr><td>click</td><td>点击按钮时触发</td><td>event: MouseEvent</td></tr><tr><td>visible-change</td><td>菜单显示状态改变时触发</td><td>visible: boolean</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DropdownProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,9))])}}});export{w as __pageData,c as default};
