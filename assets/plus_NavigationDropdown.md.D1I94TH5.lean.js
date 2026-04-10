import{_ as e,M as t}from"./chunks/dropdownItem.BzRBRONv.js";import{I as o,o as r,c as h,a8 as l,J as d,w as a,a as n,j as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";const k={style:{display:"flex",gap:"10px","align-items":"center"}},b=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"plus/NavigationDropdown.md","filePath":"plus/NavigationDropdown.md"}'),g={name:"plus/NavigationDropdown.md"},D=Object.assign(g,{setup(m){return(u,i)=>{const p=o("ShowCode");return r(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[35]||(i[35]=l("",6)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[d(e,null,{default:a(()=>[...i[0]||(i[0]=[n(" 下拉菜单 ",-1)])]),dropdown:a(()=>[d(t,{command:"a"},{default:a(()=>[...i[1]||(i[1]=[n("操作 A",-1)])]),_:1}),d(t,{command:"b"},{default:a(()=>[...i[2]||(i[2]=[n("操作 B",-1)])]),_:1}),d(t,{command:"c",disabled:""},{default:a(()=>[...i[3]||(i[3]=[n("禁用操作",-1)])]),_:1}),d(t,{divided:"",command:"d"},{default:a(()=>[...i[4]||(i[4]=[n("分割操作",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[36]||(i[36]=s("h3",{id:"点击触发",tabindex:"-1"},[n("点击触发 "),s("a",{class:"header-anchor",href:"#点击触发","aria-label":"Permalink to “点击触发”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"dianjichufa dian ji chu fa djcf ")],-1)),i[37]||(i[37]=s("p",null,[n("使用 "),s("code",null,"trigger"),n(" 属性设置为 click，通过点击触发下拉菜单。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhiwei click，tongguodianjichufaxialacaidan。 shi yong shu xing she zhi wei click， tong guo dian ji chu fa xia la cai dan 。 sy sxszw tgdjcfxlcd。")],-1)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[d(e,{trigger:"click"},{default:a(()=>[...i[5]||(i[5]=[n(" 点击触发 ",-1)])]),dropdown:a(()=>[d(t,{command:"1"},{default:a(()=>[...i[6]||(i[6]=[n("菜单项 1",-1)])]),_:1}),d(t,{command:"2"},{default:a(()=>[...i[7]||(i[7]=[n("菜单项 2",-1)])]),_:1}),d(t,{command:"3"},{default:a(()=>[...i[8]||(i[8]=[n("菜单项 3",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[38]||(i[38]=s("h3",{id:"分割按钮",tabindex:"-1"},[n("分割按钮 "),s("a",{class:"header-anchor",href:"#分割按钮","aria-label":"Permalink to “分割按钮”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"fengeanniu fen ge an niu fgan ")],-1)),i[39]||(i[39]=s("p",null,[n("使用 "),s("code",null,"split-button"),n(" 属性创建分割按钮下拉菜单。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingchuangjianfengeanniuxialacaidan。 shi yong shu xing chuang jian fen ge an niu xia la cai dan 。 sy sxcjfganxlcd。")],-1)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[d(e,{"split-button":""},{default:a(()=>[...i[9]||(i[9]=[n(" 分割按钮 ",-1)])]),dropdown:a(()=>[d(t,{command:"new"},{default:a(()=>[...i[10]||(i[10]=[n("新建",-1)])]),_:1}),d(t,{command:"save"},{default:a(()=>[...i[11]||(i[11]=[n("保存",-1)])]),_:1}),d(t,{command:"delete"},{default:a(()=>[...i[12]||(i[12]=[n("删除",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[40]||(i[40]=s("h3",{id:"不同尺寸",tabindex:"-1"},[n("不同尺寸 "),s("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"butongchicun bu tong chi cun btcc ")],-1)),i[41]||(i[41]=s("p",null,[n("使用 "),s("code",null,"size"),n(" 属性设置下拉菜单的尺寸。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhixialacaidandechicun。 shi yong shu xing she zhi xia la cai dan de chi cun 。 sy sxszxlcddcc。")],-1)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[s("div",k,[d(e,{size:"sm"},{default:a(()=>[...i[13]||(i[13]=[n(" 小尺寸 ",-1)])]),dropdown:a(()=>[d(t,{command:"sm1"},{default:a(()=>[...i[14]||(i[14]=[n("小菜单 1",-1)])]),_:1}),d(t,{command:"sm2"},{default:a(()=>[...i[15]||(i[15]=[n("小菜单 2",-1)])]),_:1})]),_:1}),d(e,{size:"md"},{default:a(()=>[...i[16]||(i[16]=[n(" 中尺寸 ",-1)])]),dropdown:a(()=>[d(t,{command:"md1"},{default:a(()=>[...i[17]||(i[17]=[n("中菜单 1",-1)])]),_:1}),d(t,{command:"md2"},{default:a(()=>[...i[18]||(i[18]=[n("中菜单 2",-1)])]),_:1})]),_:1}),d(e,{size:"lg"},{default:a(()=>[...i[19]||(i[19]=[n(" 大尺寸 ",-1)])]),dropdown:a(()=>[d(t,{command:"lg1"},{default:a(()=>[...i[20]||(i[20]=[n("大菜单 1",-1)])]),_:1}),d(t,{command:"lg2"},{default:a(()=>[...i[21]||(i[21]=[n("大菜单 2",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[42]||(i[42]=s("h3",{id:"自定义颜色",tabindex:"-1"},[n("自定义颜色 "),s("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),i[43]||(i[43]=s("p",null,[n("使用 "),s("code",null,"backGroundColor"),n(" 和 "),s("code",null,"textColor"),n(" 属性自定义下拉菜单的颜色。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong he shuxingzidingyixialacaidandeyanse。 shi yong he shu xing zi ding yi xia la cai dan de yan se 。 sy h sxzdyxlcddys。")],-1)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[d(e,{backGroundColor:"#409eff",textColor:"#fff"},{default:a(()=>[...i[22]||(i[22]=[n(" 自定义颜色 ",-1)])]),dropdown:a(()=>[d(t,{command:"color1"},{default:a(()=>[...i[23]||(i[23]=[n("蓝色菜单项 1",-1)])]),_:1}),d(t,{command:"color2"},{default:a(()=>[...i[24]||(i[24]=[n("蓝色菜单项 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[44]||(i[44]=s("h3",{id:"隐藏下拉箭头",tabindex:"-1"},[n("隐藏下拉箭头 "),s("a",{class:"header-anchor",href:"#隐藏下拉箭头","aria-label":"Permalink to “隐藏下拉箭头”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yincangxialajiantou yin cang xia la jian tou ycxljt ")],-1)),i[45]||(i[45]=s("p",null,[n("使用 "),s("code",null,"no-caret"),n(" 属性隐藏下拉箭头。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingyincangxialajiantou。 shi yong shu xing yin cang xia la jian tou 。 sy sxycxljt。")],-1)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[d(e,{"no-caret":""},{default:a(()=>[...i[25]||(i[25]=[n(" 无箭头 ",-1)])]),dropdown:a(()=>[d(t,{command:"no1"},{default:a(()=>[...i[26]||(i[26]=[n("菜单项 1",-1)])]),_:1}),d(t,{command:"no2"},{default:a(()=>[...i[27]||(i[27]=[n("菜单项 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[46]||(i[46]=s("h3",{id:"带图标菜单项",tabindex:"-1"},[n("带图标菜单项 "),s("a",{class:"header-anchor",href:"#带图标菜单项","aria-label":"Permalink to “带图标菜单项”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"daitubiaocaidanxiang dai tu biao cai dan xiang dtbcdx ")],-1)),i[47]||(i[47]=s("p",null,[n("在 DropdownItem 中使用图标。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zai DropdownItem zhongshiyongtubiao。 zai DropdownItem zhong shi yong tu biao 。 z zsytb。")],-1)),d(p,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[d(e,null,{default:a(()=>[...i[28]||(i[28]=[n(" 带图标菜单 ",-1)])]),dropdown:a(()=>[d(t,{command:"edit"},{icon:a(()=>[...i[29]||(i[29]=[s("span",{style:{"margin-right":"8px"}},"📝",-1)])]),default:a(()=>[i[30]||(i[30]=n(" 编辑 ",-1))]),_:1}),d(t,{command:"copy"},{icon:a(()=>[...i[31]||(i[31]=[s("span",{style:{"margin-right":"8px"}},"📋",-1)])]),default:a(()=>[i[32]||(i[32]=n(" 复制 ",-1))]),_:1}),d(t,{command:"delete",divided:""},{icon:a(()=>[...i[33]||(i[33]=[s("span",{style:{"margin-right":"8px"}},"🗑️",-1)])]),default:a(()=>[i[34]||(i[34]=n(" 删除 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),i[48]||(i[48]=l("",9))])}}});export{b as __pageData,D as default};
