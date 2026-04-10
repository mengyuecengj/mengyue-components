import{_ as l,a as t}from"./chunks/col.vue_vue_type_script_setup_true_lang.DdC9l-8w.js";import{I as h,o as r,c as k,a8 as p,J as a,w as n,j as s,a as e}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useOverallComputed.oY471y-F.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const z=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"plus/RollLayout.md","filePath":"plus/RollLayout.md"}'),o={name:"plus/RollLayout.md"},j=Object.assign(o,{setup(g){return(u,i)=>{const d=h("ShowCode");return r(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[14]||(i[14]=p("",6)),a(d,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a(l,null,{default:n(()=>[a(t,{span:6},{default:n(()=>[...i[0]||(i[0]=[s("div",{style:{background:"red"}},"span=6",-1)])]),_:1}),a(t,{span:12},{default:n(()=>[...i[1]||(i[1]=[s("div",{style:{background:"#2c2"}},"span=12",-1)])]),_:1}),a(t,{span:6},{default:n(()=>[...i[2]||(i[2]=[s("div",{style:{background:"#2828"}},"span=6",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[15]||(i[15]=s("h3",{id:"间距控制",tabindex:"-1"},[e("间距控制 "),s("a",{class:"header-anchor",href:"#间距控制","aria-label":"Permalink to “间距控制”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jianjukongzhi jian ju kong zhi jjkz ")],-1)),i[16]||(i[16]=s("p",null,[e("通过 "),s("code",null,"gutter"),e(" 属性可以设置栅格之间的间距。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguo shuxingkeyishezhizhagezhijiandejianju。 tong guo shu xing ke yi she zhi zha ge zhi jian de jian ju 。 tg sxkyszzgzjdjj。")],-1)),a(d,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a(l,{gutter:16},{default:n(()=>[a(t,{span:8},{default:n(()=>[...i[3]||(i[3]=[s("div",{style:{background:"red"}},"左侧",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...i[4]||(i[4]=[s("div",{style:{background:"#2c2"}},"中间",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...i[5]||(i[5]=[s("div",{style:{background:"#2828"}},"右侧",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[17]||(i[17]=s("h3",{id:"两端对齐",tabindex:"-1"},[e("两端对齐 "),s("a",{class:"header-anchor",href:"#两端对齐","aria-label":"Permalink to “两端对齐”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"liangduanduiqi liang duan dui qi lddq ")],-1)),i[18]||(i[18]=s("p",null,[e("通过 "),s("code",null,"justify"),e(" 属性可以设置水平对齐方式。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguo shuxingkeyishezhishuipingduiqifangshi。 tong guo shu xing ke yi she zhi shui ping dui qi fang shi 。 tg sxkyszspdqfs。")],-1)),a(d,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a(l,{justify:"space-between"},{default:n(()=>[a(t,{span:6},{default:n(()=>[...i[6]||(i[6]=[s("div",{style:{background:"red"}},"左侧",-1)])]),_:1}),a(t,{span:6},{default:n(()=>[...i[7]||(i[7]=[s("div",{style:{background:"#2c2"}},"右侧",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[19]||(i[19]=s("h3",{id:"垂直居中",tabindex:"-1"},[e("垂直居中 "),s("a",{class:"header-anchor",href:"#垂直居中","aria-label":"Permalink to “垂直居中”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"chuizhijuzhong chui zhi ju zhong czjz ")],-1)),i[20]||(i[20]=s("p",null,[e("通过 "),s("code",null,"align"),e(" 属性可以设置垂直居中，以及 "),s("code",null,"alignCenter"),e(" 可以设置水平垂直居中。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguo shuxingkeyishezhichuizhijuzhong，yiji keyishezhishuipingchuizhijuzhong。 tong guo shu xing ke yi she zhi chui zhi ju zhong ， yi ji ke yi she zhi shui ping chui zhi ju zhong 。 tg sxkyszczjz，yj kyszspczjz。")],-1)),a(d,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a(l,{align:""},{default:n(()=>[a(t,{span:24},{default:n(()=>[...i[8]||(i[8]=[s("div",{style:{background:"red"}},"顶部",-1)])]),_:1}),a(t,{span:24},{default:n(()=>[...i[9]||(i[9]=[s("div",{style:{background:"#2c2"}},"中部",-1)])]),_:1}),a(t,{span:24},{default:n(()=>[...i[10]||(i[10]=[s("div",{style:{background:"#2828"}},"底部",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[21]||(i[21]=s("h3",{id:"方向反转",tabindex:"-1"},[e("方向反转 "),s("a",{class:"header-anchor",href:"#方向反转","aria-label":"Permalink to “方向反转”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"fangxiangfanzhuan fang xiang fan zhuan fxfz ")],-1)),i[22]||(i[22]=s("p",null,[e("通过 "),s("code",null,"direction"),e(" 属性可以设置布局方向。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguo shuxingkeyishezhibujufangxiang。 tong guo shu xing ke yi she zhi bu ju fang xiang 。 tg sxkyszbjfx。")],-1)),a(d,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a(l,{direction:"row-reverse"},{default:n(()=>[a(t,{span:8},{default:n(()=>[...i[11]||(i[11]=[s("div",{style:{background:"red"}},"1 (视觉在右)",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...i[12]||(i[12]=[s("div",{style:{background:"#2c2"}},"2",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...i[13]||(i[13]=[s("div",{style:{background:"#2828"}},"3 (视觉在左)",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[23]||(i[23]=p("",7))])}}});export{z as __pageData,j as default};
