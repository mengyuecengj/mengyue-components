import{_ as i}from"./chunks/switch.vue_vue_type_script_setup_true_lang.CP2VweQY.js";import{x as s,z as A,I as B,c as P,o as M,ah as x,J as t,j as a,w as n,a as d}from"./chunks/framework.PAn8Jj8p.js";import"./chunks/useClassComputed.nZJ4II5u.js";import"./chunks/useStyleComputed.DTslAc2e.js";const D={style:{display:"flex","flex-direction":"column",gap:"15px","align-items":"flex-start"}},C={style:{display:"flex",gap:"20px"}},N=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSwitch.md","filePath":"components/FormSwitch.md"}'),Y={name:"components/FormSwitch.md"},X=Object.assign(Y,{setup(T){const r=s(!0),p=s(!0),h=s(!1),u=s(!1),m=s(!1),k=s(!0),b=s(!1),g=s(!0),c=s(!1),v=s(!0),V=s(!1),y=s(!0),f=s(!0),S=s(!0),w=s(!1),z=s(!0);return A([r,p,h,u,m,k,b,g,c,v,V,y,f,S,w,z],()=>{orceUpdate()}),(U,e)=>{const o=B("ShowCode");return M(),P("div",null,[e[13]||(e[13]=x("",5)),t(o,{title:"代码演示",code:`
<template>
  <MYSwitch v-model='value1' />
</template>
  `.trim()},{demo:n(()=>[a("div",null,[t(i,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l)},null,8,["modelValue"])])]),_:1},8,["code"]),e[14]||(e[14]=a("h2",{id:"带文本的-switch",tabindex:"-1"},[d("带文本的 Switch "),a("a",{class:"header-anchor",href:"#带文本的-switch","aria-label":"Permalink to “带文本的 Switch”"},"​")],-1)),e[15]||(e[15]=a("p",null,[d("使用 "),a("code",null,"text"),d(" 可以定义开关状态下的文本。")],-1)),t(o,{title:"代码演示",code:`
<template>
  <MYSwitch v-model='value2' text='T' />
</template>
  `.trim()},{demo:n(()=>[a("div",null,[t(i,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),text:"T"},null,8,["modelValue"])])]),_:1},8,["code"]),e[16]||(e[16]=a("h2",{id:"自定义文本内容",tabindex:"-1"},[d("自定义文本内容 "),a("a",{class:"header-anchor",href:"#自定义文本内容","aria-label":"Permalink to “自定义文本内容”"},"​")],-1)),e[17]||(e[17]=a("p",null,"使用插槽来自定义开关的文本内容。",-1)),t(o,{title:"代码演示",code:`
<template>
  <MYSwitch v-model='slotValue'>
    自定义文本
  </MYSwitch>
</template>
  `.trim()},{demo:n(()=>[a("div",null,[t(i,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=l=>h.value=l)},{default:n(()=>[...e[12]||(e[12]=[d(" 自定义文本 ",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[18]||(e[18]=a("h2",{id:"关于尺寸",tabindex:"-1"},[d("关于尺寸 "),a("a",{class:"header-anchor",href:"#关于尺寸","aria-label":"Permalink to “关于尺寸”"},"​")],-1)),e[19]||(e[19]=a("p",null,[d("使用 "),a("code",null,"size"),d(" 定义尺寸，可以使用 mengyue-components 提供的多种尺寸。")],-1)),t(o,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",D,[t(i,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value=l),size:"mini",text:"S"},null,8,["modelValue"]),t(i,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l),size:"supersmall",text:"S"},null,8,["modelValue"]),t(i,{modelValue:k.value,"onUpdate:modelValue":e[5]||(e[5]=l=>k.value=l),size:"small",text:"M"},null,8,["modelValue"]),t(i,{modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=l=>b.value=l),size:"medium",text:"L"},null,8,["modelValue"]),t(i,{modelValue:g.value,"onUpdate:modelValue":e[7]||(e[7]=l=>g.value=l),size:"large",text:"XL"},null,8,["modelValue"]),t(i,{modelValue:c.value,"onUpdate:modelValue":e[8]||(e[8]=l=>c.value=l),size:"biglarge",text:"XL"},null,8,["modelValue"]),t(i,{modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=l=>v.value=l),size:"superlarge",text:"XL"},null,8,["modelValue"])])]),_:1},8,["code"]),e[20]||(e[20]=a("h2",{id:"关于禁用状态",tabindex:"-1"},[d("关于禁用状态 "),a("a",{class:"header-anchor",href:"#关于禁用状态","aria-label":"Permalink to “关于禁用状态”"},"​")],-1)),e[21]||(e[21]=a("h3",{id:"禁用开关",tabindex:"-1"},[d("禁用开关 "),a("a",{class:"header-anchor",href:"#禁用开关","aria-label":"Permalink to “禁用开关”"},"​")],-1)),e[22]||(e[22]=a("p",null,[d("使用 "),a("code",null,"disabled"),d(" 可以禁用开关。")],-1)),t(o,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px;'>
    <MYSwitch v-model='disabledValue1' disabled />
    <MYSwitch v-model='disabledValue2' disabled :modelValue='true' />
  </div>
</template>
  `.trim()},{demo:n(()=>[a("div",C,[t(i,{modelValue:V.value,"onUpdate:modelValue":e[10]||(e[10]=l=>V.value=l),disabled:""},null,8,["modelValue"]),t(i,{modelValue:y.value,"onUpdate:modelValue":e[11]||(e[11]=l=>y.value=l),disabled:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[23]||(e[23]=x("",7))])}}});export{N as __pageData,X as default};
