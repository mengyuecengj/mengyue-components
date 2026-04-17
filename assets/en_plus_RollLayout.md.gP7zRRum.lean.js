import{_ as d,a as e}from"./chunks/col.vue_vue_type_script_setup_true_lang.DdC9l-8w.js";import{I as p,o as h,c as o,a8 as r,J as t,w as a,j as i,a as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useOverallComputed.oY471y-F.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const f=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/RollLayout.md","filePath":"en/plus/RollLayout.md"}'),k={name:"en/plus/RollLayout.md"},B=Object.assign(k,{setup(g){return(y,s)=>{const l=p("ShowCode");return h(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[14]||(s[14]=r("",6)),t(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:a(()=>[t(d,null,{default:a(()=>[t(e,{span:6},{default:a(()=>[...s[0]||(s[0]=[i("div",{style:{background:"red"}},"span=6",-1)])]),_:1}),t(e,{span:12},{default:a(()=>[...s[1]||(s[1]=[i("div",{style:{background:"#2c2"}},"span=12",-1)])]),_:1}),t(e,{span:6},{default:a(()=>[...s[2]||(s[2]=[i("div",{style:{background:"#2828"}},"span=6",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[15]||(s[15]=i("h3",{id:"spacing-control",tabindex:"-1"},[n("Spacing Control "),i("a",{class:"header-anchor",href:"#spacing-control","aria-label":"Permalink to “Spacing Control”"},"​")],-1)),s[16]||(s[16]=i("p",null,[n("Use the "),i("code",null,"gutter"),n(" property to set the spacing between grids.")],-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYRow :gutter='16'>
    <MYCol :span='8'>
      <div class='demo-box'>Left</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>Center</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>Right</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:a(()=>[t(d,{gutter:16},{default:a(()=>[t(e,{span:8},{default:a(()=>[...s[3]||(s[3]=[i("div",{style:{background:"red"}},"Left",-1)])]),_:1}),t(e,{span:8},{default:a(()=>[...s[4]||(s[4]=[i("div",{style:{background:"#2c2"}},"Center",-1)])]),_:1}),t(e,{span:8},{default:a(()=>[...s[5]||(s[5]=[i("div",{style:{background:"#2828"}},"Right",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[17]||(s[17]=i("h3",{id:"horizontal-alignment",tabindex:"-1"},[n("Horizontal Alignment "),i("a",{class:"header-anchor",href:"#horizontal-alignment","aria-label":"Permalink to “Horizontal Alignment”"},"​")],-1)),s[18]||(s[18]=i("p",null,[n("Use the "),i("code",null,"justify"),n(" property to set the horizontal alignment.")],-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYRow justify='space-between'>
    <MYCol :span='6'>
      <div style='background: red'>Left</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2c2'>Right</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:a(()=>[t(d,{justify:"space-between"},{default:a(()=>[t(e,{span:6},{default:a(()=>[...s[6]||(s[6]=[i("div",{style:{background:"red"}},"Left",-1)])]),_:1}),t(e,{span:6},{default:a(()=>[...s[7]||(s[7]=[i("div",{style:{background:"#2c2"}},"Right",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[19]||(s[19]=i("h3",{id:"vertical-centering",tabindex:"-1"},[n("Vertical Centering "),i("a",{class:"header-anchor",href:"#vertical-centering","aria-label":"Permalink to “Vertical Centering”"},"​")],-1)),s[20]||(s[20]=i("p",null,[n("Use the "),i("code",null,"align"),n(" property to set vertical centering, and "),i("code",null,"alignCenter"),n(" to set both horizontal and vertical centering.")],-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYRow align>
    <MYCol :span='24'>
      <div class='demo-box'>Top</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>Middle</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>Bottom</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:a(()=>[t(d,{align:""},{default:a(()=>[t(e,{span:24},{default:a(()=>[...s[8]||(s[8]=[i("div",{style:{background:"red"}},"Top",-1)])]),_:1}),t(e,{span:24},{default:a(()=>[...s[9]||(s[9]=[i("div",{style:{background:"#2c2"}},"Middle",-1)])]),_:1}),t(e,{span:24},{default:a(()=>[...s[10]||(s[10]=[i("div",{style:{background:"#2828"}},"Bottom",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[21]||(s[21]=i("h3",{id:"direction-reversal",tabindex:"-1"},[n("Direction Reversal "),i("a",{class:"header-anchor",href:"#direction-reversal","aria-label":"Permalink to “Direction Reversal”"},"​")],-1)),s[22]||(s[22]=i("p",null,[n("Use the "),i("code",null,"direction"),n(" property to set the layout direction.")],-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYRow direction='row-reverse'>
    <MYCol :span='8'>
      <div class='demo-box'>1 (Visually on the right)</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>2</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>3 (Visually on the left)</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()},{demo:a(()=>[t(d,{direction:"row-reverse"},{default:a(()=>[t(e,{span:8},{default:a(()=>[...s[11]||(s[11]=[i("div",{style:{background:"red"}},"1 (Visually on the right)",-1)])]),_:1}),t(e,{span:8},{default:a(()=>[...s[12]||(s[12]=[i("div",{style:{background:"#2c2"}},"2",-1)])]),_:1}),t(e,{span:8},{default:a(()=>[...s[13]||(s[13]=[i("div",{style:{background:"#2828"}},"3 (Visually on the left)",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[23]||(s[23]=r("",7))])}}});export{f as __pageData,B as default};
