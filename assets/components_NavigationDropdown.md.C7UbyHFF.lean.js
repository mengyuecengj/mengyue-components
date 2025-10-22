import{x as S,ak as st,h as X,p as it,Z as dt,z as at,R as J,d as tt,c as Y,o as y,n as I,j as d,b as et,a1 as U,$ as F,O as z,r as x,a as n,k as K,e as nt,a2 as Z,aj as ot,W as lt,N as rt,K as pt,_ as mt,I as ht,ah as Q,J as i,w as e}from"./chunks/framework.DHTvsukI.js";import{u as kt}from"./chunks/useClassComputed.CEqmS9F9.js";function ut(a={},E){const t=S(!1),p=S(null),c=S(null),g=st({position:"absolute",top:"0px",left:"0px",minWidth:"120px",zIndex:1e3}),C=S(null),h=S(null),M=async(r="mouse")=>{a.disabled||(v(),t.value=!0,await J(),k(),r==="key"&&R())},D=()=>{v(),t.value=!1},$=()=>{t.value?D():M()};function v(){C.value&&(window.clearTimeout(C.value),C.value=null),h.value&&(window.clearTimeout(h.value),h.value=null)}function O(){if(a.trigger!=="hover")return;v();const r=a.showTimeout??150;C.value=window.setTimeout(()=>M("mouse"),r)}function G(){if(a.trigger!=="hover")return;v();const r=a.hideTimeout??150;h.value=window.setTimeout(()=>D(),r)}function H(){a.trigger==="hover"&&v()}function T(){a.trigger==="hover"&&(v(),h.value=window.setTimeout(()=>D(),a.hideTimeout??150))}const A=X(()=>({backgroundColor:E.backGroundColor}));function k(r,m){const w=p.value,s=c.value;if(!s)return;const o=a.placement??"bottom";let u=0,f=0;if(r!=null&&m!=null)f=r+window.scrollX,u=m+window.scrollY;else if(w){const b=w.getBoundingClientRect(),j=s.getBoundingClientRect();o.startsWith("bottom")?(u=b.bottom+6+window.scrollY,f=o==="bottom-end"?b.right-j.width+window.scrollX:b.left+window.scrollX):o.startsWith("top")?(u=b.top-j.height-6+window.scrollY,f=o==="top-end"?b.right-j.width+window.scrollX:b.left+window.scrollX):o==="right"?(f=b.right+6+window.scrollX,u=b.top+window.scrollY):(f=b.left-j.width-6+window.scrollX,u=b.top+window.scrollY)}const W=document.documentElement.clientWidth+window.scrollX,q=document.documentElement.clientHeight+window.scrollY,L=s.getBoundingClientRect();f+L.width>W&&(f=Math.max(window.scrollX+8,W-L.width-8)),f<window.scrollX&&(f=window.scrollX+8),u+L.height>q&&(u=Math.max(window.scrollY+8,q-L.height-8)),u<window.scrollY&&(u=window.scrollY+8),g.top=`${Math.round(u)}px`,g.left=`${Math.round(f)}px`,g.position="absolute",a.maxHeight?(g.maxHeight=typeof a.maxHeight=="number"?`${a.maxHeight}px`:`${a.maxHeight}`,g.overflowY="auto"):(g.maxHeight="",g.overflowY="")}function P(r){const m=p.value,w=c.value,s=r.target;!w||!m||w.contains(s)||m.contains(s)||D()}function R(){const r=c.value;if(!r)return;r.querySelector("[data-dropdown-item]:not([data-disabled])")?.focus()}function N(r){if(a.disabled)return;const m=r.key,w=a.triggerKeys??["Enter"," ","ArrowDown","NumpadEnter"];if(!t.value&&w.includes(m)){r.preventDefault(),M("key");return}if(t.value){if(m==="Escape"){r.preventDefault(),D(),p.value?.focus();return}if(m==="ArrowDown"||m==="ArrowUp"){r.preventDefault();const s=Array.from(c.value?.querySelectorAll("[data-dropdown-item]:not([data-disabled])")??[]);if(!s.length)return;const o=s.findIndex(u=>u===document.activeElement);m==="ArrowDown"?s[(o+1)%s.length].focus():s[(o-1+s.length)%s.length].focus();return}}}const V=kt({baseClass:"m-dropdown__caret",propClasses:{noCaret:""}});return it(()=>{document.addEventListener("pointerdown",P),window.addEventListener("keydown",N),window.addEventListener("resize",()=>k()),window.addEventListener("scroll",()=>k(),!0)}),dt(()=>{document.removeEventListener("pointerdown",P),window.removeEventListener("keydown",N),window.removeEventListener("resize",()=>k()),window.removeEventListener("scroll",()=>k(),!0),v()}),at(t,r=>{r&&J(()=>k())}),{visible:t,triggerEl:p,menuEl:c,menuStyle:g,carectClass:V,dropdownStyle:A,open:M,close:D,toggle:$,onTriggerEnter:O,onTriggerLeave:G,onMenuEnter:H,onMenuLeave:T,updatePosition:k}}const _={type:{type:String,default:"default"},size:{type:String,default:"md"},buttonProps:{type:Object,default:()=>({})},maxHeight:{type:[String,Number],default:null},splitButton:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placement:{type:String,default:"bottom"},trigger:{type:String,default:"hover"},triggerKeys:{type:Array,default:()=>["Enter"," ","ArrowDown","NumpadEnter"]},hideOnClick:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},role:{type:String,default:"menu"},tabindex:{type:[String,Number],default:0},popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},teleported:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},backGroundColor:{type:String,default:""},textColor:{type:String,default:""},noCaret:{type:Boolean,default:!1}},ct={key:0,class:"m-split"},gt=["disabled"],wt=["disabled","aria-expanded"],ft=["disabled","aria-expanded"],B=tt({name:"MYDropdown",__name:"dropdown",props:_,emits:["command","visible-change","click"],setup(a,{emit:E}){const t=a,p=E,{visible:c,triggerEl:g,menuEl:C,carectClass:h,menuStyle:M,close:D,toggle:$,onTriggerEnter:v,onTriggerLeave:O,onMenuEnter:G,onMenuLeave:H}=ut({trigger:t.trigger,showTimeout:t.showTimeout,hideTimeout:t.hideTimeout,placement:t.placement,maxHeight:t.maxHeight,disabled:t.disabled,teleported:t.teleported,persistent:t.persistent,triggerKeys:[],hideOnClick:t.hideOnClick,popperOptions:t.popperOptions},_),T=g,A=C,k=X(()=>c.value),P=X(()=>t.size==="sm"||t.size==="small"?"m-btn--sm":t.size==="lg"||t.size==="large"?"m-btn--lg":"m-btn--md");lt("m-dropdown-context",{select:s=>{p("command",s),t.hideOnClick&&D()},close:D});function R(s){s instanceof KeyboardEvent&&(s.key==="Enter"||s.key===" ")||(s?.stopPropagation(),!t.disabled&&(t.trigger==="click"&&$(),p("click",s)))}function N(s){s instanceof KeyboardEvent&&(s.key==="Enter"||s.key===" ")||(s?.stopPropagation(),!t.disabled&&p("click",s))}function V(){v()}function r(){(!A.value||!A.value.contains(document.activeElement))&&O()}function m(){G()}function w(){(!T.value||!A.value||!T.value.contains(document.activeElement)&&!A.value.contains(document.activeElement))&&H()}return(s,o)=>(y(),Y("div",{class:I(["m-dropdown",{"is-disabled":s.disabled}])},[d("div",{class:"m-dropdown__trigger",ref_key:"triggerRef",ref:T,onClick:R,onMouseenter:V,onMouseleave:r},[s.splitButton?(y(),Y("div",ct,[d("button",{class:I(["m-btn",["m-btn--"+(s.type||"default"),P.value]]),disabled:s.disabled,style:z({backgroundColor:t.backGroundColor,color:t.textColor}),onClick:F(N,["stop"]),onKeydown:o[0]||(o[0]=F(()=>{},["prevent"]))},[x(s.$slots,"default",{},()=>[o[4]||(o[4]=n("操作",-1))])],46,gt),d("button",{class:"m-split__caret",disabled:s.disabled,style:z({backgroundColor:t.backGroundColor,color:t.textColor}),onClick:o[1]||(o[1]=F(u=>K($)(),["stop"])),"aria-haspopup":"menu","aria-expanded":k.value,onKeydown:o[2]||(o[2]=F(()=>{},["prevent"]))},[...o[5]||(o[5]=[d("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none"},[d("path",{d:"M1 1l6 6 6-6",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],44,wt)])):(y(),Y("button",{key:1,class:I(["m-btn","m-btn--"+(s.type||"default"),P.value]),disabled:s.disabled,"aria-haspopup":"menu","aria-expanded":k.value,style:z({backgroundColor:t.backGroundColor,color:t.textColor}),onKeydown:o[3]||(o[3]=F(()=>{},["prevent"]))},[x(s.$slots,"default"),t.noCaret?nt("",!0):(y(),Y("span",{key:0,style:{"margin-left":"8px",display:"inline-flex"},class:I(["m-dropdown__caret",K(h)])},[...o[6]||(o[6]=[d("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none"},[d("path",{d:"M1 1l5 5 5-5",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2))],46,ft))],544),s.teleported?(y(),et(ot,{key:0,to:"body"},[U(d("div",{class:I(["m-dropdown__menu",k.value?"m-visible":"m-hidden",s.popperClass]),ref_key:"menuRef",ref:A,style:z({...K(M),backgroundColor:t.backGroundColor,color:t.textColor}),role:"menu",onMouseenter:m,onMouseleave:w},[x(s.$slots,"dropdown",{},()=>[x(s.$slots,"default")])],38),[[Z,k.value]])])):U((y(),Y("div",{key:1,class:I(["m-dropdown__menu",k.value?"m-visible":"m-hidden",s.popperClass]),ref_key:"menuRef",ref:A,style:z({...K(M),backgroundColor:t.backGroundColor,color:t.textColor}),role:"menu",onMouseenter:m,onMouseleave:w},[x(s.$slots,"dropdown",{},()=>[x(s.$slots,"default")])],38)),[[Z,k.value]])],2))}}),bt=["data-disabled"],yt={key:0,class:"my-dropdown-item__icon"},Dt={class:"my-dropdown-item__content"},vt=tt({__name:"dropdownItem",props:{command:{},disabled:{type:Boolean},divided:{type:Boolean},icon:{}},emits:["click"],setup(a,{emit:E}){const t=a,p=E,c=rt("m-dropdown-context"),g=h=>{t.disabled||(c&&c.select(t.command??""),p("click",t.command??"",h))},C=h=>{t.disabled||["Enter"," ","Spacebar"].includes(h.key)&&(c&&c.select(t.command??""),p("click",t.command??"",h))};return(h,M)=>(y(),Y("li",{class:I(["my-dropdown-item",{"is-disabled":a.disabled,"is-divided":a.divided}]),role:"menuitem",tabindex:"0","data-dropdown-item":"true","data-disabled":a.disabled||void 0,onClick:g,onKeydown:C},[a.icon?(y(),Y("span",yt,[(y(),et(pt(a.icon)))])):nt("",!0),d("span",Dt,[x(h.$slots,"default",{},void 0,!0)])],42,bt))}}),l=mt(vt,[["__scopeId","data-v-d0b9e50d"]]),Bt={style:{display:"flex",gap:"10px","align-items":"center"}},Yt=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationDropdown.md","filePath":"components/NavigationDropdown.md"}'),Ct={name:"components/NavigationDropdown.md"},It=Object.assign(Ct,{setup(a){return(E,t)=>{const p=ht("ShowCode");return y(),Y("div",null,[t[35]||(t[35]=Q("",6)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(B,null,{default:e(()=>[...t[0]||(t[0]=[n(" 下拉菜单 ",-1)])]),dropdown:e(()=>[i(l,{command:"a"},{default:e(()=>[...t[1]||(t[1]=[n("操作 A",-1)])]),_:1}),i(l,{command:"b"},{default:e(()=>[...t[2]||(t[2]=[n("操作 B",-1)])]),_:1}),i(l,{command:"c",disabled:""},{default:e(()=>[...t[3]||(t[3]=[n("禁用操作",-1)])]),_:1}),i(l,{divided:"",command:"d"},{default:e(()=>[...t[4]||(t[4]=[n("分割操作",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[36]||(t[36]=d("h3",{id:"点击触发",tabindex:"-1"},[n("点击触发 "),d("a",{class:"header-anchor",href:"#点击触发","aria-label":"Permalink to “点击触发”"},"​")],-1)),t[37]||(t[37]=d("p",null,[n("使用 "),d("code",null,"trigger"),n(" 属性设置为 click，通过点击触发下拉菜单。")],-1)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(B,{trigger:"click"},{default:e(()=>[...t[5]||(t[5]=[n(" 点击触发 ",-1)])]),dropdown:e(()=>[i(l,{command:"1"},{default:e(()=>[...t[6]||(t[6]=[n("菜单项 1",-1)])]),_:1}),i(l,{command:"2"},{default:e(()=>[...t[7]||(t[7]=[n("菜单项 2",-1)])]),_:1}),i(l,{command:"3"},{default:e(()=>[...t[8]||(t[8]=[n("菜单项 3",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[38]||(t[38]=d("h3",{id:"分割按钮",tabindex:"-1"},[n("分割按钮 "),d("a",{class:"header-anchor",href:"#分割按钮","aria-label":"Permalink to “分割按钮”"},"​")],-1)),t[39]||(t[39]=d("p",null,[n("使用 "),d("code",null,"split-button"),n(" 属性创建分割按钮下拉菜单。")],-1)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(B,{"split-button":""},{default:e(()=>[...t[9]||(t[9]=[n(" 分割按钮 ",-1)])]),dropdown:e(()=>[i(l,{command:"new"},{default:e(()=>[...t[10]||(t[10]=[n("新建",-1)])]),_:1}),i(l,{command:"save"},{default:e(()=>[...t[11]||(t[11]=[n("保存",-1)])]),_:1}),i(l,{command:"delete"},{default:e(()=>[...t[12]||(t[12]=[n("删除",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[40]||(t[40]=d("h3",{id:"不同尺寸",tabindex:"-1"},[n("不同尺寸 "),d("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),t[41]||(t[41]=d("p",null,[n("使用 "),d("code",null,"size"),n(" 属性设置下拉菜单的尺寸。")],-1)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[d("div",Bt,[i(B,{size:"sm"},{default:e(()=>[...t[13]||(t[13]=[n(" 小尺寸 ",-1)])]),dropdown:e(()=>[i(l,{command:"sm1"},{default:e(()=>[...t[14]||(t[14]=[n("小菜单 1",-1)])]),_:1}),i(l,{command:"sm2"},{default:e(()=>[...t[15]||(t[15]=[n("小菜单 2",-1)])]),_:1})]),_:1}),i(B,{size:"md"},{default:e(()=>[...t[16]||(t[16]=[n(" 中尺寸 ",-1)])]),dropdown:e(()=>[i(l,{command:"md1"},{default:e(()=>[...t[17]||(t[17]=[n("中菜单 1",-1)])]),_:1}),i(l,{command:"md2"},{default:e(()=>[...t[18]||(t[18]=[n("中菜单 2",-1)])]),_:1})]),_:1}),i(B,{size:"lg"},{default:e(()=>[...t[19]||(t[19]=[n(" 大尺寸 ",-1)])]),dropdown:e(()=>[i(l,{command:"lg1"},{default:e(()=>[...t[20]||(t[20]=[n("大菜单 1",-1)])]),_:1}),i(l,{command:"lg2"},{default:e(()=>[...t[21]||(t[21]=[n("大菜单 2",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[42]||(t[42]=d("h3",{id:"自定义颜色",tabindex:"-1"},[n("自定义颜色 "),d("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),t[43]||(t[43]=d("p",null,[n("使用 "),d("code",null,"backGroundColor"),n(" 和 "),d("code",null,"textColor"),n(" 属性自定义下拉菜单的颜色。")],-1)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(B,{backGroundColor:"#409eff",textColor:"#fff"},{default:e(()=>[...t[22]||(t[22]=[n(" 自定义颜色 ",-1)])]),dropdown:e(()=>[i(l,{command:"color1"},{default:e(()=>[...t[23]||(t[23]=[n("蓝色菜单项 1",-1)])]),_:1}),i(l,{command:"color2"},{default:e(()=>[...t[24]||(t[24]=[n("蓝色菜单项 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[44]||(t[44]=d("h3",{id:"隐藏下拉箭头",tabindex:"-1"},[n("隐藏下拉箭头 "),d("a",{class:"header-anchor",href:"#隐藏下拉箭头","aria-label":"Permalink to “隐藏下拉箭头”"},"​")],-1)),t[45]||(t[45]=d("p",null,[n("使用 "),d("code",null,"no-caret"),n(" 属性隐藏下拉箭头。")],-1)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(B,{"no-caret":""},{default:e(()=>[...t[25]||(t[25]=[n(" 无箭头 ",-1)])]),dropdown:e(()=>[i(l,{command:"no1"},{default:e(()=>[...t[26]||(t[26]=[n("菜单项 1",-1)])]),_:1}),i(l,{command:"no2"},{default:e(()=>[...t[27]||(t[27]=[n("菜单项 2",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[46]||(t[46]=d("h3",{id:"带图标菜单项",tabindex:"-1"},[n("带图标菜单项 "),d("a",{class:"header-anchor",href:"#带图标菜单项","aria-label":"Permalink to “带图标菜单项”"},"​")],-1)),t[47]||(t[47]=d("p",null,"在 DropdownItem 中使用图标。",-1)),i(p,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(B,null,{default:e(()=>[...t[28]||(t[28]=[n(" 带图标菜单 ",-1)])]),dropdown:e(()=>[i(l,{command:"edit"},{icon:e(()=>[...t[29]||(t[29]=[d("span",{style:{"margin-right":"8px"}},"📝",-1)])]),default:e(()=>[t[30]||(t[30]=n(" 编辑 ",-1))]),_:1}),i(l,{command:"copy"},{icon:e(()=>[...t[31]||(t[31]=[d("span",{style:{"margin-right":"8px"}},"📋",-1)])]),default:e(()=>[t[32]||(t[32]=n(" 复制 ",-1))]),_:1}),i(l,{command:"delete",divided:""},{icon:e(()=>[...t[33]||(t[33]=[d("span",{style:{"margin-right":"8px"}},"🗑️",-1)])]),default:e(()=>[t[34]||(t[34]=n(" 删除 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[48]||(t[48]=Q("",9))])}}});export{Yt as __pageData,It as default};
