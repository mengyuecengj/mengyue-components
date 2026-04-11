import{_ as e,M as n}from"./chunks/dropdownItem.BzRBRONv.js";import{I as p,o as r,c as h,a8 as o,J as a,w as s,a as i,j as d}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";const k={style:{display:"flex",gap:"10px","align-items":"center"}},w=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationDropdown.md","filePath":"components/NavigationDropdown.md"}'),m={name:"components/NavigationDropdown.md"},c=Object.assign(m,{setup(g){return(b,t)=>{const l=p("ShowCode");return r(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[t[35]||(t[35]=o("",6)),a(l,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(e,null,{default:s(()=>[...t[28]||(t[28]=[i(" 带图标菜单 ",-1)])]),dropdown:s(()=>[a(n,{command:"edit"},{icon:s(()=>[...t[29]||(t[29]=[d("span",{style:{"margin-right":"8px"}},"📝",-1)])]),default:s(()=>[t[30]||(t[30]=i(" 编辑 ",-1))]),_:1}),a(n,{command:"copy"},{icon:s(()=>[...t[31]||(t[31]=[d("span",{style:{"margin-right":"8px"}},"📋",-1)])]),default:s(()=>[t[32]||(t[32]=i(" 复制 ",-1))]),_:1}),a(n,{command:"delete",divided:""},{icon:s(()=>[...t[33]||(t[33]=[d("span",{style:{"margin-right":"8px"}},"🗑️",-1)])]),default:s(()=>[t[34]||(t[34]=i(" 删除 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[48]||(t[48]=o("",9))])}}});export{w as __pageData,c as default};
