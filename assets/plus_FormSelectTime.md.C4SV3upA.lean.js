import{_ as n}from"./chunks/selectTime.vue_vue_type_script_setup_true_lang.D7WTOvUl.js";import{I as c,o as g,c as b,a8 as u,J as i,w as d,j as t,a,A as o}from"./chunks/framework.DvHWw5tv.js";const y={style:{position:"relative","z-index":"1000"}},v={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},P={style:{position:"relative","z-index":"1000"}},_={style:{position:"relative","z-index":"1000"}},T=JSON.parse('{"title":"SelectTime","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FormSelectTime.md","filePath":"plus/FormSelectTime.md"}'),S={name:"plus/FormSelectTime.md"},D=Object.assign(S,{setup(V){const r=o("00:00"),p=o("09:00"),h=o("00:00"),m=o([]),k=o([]);return(A,e)=>{const l=c("ShowCode");return g(),b("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[5]||(e[5]=u("",5)),i(l,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timePoint' />
</template>
  `.trim()},{demo:d(()=>[t("div",y,[i(n,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s)},null,8,["modelValue"])])]),_:1},8,["code"]),e[6]||(e[6]=t("h2",{id:"选择时间范围",tabindex:"-1"},[a("选择时间范围 "),t("a",{class:"header-anchor",href:"#选择时间范围","aria-label":"Permalink to “选择时间范围”"},"​")],-1)),e[7]||(e[7]=t("p",null,[a("使用"),t("code",null,"range"),a("属性可以启用时间范围选择模式。")],-1)),i(l,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timeRange' range />
</template>
  `.trim()},{demo:d(()=>[t("div",v,[i(n,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=s=>m.value=s),range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[8]||(e[8]=t("h2",{id:"自定义小时选项",tabindex:"-1"},[a("自定义小时选项 "),t("a",{class:"header-anchor",href:"#自定义小时选项","aria-label":"Permalink to “自定义小时选项”"},"​")],-1)),e[9]||(e[9]=t("p",null,[a("使用"),t("code",null,"hourOptions"),a("属性可以自定义小时选项。")],-1)),i(l,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timePoint2' :hourOptions='[9, 10, 11, 12, 13, 14, 15, 16, 17]' />
</template>
  `.trim()},{demo:d(()=>[t("div",f,[i(n,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=s=>p.value=s),hourOptions:[9,10,11,12,13,14,15,16,17]},null,8,["modelValue"])])]),_:1},8,["code"]),e[10]||(e[10]=t("h2",{id:"自定义分钟选项",tabindex:"-1"},[a("自定义分钟选项 "),t("a",{class:"header-anchor",href:"#自定义分钟选项","aria-label":"Permalink to “自定义分钟选项”"},"​")],-1)),e[11]||(e[11]=t("p",null,[a("使用"),t("code",null,"minuteOptions"),a("属性可以自定义分钟选项。")],-1)),i(l,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timePoint3' :minuteOptions='[0, 15, 30, 45]' />
</template>
  `.trim()},{demo:d(()=>[t("div",P,[i(n,{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=s=>h.value=s),minuteOptions:[0,15,30,45]},null,8,["modelValue"])])]),_:1},8,["code"]),e[12]||(e[12]=t("h2",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),t("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[13]||(e[13]=t("p",null,"最后，实现个多种api组合使用实现个时间选择器：",-1)),i(l,{title:"代码演示",code:`
<template>
    <MYSelect-time 
        v-model='timeRange2' 
        range 
        :hourOptions='[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]'
        :minuteOptions='[0, 30]'
    />
</template>
  `.trim()},{demo:d(()=>[t("div",_,[i(n,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=s=>k.value=s),range:"",hourOptions:[8,9,10,11,12,13,14,15,16,17,18],minuteOptions:[0,30]},null,8,["modelValue"])])]),_:1},8,["code"]),e[14]||(e[14]=u("",5))])}}});export{T as __pageData,D as default};
