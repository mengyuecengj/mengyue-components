import{_ as d,a as n}from"./chunks/col.vue_vue_type_script_setup_true_lang.DLyWap8c.js";import{I as h,c as r,o as k,ah as p,J as a,j as i,w as t,a as l}from"./chunks/framework.D3tsReks.js";import"./chunks/useOverallComputed.BG-BUn0l.js";import"./chunks/useClassComputed.XPUKWacB.js";import"./chunks/useStyleComputed.BZuPLADM.js";const B=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"components/RollLayout.md","filePath":"components/RollLayout.md"}'),o={name:"components/RollLayout.md"},A=Object.assign(o,{setup(g){return(y,s)=>{const e=h("ShowCode");return k(),r("div",null,[s[14]||(s[14]=p("",6)),a(e,{title:"代码演示",code:`
<template>
  <MYRow>
    <MYCol :span='6'>
      <div style='background: red'>span=6</div>
    </MYCol>
    <MYCol :span='12'>
      <div style='background: #2c2'>span=12</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2828'>span=6</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:t(()=>[a(d,null,{default:t(()=>[a(n,{span:6},{default:t(()=>[...s[0]||(s[0]=[i("div",{style:{background:"red"}},"span=6",-1)])]),_:1}),a(n,{span:12},{default:t(()=>[...s[1]||(s[1]=[i("div",{style:{background:"#2c2"}},"span=12",-1)])]),_:1}),a(n,{span:6},{default:t(()=>[...s[2]||(s[2]=[i("div",{style:{background:"#2828"}},"span=6",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[15]||(s[15]=i("h3",{id:"间距控制",tabindex:"-1"},[l("间距控制 "),i("a",{class:"header-anchor",href:"#间距控制","aria-label":"Permalink to “间距控制”"},"​")],-1)),s[16]||(s[16]=i("p",null,[l("通过 "),i("code",null,"gutter"),l(" 属性可以设置栅格之间的间距。")],-1)),a(e,{title:"代码演示",code:`
<template>
  <MYRow :gutter='16'>
    <MYCol :span='8'>
      <div class='demo-box'>左侧</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>中间</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>右侧</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:t(()=>[a(d,{gutter:16},{default:t(()=>[a(n,{span:8},{default:t(()=>[...s[3]||(s[3]=[i("div",{style:{background:"red"}},"左侧",-1)])]),_:1}),a(n,{span:8},{default:t(()=>[...s[4]||(s[4]=[i("div",{style:{background:"#2c2"}},"中间",-1)])]),_:1}),a(n,{span:8},{default:t(()=>[...s[5]||(s[5]=[i("div",{style:{background:"#2828"}},"右侧",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[17]||(s[17]=i("h3",{id:"两端对齐",tabindex:"-1"},[l("两端对齐 "),i("a",{class:"header-anchor",href:"#两端对齐","aria-label":"Permalink to “两端对齐”"},"​")],-1)),s[18]||(s[18]=i("p",null,[l("通过 "),i("code",null,"justify"),l(" 属性可以设置水平对齐方式。")],-1)),a(e,{title:"代码演示",code:`
<template>
  <MYRow justify='space-between'>
    <MYCol :span='6'>
      <div style='background: red'>左侧</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2c2'>右侧</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:t(()=>[a(d,{justify:"space-between"},{default:t(()=>[a(n,{span:6},{default:t(()=>[...s[6]||(s[6]=[i("div",{style:{background:"red"}},"左侧",-1)])]),_:1}),a(n,{span:6},{default:t(()=>[...s[7]||(s[7]=[i("div",{style:{background:"#2c2"}},"右侧",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[19]||(s[19]=i("h3",{id:"垂直居中",tabindex:"-1"},[l("垂直居中 "),i("a",{class:"header-anchor",href:"#垂直居中","aria-label":"Permalink to “垂直居中”"},"​")],-1)),s[20]||(s[20]=i("p",null,[l("通过 "),i("code",null,"align"),l(" 属性可以设置垂直居中，以及 "),i("code",null,"alignCenter"),l(" 可以设置水平垂直居中。")],-1)),a(e,{title:"代码演示",code:`
<template>
  <MYRow align>
    <MYCol :span='24'>
      <div class='demo-box'>顶部</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>中部</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>底部</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:t(()=>[a(d,{align:""},{default:t(()=>[a(n,{span:24},{default:t(()=>[...s[8]||(s[8]=[i("div",{style:{background:"red"}},"顶部",-1)])]),_:1}),a(n,{span:24},{default:t(()=>[...s[9]||(s[9]=[i("div",{style:{background:"#2c2"}},"中部",-1)])]),_:1}),a(n,{span:24},{default:t(()=>[...s[10]||(s[10]=[i("div",{style:{background:"#2828"}},"底部",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[21]||(s[21]=i("h3",{id:"方向反转",tabindex:"-1"},[l("方向反转 "),i("a",{class:"header-anchor",href:"#方向反转","aria-label":"Permalink to “方向反转”"},"​")],-1)),s[22]||(s[22]=i("p",null,[l("通过 "),i("code",null,"direction"),l(" 属性可以设置布局方向。")],-1)),a(e,{title:"代码演示",code:`
<template>
  <MYRow direction='row-reverse'>
    <MYCol :span='8'>
      <div class='demo-box'>1 (视觉在右)</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>2</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>3 (视觉在左)</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:t(()=>[a(d,{direction:"row-reverse"},{default:t(()=>[a(n,{span:8},{default:t(()=>[...s[11]||(s[11]=[i("div",{style:{background:"red"}},"1 (视觉在右)",-1)])]),_:1}),a(n,{span:8},{default:t(()=>[...s[12]||(s[12]=[i("div",{style:{background:"#2c2"}},"2",-1)])]),_:1}),a(n,{span:8},{default:t(()=>[...s[13]||(s[13]=[i("div",{style:{background:"#2828"}},"3 (视觉在左)",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[23]||(s[23]=p("",7))])}}});export{B as __pageData,A as default};
