import{_ as r,a as l}from"./chunks/option.vue_vue_type_script_setup_true_lang.Chkzkhu-.js";import{I as g,o as m,c as y,a8 as u,J as e,w as t,j as a,a as i,A as p}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const v={style:{position:"relative","z-index":"1000"}},B={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},D={style:{position:"relative","z-index":"1000"}},_=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelect.md","filePath":"components/FormSelect.md"}'),C={name:"components/FormSelect.md"},P=Object.assign(C,{setup(V){const h=p(""),o=p(""),k=p(""),b=p(""),c=p("B");return(x,s)=>{const d=g("ShowCode");return m(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[5]||(s[5]=u("",5)),e(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue1' placeholder='请选择水果'>
        <MYOption value='apple' label='苹果' />
        <MYOption value='banana' label='香蕉' />
        <MYOption value='orange' label='橙子' />
    </MYSelect>
</template>
  `.trim()},{demo:t(()=>[a("div",v,[e(r,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=n=>h.value=n),placeholder:"请选择水果"},{default:t(()=>[e(l,{value:"apple",label:"苹果"}),e(l,{value:"banana",label:"香蕉"}),e(l,{value:"orange",label:"橙子"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),s[6]||(s[6]=a("h2",{id:"禁用状态",tabindex:"-1"},[i("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),s[7]||(s[7]=a("h3",{id:"禁用整个选择器",tabindex:"-1"},[i("禁用整个选择器 "),a("a",{class:"header-anchor",href:"#禁用整个选择器","aria-label":"Permalink to “禁用整个选择器”"},"​")],-1)),s[8]||(s[8]=a("p",null,[i("使用"),a("code",null,"disabled"),i("属性可以禁用选择器。")],-1)),e(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='禁用状态'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:t(()=>[a("div",B,[e(r,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n),disabled:"",placeholder:"禁用状态"},{default:t(()=>[e(l,{value:"1",label:"选项1"}),e(l,{value:"2",label:"选项2"}),e(l,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),s[9]||(s[9]=a("h3",{id:"禁用某个选项",tabindex:"-1"},[i("禁用某个选项 "),a("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​")],-1)),s[10]||(s[10]=a("p",null,[i("使用"),a("code",null,"disabled"),i("属性可以禁用单个选项。")],-1)),e(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue3' placeholder='禁用某个选项'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' disabled />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:t(()=>[a("div",A,[e(r,{modelValue:k.value,"onUpdate:modelValue":s[2]||(s[2]=n=>k.value=n),placeholder:"禁用某个选项"},{default:t(()=>[e(l,{value:"1",label:"选项1"}),e(l,{value:"2",label:"选项2",disabled:""}),e(l,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),s[11]||(s[11]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[i("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),s[12]||(s[12]=a("p",null,[i("使用"),a("code",null,"width"),i("和"),a("code",null,"height"),i("属性可以自定义选择器的宽度和高度。")],-1)),e(d,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue4' placeholder='宽300px高50px' width='300px' height='50px'>
        <MYOption value='4' label='选项4' />
        <MYOption value='5' label='选项5' />
        <MYOption value='6' label='选项6' />
    </MYSelect>
</template>
  `.trim()},{demo:t(()=>[a("div",f,[e(r,{modelValue:b.value,"onUpdate:modelValue":s[3]||(s[3]=n=>b.value=n),placeholder:"宽300px高50px",width:"300px",height:"50px"},{default:t(()=>[e(l,{value:"4",label:"选项4"}),e(l,{value:"5",label:"选项5"}),e(l,{value:"6",label:"选项6"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),s[13]||(s[13]=a("h2",{id:"自定义颜色",tabindex:"-1"},[i("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),s[14]||(s[14]=a("p",null,[i("使用"),a("code",null,"backgroundColor"),i("、"),a("code",null,"hoverbackgroundColor"),i("和"),a("code",null,"borderColor"),i("属性可以自定义选择器的颜色。")],-1)),e(d,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",D,[e(r,{modelValue:c.value,"onUpdate:modelValue":s[4]||(s[4]=n=>c.value=n),placeholder:"自定义颜色",backgroundColor:"#f0f8ff",hoverbackgroundColor:"#e6f3ff",borderColor:"#409EFF"},{default:t(()=>[e(l,{value:"A",label:"选项A"}),e(l,{value:"B",label:"选项B"}),e(l,{value:"C",label:"选项C"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),s[15]||(s[15]=u("",7))])}}});export{_ as __pageData,P as default};
