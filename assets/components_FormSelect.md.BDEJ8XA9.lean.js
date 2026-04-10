import{_ as p,a as n}from"./chunks/option.vue_vue_type_script_setup_true_lang.Chkzkhu-.js";import{I as y,o as b,c as x,a8 as r,J as s,w as l,j as i,a as e,A as h}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const m={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},z={style:{position:"relative","z-index":"1000"}},v={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000"}},V=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelect.md","filePath":"components/FormSelect.md"}'),B={name:"components/FormSelect.md"},M=Object.assign(B,{setup(_){const o=h(""),g=h(""),k=h(""),u=h(""),c=h("B");return(D,a)=>{const d=y("ShowCode");return b(),x("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[5]||(a[5]=r("",5)),s(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue1' placeholder='请选择水果'>
        <MYOption value='apple' label='苹果' />
        <MYOption value='banana' label='香蕉' />
        <MYOption value='orange' label='橙子' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[i("div",m,[s(p,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),placeholder:"请选择水果"},{default:l(()=>[s(n,{value:"apple",label:"苹果"}),s(n,{value:"banana",label:"香蕉"}),s(n,{value:"orange",label:"橙子"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[6]||(a[6]=r("",3)),s(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='禁用状态'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[i("div",f,[s(p,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=t=>g.value=t),disabled:"",placeholder:"禁用状态"},{default:l(()=>[s(n,{value:"1",label:"选项1"}),s(n,{value:"2",label:"选项2"}),s(n,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[7]||(a[7]=i("h3",{id:"禁用某个选项",tabindex:"-1"},[e("禁用某个选项 "),i("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongmougexuanxiang jin yong mou ge xuan xiang jymgxx ")],-1)),a[8]||(a[8]=i("p",null,[e("使用"),i("code",null,"disabled"),e("属性可以禁用单个选项。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyijinyongdangexuanxiang。 shi yong shu xing ke yi jin yong dan ge xuan xiang 。 sysxkyjydgxx。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue3' placeholder='禁用某个选项'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' disabled />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[i("div",z,[s(p,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=t=>k.value=t),placeholder:"禁用某个选项"},{default:l(()=>[s(n,{value:"1",label:"选项1"}),s(n,{value:"2",label:"选项2",disabled:""}),s(n,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[9]||(a[9]=i("h2",{id:"自定义尺寸",tabindex:"-1"},[e("自定义尺寸 "),i("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),a[10]||(a[10]=i("p",null,[e("使用"),i("code",null,"width"),e("和"),i("code",null,"height"),e("属性可以自定义选择器的宽度和高度。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongheshuxingkeyizidingyixuanzeqidekuanduhegaodu。 shi yong he shu xing ke yi zi ding yi xuan ze qi de kuan du he gao du 。 syhsxkyzdyxzqdkdhgd。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue4' placeholder='宽300px高50px' width='300px' height='50px'>
        <MYOption value='4' label='选项4' />
        <MYOption value='5' label='选项5' />
        <MYOption value='6' label='选项6' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[i("div",v,[s(p,{modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=t=>u.value=t),placeholder:"宽300px高50px",width:"300px",height:"50px"},{default:l(()=>[s(n,{value:"4",label:"选项4"}),s(n,{value:"5",label:"选项5"}),s(n,{value:"6",label:"选项6"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[11]||(a[11]=i("h2",{id:"自定义颜色",tabindex:"-1"},[e("自定义颜色 "),i("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),a[12]||(a[12]=i("p",null,[e("使用"),i("code",null,"backgroundColor"),e("、"),i("code",null,"hoverbackgroundColor"),e("和"),i("code",null,"borderColor"),e("属性可以自定义选择器的颜色。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong、heshuxingkeyizidingyixuanzeqideyanse。 shi yong 、 he shu xing ke yi zi ding yi xuan ze qi de yan se 。 sy、hsxkyzdyxzqdys。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSelect 
        v-model='selectedValue5' 
        placeholder='自定义颜色'
        backgroundColor='#f0f8ff'
        hoverbackgroundColor='#e6f3ff'
        borderColor='#409EFF'
    >
        <MYOption value='A' label='选项A' />
        <MYOption value='B' label='选项B' />
        <MYOption value='C' label='选项C' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[i("div",A,[s(p,{modelValue:c.value,"onUpdate:modelValue":a[4]||(a[4]=t=>c.value=t),placeholder:"自定义颜色",backgroundColor:"#f0f8ff",hoverbackgroundColor:"#e6f3ff",borderColor:"#409EFF"},{default:l(()=>[s(n,{value:"A",label:"选项A"}),s(n,{value:"B",label:"选项B"}),s(n,{value:"C",label:"选项C"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[13]||(a[13]=r("",7))])}}});export{V as __pageData,M as default};
