import{_ as p}from"./chunks/radio-button.vue_vue_type_script_setup_true_lang.CDTxzAWp.js";import{a as d,_ as o}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Zb_JEi3Z.js";import{y as M,I as Y,o as C,c as V,a8 as B,J as s,w as i,j as e,a as t,A as n,R as x}from"./chunks/framework.DvHWw5tv.js";const P={style:{display:"flex",gap:"20px"}},S={style:{display:"flex","flex-direction":"column",gap:"15px"}},N=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormRadio.md","filePath":"components/FormRadio.md"}'),E={name:"components/FormRadio.md"},w=Object.assign(E,{setup(F){const h=n("option1"),k=n("2"),u=n("1"),g=n("1"),m=n("1"),f=n("1"),v=n("default"),b=n("1"),y=n("default"),A=n("1"),R=n("1"),D=n("1"),c=()=>{x(()=>{})};return M([h,k,u,g,m,f,v,b,y,A,R,D],()=>{c()}),(z,a)=>{const r=Y("ShowCode");return C(),V("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[a[27]||(a[27]=B("",6)),s(r,{title:"代码演示",code:`
<template>
  <MYRadio v-model='singleSelected' value='option1'>选项1</MYRadio>
  <MYRadio v-model='singleSelected' value='option2'>选项2</MYRadio>
