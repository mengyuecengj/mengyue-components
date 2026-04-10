import{_ as p,a as t,b as d}from"./chunks/menusubMenu.vue_vue_type_script_setup_true_lang.CN53R8Fy.js";import{I as r,o as u,c as o,a8 as h,J as s,w as n,j as e,a}from"./chunks/framework.DvHWw5tv.js";const k={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},g={style:{background:"#2f3b46","border-radius":"6px"}},y={style:{width:"240px","border-radius":"6px",overflow:"hidden"}},m={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},c={style:{background:"#2f3b46","border-radius":"6px"}},B=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationMenu.md","filePath":"components/NavigationMenu.md"}'),f={name:"components/NavigationMenu.md"},Y=Object.assign(f,{setup(b){return(M,i)=>{const l=r("ShowCode");return u(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[42]||(i[42]=h("",6)),s(l,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[e("div",k,[s(p,{"default-active":"1"},{default:n(()=>[s(t,{index:"1"},{icon:n(()=>[...i[0]||(i[0]=[a("🏠",-1)])]),default:n(()=>[i[1]||(i[1]=a(" 首页 ",-1))]),_:1}),s(t,{index:"2"},{icon:n(()=>[...i[2]||(i[2]=[a("📊",-1)])]),default:n(()=>[i[3]||(i[3]=a(" 数据统计 ",-1))]),_:1}),s(d,{index:"3"},{icon:n(()=>[...i[4]||(i[4]=[a("⚙️",-1)])]),title:n(()=>[...i[5]||(i[5]=[a("系统管理",-1)])]),default:n(()=>[s(t,{index:"3-1"},{default:n(()=>[...i[6]||(i[6]=[a("用户管理",-1)])]),_:1}),s(t,{index:"3-2"},{default:n(()=>[...i[7]||(i[7]=[a("角色管理",-1)])]),_:1}),s(d,{index:"3-3"},{title:n(()=>[...i[8]||(i[8]=[a("权限管理",-1)])]),default:n(()=>[s(t,{index:"3-3-1"},{default:n(()=>[...i[9]||(i[9]=[a("菜单权限",-1)])]),_:1}),s(t,{index:"3-3-2"},{default:n(()=>[...i[10]||(i[10]=[a("操作权限",-1)])]),_:1})]),_:1})]),_:1}),s(t,{index:"4",disabled:""},{icon:n(()=>[...i[11]||(i[11]=[a("🔒",-1)])]),default:n(()=>[i[12]||(i[12]=a(" 禁用菜单 ",-1))]),_:1})]),_:1})])]),_:1},8,["code"]),i[43]||(i[43]=e("h3",{id:"水平菜单",tabindex:"-1"},[a("水平菜单 "),e("a",{class:"header-anchor",href:"#水平菜单","aria-label":"Permalink to “水平菜单”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shuipingcaidan shui ping cai dan spcd ")],-1)),i[44]||(i[44]=e("p",null,[a("使用 "),e("code",null,"mode"),a(" 属性设置为 horizontal 创建水平菜单。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhiwei horizontal chuangjianshuipingcaidan。 shi yong shu xing she zhi wei horizontal chuang jian shui ping cai dan 。 sy sxszw cjspcd。")],-1)),s(l,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[e("div",g,[s(p,{mode:"horizontal","default-active":"1"},{default:n(()=>[s(t,{index:"1"},{default:n(()=>[...i[13]||(i[13]=[a("首页",-1)])]),_:1}),s(t,{index:"2"},{default:n(()=>[...i[14]||(i[14]=[a("产品",-1)])]),_:1}),s(d,{index:"3"},{title:n(()=>[...i[15]||(i[15]=[a("服务",-1)])]),default:n(()=>[s(t,{index:"3-1"},{default:n(()=>[...i[16]||(i[16]=[a("云服务",-1)])]),_:1}),s(t,{index:"3-2"},{default:n(()=>[...i[17]||(i[17]=[a("技术支持",-1)])]),_:1})]),_:1}),s(t,{index:"4"},{default:n(()=>[...i[18]||(i[18]=[a("关于我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[45]||(i[45]=e("h3",{id:"自定义颜色",tabindex:"-1"},[a("自定义颜色 "),e("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),i[46]||(i[46]=e("p",null,[a("使用 "),e("code",null,"backgroundColor"),a("、"),e("code",null,"textColor"),a(" 和 "),e("code",null,"activeTextColor"),a(" 属性自定义菜单颜色。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong 、 he shuxingzidingyicaidanyanse。 shi yong 、 he shu xing zi ding yi cai dan yan se 。 sy h sxzdycdys。")],-1)),s(l,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[e("div",y,[s(p,{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:n(()=>[s(t,{index:"1"},{icon:n(()=>[...i[19]||(i[19]=[a("🌟",-1)])]),default:n(()=>[i[20]||(i[20]=a(" 金色主题 ",-1))]),_:1}),s(t,{index:"2"},{icon:n(()=>[...i[21]||(i[21]=[a("🎨",-1)])]),default:n(()=>[i[22]||(i[22]=a(" 色彩定制 ",-1))]),_:1}),s(d,{index:"3"},{icon:n(()=>[...i[23]||(i[23]=[a("🔧",-1)])]),title:n(()=>[...i[24]||(i[24]=[a("设置",-1)])]),default:n(()=>[s(t,{index:"3-1"},{default:n(()=>[...i[25]||(i[25]=[a("主题设置",-1)])]),_:1}),s(t,{index:"3-2"},{default:n(()=>[...i[26]||(i[26]=[a("颜色设置",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),i[47]||(i[47]=e("h3",{id:"唯一展开菜单",tabindex:"-1"},[a("唯一展开菜单 "),e("a",{class:"header-anchor",href:"#唯一展开菜单","aria-label":"Permalink to “唯一展开菜单”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"weiyizhankaicaidan wei yi zhan kai cai dan wyzkcd ")],-1)),i[48]||(i[48]=e("p",null,[a("使用 "),e("code",null,"unique-opened"),a(" 属性确保同时只能展开一个子菜单。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingquebaotongshizhinengzhankaiyigezicaidan。 shi yong shu xing que bao tong shi zhi neng zhan kai yi ge zi cai dan 。 sy sxqbtsznzkygzcd。")],-1)),s(l,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[e("div",m,[s(p,{"unique-opened":"","default-active":"1"},{default:n(()=>[s(t,{index:"1"},{icon:n(()=>[...i[27]||(i[27]=[a("📁",-1)])]),default:n(()=>[i[28]||(i[28]=a(" 文档管理 ",-1))]),_:1}),s(d,{index:"2"},{icon:n(()=>[...i[29]||(i[29]=[a("👥",-1)])]),title:n(()=>[...i[30]||(i[30]=[a("用户管理",-1)])]),default:n(()=>[s(t,{index:"2-1"},{default:n(()=>[...i[31]||(i[31]=[a("用户列表",-1)])]),_:1}),s(t,{index:"2-2"},{default:n(()=>[...i[32]||(i[32]=[a("用户组",-1)])]),_:1})]),_:1}),s(d,{index:"3"},{icon:n(()=>[...i[33]||(i[33]=[a("🔐",-1)])]),title:n(()=>[...i[34]||(i[34]=[a("权限管理",-1)])]),default:n(()=>[s(t,{index:"3-1"},{default:n(()=>[...i[35]||(i[35]=[a("角色管理",-1)])]),_:1}),s(t,{index:"3-2"},{default:n(()=>[...i[36]||(i[36]=[a("权限设置",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),i[49]||(i[49]=e("h3",{id:"悬停触发",tabindex:"-1"},[a("悬停触发 "),e("a",{class:"header-anchor",href:"#悬停触发","aria-label":"Permalink to “悬停触发”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xuantingchufa xuan ting chu fa xtcf ")],-1)),i[50]||(i[50]=e("p",null,[a("使用 "),e("code",null,"trigger"),a(" 属性设置为 hover，通过悬停触发子菜单展开。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhiwei hover，tongguoxuantingchufazicaidanzhankai。 shi yong shu xing she zhi wei hover， tong guo xuan ting chu fa zi cai dan zhan kai 。 sy sxszw tgxtcfzcdzk。")],-1)),s(l,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[e("div",c,[s(p,{trigger:"hover","default-active":"1"},{default:n(()=>[s(t,{index:"1"},{default:n(()=>[...i[37]||(i[37]=[a("首页",-1)])]),_:1}),s(d,{index:"2"},{title:n(()=>[...i[38]||(i[38]=[a("悬停菜单",-1)])]),default:n(()=>[s(t,{index:"2-1"},{default:n(()=>[...i[39]||(i[39]=[a("选项一",-1)])]),_:1}),s(t,{index:"2-2"},{default:n(()=>[...i[40]||(i[40]=[a("选项二",-1)])]),_:1})]),_:1}),s(t,{index:"3"},{default:n(()=>[...i[41]||(i[41]=[a("联系我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[51]||(i[51]=h("",11))])}}});export{B as __pageData,Y as default};
