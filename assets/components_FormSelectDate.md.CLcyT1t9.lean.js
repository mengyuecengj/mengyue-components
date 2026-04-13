import{_ as n}from"./chunks/selectDate.vue_vue_type_script_setup_true_lang.BouwiF4r.js";import{I as c,o as v,c as f,a8 as y,J as l,w as d,j as a,a as t,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const V={style:{position:"relative","z-index":"1000"}},D={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000"}},x={style:{position:"relative","z-index":"1000"}},B={style:{position:"relative","z-index":"1000"}},S={style:{position:"relative","z-index":"1000"}},P={style:{position:"relative","z-index":"1000","min-height":"300px"}},C={style:{position:"relative","z-index":"1000","min-height":"300px"}},R=JSON.parse('{"title":"SelectDate","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelectDate.md","filePath":"components/FormSelectDate.md"}'),_={name:"components/FormSelectDate.md"},z=Object.assign(_,{setup(M){const r=o(""),p=o([]),h=o(""),m=o([]),k=o(""),g=o([]),u=o(""),b=o([]);return(T,e)=>{const i=c("ShowCode");return v(),f("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[8]||(e[8]=y("",5)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='singleDate' />
</template>
  `.trim()},{demo:d(()=>[a("div",V,[l(n,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s)},null,8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=a("h2",{id:"选择日期范围",tabindex:"-1"},[t("选择日期范围 "),a("a",{class:"header-anchor",href:"#选择日期范围","aria-label":"Permalink to “选择日期范围”"},"​")],-1)),e[10]||(e[10]=a("p",null,[t("使用"),a("code",null,"range"),t("属性可以启用日期范围选择模式。")],-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='dateRange' range />
</template>
  `.trim()},{demo:d(()=>[a("div",D,[l(n,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=s=>p.value=s),range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=a("h2",{id:"单月选择器",tabindex:"-1"},[t("单月选择器 "),a("a",{class:"header-anchor",href:"#单月选择器","aria-label":"Permalink to “单月选择器”"},"​")],-1)),e[12]||(e[12]=a("p",null,[t("使用"),a("code",null,"month"),t("属性可以只选择月份。")],-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='singleMonth' month />
</template>
  `.trim()},{demo:d(()=>[a("div",A,[l(n,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=s=>h.value=s),month:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=a("h2",{id:"月份范围选择器",tabindex:"-1"},[t("月份范围选择器 "),a("a",{class:"header-anchor",href:"#月份范围选择器","aria-label":"Permalink to “月份范围选择器”"},"​")],-1)),e[14]||(e[14]=a("p",null,[t("使用"),a("code",null,"range"),t("属性可以启用月份范围选择模式。")],-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='monthRange' range month />
</template>
  `.trim()},{demo:d(()=>[a("div",x,[l(n,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=s=>m.value=s),range:"",month:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=a("h2",{id:"年份选择器",tabindex:"-1"},[t("年份选择器 "),a("a",{class:"header-anchor",href:"#年份选择器","aria-label":"Permalink to “年份选择器”"},"​")],-1)),e[16]||(e[16]=a("p",null,[t("使用"),a("code",null,"year"),t("属性可以只选择年份。")],-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='singleYear' year />
</template>
  `.trim()},{demo:d(()=>[a("div",B,[l(n,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=s=>k.value=s),year:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[17]||(e[17]=a("h2",{id:"年份范围选择器",tabindex:"-1"},[t("年份范围选择器 "),a("a",{class:"header-anchor",href:"#年份范围选择器","aria-label":"Permalink to “年份范围选择器”"},"​")],-1)),e[18]||(e[18]=a("p",null,[t("使用"),a("code",null,"range"),t("属性可以启用年份范围选择模式。")],-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='yearRange' year range />
</template>
  `.trim()},{demo:d(()=>[a("div",S,[l(n,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=s=>g.value=s),year:"",range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=a("h2",{id:"时间选择器",tabindex:"-1"},[t("时间选择器 "),a("a",{class:"header-anchor",href:"#时间选择器","aria-label":"Permalink to “时间选择器”"},"​")],-1)),e[20]||(e[20]=a("p",null,[t("使用"),a("code",null,"time"),t("属性可以启用时间选择。")],-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='datetime' time />
</template>
  `.trim()},{demo:d(()=>[a("div",P,[l(n,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=s=>u.value=s),time:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[21]||(e[21]=a("h2",{id:"组合使用",tabindex:"-1"},[t("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[22]||(e[22]=a("p",null,"最后，实现个多种api组合使用实现个日期时间范围选择器：",-1)),l(i,{title:"代码演示",code:`
<template>
    <MYSelect-date 
        v-model='datetimeRange' 
        range 
        time 
        placeholder='选择日期时间范围'
    />
</template>
  `.trim()},{demo:d(()=>[a("div",C,[l(n,{modelValue:b.value,"onUpdate:modelValue":e[7]||(e[7]=s=>b.value=s),range:"",time:"",placeholder:"选择日期时间范围"},null,8,["modelValue"])])]),_:1},8,["code"]),e[23]||(e[23]=y("",5))])}}});export{R as __pageData,z as default};