</template>
  `.trim()},{demo:i(()=>[e("div",P,[s(d,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=l=>h.value=l),value:"option1"},{default:i(()=>[...a[8]||(a[8]=[t("选项1",-1)])]),_:1},8,["modelValue"]),s(d,{modelValue:h.value,"onUpdate:modelValue":a[1]||(a[1]=l=>h.value=l),value:"option2"},{default:i(()=>[...a[9]||(a[9]=[t("选项2",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[28]||(a[28]=e("h3",{id:"单选按钮组",tabindex:"-1"},[t("单选按钮组 "),e("a",{class:"header-anchor",href:"#单选按钮组","aria-label":"Permalink to “单选按钮组”"},"​")],-1)),a[29]||(a[29]=e("p",null,"可以使用 radioGroup 将单选按钮放到一个组里面。",-1)),s(r,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='groupSelected'>
    <MYRadio value='1'>选项1</MYRadio>
    <MYRadio value='2'>选项2</MYRadio>
    <MYRadio value='3'>选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:i(()=>[s(o,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=l=>k.value=l)},{default:i(()=>[s(d,{value:"1"},{default:i(()=>[...a[10]||(a[10]=[t("选项1",-1)])]),_:1}),s(d,{value:"2"},{default:i(()=>[...a[11]||(a[11]=[t("选项2",-1)])]),_:1}),s(d,{value:"3"},{default:i(()=>[...a[12]||(a[12]=[t("选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[30]||(a[30]=e("h2",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),a[31]||(a[31]=e("h3",{id:"单个禁用",tabindex:"-1"},[t("单个禁用 "),e("a",{class:"header-anchor",href:"#单个禁用","aria-label":"Permalink to “单个禁用”"},"​")],-1)),a[32]||(a[32]=e("p",null,"禁用特定的单选按钮。",-1)),s(r,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='disabledSelected'>
    <MYRadio value='1'>正常选项</MYRadio>
    <MYRadio value='2' disabled>禁用选项</MYRadio>
    <MYRadio value='3'>正常选项</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:i(()=>[s(o,{modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=l=>u.value=l)},{default:i(()=>[s(d,{value:"1"},{default:i(()=>[...a[13]||(a[13]=[t("正常选项",-1)])]),_:1}),s(d,{value:"2",disabled:""},{default:i(()=>[...a[14]||(a[14]=[t("禁用选项",-1)])]),_:1}),s(d,{value:"3"},{default:i(()=>[...a[15]||(a[15]=[t("正常选项",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[33]||(a[33]=e("h3",{id:"全部禁用",tabindex:"-1"},[t("全部禁用 "),e("a",{class:"header-anchor",href:"#全部禁用","aria-label":"Permalink to “全部禁用”"},"​")],-1)),a[34]||(a[34]=e("p",null,"禁用整个单选按钮组。",-1)),s(r,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='groupDisabledSelected' disabled>
    <MYRadio value='1'>禁用选项1</MYRadio>
    <MYRadio value='2'>禁用选项2</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:i(()=>[s(o,{modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=l=>g.value=l),disabled:""},{default:i(()=>[s(d,{value:"1"},{default:i(()=>[...a[16]||(a[16]=[t("禁用选项1",-1)])]),_:1}),s(d,{value:"2"},{default:i(()=>[...a[17]||(a[17]=[t("禁用选项2",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[35]||(a[35]=e("h2",{id:"布局方向",tabindex:"-1"},[t("布局方向 "),e("a",{class:"header-anchor",href:"#布局方向","aria-label":"Permalink to “布局方向”"},"​")],-1)),a[36]||(a[36]=e("h3",{id:"垂直排列",tabindex:"-1"},[t("垂直排列 "),e("a",{class:"header-anchor",href:"#垂直排列","aria-label":"Permalink to “垂直排列”"},"​")],-1)),a[37]||(a[37]=e("p",null,[t("使用 "),e("code",null,'direction="vertical"'),t(" 实现垂直布局。")],-1)),s(r,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='verticalSelected' direction='vertical'>
    <MYRadio value='1'>垂直选项1</MYRadio>
    <MYRadio value='2'>垂直选项2</MYRadio>
    <MYRadio value='3'>垂直选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:i(()=>[s(o,{modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=l=>m.value=l),direction:"vertical"},{default:i(()=>[s(d,{value:"1"},{default:i(()=>[...a[18]||(a[18]=[t("垂直选项1",-1)])]),_:1}),s(d,{value:"2"},{default:i(()=>[...a[19]||(a[19]=[t("垂直选项2",-1)])]),_:1}),s(d,{value:"3"},{default:i(()=>[...a[20]||(a[20]=[t("垂直选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[38]||(a[38]=e("h2",{id:"按钮样式",tabindex:"-1"},[t("按钮样式 "),e("a",{class:"header-anchor",href:"#按钮样式","aria-label":"Permalink to “按钮样式”"},"​")],-1)),a[39]||(a[39]=e("h3",{id:"单选按钮样式",tabindex:"-1"},[t("单选按钮样式 "),e("a",{class:"header-anchor",href:"#单选按钮样式","aria-label":"Permalink to “单选按钮样式”"},"​")],-1)),a[40]||(a[40]=e("p",null,[t("使用 "),e("code",null,"MYRadioButton"),t(" 实现按钮样式的单选按钮。")],-1)),s(r,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='buttonSelected'>
    <MYRadioButton value='1'>按钮1</MYRadioButton>
    <MYRadioButton value='2'>按钮2</MYRadioButton>
    <MYRadioButton value='3'>按钮3</MYRadioButton>
  </MYRadio-group>
</template>
  `.trim()},{demo:i(()=>[s(o,{modelValue:b.value,"onUpdate:modelValue":a[6]||(a[6]=l=>b.value=l)},{default:i(()=>[s(p,{value:"1"},{default:i(()=>[...a[21]||(a[21]=[t("按钮1",-1)])]),_:1}),s(p,{value:"2"},{default:i(()=>[...a[22]||(a[22]=[t("按钮2",-1)])]),_:1}),s(p,{value:"3"},{default:i(()=>[...a[23]||(a[23]=[t("按钮3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[41]||(a[41]=e("h3",{id:"按钮尺寸",tabindex:"-1"},[t("按钮尺寸 "),e("a",{class:"header-anchor",href:"#按钮尺寸","aria-label":"Permalink to “按钮尺寸”"},"​")],-1)),a[42]||(a[42]=e("p",null,"按钮样式的单选按钮也支持尺寸控制。",-1)),s(r,{title:"代码演示",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <MYRadio-group v-model='buttonSizeSelected'>
      <MYRadioButton value='small' size='small'>小按钮</MYRadioButton>
      <MYRadioButton value='default' size='default'>默认按钮</MYRadioButton>
      <MYRadioButton value='large' size='large'>大按钮</MYRadioButton>
    </MYRadio-group>
  </div>
</template>
  `.trim()},{demo:i(()=>[e("div",S,[s(o,{modelValue:y.value,"onUpdate:modelValue":a[7]||(a[7]=l=>y.value=l)},{default:i(()=>[s(p,{value:"small",size:"small"},{default:i(()=>[...a[24]||(a[24]=[t("小按钮",-1)])]),_:1}),s(p,{value:"default",size:"default"},{default:i(()=>[...a[25]||(a[25]=[t("默认按钮",-1)])]),_:1}),s(p,{value:"large",size:"large"},{default:i(()=>[...a[26]||(a[26]=[t("大按钮",-1)])]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[43]||(a[43]=B("",9))])}}});export{N as __pageData,w as default};
