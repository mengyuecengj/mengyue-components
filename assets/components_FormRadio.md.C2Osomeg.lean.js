import{d as P,x as h,N as F,h as c,c as x,o as S,j as e,$ as C,r as E,a as s,t as z,O as T,n as $,z as w,I as U,ah as V,J as i,w as t,R as I}from"./chunks/framework.DHTvsukI.js";import{r as N,a as p,_ as v}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Bu2piU8a.js";const G=["value","name","disabled","checked"],f=P({name:"MYRadioButton",__name:"radio-button",props:{...N,label:String,size:{type:String,default:"default"}},emits:["update:modelValue","change"],setup(R,{emit:k}){const l=R,b=k,y=h(!1),o=F("radioGroup",null),B=c(()=>!!o),A=c(()=>{if(l.name)return l.name;if(o?.name)return typeof o.name=="object"?o.name.value:o.name}),u=c(()=>{if(B.value){const d=o.disabled;return(typeof d=="boolean"?d:d?.value??!1)||l.disabled}return l.disabled}),g=c(()=>{if(B.value){const d=o.modelValue;return(d&&typeof d=="object"&&"value"in d?d.value:d)===l.value}return l.modelValue===l.value});function D(){u.value||(B.value?o.change?.(l.value):(b("update:modelValue",l.value),b("change",l.value)))}const M=c(()=>{const d=o?.fill||"#409eff",r=o?.textColor||"#fff";return{backgroundColor:d,color:r,boxShadow:`-1px 0 0 0 ${d}`,zIndex:1}});return(d,r)=>(S(),x("label",{class:$(["my-radio-button",{"is-active":g.value,"is-disabled":u.value},R.size?`my-radio-button--${R.size}`:""]),onClick:D,onKeydown:r[3]||(r[3]=C(()=>{},["stop"])),tabindex:"0"},[e("input",{class:"my-radio-button__original",type:"radio",value:l.value,name:A.value,disabled:u.value,checked:g.value,onFocus:r[0]||(r[0]=Y=>y.value=!0),onBlur:r[1]||(r[1]=Y=>y.value=!1),onChange:r[2]||(r[2]=C(()=>{},["stop"])),style:{position:"absolute",visibility:"hidden"}},null,40,G),e("span",{class:"my-radio-button__inner",style:T(g.value?M.value:{})},[E(d.$slots,"default",{},()=>[s(z(l.label||l.value),1)])],4)],34))}}),j={style:{display:"flex",gap:"20px"}},O={style:{display:"flex","flex-direction":"column",gap:"15px"}},H=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormRadio.md","filePath":"components/FormRadio.md"}'),J={name:"components/FormRadio.md"},L=Object.assign(J,{setup(R){const k=h("option1"),l=h("2"),b=h("1"),y=h("1"),o=h("1"),B=h("1"),A=h("default"),u=h("1"),g=h("default"),D=h("1"),M=h("1"),d=h("1"),r=()=>{I(()=>{})};return w([k,l,b,y,o,B,A,u,g,D,M,d],()=>{r()}),(Y,a)=>{const m=U("ShowCode");return S(),x("div",null,[a[27]||(a[27]=V("",6)),i(m,{title:"代码演示",code:`
<template>
  <MYRadio v-model='singleSelected' value='option1'>选项1</MYRadio>
  <MYRadio v-model='singleSelected' value='option2'>选项2</MYRadio>
