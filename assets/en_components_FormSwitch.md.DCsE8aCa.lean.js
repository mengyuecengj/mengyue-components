import{_ as l}from"./chunks/switch.vue_vue_type_script_setup_true_lang.BErpIv_-.js";import{y as B,I as A,o as C,c as T,a8 as y,J as s,w as n,j as a,a as d,A as i,R as P}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const M={style:{display:"flex","flex-direction":"column",gap:"15px","align-items":"flex-start"}},U={style:{display:"flex",gap:"20px"}},R=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FormSwitch.md","filePath":"en/components/FormSwitch.md"}'),Y={name:"en/components/FormSwitch.md"},O=Object.assign(Y,{setup(E){const r=i(!0),p=i(!0),h=i(!1),u=i(!1),m=i(!1),k=i(!0),c=i(!1),b=i(!0),g=i(!1),v=i(!0),x=i(!1),f=i(!0),V=i(!0),w=i(!0),S=i(!1),z=i(!0),D=()=>{P(()=>{})};return B([r,p,h,u,m,k,c,b,g,v,x,f,V,w,S,z],()=>{D()}),(F,e)=>{const o=A("ShowCode");return C(),T("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[13]||(e[13]=y("",5)),s(o,{title:"Code Demo",code:`
<template>
  <MYSwitch v-model='value1' />
</template>
  `.trim()},{demo:n(()=>[a("div",null,[s(l,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])])]),_:1},8,["code"]),e[14]||(e[14]=a("h2",{id:"switch-with-text",tabindex:"-1"},[d("Switch with Text "),a("a",{class:"header-anchor",href:"#switch-with-text","aria-label":"Permalink to “Switch with Text”"},"​")],-1)),e[15]||(e[15]=a("p",null,[d("Use "),a("code",null,"text"),d(" to define the text displayed on the switch.")],-1)),s(o,{title:"Code Demo",code:`
<template>
  <MYSwitch v-model='value2' text='T' />
</template>
  `.trim()},{demo:n(()=>[a("div",null,[s(l,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),text:"T"},null,8,["modelValue"])])]),_:1},8,["code"]),e[16]||(e[16]=a("h2",{id:"custom-text-content",tabindex:"-1"},[d("Custom Text Content "),a("a",{class:"header-anchor",href:"#custom-text-content","aria-label":"Permalink to “Custom Text Content”"},"​")],-1)),e[17]||(e[17]=a("p",null,"Use slots to customize the text content of the switch.",-1)),s(o,{title:"Code Demo",code:`
<template>
  <MYSwitch v-model='slotValue'>
    Custom Text
  </MYSwitch>
</template>
  `.trim()},{demo:n(()=>[a("div",null,[s(l,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t)},{default:n(()=>[...e[12]||(e[12]=[d(" Custom Text ",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[18]||(e[18]=a("h2",{id:"sizing",tabindex:"-1"},[d("Sizing "),a("a",{class:"header-anchor",href:"#sizing","aria-label":"Permalink to “Sizing”"},"​")],-1)),e[19]||(e[19]=a("p",null,[d("Use "),a("code",null,"size"),d(" to define the size, with multiple sizes provided by mengyue-components.")],-1)),s(o,{title:"Code Demo",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px; align-items: flex-start;'>
    <MYSwitch v-model='sizeMini' size='mini' text='S' />
    <MYSwitch v-model='sizeSupersmall' size='supersmall' text='S' />
    <MYSwitch v-model='sizeSmall' size='small' text='M' />
    <MYSwitch v-model='sizeMedium' size='medium' text='L' />
    <MYSwitch v-model='sizeLarge' size='large' text='XL' />
    <MYSwitch v-model='sizeBiglarge' size='biglarge' text='XL' />
    <MYSwitch v-model='sizeSuperlarge' size='superlarge' text='XL' />
  </div>
</template>
  `.trim()},{demo:n(()=>[a("div",M,[s(l,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=t=>u.value=t),size:"mini",text:"S"},null,8,["modelValue"]),s(l,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=t=>m.value=t),size:"supersmall",text:"S"},null,8,["modelValue"]),s(l,{modelValue:k.value,"onUpdate:modelValue":e[5]||(e[5]=t=>k.value=t),size:"small",text:"M"},null,8,["modelValue"]),s(l,{modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=t=>c.value=t),size:"medium",text:"L"},null,8,["modelValue"]),s(l,{modelValue:b.value,"onUpdate:modelValue":e[7]||(e[7]=t=>b.value=t),size:"large",text:"XL"},null,8,["modelValue"]),s(l,{modelValue:g.value,"onUpdate:modelValue":e[8]||(e[8]=t=>g.value=t),size:"biglarge",text:"XL"},null,8,["modelValue"]),s(l,{modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=t=>v.value=t),size:"superlarge",text:"XL"},null,8,["modelValue"])])]),_:1},8,["code"]),e[20]||(e[20]=a("h2",{id:"disabled-state",tabindex:"-1"},[d("Disabled State "),a("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),e[21]||(e[21]=a("h3",{id:"disabled-switch",tabindex:"-1"},[d("Disabled Switch "),a("a",{class:"header-anchor",href:"#disabled-switch","aria-label":"Permalink to “Disabled Switch”"},"​")],-1)),e[22]||(e[22]=a("p",null,[d("Use "),a("code",null,"disabled"),d(" to disable the switch.")],-1)),s(o,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 20px;'>
    <MYSwitch v-model='disabledValue1' disabled />
    <MYSwitch v-model='disabledValue2' disabled :modelValue='true' />
  </div>
</template>
  `.trim()},{demo:n(()=>[a("div",U,[s(l,{modelValue:x.value,"onUpdate:modelValue":e[10]||(e[10]=t=>x.value=t),disabled:""},null,8,["modelValue"]),s(l,{modelValue:f.value,"onUpdate:modelValue":e[11]||(e[11]=t=>f.value=t),disabled:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[23]||(e[23]=y("",7))])}}});export{R as __pageData,O as default};
