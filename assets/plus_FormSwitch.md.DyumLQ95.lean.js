import{_ as t}from"./chunks/switch.vue_vue_type_script_setup_true_lang.BErpIv_-.js";import{y as j,I as A,o as B,c as P,a8 as v,J as n,w as d,j as e,a as l,A as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const D={style:{display:"flex","flex-direction":"column",gap:"15px","align-items":"flex-start"}},M={style:{display:"flex",gap:"20px"}},I=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FormSwitch.md","filePath":"plus/FormSwitch.md"}'),T={name:"plus/FormSwitch.md"},L=Object.assign(T,{setup(_){const p=s(!0),o=s(!0),r=s(!1),u=s(!1),g=s(!1),y=s(!0),m=s(!1),c=s(!0),k=s(!1),b=s(!0),f=s(!1),z=s(!0),x=s(!0),V=s(!0),w=s(!1),S=s(!0);return j([p,o,r,u,g,y,m,c,k,b,f,z,x,V,w,S],()=>{orceUpdate()}),(C,a)=>{const h=A("ShowCode");return B(),P("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[13]||(a[13]=v("",5)),n(h,{title:"代码演示",code:`
<template>
  <MYSwitch v-model='value1' />
</template>
  `.trim()},{demo:d(()=>[e("div",null,[n(t,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=i=>p.value=i)},null,8,["modelValue"])])]),_:1},8,["code"]),a[14]||(a[14]=e("h2",{id:"带文本的-switch",tabindex:"-1"},[l("带文本的 Switch "),e("a",{class:"header-anchor",href:"#带文本的-switch","aria-label":"Permalink to “带文本的 Switch”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"daiwenbende Switch dai wen ben de Switch dwbd ")],-1)),a[15]||(a[15]=e("p",null,[l("使用 "),e("code",null,"text"),l(" 可以定义开关状态下的文本。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong keyidingyikaiguanzhuangtaixiadewenben。 shi yong ke yi ding yi kai guan zhuang tai xia de wen ben 。 sy kydykgztxdwb。")],-1)),n(h,{title:"代码演示",code:`
<template>
  <MYSwitch v-model='value2' text='T' />
</template>
  `.trim()},{demo:d(()=>[e("div",null,[n(t,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=i=>o.value=i),text:"T"},null,8,["modelValue"])])]),_:1},8,["code"]),a[16]||(a[16]=e("h2",{id:"自定义文本内容",tabindex:"-1"},[l("自定义文本内容 "),e("a",{class:"header-anchor",href:"#自定义文本内容","aria-label":"Permalink to “自定义文本内容”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiwenbenneirong zi ding yi wen ben nei rong zdywbnr ")],-1)),a[17]||(a[17]=e("p",null,[l("使用插槽来自定义开关的文本内容。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongchacaolaizidingyikaiguandewenbenneirong。 shi yong cha cao lai zi ding yi kai guan de wen ben nei rong 。 sycclzdykgdwbnr。")],-1)),n(h,{title:"代码演示",code:`
<template>
  <MYSwitch v-model='slotValue'>
    自定义文本
  </MYSwitch>
</template>
  `.trim()},{demo:d(()=>[e("div",null,[n(t,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=i=>r.value=i)},{default:d(()=>[...a[12]||(a[12]=[l(" 自定义文本 ",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[18]||(a[18]=e("h2",{id:"关于尺寸",tabindex:"-1"},[l("关于尺寸 "),e("a",{class:"header-anchor",href:"#关于尺寸","aria-label":"Permalink to “关于尺寸”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"guanyuchicun guan yu chi cun gycc ")],-1)),a[19]||(a[19]=e("p",null,[l("使用 "),e("code",null,"size"),l(" 定义尺寸，可以使用 mengyue-components 提供的多种尺寸。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong dingyichicun，keyishiyong mengyue-components tigongdeduozhongchicun。 shi yong ding yi chi cun ， ke yi shi yong mengyue-components ti gong de duo zhong chi cun 。 sy dycc，kysy tgddzcc。")],-1)),n(h,{title:"代码演示",code:`
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
  `.trim()},{demo:d(()=>[e("div",D,[n(t,{modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=i=>u.value=i),size:"mini",text:"S"},null,8,["modelValue"]),n(t,{modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=i=>g.value=i),size:"supersmall",text:"S"},null,8,["modelValue"]),n(t,{modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=i=>y.value=i),size:"small",text:"M"},null,8,["modelValue"]),n(t,{modelValue:m.value,"onUpdate:modelValue":a[6]||(a[6]=i=>m.value=i),size:"medium",text:"L"},null,8,["modelValue"]),n(t,{modelValue:c.value,"onUpdate:modelValue":a[7]||(a[7]=i=>c.value=i),size:"large",text:"XL"},null,8,["modelValue"]),n(t,{modelValue:k.value,"onUpdate:modelValue":a[8]||(a[8]=i=>k.value=i),size:"biglarge",text:"XL"},null,8,["modelValue"]),n(t,{modelValue:b.value,"onUpdate:modelValue":a[9]||(a[9]=i=>b.value=i),size:"superlarge",text:"XL"},null,8,["modelValue"])])]),_:1},8,["code"]),a[20]||(a[20]=v("",3)),n(h,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px;'>
    <MYSwitch v-model='disabledValue1' disabled />
    <MYSwitch v-model='disabledValue2' disabled :modelValue='true' />
  </div>
</template>
  `.trim()},{demo:d(()=>[e("div",M,[n(t,{modelValue:f.value,"onUpdate:modelValue":a[10]||(a[10]=i=>f.value=i),disabled:""},null,8,["modelValue"]),n(t,{modelValue:z.value,"onUpdate:modelValue":a[11]||(a[11]=i=>z.value=i),disabled:""},null,8,["modelValue"])])]),_:1},8,["code"]),a[21]||(a[21]=v("",7))])}}});export{I as __pageData,L as default};
