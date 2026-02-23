import{d as L,y as D,z as _,W as F,o as O,c as q,O as j,n as R,r as B,aq as W,h as m,N as I,$ as J,j as n,a1 as w,a2 as $,b as K,ao as G,e as H,J as i,T as Q,w as t,R as U,I as X,ah as V,a as s}from"./chunks/framework.BzrxsKI0.js";const Z={defaultActive:{type:String,default:""},mode:{type:String,default:"vertical"},collapse:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#2f3b46"},textColor:{type:String,default:"#bfcbd9"},activeTextColor:{type:String,default:"#409EFF"},trigger:{type:String,default:"click"},uniqueOpened:{type:Boolean,default:!1},defaultOpeneds:{type:Array,default:()=>[]},collapseTransition:{type:Boolean,default:!0}},E=L({name:"MYMenu",__name:"menu",props:Z,emits:["select","open","close"],setup(A,{emit:o}){const e=A,u=o,y=D(e.defaultActive||""),l=D([...e.defaultOpeneds]);_(()=>e.defaultOpeneds,a=>{JSON.stringify(a)!==JSON.stringify(l.value)&&(l.value=Array.isArray(a)?[...a]:[])},{deep:!0}),_(()=>e.defaultActive,a=>{y.value=a||""});const h=m(()=>e.mode),Y=m(()=>e.collapse),x=m(()=>e.trigger),g=m(()=>e.uniqueOpened),C=m(()=>e.collapseTransition),k=W({});let r=[],c={};function P(a,b=[]){y.value=a,u("select",a,b),Y.value&&(l.value=[])}function N(a,b=[]){if(l.value.includes(a))return;const p=b.slice(0,-1).join("/")||"__root__";if(g.value){const f=new Set(b),M=l.value.filter(T=>!f.has(T));M.length&&(l.value=l.value.filter(T=>!M.includes(T)),M.forEach(T=>delete k[T]))}else{const f=l.value.filter(M=>k[M]!==p);f.length&&(l.value=l.value.filter(M=>!f.includes(M)),f.forEach(M=>delete k[M]))}l.value.push(a),k[a]=p,u("open",a,b)}function S(a){if(!l.value.includes(a))return;Object.keys(k).filter(p=>k[p]===a).forEach(p=>S(p)),l.value=l.value.filter(p=>p!==a),delete k[a],u("close",a,[a])}function z(a,b=[]){l.value.includes(a)?S(a):N(a,b)}return _(()=>e.collapse,a=>{a?(r=[...l.value],c={...k},l.value=[]):(r&&r.length&&(l.value=[...r],Object.assign(k,c)),r=[],c={})}),F("menuContext",{activeIndex:y,openedMenus:l,mode:h,collapse:Y,trigger:x,uniqueOpened:g,collapseTransition:C,handleSelect:P,openMenu:N,closeMenu:S,toggleMenu:z,backgroundColor:e.backgroundColor}),F("indexPath",[]),F("subLevel",0),(a,b)=>(O(),q("ul",{class:R(["my-menu",[`my-menu--${e.mode}`,{"is-collapse":e.collapse}]]),style:j({"--menu-bg":e.backgroundColor,"--menu-text":e.textColor,"--menu-active":e.activeTextColor})},[B(a.$slots,"default")],6))}}),ee={index:{type:String,required:!0},disabled:{type:Boolean,default:!1}},te={class:"menu-icon"},se={class:"menu-label"},d=L({name:"MYMenuItem",__name:"menuItem",props:ee,setup(A){const o=A,e=I("menuContext"),u=I("indexPath",[]),y=I("subLevel",0),l=m(()=>e?.activeIndex?.value===o.index),h=m(()=>!!e?.collapse?.value),Y=m(()=>y>0||!h.value);function x(){if(o.disabled)return;const g=[...u||[],o.index];e?.handleSelect(o.index,g)}return(g,C)=>(O(),q("li",{class:R(["my-menu-item",{"is-active":l.value,"is-disabled":g.disabled}]),onClick:J(x,["stop"])},[n("span",te,[B(g.$slots,"icon")]),w(n("span",se,[B(g.$slots,"default")],512),[[$,Y.value]])],2))}}),ie={index:{type:String,required:!0},trigger:{type:String,default:void 0},teleported:{type:Boolean,default:!1}},ne={class:"menu-icon"},ae={class:"menu-label"},le={class:"submenu-arrow"},de={class:"submenu-list"},v=L({name:"MYSubMenu",__name:"menusubMenu",props:ie,setup(A){const o=A,e=I("menuContext"),u=I("indexPath",[]),y=I("subLevel",0);F("subLevel",y+1);const l=[...u||[],o.index];F("indexPath",l);const h=m(()=>!!e?.collapse?.value),Y=m(()=>y>0||!h.value),x=m(()=>h.value?"hover":o.trigger??e?.trigger?.value??"click"),g=m(()=>(e?.openedMenus?.value??[]).includes(o.index)),C=D(null),k=D(null);let r=null;const c=D(!1),P=D({position:"absolute",top:"0px",left:"0px",minWidth:"160px",background:e?.backgroundColor??"#2f3b46",color:e?.textColor??"#bfcbd9",boxShadow:"0 6px 18px rgba(0,0,0,0.2)",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.08)",zIndex:"9999",padding:"8px 0"});_(c,async p=>{if(p&&C.value&&k.value){await U();const f=C.value.getBoundingClientRect();P.value.top=`${f.top}px`,P.value.left=`${f.right}px`}});function N(){h.value?c.value=!c.value:e?.toggleMenu(o.index,l)}function S(){x.value==="hover"&&(h.value?(r&&clearTimeout(r),c.value=!0):(r&&clearTimeout(r),e?.openMenu(o.index,l)))}function z(){x.value==="hover"&&(r=setTimeout(()=>{h.value?c.value=!1:e?.closeMenu(o.index),r=null},150))}function a(){r&&clearTimeout(r)}function b(){x.value==="hover"&&(r=setTimeout(()=>{h.value?c.value=!1:e?.closeMenu(o.index),r=null},150))}return(p,f)=>(O(),q("li",{class:R(["my-submenu",{"is-open":g.value}])},[n("div",{class:"submenu-title",ref_key:"titleRef",ref:C,onClick:J(N,["stop"]),onMouseenter:S,onMouseleave:z},[n("span",ne,[B(p.$slots,"icon")]),w(n("span",ae,[B(p.$slots,"title")],512),[[$,Y.value]]),w(n("span",le,[...f[0]||(f[0]=[n("svg",{width:"12",height:"12",viewBox:"0 0 1024 1024"},[n("path",{fill:"currentColor",d:"M384 192l256 320-256 320z"})],-1)])],512),[[$,!h.value]])],544),h.value?(O(),K(G,{key:0,to:"body"},[w(n("ul",{class:"submenu-list teleported-list",ref_key:"listRef",ref:k,onMouseenter:a,onMouseleave:b,style:j(P.value)},[B(p.$slots,"default")],36),[[$,c.value]])])):H("",!0),i(Q,{name:"slide"},{default:t(()=>[w(n("ul",de,[B(p.$slots,"default")],512),[[$,!h.value&&g.value]])]),_:3})],2))}}),re={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},oe={style:{background:"#2f3b46","border-radius":"6px"}},pe={style:{width:"240px","border-radius":"6px",overflow:"hidden"}},ue={style:{width:"240px",background:"#2f3b46","border-radius":"6px",padding:"8px 0"}},he={style:{background:"#2f3b46","border-radius":"6px"}},ge=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationMenu.md","filePath":"components/NavigationMenu.md"}'),ke={name:"components/NavigationMenu.md"},ce=Object.assign(ke,{setup(A){return(o,e)=>{const u=X("ShowCode");return O(),q("div",null,[e[42]||(e[42]=V("",6)),i(u,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[n("div",re,[i(E,{"default-active":"1"},{default:t(()=>[i(d,{index:"1"},{icon:t(()=>[...e[0]||(e[0]=[s("🏠",-1)])]),default:t(()=>[e[1]||(e[1]=s(" 首页 ",-1))]),_:1}),i(d,{index:"2"},{icon:t(()=>[...e[2]||(e[2]=[s("📊",-1)])]),default:t(()=>[e[3]||(e[3]=s(" 数据统计 ",-1))]),_:1}),i(v,{index:"3"},{icon:t(()=>[...e[4]||(e[4]=[s("⚙️",-1)])]),title:t(()=>[...e[5]||(e[5]=[s("系统管理",-1)])]),default:t(()=>[i(d,{index:"3-1"},{default:t(()=>[...e[6]||(e[6]=[s("用户管理",-1)])]),_:1}),i(d,{index:"3-2"},{default:t(()=>[...e[7]||(e[7]=[s("角色管理",-1)])]),_:1}),i(v,{index:"3-3"},{title:t(()=>[...e[8]||(e[8]=[s("权限管理",-1)])]),default:t(()=>[i(d,{index:"3-3-1"},{default:t(()=>[...e[9]||(e[9]=[s("菜单权限",-1)])]),_:1}),i(d,{index:"3-3-2"},{default:t(()=>[...e[10]||(e[10]=[s("操作权限",-1)])]),_:1})]),_:1})]),_:1}),i(d,{index:"4",disabled:""},{icon:t(()=>[...e[11]||(e[11]=[s("🔒",-1)])]),default:t(()=>[e[12]||(e[12]=s(" 禁用菜单 ",-1))]),_:1})]),_:1})])]),_:1},8,["code"]),e[43]||(e[43]=n("h3",{id:"水平菜单",tabindex:"-1"},[s("水平菜单 "),n("a",{class:"header-anchor",href:"#水平菜单","aria-label":"Permalink to “水平菜单”"},"​")],-1)),e[44]||(e[44]=n("p",null,[s("使用 "),n("code",null,"mode"),s(" 属性设置为 horizontal 创建水平菜单。")],-1)),i(u,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[n("div",oe,[i(E,{mode:"horizontal","default-active":"1"},{default:t(()=>[i(d,{index:"1"},{default:t(()=>[...e[13]||(e[13]=[s("首页",-1)])]),_:1}),i(d,{index:"2"},{default:t(()=>[...e[14]||(e[14]=[s("产品",-1)])]),_:1}),i(v,{index:"3"},{title:t(()=>[...e[15]||(e[15]=[s("服务",-1)])]),default:t(()=>[i(d,{index:"3-1"},{default:t(()=>[...e[16]||(e[16]=[s("云服务",-1)])]),_:1}),i(d,{index:"3-2"},{default:t(()=>[...e[17]||(e[17]=[s("技术支持",-1)])]),_:1})]),_:1}),i(d,{index:"4"},{default:t(()=>[...e[18]||(e[18]=[s("关于我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),e[45]||(e[45]=n("h3",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),n("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[46]||(e[46]=n("p",null,[s("使用 "),n("code",null,"backgroundColor"),s("、"),n("code",null,"textColor"),s(" 和 "),n("code",null,"activeTextColor"),s(" 属性自定义菜单颜色。")],-1)),i(u,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[n("div",pe,[i(E,{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:t(()=>[i(d,{index:"1"},{icon:t(()=>[...e[19]||(e[19]=[s("🌟",-1)])]),default:t(()=>[e[20]||(e[20]=s(" 金色主题 ",-1))]),_:1}),i(d,{index:"2"},{icon:t(()=>[...e[21]||(e[21]=[s("🎨",-1)])]),default:t(()=>[e[22]||(e[22]=s(" 色彩定制 ",-1))]),_:1}),i(v,{index:"3"},{icon:t(()=>[...e[23]||(e[23]=[s("🔧",-1)])]),title:t(()=>[...e[24]||(e[24]=[s("设置",-1)])]),default:t(()=>[i(d,{index:"3-1"},{default:t(()=>[...e[25]||(e[25]=[s("主题设置",-1)])]),_:1}),i(d,{index:"3-2"},{default:t(()=>[...e[26]||(e[26]=[s("颜色设置",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e[47]||(e[47]=n("h3",{id:"唯一展开菜单",tabindex:"-1"},[s("唯一展开菜单 "),n("a",{class:"header-anchor",href:"#唯一展开菜单","aria-label":"Permalink to “唯一展开菜单”"},"​")],-1)),e[48]||(e[48]=n("p",null,[s("使用 "),n("code",null,"unique-opened"),s(" 属性确保同时只能展开一个子菜单。")],-1)),i(u,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[n("div",ue,[i(E,{"unique-opened":"","default-active":"1"},{default:t(()=>[i(d,{index:"1"},{icon:t(()=>[...e[27]||(e[27]=[s("📁",-1)])]),default:t(()=>[e[28]||(e[28]=s(" 文档管理 ",-1))]),_:1}),i(v,{index:"2"},{icon:t(()=>[...e[29]||(e[29]=[s("👥",-1)])]),title:t(()=>[...e[30]||(e[30]=[s("用户管理",-1)])]),default:t(()=>[i(d,{index:"2-1"},{default:t(()=>[...e[31]||(e[31]=[s("用户列表",-1)])]),_:1}),i(d,{index:"2-2"},{default:t(()=>[...e[32]||(e[32]=[s("用户组",-1)])]),_:1})]),_:1}),i(v,{index:"3"},{icon:t(()=>[...e[33]||(e[33]=[s("🔐",-1)])]),title:t(()=>[...e[34]||(e[34]=[s("权限管理",-1)])]),default:t(()=>[i(d,{index:"3-1"},{default:t(()=>[...e[35]||(e[35]=[s("角色管理",-1)])]),_:1}),i(d,{index:"3-2"},{default:t(()=>[...e[36]||(e[36]=[s("权限设置",-1)])]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e[49]||(e[49]=n("h3",{id:"悬停触发",tabindex:"-1"},[s("悬停触发 "),n("a",{class:"header-anchor",href:"#悬停触发","aria-label":"Permalink to “悬停触发”"},"​")],-1)),e[50]||(e[50]=n("p",null,[s("使用 "),n("code",null,"trigger"),s(" 属性设置为 hover，通过悬停触发子菜单展开。")],-1)),i(u,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[n("div",he,[i(E,{trigger:"hover","default-active":"1"},{default:t(()=>[i(d,{index:"1"},{default:t(()=>[...e[37]||(e[37]=[s("首页",-1)])]),_:1}),i(v,{index:"2"},{title:t(()=>[...e[38]||(e[38]=[s("悬停菜单",-1)])]),default:t(()=>[i(d,{index:"2-1"},{default:t(()=>[...e[39]||(e[39]=[s("选项一",-1)])]),_:1}),i(d,{index:"2-2"},{default:t(()=>[...e[40]||(e[40]=[s("选项二",-1)])]),_:1})]),_:1}),i(d,{index:"3"},{default:t(()=>[...e[41]||(e[41]=[s("联系我们",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),e[51]||(e[51]=V("",11))])}}});export{ge as __pageData,ce as default};
