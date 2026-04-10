import{_ as h}from"./chunks/radio-button.vue_vue_type_script_setup_true_lang.CDTxzAWp.js";import{a as t,_ as r}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Zb_JEi3Z.js";import{y as R,I as D,o as M,c as Y,a8 as u,J as i,w as n,j as e,a as s,A as l,R as C}from"./chunks/framework.DvHWw5tv.js";const j={style:{display:"flex",gap:"20px"}},V={style:{display:"flex","flex-direction":"column",gap:"15px"}},I=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FormRadio.md","filePath":"plus/FormRadio.md"}'),P={name:"plus/FormRadio.md"},w=Object.assign(P,{setup(_){const o=l("option1"),k=l("2"),g=l("1"),y=l("1"),c=l("1"),f=l("1"),x=l("default"),m=l("1"),b=l("default"),z=l("1"),B=l("1"),A=l("1"),v=()=>{C(()=>{})};return R([o,k,g,y,c,f,x,m,b,z,B,A],()=>{v()}),(S,a)=>{const p=D("ShowCode");return M(),Y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[27]||(a[27]=u("",6)),i(p,{title:"代码演示",code:`
<template>
  <MYRadio v-model='singleSelected' value='option1'>选项1</MYRadio>
  <MYRadio v-model='singleSelected' value='option2'>选项2</MYRadio>
</template>
  `.trim()},{demo:n(()=>[e("div",j,[i(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),value:"option1"},{default:n(()=>[...a[8]||(a[8]=[s("选项1",-1)])]),_:1},8,["modelValue"]),i(t,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=d=>o.value=d),value:"option2"},{default:n(()=>[...a[9]||(a[9]=[s("选项2",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[28]||(a[28]=e("h3",{id:"单选按钮组",tabindex:"-1"},[s("单选按钮组 "),e("a",{class:"header-anchor",href:"#单选按钮组","aria-label":"Permalink to “单选按钮组”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"danxuananniuzu dan xuan an niu zu dxanz ")],-1)),a[29]||(a[29]=e("p",null,[s("可以使用 radioGroup 将单选按钮放到一个组里面。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"keyishiyong radioGroup jiangdanxuananniufangdaoyigezulimian。 ke yi shi yong radioGroup jiang dan xuan an niu fang dao yi ge zu li mian 。 kysy jdxanfdygzlm。")],-1)),i(p,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='groupSelected'>
    <MYRadio value='1'>选项1</MYRadio>
    <MYRadio value='2'>选项2</MYRadio>
    <MYRadio value='3'>选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:n(()=>[i(r,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=d=>k.value=d)},{default:n(()=>[i(t,{value:"1"},{default:n(()=>[...a[10]||(a[10]=[s("选项1",-1)])]),_:1}),i(t,{value:"2"},{default:n(()=>[...a[11]||(a[11]=[s("选项2",-1)])]),_:1}),i(t,{value:"3"},{default:n(()=>[...a[12]||(a[12]=[s("选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[30]||(a[30]=u("",3)),i(p,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='disabledSelected'>
    <MYRadio value='1'>正常选项</MYRadio>
    <MYRadio value='2' disabled>禁用选项</MYRadio>
    <MYRadio value='3'>正常选项</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:n(()=>[i(r,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=d=>g.value=d)},{default:n(()=>[i(t,{value:"1"},{default:n(()=>[...a[13]||(a[13]=[s("正常选项",-1)])]),_:1}),i(t,{value:"2",disabled:""},{default:n(()=>[...a[14]||(a[14]=[s("禁用选项",-1)])]),_:1}),i(t,{value:"3"},{default:n(()=>[...a[15]||(a[15]=[s("正常选项",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[31]||(a[31]=e("h3",{id:"全部禁用",tabindex:"-1"},[s("全部禁用 "),e("a",{class:"header-anchor",href:"#全部禁用","aria-label":"Permalink to “全部禁用”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"quanbujinyong quan bu jin yong qbjy ")],-1)),a[32]||(a[32]=e("p",null,[s("禁用整个单选按钮组。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongzhenggedanxuananniuzu。 jin yong zheng ge dan xuan an niu zu 。 jyzgdxanz。")],-1)),i(p,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='groupDisabledSelected' disabled>
    <MYRadio value='1'>禁用选项1</MYRadio>
    <MYRadio value='2'>禁用选项2</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:n(()=>[i(r,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=d=>y.value=d),disabled:""},{default:n(()=>[i(t,{value:"1"},{default:n(()=>[...a[16]||(a[16]=[s("禁用选项1",-1)])]),_:1}),i(t,{value:"2"},{default:n(()=>[...a[17]||(a[17]=[s("禁用选项2",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[33]||(a[33]=u("",3)),i(p,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='verticalSelected' direction='vertical'>
    <MYRadio value='1'>垂直选项1</MYRadio>
    <MYRadio value='2'>垂直选项2</MYRadio>
    <MYRadio value='3'>垂直选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()},{demo:n(()=>[i(r,{modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=d=>c.value=d),direction:"vertical"},{default:n(()=>[i(t,{value:"1"},{default:n(()=>[...a[18]||(a[18]=[s("垂直选项1",-1)])]),_:1}),i(t,{value:"2"},{default:n(()=>[...a[19]||(a[19]=[s("垂直选项2",-1)])]),_:1}),i(t,{value:"3"},{default:n(()=>[...a[20]||(a[20]=[s("垂直选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[34]||(a[34]=u("",3)),i(p,{title:"代码演示",code:`