</template>
  `.trim()},{demo:t(()=>[e("div",j,[i(p,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=n=>k.value=n),value:"option1"},{default:t(()=>[...a[8]||(a[8]=[s("选项1",-1)])]),_:1},8,["modelValue"]),i(p,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=n=>k.value=n),value:"option2"},{default:t(()=>[...a[9]||(a[9]=[s("选项2",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[28]||(a[28]=e("h3",{id:"单选按钮组",tabindex:"-1"},[s("单选按钮组 "),e("a",{class:"header-anchor",href:"#单选按钮组","aria-label":"Permalink to “单选按钮组”"},"​")],-1)),a[29]||(a[29]=e("p",null,"可以使用 radioGroup 将单选按钮放到一个组里面。",-1)),i(m,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='groupSelected'>
    <MYRadio value='1'>选项1</MYRadio>
    <MYRadio value='2'>选项2</MYRadio>
    <MYRadio value='3'>选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:t(()=>[i(v,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=n=>l.value=n)},{default:t(()=>[i(p,{value:"1"},{default:t(()=>[...a[10]||(a[10]=[s("选项1",-1)])]),_:1}),i(p,{value:"2"},{default:t(()=>[...a[11]||(a[11]=[s("选项2",-1)])]),_:1}),i(p,{value:"3"},{default:t(()=>[...a[12]||(a[12]=[s("选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[30]||(a[30]=e("h2",{id:"禁用状态",tabindex:"-1"},[s("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),a[31]||(a[31]=e("h3",{id:"单个禁用",tabindex:"-1"},[s("单个禁用 "),e("a",{class:"header-anchor",href:"#单个禁用","aria-label":"Permalink to “单个禁用”"},"​")],-1)),a[32]||(a[32]=e("p",null,"禁用特定的单选按钮。",-1)),i(m,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='disabledSelected'>
    <MYRadio value='1'>正常选项</MYRadio>
    <MYRadio value='2' disabled>禁用选项</MYRadio>
    <MYRadio value='3'>正常选项</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:t(()=>[i(v,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=n=>b.value=n)},{default:t(()=>[i(p,{value:"1"},{default:t(()=>[...a[13]||(a[13]=[s("正常选项",-1)])]),_:1}),i(p,{value:"2",disabled:""},{default:t(()=>[...a[14]||(a[14]=[s("禁用选项",-1)])]),_:1}),i(p,{value:"3"},{default:t(()=>[...a[15]||(a[15]=[s("正常选项",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[33]||(a[33]=e("h3",{id:"全部禁用",tabindex:"-1"},[s("全部禁用 "),e("a",{class:"header-anchor",href:"#全部禁用","aria-label":"Permalink to “全部禁用”"},"​")],-1)),a[34]||(a[34]=e("p",null,"禁用整个单选按钮组。",-1)),i(m,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='groupDisabledSelected' disabled>
    <MYRadio value='1'>禁用选项1</MYRadio>
    <MYRadio value='2'>禁用选项2</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:t(()=>[i(v,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=n=>y.value=n),disabled:""},{default:t(()=>[i(p,{value:"1"},{default:t(()=>[...a[16]||(a[16]=[s("禁用选项1",-1)])]),_:1}),i(p,{value:"2"},{default:t(()=>[...a[17]||(a[17]=[s("禁用选项2",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[35]||(a[35]=e("h2",{id:"布局方向",tabindex:"-1"},[s("布局方向 "),e("a",{class:"header-anchor",href:"#布局方向","aria-label":"Permalink to “布局方向”"},"​")],-1)),a[36]||(a[36]=e("h3",{id:"垂直排列",tabindex:"-1"},[s("垂直排列 "),e("a",{class:"header-anchor",href:"#垂直排列","aria-label":"Permalink to “垂直排列”"},"​")],-1)),a[37]||(a[37]=e("p",null,[s("使用 "),e("code",null,'direction="vertical"'),s(" 实现垂直布局。")],-1)),i(m,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='verticalSelected' direction='vertical'>
    <MYRadio value='1'>垂直选项1</MYRadio>
    <MYRadio value='2'>垂直选项2</MYRadio>
    <MYRadio value='3'>垂直选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:t(()=>[i(v,{modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=n=>o.value=n),direction:"vertical"},{default:t(()=>[i(p,{value:"1"},{default:t(()=>[...a[18]||(a[18]=[s("垂直选项1",-1)])]),_:1}),i(p,{value:"2"},{default:t(()=>[...a[19]||(a[19]=[s("垂直选项2",-1)])]),_:1}),i(p,{value:"3"},{default:t(()=>[...a[20]||(a[20]=[s("垂直选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[38]||(a[38]=e("h2",{id:"按钮样式",tabindex:"-1"},[s("按钮样式 "),e("a",{class:"header-anchor",href:"#按钮样式","aria-label":"Permalink to “按钮样式”"},"​")],-1)),a[39]||(a[39]=e("h3",{id:"单选按钮样式",tabindex:"-1"},[s("单选按钮样式 "),e("a",{class:"header-anchor",href:"#单选按钮样式","aria-label":"Permalink to “单选按钮样式”"},"​")],-1)),a[40]||(a[40]=e("p",null,[s("使用 "),e("code",null,"MYRadioButton"),s(" 实现按钮样式的单选按钮。")],-1)),i(m,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='buttonSelected'>
    <MYRadioButton value='1'>按钮1</MYRadioButton>
    <MYRadioButton value='2'>按钮2</MYRadioButton>
    <MYRadioButton value='3'>按钮3</MYRadioButton>
  </MYRadio-group>
</template>
  `.trim()},{demo:t(()=>[i(v,{modelValue:u.value,"onUpdate:modelValue":a[6]||(a[6]=n=>u.value=n)},{default:t(()=>[i(f,{value:"1"},{default:t(()=>[...a[21]||(a[21]=[s("按钮1",-1)])]),_:1}),i(f,{value:"2"},{default:t(()=>[...a[22]||(a[22]=[s("按钮2",-1)])]),_:1}),i(f,{value:"3"},{default:t(()=>[...a[23]||(a[23]=[s("按钮3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[41]||(a[41]=e("h3",{id:"按钮尺寸",tabindex:"-1"},[s("按钮尺寸 "),e("a",{class:"header-anchor",href:"#按钮尺寸","aria-label":"Permalink to “按钮尺寸”"},"​")],-1)),a[42]||(a[42]=e("p",null,"按钮样式的单选按钮也支持尺寸控制。",-1)),i(m,{title:"代码演示",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <MYRadio-group v-model='buttonSizeSelected'>
      <MYRadioButton value='small' size='small'>小按钮</MYRadioButton>
      <MYRadioButton value='default' size='default'>默认按钮</MYRadioButton>
      <MYRadioButton value='large' size='large'>大按钮</MYRadioButton>
    </MYRadio-group>
  </div>
</template>
  `.trim()},{demo:t(()=>[e("div",O,[i(v,{modelValue:g.value,"onUpdate:modelValue":a[7]||(a[7]=n=>g.value=n)},{default:t(()=>[i(f,{value:"small",size:"small"},{default:t(()=>[...a[24]||(a[24]=[s("小按钮",-1)])]),_:1}),i(f,{value:"default",size:"default"},{default:t(()=>[...a[25]||(a[25]=[s("默认按钮",-1)])]),_:1}),i(f,{value:"large",size:"large"},{default:t(()=>[...a[26]||(a[26]=[s("大按钮",-1)])]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[43]||(a[43]=V("",9))])}}});export{H as __pageData,L as default};