<template>
  <MYRadio-group v-model='buttonSelected'>
    <MYRadioButton value='1'>按钮1</MYRadioButton>
    <MYRadioButton value='2'>按钮2</MYRadioButton>
    <MYRadioButton value='3'>按钮3</MYRadioButton>
  </MYRadio-group>
</template>
  `.trim()},{demo:n(()=>[i(r,{modelValue:m.value,"onUpdate:modelValue":a[6]||(a[6]=d=>m.value=d)},{default:n(()=>[i(h,{value:"1"},{default:n(()=>[...a[21]||(a[21]=[s("按钮1",-1)])]),_:1}),i(h,{value:"2"},{default:n(()=>[...a[22]||(a[22]=[s("按钮2",-1)])]),_:1}),i(h,{value:"3"},{default:n(()=>[...a[23]||(a[23]=[s("按钮3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[35]||(a[35]=e("h3",{id:"按钮尺寸",tabindex:"-1"},[s("按钮尺寸 "),e("a",{class:"header-anchor",href:"#按钮尺寸","aria-label":"Permalink to “按钮尺寸”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"anniuchicun an niu chi cun ancc ")],-1)),a[36]||(a[36]=e("p",null,[s("按钮样式的单选按钮也支持尺寸控制。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"anniuyangshidedanxuananniuyezhichichicunkongzhi。 an niu yang shi de dan xuan an niu ye zhi chi chi cun kong zhi 。 anysddxanyzccckz。")],-1)),i(p,{title:"代码演示",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <MYRadio-group v-model='buttonSizeSelected'>
      <MYRadioButton value='small' size='small'>小按钮</MYRadioButton>
      <MYRadioButton value='default' size='default'>默认按钮</MYRadioButton>
      <MYRadioButton value='large' size='large'>大按钮</MYRadioButton>
    </MYRadio-group>
  </div>
</template>
  `.trim()},{demo:n(()=>[e("div",V,[i(r,{modelValue:b.value,"onUpdate:modelValue":a[7]||(a[7]=d=>b.value=d)},{default:n(()=>[i(h,{value:"small",size:"small"},{default:n(()=>[...a[24]||(a[24]=[s("小按钮",-1)])]),_:1}),i(h,{value:"default",size:"default"},{default:n(()=>[...a[25]||(a[25]=[s("默认按钮",-1)])]),_:1}),i(h,{value:"large",size:"large"},{default:n(()=>[...a[26]||(a[26]=[s("大按钮",-1)])]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[37]||(a[37]=u("",9))])}}});export{I as __pageData,w as default};
